// this is the home page 

import classes from './Home.module.css';
import farmerServiceGif from '../../../src/assets/images/smart_farmer1.gif';

import { useHistory } from 'react-router-dom';

const Home = props => {

    const history = useHistory();
    // this is home component


    const checkAuth = () => {
        // check if user is already logged in 
        // if yes return true 
        // else false 
        // get from localstorage 
        const loginStatus = localStorage.getItem('loginStatus');
        if(loginStatus==="true") {
            return true; 
        }else {
            return false; 
        }
    }

    const redirectUser = event => {
        const topic = event.target.innerHTML;

        console.log(topic); 
        
        if (topic === ' Predict Your crop Production') {
            console.log("reached");
            // check auth and redirect to required page
            if (checkAuth()) {
                // user already logged in 
                // redirect to proper service page 
                history.push('/services/prediction');
            } else {
                // user not logged in 
                // redirect to login page
                history.push('/login');
            }
        }

        if (topic === ' Recommend best crop for my field') {
            console.log("reached 2");
            // check auth and redirect to required page
            if (checkAuth()) {
                // user already logged in 
                // redirect to proper service page 
                history.push('/services/recommandation');
            } else {
                // user not logged in 
                // redirect to login page
                history.push('/login');
            }
        }
    }





    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.first}>
                    <div className={classes.serviceTitle_1}>
                        <h2>Want to know how much your crop field can produce ? </h2>
                        <p>Predict your crop prediction using our best crop prediction predictor.</p>
                    </div>
                    <button onClick={redirectUser}> Predict Your crop Production</button>
                </div>

                <div className={classes.second}>
                    <div className={classes.serviceTitle_2}>
                        <h2>Want to know Which crop bests suits for your field ? </h2>
                        <p>Use our recommendations to plan a new crop for your field.</p>
                    </div>
                    <button onClick={redirectUser}> Recommend best crop for my field</button>
                </div>
            </div>


            <div className={classes.right}>
                <img src={farmerServiceGif} alt="farmer gif" />
            </div>
        </div>
    );
}

export default Home; 