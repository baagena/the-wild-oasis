import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signup, isLoading } = useMutation({
        mutationFn: ({fullName, email, password}) =>  signupApi({fullName, email, password}),
        onSuccess: () => {
            toast.success("Account successfully created! please verify new account from the user\'s email address ")
        },

        onError: ()=> toast.error("There is an error while creating account")
    })
    return {signup, isLoading}
}