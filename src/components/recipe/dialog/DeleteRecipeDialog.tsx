import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import useDeleteRecipe from "../../../custom-hooks/apollo-query/recipes/useDeleteRecipe";

interface DeleteRecipeDialogProps {
    name: string;
    id: string;
}

const DeleteRecipeDialog: React.FC<DeleteRecipeDialogProps> = ({
    name,
    id,
}) => {
    const [open, setOpen] = useState(false);
    const [mutate] = useDeleteRecipe();

    return (
        <>
            <Button
                variant="contained"
                color="error"
                onClick={() => setOpen(true)}
            >
                Delete
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Delete Recipe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the recipe: {name}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            mutate({ variables: { recipeId: id } });
                            setOpen(false);
                        }}
                    >
                        Confirm Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteRecipeDialog;
