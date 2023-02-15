import React, {useEffect, useRef, useState} from 'react';
import cl from '../css/Task2.module.css';
import {useNavigate} from "react-router-dom";

const Question2 = () => {

    const ref = useRef(null);

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [right, setRight] = useState(0);

    useEffect(()=>{
        ref.current.style.width = `${width}px`
        ref.current.style.height = `${height}px`
        ref.current.style.left = `${right}px`
    }, [width, height])

    const moveEl = () => {
        setWidth(width + 150);
        setHeight(height + 150);
        setRight(right + 50);
    }

    const moveBack = () => {
        setWidth(100);
        setHeight(100);
        setRight(0);
    }

    let navigate = useNavigate();

    return (
        <div className={cl.container}>
            <h1 className={cl.header}>Задание 2</h1>
            <div className={cl.buttons}>
                <button className={cl.btn} onClick={moveEl}>Выполнить
                </button>
                <button className={cl.btn} onClick={moveBack}>Вернуть
                </button>
                <button className={cl.btn} onClick={()=>navigate('/Exam')}>Go back
                </button>
            </div>
            <div className={cl.movable} ref={ref}></div>
        </div>
    );
};

export default Question2;