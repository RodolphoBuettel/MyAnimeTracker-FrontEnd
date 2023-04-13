import styled from "styled-components"
import NavBar from "../../components/DashboardComponents/NavBar";
import { AnimeContent, Content, SearchButton, SearchForm, SearchInput } from "../../assets/css/SearchBoxStyle";
import { useEffect, useState } from "react";
import { getAnimes } from "../../services/myAnimesApi";
import MyAnimeBox from "../../components/DashboardComponents/MyAnimeBox";

export default function SearchScreen() {
    const token = JSON.parse(localStorage.getItem('myToken'));
    const [myAnimes, setMyAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleScroll = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
    
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
    
        if (scrollTop + window.innerHeight + 50 >= scrollHeight){
            setPage(page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const fetchData = async (page, pageSize) => {
        const result = await getAnimes(token, page, pageSize);
        setMyAnimes([...myAnimes, ...result]);
    };

    useEffect(() => {
        fetchData(page, pageSize);
    }, [token, page, pageSize]);

    return <>
        <Dashboard>
            <Content>
                <SearchForm>
                <NavBar />
                    <SearchInput
                        type="text"
                        placeholder="Pesquisar..."
                    // ref={inputRef}
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchButton type="submit">Buscar</SearchButton>
                </SearchForm>
                <AnimeContent>
                    {myAnimes.map((anime) => (
                        <MyAnimeBox key={anime.id} anime={anime} />
                    ))}
                </AnimeContent>
            </Content>
        </Dashboard>
    </>
};

const Dashboard = styled.div`
background-color: #333333;
display: flex;
min-height: 100vh;
`;
