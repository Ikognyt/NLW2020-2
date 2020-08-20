import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/32139927?s=460&u=6ab0b446e6db64d3969e570fd7b220593424a760&v=4" alt="Filipe Lopes"/>
      <div>
        <strong>Filipe Lopes</strong>
        <span>Programação Front-End</span>
      </div>
    </header>
    <p>
      Mestre na arte de chamar a atenção do usuário.
      <br />
      <br />
      Vai te ajudar a hipnotizar o usuário com UX/UI definitivo.
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button" >
        <img src={whatsappIcon} alt="Entrar em contato" />
        Entrar em contato
      </button>
    </footer>

  </article>
  );
}

export default TeacherItem;