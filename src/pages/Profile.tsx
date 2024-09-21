import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

interface ProfileProps {
    // : string;
}

const Profile: React.FC<ProfileProps> = ({  }) => {
    const  {logout} =useAuth0()
    
    return (
        <>
            <Button onClick={() => logout()} variant='contained'>Logout</Button>
        </>
    );
};

export default Profile;
