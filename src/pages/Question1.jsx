import React, {useEffect, useRef, useState} from 'react';
import cl from '../css/Question1.module.css';
import image from '../images/3.jpg';
import {useNavigate} from "react-router-dom";

const Question1 = () => {
    const [iterator, setIterator] = useState(0);
    useEffect(() => {
        ref.current.style.border = `${iterator}px solid red`;
    }, [iterator]);

    const navigate = useNavigate();

    const ref = useRef(null);
    const imgRef = useRef(null);

    const increaseBorder = () => {
        setIterator(iterator => iterator + 5)
    }
    const decreaseBorder = () => {
        iterator === 0 ? setIterator(0) : setIterator(iterator => iterator - 5)
    }

    const setBoxShadow = () => {
            ref.current.style.boxShadow = '5px 5px 30px rgba(255,255,255,.5)';
    }

    const hideBoxShadow = () => {
        ref.current.style.boxShadow = 'none';
    }

    const setBorderRadius = () => {
        ref.current.style.borderRadius = '20px';
        imgRef.current.style.borderRadius = '15px';
    }

    const hideBorderRadius = () => {
        ref.current.style.borderRadius = '0px';
        imgRef.current.style.borderRadius = '0px';
    }
    return (
        <div className={cl.container}>
            <h1 className={cl.task__one}>Задание 1</h1>
            <div className={cl.wrapper} ref={ref}>
                <img src={image} className={cl.image} ref={imgRef}/>
            </div>

            <h2 className={cl.increase__border__button} >Increase/decrease border button</h2>
            <div className={cl.btn__wrapper}>
                <button onClick={increaseBorder} className={cl.btn}>Increase</button>
                <button onClick={decreaseBorder} className={cl.btn}>Decrease</button>
            </div>
            <h2 className={cl.increase__border__button} >Set/hide box-shadow</h2>
            <div className={cl.btn__wrapper}>
                <button onClick={setBoxShadow} className={cl.btn}>Increase</button>
                <button onClick={hideBoxShadow} className={cl.btn}>Decrease</button>
            </div>
            <h2 className={cl.increase__border__button} >Set/remove border-radius</h2>
            <div className={cl.btn__wrapper}>
                <button onClick={setBorderRadius} className={cl.btn}>Increase</button>
                <button onClick={hideBorderRadius} className={cl.btn}>Decrease</button>
            </div>
            <button onClick={()=>navigate('/Exam')} className={cl.btn} style={{margin: '20px auto'}}>Go back</button>
        </div>
    );
};

export default Question1;