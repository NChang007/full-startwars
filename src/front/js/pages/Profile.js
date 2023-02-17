import React, { useContext } from 'react'
import { Context } from "../store/appContext";

const Profile = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>Profile

            <button onClick={() => actions.logout()} className="btn btn-warning">
                Log Out
            </button>
        </div>
    ) 
}

export default Profile