import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
    const { user } = useAuthContext();

    console.log(user)

    return (
        <div>
            <h1>Profile</h1>
            <p>{(user.name)}</p>
            <p>{(user.email)}</p>
        </div>
    )
}

export default Profile;