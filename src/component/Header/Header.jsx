import React, { useState } from "react";
import "./Header.modules.css";
import Logo from "../../img/apex-logo.svg";
import discord from "../../img/discord.svg";
import pay from "../../img/replenish-balance.svg";
import burgerIcon from "../../img/burger.svg";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="header">
            <div className="container">
                <a className="logo" href="#">
                    <img src={Logo} alt="" className="logo_img" />
                </a>

                <div className="button_nav">
                    <a href="#home">Главная</a>
                    <a href="#play">Играть</a>
                    <a href="#forum">Форум</a>
                    <a href="#wiki">WIKI</a>
                    <a href="#about">О ПРОЕКТЕ</a>
                </div>

                <div className="button_right">
                    <div className="online">
                        <div className="elipse"></div>
                        <span>715 </span>
                        <span>/1000</span>
                        <span>ИГРОКОВ</span>
                    </div>
                    <div className="header_btn">
                        <div className="discord_btn">
                            <a href="#">
                                <img src={discord} className="discord_img" alt="" />
                            </a>
                        </div>
                        <div className="payments">
                            <button className="payments_btn">
                                <img src={pay} alt="" className="icon" />
                                <span className="pay_text">ПОПОЛНИТЬ СЧЁТ</span>
                            </button>
                        </div>
                    </div>
                    <div className="burger_menu" onClick={handleBurgerClick}>
                        <img src={burgerIcon} alt="Menu" className="burger_icon" />
                    </div>
                </div>

                <div className={`mobile_nav ${isOpen ? "active" : ""}`}>
                    <a href="#home">Главная</a>
                    <a href="#play">Играть</a>
                    <a href="#forum">Форум</a>
                    <a href="#wiki">WIKI</a>
                    <a href="#about">О ПРОЕКТЕ</a>
                </div>
            </div>
        </section>
    );
};
