import React, { useState, useEffect } from 'react';
import Cart from '../../assets/cart.png'
import { Container } from './style';
import { Form } from './style';
import api from '../../services/api';
import Logo from '../../assets/logotipo.png';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


interface IClient {
  nome:string;
  email: string;
  celular: string;
  descricao: string;
}





const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  const [ cliente, setCliente ] = useState<IClient[]>([]);


  let [ nome, setNome ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ celular, setCelular ] = useState('');
  let [ descricao, setDescricao ] = useState('');
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

   useEffect(() => {
    localStorage.setItem(`@cliente`, JSON.stringify(cliente));
  }, [cliente]);

  function handleCadastra() {    

    let newCliente = JSON.parse(`{"nome": "`+nome+`","email":"`+email+`","celular":"`+celular+`","descricao":"`+descricao+`"}`);
    setCliente(cliente => [...cliente,newCliente]);
    

    alert('Parabéns por se cadastrar em nosso site!');

}

  return (
    <Container>
      <div className="nav">
        <div>
          <a href="/">
            <img
              className="logo"
              src={Logo}
              alt="Logo"
              width="100px"
              height="auto"
            />
          </a>
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button
              className="btn btn-primary"
              onClick={() => handleCart(index)}
            >
              {" "}
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </section>

      <Form>
        <div className="form">
          <div className="form-group">
            <div className="form-group">
              <input
                className="nome"
                id="nome"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                className="email"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="celular"
                id="celular"
                type="text"
                placeholder="Celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className="form-group"></div>
            <input
              className="descricao"
              id="descricao"
              type="text"
              placeholder="Escreva aqui uma breve descrição sobre o dispositivo"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleCadastra}>
              Cadastrar
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default Home;