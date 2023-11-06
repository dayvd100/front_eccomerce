import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalhesTenis() {
  const { id } = useParams();

  const [tennisDetails, setTennisDetails] = useState(null);

  useEffect(() => {
    const fetchTennisDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5500/arquivo.html`);
        const snkrAPI = response.data;
        const foundTennis = snkrAPI.sneakers.find((tenis) => tenis.id.toString() === id);
        setTennisDetails(foundTennis);
      } catch (error) {
        console.error('Erro ao buscar detalhes do tênis:', error);
      }
    };

    fetchTennisDetails();
  }, [id]);

  return (
    <div className='container'>
      {tennisDetails ? (
        <div key={tennisDetails.id} className='divSneakers'>
          <img className='airJordanImg' src={tennisDetails.main_picture_url} alt="sneaker" />
          <p className='sneakerName'>marca: {tennisDetails.brand_name}</p>
          <p className='sneakerName'>caixa: {tennisDetails.box_condition}</p>
          <p className='sneakerName'>categoria: {tennisDetails.category}</p>
          <p className='sneakerName'>desiner: {tennisDetails.designer}</p>
          <p className='adicionarCarrinho' name="idSneaker">Adicionar ao carrinho</p>
        </div>
      ) : (
        <p>Tênis não encontrado</p>
      )}
    </div>
  );
}

export default DetalhesTenis;
