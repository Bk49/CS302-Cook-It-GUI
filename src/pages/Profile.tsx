import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmailPreferencesSection from "../components/profile/EmailPreferencesSection";
import MainDetailsSection from "../components/profile/MainDetailsSection";
import useGetProfile from "../custom-hooks/react-query/profile/useGetProfile";
import editProfileSchema from "../zod-schema/edit-profile";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
    const { logout } = useAuth0();
    const { data: profile } = useGetProfile();
    const formState = useForm({
        resolver: zodResolver(editProfileSchema),
        defaultValues: profile,
    });

    return (
        <FormProvider {...formState}>
            <Container maxWidth="xl" sx={{ my: 4 }}>
                <Typography variant="h3">My Profile</Typography>
                <Divider sx={{ my: 2 }} />
                <MainDetailsSection />
                <Divider sx={{ my: 2 }} />
                <EmailPreferencesSection />
                <Divider sx={{ my: 2 }} />
                <Typography mb={3} variant="h4">
                    Account
                </Typography>
                <Button onClick={() => logout()} variant="contained">
                    Logout
                </Button>
            </Container>
        </FormProvider>
    );
};

export default Profile;
