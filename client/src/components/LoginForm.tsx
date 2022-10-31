import React, {FC, useState} from "react";
import {useAppDispatch} from "../hooks/redux";
import {login} from "../store/reducers/ActionCreators";
import cl from "../styles/RegistrationForm.module.css";
import cx from "classnames";
import {useNavigate} from "react-router-dom";

declare var window: any

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    if (window.ethereum) {
        const ethereumButton = document.querySelector('.enableEthereumButton');
        const showAccount = document.querySelector('.showAccount');
        //@ts-ignore
        ethereumButton.addEventListener('click', () => {
            getAccount();
        });

        //@ts-ignore
        async function getAccount() {
            //@ts-ignore
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            const account = accounts[0];
            //@ts-ignore
            showAccount.innerHTML = account;
        }
    } else {
        alert("install metamask extension!!")
    }


    return (
        <div className={cl.auth}>
            <form className={cl.auth__form}>
                {/* start metamask */}
                <button className="enableEthereumButton">Enable Ethereum</button>
                <h2>Account: <span className="showAccount"></span></h2>
                {/* end metamask */}
                <label htmlFor="login-email" className={cl.auth__label}>
                    Email
                </label>
                <input
                    className={cx(cl.auth__input, cl.auth__input_email)}
                    placeholder="Введите email"
                    name="email"
                    id="login-email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type='text'
                />
                <label htmlFor="login-password" className={cl.auth__label}>
                    Пароль
                </label>
                <input
                    className={cx(cl.auth__input, cl.auth__input_password)}
                    placeholder="Введите пароль"
                    type="password"
                    name="password"
                    id="login-password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <button className={cx(cl.auth__button, cl.auth__button_login)}
                        onClick={(e) => {
                            dispatch(login({email: email, password: password}));
                            e.preventDefault()
                        }
                        }
                >Войти
                </button>
                <div
                    className={cl.auth__text}
                    onClick={(e) => {
                        navigate("/registration");
                        e.preventDefault();
                    }}
                >
                    <p className={cl.auth__link}>Регистрация</p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
