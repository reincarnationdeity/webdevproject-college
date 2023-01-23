import React from 'react';
import cl from '../css/SelfWork.module.css';
import Blocks from "../components/UI/Blocks/Blocks";

const SelfWork = () => {
    let options = ["Москва","Краснодар","Волгоград","Воронеж"];
    let header = ["Company", "Q1", "Q2", "Q3", "Q4"];
    let microsoft = ["Microsoft", "20.3", "30.5", "23.5", "40.3"]
    let google = ["Google", "50.2", "40.63", "45.23", "39.3"]
    let apple = ["Apple", "25.4", "30.2", "33.3", "36.7"]
    let ibm = ["IBM", "20.4", "15.6", "22.3", "29.3"]
    return (
        <div className={cl.container}>
            <select >
                {options.map((i, index)=><option className={cl.selection} key={index}>{i}</option>)}
            </select>
            <table className={cl.tableAtAll}>
                <tr>
                    {header.map((i)=><th className={cl.tableHead}>{i}</th>)}
                </tr>
                <tr >
                    {microsoft.map((i)=><td className={cl.tableData}>{i}</td>)}
                </tr>
                <tr>
                    {google.map((i)=><td className={cl.tableData}>{i}</td>)}
                </tr>
                <tr>
                    {apple.map((i)=><td className={cl.tableData}>{i}</td>)}
                </tr>
                <tr>
                    {ibm.map((i)=><td className={cl.tableData}>{i}</td>)}
                </tr>
            </table>
            <Blocks/>
        </div>
    );
};

export default SelfWork;