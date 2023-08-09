import React from 'react'

export default function LogoutButton() {

    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "api/logout",
            {withCredentials: true}
        )   
            .then(function(res) {
                setCurrentUser(false);
                dispatch(logoutUser())               
                dispatch(clearUserData())               
        });
    }
    return (
    <div>
        <form onSubmit={e => submitLogout(e)}>
            <button type="submit" variant="light">Log out</button>
        </form>
    </div>
    )
}
