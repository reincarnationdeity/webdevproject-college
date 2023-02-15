import React from 'react';
import cl from '../css/Exam.module.css';
import cls from '../css/Exam2.module.css';
import {useNavigate} from "react-router-dom";

const Exam = () => {

    let navigate = useNavigate();

    return (
        <div className={cl.container}>
            <h1 className={cl.exam__title}>КОНТРОЛЬНАЯ РАБОТА №2</h1>
            <h2 className={cl.exam__who}>Выполнил студент Гаврилюк Никита</h2>
            <h3 className={cl.exam__group}>Группа: 22-Д9-3ИНС</h3>
            <div className={cl.button__container}>
                <div className={cls.gradient__btn__style} onClick={()=>navigate('/Question1')}>
                    Задание 1
                </div>
                <div className={cls.gradient__btn__styleSecond} onClick={()=>navigate('/Question2')}>
                    Задание 2
                </div>

            </div>

        </div>
    );
};

export default Exam;