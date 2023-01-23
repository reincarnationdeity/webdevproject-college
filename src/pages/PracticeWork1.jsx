import React, {useEffect, useState} from 'react';
import cl from '../css/PracticeWork1.module.css';

const PracticeWork1 = () => {
    const myObject = {};
    const mySecondObject = {a: 1};
    const testMultiply = {
        width: 100,
        height: 300,
        text: 'dsad'
    }
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [choose, setChoose] = useState(true);
    const [captcha, setCaptcha] = useState(false);

    while(captcha === false){
        let i = prompt("Введите число больше 100 но меньше 250");
        if(i>100 && i<250){
            setCaptcha(true);
            break;
        }
    }


    const min = (a, b) => {
        return a<b ? a : b;
    }


    const isEven = () =>{
        for(let i = 20; i<45; i++)
        {
            if(i%2 === 0)
             console.log(i);
         }
    }

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0 ?  true :  false
    }

    const multiplyNumeric = (obj) => {
        for(let i in obj){
            if(typeof obj[i] === "number"){
                obj[i] = obj[i]*2;
            }
        }
    }
    useEffect(()=>{
        console.log(min(4,5));
        isEven();
        console.log(isEmpty(myObject));
        console.log(isEmpty(mySecondObject));
        multiplyNumeric(testMultiply);
        console.log(testMultiply);
    }, [])
    return (
        <form className={cl.form__container} onSubmit={(e)=>e.preventDefault()}>
            <p className={cl.form__text}>Как тебя зовут?</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className={cl.form__input}/>
            <p className={cl.form__text}>Какой твой любимый цвет?</p>
            <input value={color} onChange={(e)=>setColor(e.target.value)} type="text" className={cl.form__input}/>
            <p className={cl.form__text}>Любишь ли ты рисовать?</p>
            { choose
                ? <div className={cl.button__container}><button className={cl.yes__active}>Да</button> <button onClick={()=>setChoose(false)} className={cl.no}>Нет</button></div>
                : <div  className={cl.button__container}><button onClick={()=>setChoose(true)} className={cl.yes}>Да</button><button className={cl.no__active}>Нет</button></div>}
            <button className={cl.submit__button} onClick={()=>alert("Name:" + name + "\nColor:" + color + "\nPaint:" + choose)}>Показать данные</button>
        </form>
    );
};

export default PracticeWork1;