import React from 'react';
import cl from '../css/HomeWork.module.css';
import image from '../images/flowers.svg';

const HomeWork = () => {
    return (
        <div className={cl.container}>
            <div className={cl.image_flowers}>
                <img src={image} className={cl.image_flowers}/>
            </div>
            <div >
                <p className={cl.are_invite}>ВЫ ПРИГЛАШЕНЫ? <br/>ПОДТВЕРДИТЕ ВАШЕ<br/> УЧАСТИЕ</p>
            </div>
            <div className={cl.shape}>
                &nbsp;
            </div>
            <div className={cl.shape}>
                &nbsp;
            </div>
            <div>
                <form>
                    <p className={cl.text_about}>Ваше имя:</p>
                    <input type="text" className={cl.text_input}/>
                        <p className={cl.text_about}>Гостей:</p>
                        <select className={cl.options}>
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                        </select>
                        <p className={cl.text_about}>Я приглашен...</p>
                        <select className={[cl.options, cl.second_part].join(' ')}>
                            <option>
                                На все мероприятия
                            </option>
                            <option>
                                На одно мероприятие
                            </option>
                            <option>
                                На два мероприятия
                            </option>
                            <option>
                                На три мероприятия
                            </option>
                        </select>
                    <button type="submit" className={cl.i_apply} onClick={(e)=>e.preventDefault()}>Я ПОДТВЕРЖДАЮ</button>
                </form>
            </div>
        </div>
    );
};

export default HomeWork;