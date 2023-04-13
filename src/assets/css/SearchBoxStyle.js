import styled from "styled-components";

export const Content = styled.div`
 width: 1000%;
`;

export const AnimeContent = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 80px;
flex-wrap: wrap;
overflow: scroll;
overflow-x: hidden;
max-height: 100vh;
margin: 0 auto;
padding-left: 25px;
`;

export const SearchForm = styled.form`
height: 60px;
background-color: black;
position: fixed;
width: 100%;
z-index: 10;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  
  border-radius: 5px;
  margin-right: 5px;
  width: 70%;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;