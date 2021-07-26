import styled from 'styled-components';





export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

   section {     
    height: 100vh;
    width: 100%;
    margin-top: 10%;
    background-color: #eaeaea;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: blcok;
      text-align: center;
      height: 300px;
      padding-top: 50%
      margint-bottom: -80%
      background: #fff;
      border-radius: 12px;
      padding: 12px;

    }
    .logo{
            width: 20px;
            margin: 20px;
        }    

    descricao {
      width: 100%
      heigth: 50%
    }

    button {
      background: #1c1c1c;
      border: none;
    }

    button:hover {
      background: #b419f4;
      border: none;

    }

    form {      
      marginTop: 50%;      
      
    }

    @media (max-width 500px) {
      section{
        display: block;
      }
    }

  }
`

