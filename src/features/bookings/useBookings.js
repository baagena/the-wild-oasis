import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient()
    const [searchParams] = useSearchParams()
    // 1) FILTER
    const filterValue = searchParams.get("status") || "all"
    
    const filter = !filterValue || filterValue === "all" ? null : {field: "status", value: filterValue, method: "eq"};

    // 2) SORT
    const sortRaw = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortRaw.split("-")

    const sortBy = {field,direction}
    
    // 3) PAGE
    const page = searchParams.get("page") || 1;
// QUERY
   const { isLoading, data: { data:bookings, count } = {}, error } =  useQuery({
        queryKey: ["bookings", filter,sortBy, Number(page)],
        queryFn: () => getBookings({filter, sortBy, page: Number(page)})
    })

    // PRE-FETCHING $$ Alteranative to this is Infinitefeatching query
    const pageCount = Math.ceil(count / PAGE_SIZE);
    if(Number(page) < pageCount)
    queryClient.prefetchQuery({
        queryKey: ["bookings", filter,sortBy, Number(page) + 1],
        queryFn: () => getBookings({filter, sortBy, page: Number(page) + 1})
    })

    if(Number(page) > 1)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter,sortBy, Number(page) - 1],
            queryFn: () => getBookings({filter, sortBy, page: Number(page) - 1})
        })



    return {isLoading, bookings, error,count}
}