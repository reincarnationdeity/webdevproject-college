import React from 'react';
import cl from '../css/BlockCreate.module.css';

const BlockCreate = () => {
    return (
        <div class={cl.container}>
            <div className={cl.header}>
                <center><h1>Шапка сайта</h1></center>
                <div className={cl.navigation}>
                    <center><h3>Навигация</h3></center>
                </div>
                <div className={cl.menu}>
                    <center><h1>Меню</h1></center>
                </div>
                <div className={cl.content}>
                    <center><h1>Контент</h1></center>
                </div>
                <div className={cl.clear}></div>
                <div className={cl.clear}>
                    <center><h1>Подвал</h1></center>
                </div>
            </div>

        </div>
    );
};

export default BlockCreate;