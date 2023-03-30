import styled from "styled-components"
import NavBar from "../../components/DashboardComponents/NavBar";

export default function SearchScreen(){
    return <>
       <Dashboard>
            <NavBar/>
       </Dashboard>
    </>
};

const Dashboard = styled.div`
background-color: #333333;
height: 100vh;
`;