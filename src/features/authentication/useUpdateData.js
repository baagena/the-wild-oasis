import { useMutation } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateData() {
 const {mutate: updateUser, isLoading}= useMutation({
        mutationFn: updateUserData,
        onSuccess: ()=> {
            toast.success("User account successfully updated")
        },
        onError: ()=> {
            toast.error("There was an error while updating new data")
        }
    })

    return {updateUser, isLoading}
}