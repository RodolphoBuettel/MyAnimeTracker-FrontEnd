import styled from "styled-components";

export const Container = styled.div`
background-image: url(${props => props.imageUrl});
background-size:cover;
background-position: center center;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    color: black;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 5px;
}
h3{
    color: white;
    margin-top: 5px;
    font-size: 18px;
}
@media (max-width: 768px) {
    background-size: contain;
    height:100vh;
  }
`;

export const RegistrationScreen = styled.div`
 width: 250px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 20px;
`;

export const Form = styled.form`
 display: flex;
  flex-direction: column;
align-items: center;
padding-top: 25px;
  input[type="nome"],
  input[type="email"],
  input[type="password"] {
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    background-color: rgb(65,73,112, 0.8);
  }

  input[type="nome"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    outline: none;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }

  button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #0062cc;
    }
  }
`;