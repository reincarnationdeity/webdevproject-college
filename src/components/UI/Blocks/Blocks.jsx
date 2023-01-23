import React from 'react';
import cl from './Blocks.module.css';

const Blocks = () => {
    return (
        <div className={cl.blocks__container}>
            <div className={cl.shape}>

            </div>
            <div className={cl.round}></div>
            <div className={cl.shadow__shape}></div>
        </div>
    );
};

export default Blocks;