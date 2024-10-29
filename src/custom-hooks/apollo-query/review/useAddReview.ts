import { useMutation } from "@apollo/client";
import { enqueueSnackbar } from "notistack";
import { UseFormReturn } from "react-hook-form";
import {
    ADD_REVIEW,
    GET_RECIPE_DETAILS,
} from "../../../constants/GraphQLQueries";

const useAddReview = (formState: UseFormReturn) => {
    const { reset } = formState;

    return useMutation(ADD_REVIEW, {
        refetchQueries: [GET_RECIPE_DETAILS],
        onCompleted: (data) => {
            if (!data)
                return enqueueSnackbar("An error has occured!", {
                    variant: "error",
                });
            enqueueSnackbar("Review created!", { variant: "success" });
            reset();
        },
    });
};

export default useAddReview;
