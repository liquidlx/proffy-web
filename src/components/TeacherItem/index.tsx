import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/46790831?s=460&u=faf8227831f8d8af5f95b3b81ddf13e0bd86abd0&v=4" alt="Leonardo Collatto"/>
                <div>
                    <strong>Leonardo Collatto</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Just passing here to teach you how you can do a 'Hello World'.
                <br></br>
                <br></br>
                If you want more than that, contact someone else.
                <br></br>
                <br></br>
                Thanks.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;