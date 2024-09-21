import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface EmailPreferencesSectionProps {}

const EmailPreferencesSection: React.FC<
    EmailPreferencesSectionProps
> = ({}) => {
    const { control, watch } = useFormContext();
    const emailPref = watch("email_pref");

    useEffect(() => {
        // TODO: Update email pref on backend based on backend API
        // graphQL.post("/profile/email-pref", {"email_pref": emailPref})
    }, [emailPref]);

    return (
        <>
            <Typography variant="h4">Email Preferences</Typography>
            <Box ml={2} my={3}>
                <Controller
                    name="email_pref"
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            {...field}
                            checked={field.value}
                            control={<Checkbox />}
                            label="I want to be able to receive emails for recipe milestones"
                        />
                    )}
                />
            </Box>
        </>
    );
};

export default EmailPreferencesSection;
