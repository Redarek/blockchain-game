import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import cl from '../styles/MainPage.module.css'
import Canvas from "../components/Canvas";

const MainPage = () => {
    const navigate = useNavigate()


    return (
        <div className={cl.wrapper}>
            {/*<Canvas/>*/}
            //Simple Page for Work
            <div className={cl.linkDesc} onClick={(e) => {
                navigate('/');
                e.preventDefault()
            }}>
                MainPage -
                <a rel="stylesheet" href="/">"/"</a>
            </div>
            <div className={cl.linkDesc} onClick={(e) => {
                navigate('/calendar');
                e.preventDefault()
            }}>
                Calendar -
                <a rel="stylesheet" href="/calendar">"/calendar"</a>
            </div>
            <div className={cl.linkDesc} onClick={(e) => {
                navigate('/login');
                e.preventDefault()
            }}>
                Login -
                <a rel="stylesheet" href="/login">"/login"</a>
            </div>
            <div className={cl.linkDesc} onClick={(e) => {
                navigate('/registration');
                e.preventDefault()
            }}>
                Registration-
                <a rel="stylesheet" href="/registration">"/reg"</a>
            </div>
        </div>
    );
};

export default MainPage;
