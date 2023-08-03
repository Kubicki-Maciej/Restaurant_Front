import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoginWindow, WindowContainer, LoginLogo, FormControl, ButtonSubmit, SlideButton, FormBox, MainWindow} from './style/LoginScreenElements';
import restaurantImg from '../images/restaurant.jpg'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

export default function LoginScreen() {
    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInformation, setUserInformation] = useState()

    useEffect(()=>{
        client.get("api/user")
            .then(function(res){
                setCurrentUser(true);
            })
            .catch(function(error){
                setCurrentUser(false)
            })
    }, []);

    function update_form_btn(){
        if (registrationToggle) {
            document.getElementById("form_btn").innerHTML = "Register";
            setRegistrationToggle(false);
        } else {
            document.getElementById("form_btn").innerHTML = "Log in";
            setRegistrationToggle(true);
        }
    }
    
    function submitRegistration(e) {
        e.preventDefault();
        client.post(
            "api/register",
            {
              email: email,
              username: username,
              password: password
            }
        ).then(function(res) {
            client.post(
              "api/login",
              {
                username: username,
                password: password
              }
            )   
                .then(function(res) {
                    setCurrentUser(true);
            });
        });
    }

    function submitLogin(e) {
        e.preventDefault();
        client.post(
            "api/login",
            {
              username: username,
              password: password
            }
        )
            .then(function(res) {
                setCurrentUser(true);
        });
    }

    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "api/logout",
            {withCredentials: true}
        )   
            .then(function(res) {
                setCurrentUser(false);
        });
    }

    if (currentUser){
        return(
            <div>
                <h1>Użytkownik jest zalogowany {username}</h1>
                <form onSubmit={e => submitLogout(e)}>
                  <button type="submit" variant="light">Log out</button>
                </form>
            </div>
        );
    }

    
    return (
    <div  className="Login">
        {/* Regestration Form */}
        <MainWindow className='jeden'>
            <WindowContainer  className='dwa' style={{backgroundImage: `url(${restaurantImg})`}}>
                <LoginWindow >
                    <LoginLogo>Login</LoginLogo>
                    <FormBox  onSubmit={e => submitLogin(e)}>
                        <FormControl className="" controlId="formBasicEmail">
                            <form>Username</form>
                            <input type="username" placeholder="Enter username" value=    {username} onChange={e => setUsername(e.target.   value)} />
                        </FormControl>
                        <FormControl className="" controlId="formBasicPassword">
                            <form>Password</form>
                            <input type="password" placeholder="Password" value=  {password} onChange={e => setPassword(e.target.value)} />
                        </FormControl>
                        <SlideButton variant="primary" type="submit">
                            <span>Login</span>
                        </SlideButton>
                    </FormBox>
                </LoginWindow>
                

                    
               
            </WindowContainer>
        </MainWindow>
    </div>
    )
}

