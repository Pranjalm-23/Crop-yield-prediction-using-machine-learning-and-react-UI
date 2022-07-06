// this is login component

import classes from './Login.module.css';

import {useState} from 'react'; 
import { Link } from 'react-router-dom';


const Login = props => {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState(''); 

    const emailInputHandler = event => {
        setEmail(event.target.value); 
    }

    const passwordInputHandler = event => {
        setPassword(event.target.value); 
    }

    const submitHandler = event => {
        console.log(email, password);
        event.preventDefault(); 

        localStorage.setItem("loginStatus", "true")
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.formHead}>
                    Login & you good to predict :)
                </div>
                <div className={classes.formbody}>
                    <div className={classes.email}>
                        Enter email :
                        <input type="text" placeholder='valid email' value={email} onChange={emailInputHandler}/>
                    </div>

                    <div className={classes.password}>
                        Enter password :
                        <input type="password" placeholder='valid password' value={password} onChange={passwordInputHandler}/>
                    </div>

                    <div className={classes.submit}>
                        <button type='submit' onClick={submitHandler}>
                            Login
                        </button>
                    </div>

                    <div className={classes.gosignup}>
                        Not have an account ?
                        <Link to="/signup">Signup now</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login; 