import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function SearchAnimes() {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <Container>
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
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  background-color: #333333;
  height: 100vh;
  padding-top: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 100%;

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;