import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { logoutUser, clearUserData } from '../../actions/LoginAction';
export default function LogoutButton({client}) {
    const dispatch = useDispatch();
    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "api/logout",
            {withCredentials: true}
        )   
            .then(function(res) {
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
