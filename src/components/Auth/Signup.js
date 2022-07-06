import classes from './Signup.module.css'; 

import { useState } from 'react';

import { Link } from 'react-router-dom';

const Signup = props => {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState(''); 
    const [passwordRe, setPasswordRe] = useState(''); 

    const emailInputHandler = event => {
        setEmail(event.target.value); 
    }

    const passwordInputHandler = event => {
        setPassword(event.target.value); 
    }

    const passwordConfirmInputHandler = event => {
        setPasswordRe(event.target.value); 
    }

    const submitHandler = event => {
        console.log(email, password, passwordRe);
        event.preventDefault(); 

        localStorage.setItem("loginStatus", "true"); 
    }

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.formHead}>
                    Join us 
                </div>
                <div className={classes.formbody}>
                    <div className={classes.email}>
                        Enter email :
                        <input type="text" placeholder='valid email' value={email} onChange={emailInputHandler}/>
                    </div>

                    <div className={classes.password}>
                        Set a new password :
                        <input type="password" placeholder='valid password' value={password} onChange={passwordInputHandler}/>
                    </div>

                    <div className={classes.password}>
                        Confirm password:
                        <input type="password" placeholder='confirm password' value={passwordRe} onChange={passwordConfirmInputHandler}/>
                    </div>

                    <div className={classes.submit}>
                        <button type='submit' onClick={submitHandler}>
                            Sign up
                        </button>
                    </div>

                    <div className={classes.gosignup}>
                        already have an account ?
                        <Link to="/login">go to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup; 