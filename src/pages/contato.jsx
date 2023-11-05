import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nome,
      email,
      assunto,
      mensagem,
    };

    emailjs
      .send(
        'SEU_SERVICE_ID', // Substitua pelo seu Service ID do EmailJS
        'SEU_TEMPLATE_ID', // Substitua pelo seu Template ID do EmailJS
        templateParams,
        'SEU_USER_ID' // Substitua pelo seu User ID do EmailJS
      )
      .then(
        (response) => {
          alert('E-mail enviado com sucesso!');
        },
        (error) => {
          console.error('Erro ao enviar o e-mail:', error);
          alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
        }
      );

    // Limpe os campos do formulário
    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
  };

  return (
    <div className="contato">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        {/* Seu código de formulário existente aqui */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;