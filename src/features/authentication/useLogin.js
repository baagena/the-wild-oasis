import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin()
{
    const navigate = useNavigate()
    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => loginApi({email, password}),
        onSuccess: (user)=> {
            navigate("/dashboard")
        },
        onError: ()=> {

            toast.error("Email or Password are incorrect")
        }

    })
    return {login, isLoading}
}