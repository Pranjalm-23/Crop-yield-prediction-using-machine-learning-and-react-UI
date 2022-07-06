import classes from './Predict.module.css';

import { years, states, districts, seasons, crops } from '../InputData';
import { useEffect, useState } from 'react';



const Predict = props => {

    const [okToPredict, setOkToPredict] = useState(false);
    const [btn, setBtn] = useState('Waiting for field info');

    const [year, setYear] = useState("2022");
    const [area, setArea] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [season, setSeason] = useState("");
    const [crop, setCrop] = useState("");


    const enableBtn = () => {
        if (year === "" || area === "" || state === "" || district === "" || season === "" || crop === "") {
            setOkToPredict(false);
            setBtn('Waiting for field info')
        } else {
            setOkToPredict(true);
            setBtn('Good to go!, Lets predict')
        }
    }

    useEffect(() => {
        enableBtn();
    }, [year, area, state, district, season, crop]);

    const yearHandler = event => {
        let val = event.target.value;
        setYear(val);

        // now check if all inputs are ok , to enable 
        // enableBtn(); 
    }

    const stateHandler = event => {
        let val = event.target.value;
        setState(val);

        // enableBtn(); 
    }

    const areaHandler = event => {
        let val = event.target.value;
        setArea(val);

        // enableBtn();
    }

    const districtHandler = event => {
        let val = event.target.value;
        setDistrict(val);

        // enableBtn();
    }

    const seasonHandler = event => {
        let val = event.target.value;
        setSeason(val);

        // enableBtn();
    }

    const cropHandler = event => {
        let val = event.target.value;
        setCrop(val);

        // enableBtn();
    }



    const submitHandler = event => {
        // create object to send to api 
        event.preventDefault(); 
        const data = {
            year, area, state, district, season, crop
        }

        console.log(data); 

        // ok , lets use fetch to put it in server 
        fetch('/getdata', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                alert('Predicted Value: '+ data.res);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <h2>Tell us few things & start predicting :)</h2>
                <div className={classes.inp}>
                    <form onSubmit={submitHandler}>
                        <div className={classes.inpRow}>
                            <div className={classes.year}>
                                <span> Select Year :)</span>
                                <select name="year" id="year" onChange={yearHandler} value={year}>
                                    <option value="">-- Select year --</option>
                                    {
                                        years.map((year) => {
                                            return (<option value={year}>{year}</option>);
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={classes.inpRow}>
                            <div className={classes.area}>
                                <span> Enter field area (in Sq. meters) :)</span>
                                <input type="number" onChange={areaHandler} value={area} />
                            </div>
                        </div>

                        <div className={classes.inpRow}>
                            <div className={classes.state}>
                                <span> Select State :)</span>
                                <select name="state" id="state" onChange={stateHandler} value={state}>
                                    <option value="">-- Select state --</option>
                                    {
                                        states.map((state) => {
                                            return (<option value={state}>{state}</option>)
                                        })
                                    }
                                </select>
                            </div>

                        </div>

                        <div className={classes.inpRow}>
                            <div className={classes.state}>
                                <span> Select District :)</span>
                                <select name="district" id="district" onChange={districtHandler} value={district}>
                                    <option value="">-- Select district -- </option>
                                    {
                                        districts.map((district) => {
                                            return (<option value={district}>{district}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={classes.inpRow}>
                            <div className={classes.state}>
                                <span> Select Season :)</span>
                                <select name="season" id="season" onChange={seasonHandler} value={season}>
                                    <option value="">-- Select season --</option>
                                    {
                                        seasons.map((season) => {
                                            return (<option value={season}>{season}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className={classes.inpRow}>
                            <div className={classes.state}>
                                <span> Select Crop :)</span>
                                <select name="crop" id="crop" onChange={cropHandler} value={crop}>
                                    <option value="">-- Select crop --</option>
                                    {
                                        crops.map((crop) => {
                                            return (<option value={crop}>{crop}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className={classes.submit}>
                            <button type='submit' className={okToPredict ? classes.predictEnabled : classes.predictDisabled}>{btn}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={classes.right}>

            </div>
        </div>
    )
}

export default Predict; 