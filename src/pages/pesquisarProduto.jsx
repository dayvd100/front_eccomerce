import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './PesquisarProdutos.css'; 

function PesquisarProdutos() {
  const [sneakers, setSneakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const snkrAPI = await axios.get("http://127.0.0.1:5500/arquivo.html");
    //   let i = 0
    //   for(i = 1; i<=10; i++){
    //     console.log(snkrAPI.data.sneakers.collection_slugs[0])
    //   }
      setSneakers(snkrAPI.data.sneakers);
    };
    getApi();
  }, []);

  useEffect(() => {
    // Filtre os tênis com base na pesquisa
    const filteredResults = sneakers.filter((sneaker) =>
    sneaker.collection_slugs.join('').toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSneakers(filteredResults);
  }, [searchQuery, sneakers]);

  const addInTheCar = (idSneaker) => {
    axios
      .post("http://localhost:5500/crudphp/cadastrar.php", { idSneaker })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log(idSneaker);
  };

  return (
    <div className="pesquisar-produtos-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar tênis"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="sneakers-list">
      {filteredSneakers.map((sneaker) => (
  <div key={sneaker.id} className="sneaker-card">
    <img className="sneaker-image" src={sneaker.main_picture_url} alt="sneaker" />
    <p className="sneaker-name">{sneaker.collection_slugs[0]}</p>
    <p className="add-to-cart" onClick={() => addInTheCar(sneaker.id)}>Adicionar ao carrinho</p>
  </div>
))}
      </div>
    </div>
  );
}

export default PesquisarProdutos;

