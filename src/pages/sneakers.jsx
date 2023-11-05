import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Sneakers() {
    
  const [sneakers, setSneakers] = useState([]);

  const getApi = async () => {
    const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
    setSneakers(snkrAPI.data.sneakers);
  }

  useEffect(() => {getApi()}, []);

  const addInTheCar = (idSneaker) => {
    axios
      .post("http://localhost:5500/crudphp/cadastrar.php", { "idSneaker": idSneaker })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      console.log(idSneaker)
  }

  const airJordans = sneakers.filter((sneaker) => sneaker.brand_name === 'Air Jordan');

  return (
    <div className='container'>
        {airJordans.map((airJordan) => 
        <div key={airJordan.id} className='divSneakers'>
            <img className='airJordanImg' src={airJordan.main_picture_url} alt="sneaker"/>
            <p className='sneakerName'>{airJordan.brand_name}</p>
            <p className='adicionarCarrinho' name="idSneaker" onClick={() => addInTheCar(airJordan.id)}>Adicionar ao carrinho</p>
        </div>)}
    </div>
  )
}

export default Sneakers;