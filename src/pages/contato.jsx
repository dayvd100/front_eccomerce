import React from 'react';
import { Link } from 'react-router-dom';
import "./contato.css"

const Contato = () => {
  return (
    <div className="contato">
      <h2>Entre em contato:</h2>
      <ul className="contato-links">
        <li>
          <Link to="https://www.instagram.com/seu-instagram" target="_blank">
            Instagram
          </Link>
        </li>
        <li>
          <Link to="https://api.whatsapp.com/send?phone=seu-numero-de-telefone" target="_blank">
            WhatsApp
          </Link>
        </li>
        <li>
          <Link to="https://www.tiktok.com/@seu-usuario-tiktok" target="_blank">
            TikTok
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contato;