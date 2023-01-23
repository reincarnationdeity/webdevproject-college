import React from 'react';
import cl from '../css/Laboratory.module.css';
import image1 from '../images/Laboratory/img1.jpg';
import image2 from '../images/Laboratory/img2.jpg';
import image3 from '../images/Laboratory/img3.jpg';

const LabRab = () => {
    let imagesArray = [image1, image2, image3]
    return (
        <div className={cl.container}>
            <div className={cl.micro__container} style={{backgroundColor: '#FAEBD7'}}>
                <h1>Гаврилюк Никита 22-Д9-3ИНС</h1>
                <h1 style={{textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '25px'}}>«Лабораторная работа №1»</h1>
                <h2 style={{textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '20px'}}>«Работа с основными элементами web-страницы через HTML и CSS.»></h2>
                <p style={{textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '20px'}}>«CSS (Cascading Style Sheets) — язык таблиц стилей, который позволяет прикреплять стиль (например, шрифты и цвет) к структурированным документам (например, документам HTML и приложениям XML). Обычно CSS-стили используются для создания и изменения стиля элементов веб-страниц и пользовательских интерфейсов, написанных на языках HTML и XHTML, но также могут быть применены к любому виду XML-документа, в том числе XML, SVG и XUL. Отделяя стиль представления документов от содержимого документов, CSS упрощает создание веб-страниц и обслуживание сайтов»</p>
            </div>
            <div className={[cl.micro__container, cl.second__container].join(' ')} style={{backgroundColor: '#FFE4E1'}}>
                {imagesArray.map((i, index)=><img className={cl.images} key={index} src={i}/>)}
            </div>
            <div className={cl.micro__container} style={{backgroundColor: '#AFEEEE'}}>
                <form className={cl.form__third}>
                    <p className={cl.headers} style={{marginTop: '0px'}}>Имя</p>
                    <input className={cl.inputs} type="text"/>
                    <p className={cl.headers}>Пароль</p>
                    <input className={cl.inputs} type="password"/>
                    <p className={cl.headers}>Почта</p>
                    <input className={cl.inputs}  type="email"/>
                    <input className={cl.color} type="color"/>
                    <input type={"file"} className={cl.inputs} style={{width: '200px', marginTop: '20px'}}/>
                    <p className={cl.headers}>Дата</p>
                    <input type={'date'} />
                    <textarea style={{marginTop: '20px'}}></textarea>
                    <button className={cl.inputs}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default LabRab;