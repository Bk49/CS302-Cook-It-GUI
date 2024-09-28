import { Button, Grid } from "@mui/material";
import React from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import { CSS } from "@dnd-kit/utilities";
import { DragHandle } from "@mui/icons-material";
import { useSortable } from "@dnd-kit/sortable";
import TextField from "../TextField";
import ImageDnD from "../ImageDnD";
import { CancelRounded } from "@mui/icons-material";

interface PreparationStepFieldItemProps {
    id: string;
    row: number;
    remove: UseFieldArrayRemove;
}

const PreparationStepFieldItem: React.FC<PreparationStepFieldItemProps> = ({
    id,
    row,
    remove,
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    return (
        <Grid
            width="100%"
            {...attributes}
            ref={setNodeRef}
            sx={{
                transform: CSS.Transform.toString(transform),
                transition,
            }}
            container
            direction="row"
            gap={3}
            alignItems="center"
        >
            <Grid
                xs={0.2}
                item
                sx={{ cursor: isDragging ? "grabbing" : "grab" }}
                {...listeners}
            >
                <DragHandle />
            </Grid>
            <Grid item lg={3}>
                <Grid item>
                    <ImageDnD name={`steps.${row}.image`} />
                </Grid>
            </Grid>
            <Grid item xs>
                <TextField
                    name={`steps.${row}.description`}
                    label={`Step ${row + 1}`}
                    multiline
                    sx={{ width: "100%" }}
                    rows={8}
                />
            </Grid>
            <Grid item xs={1}>
                <Button
                    startIcon={<CancelRounded />}
                    variant="contained"
                    color="error"
                    onClick={() => remove(row)}
                >
                    Remove
                </Button>
            </Grid>
        </Grid>
    );
};

export default PreparationStepFieldItem;
