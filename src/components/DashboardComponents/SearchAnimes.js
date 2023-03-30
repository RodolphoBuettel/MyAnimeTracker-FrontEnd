import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import AnimeBox from "./AnimeBox";
import NavBar from "./NavBar";

export default function SearchAnimes() {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const arr = [1,2,3,4,5,6];
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <Container>
      <NavBar />
      <Content>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Pesquisar..."
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit">Buscar</SearchButton>
        </SearchForm>
        <AnimeContent>
          {arr.map((a,index)=> <AnimeBox a = {a} key={index}/>)}
        </AnimeContent>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333333;
  height: 100vh;
  padding-top: 20px;
`;

const Content = styled.div`
 background-color: red;
 width: 100%;
`;

const AnimeContent = styled.div`
display: flex;
justify-content: space-around;
padding-top: 20px;
flex-wrap: wrap;
`;

const SearchForm = styled.form`
background-color: blue;
height: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
/* 
  @media screen and (max-width: 768px) {
    flex-direction: column;
  } */
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 80%;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* @media screen and (max-width: 768px) {
    width: 100%;
  } */
`;