import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import PreparationStepFieldItem from "../../../common/form/field-array/PreparationStepFieldItem";

interface PreparationStepSectionProps {
    // : string;
}

const PreparationStepSection: React.FC<PreparationStepSectionProps> = ({}) => {
    const { control } = useFormContext();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const { append, remove, move, fields } = useFieldArray({
        control: control,
        name: "steps",
    });

    return (
        <>
            <Typography variant="h4" mb={1}>
                Preparation Steps
            </Typography>
            <Typography variant="subtitle1" mb={3}>
                Break down your recipe into clear, step-by-step instructions. If
                step is confusing you can add images to better explain and
                illustrate the steps.
            </Typography>
            <DndContext
                onDragEnd={(event) => {
                    const { active, over } = event;
                    if (active.id !== over?.id) {
                        const oldIndex = fields.findIndex(
                            (field) => field.id === active.id
                        );
                        const newIndex = fields.findIndex(
                            (field) => field.id === over?.id
                        );

                        move(oldIndex, newIndex);
                    }
                }}
                sensors={sensors}
                collisionDetection={closestCenter}
            >
                <SortableContext
                    strategy={verticalListSortingStrategy}
                    items={fields.map((field) => field.id)}
                >
                    <Grid container direction="column" gap={2} mb={2}>
                        {fields.map(({ id }, index) => (
                            <Grid key={id} item>
                                <PreparationStepFieldItem id={id} row={index} remove={remove} />
                            </Grid>
                        ))}
                    </Grid>
                </SortableContext>
            </DndContext>
            <Button
                onClick={() => append({ image: null, description: "" })}
                startIcon={<AddIcon />}
            >
                Add Steps
            </Button>
        </>
    );
};

export default PreparationStepSection;
