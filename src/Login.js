import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error)=>alert(error.message));

    };
    return (
      <div className="login">
        <div className="login_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
          />
          <img className="login_name" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1920px-Facebook_Logo_%282019%29.svg.png"
    
    />
        
        </div>
        <Button type="Submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    );
}

export default Login
