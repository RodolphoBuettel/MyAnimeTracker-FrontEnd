import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle.js";
import { UserProvider } from "./contexts/ContextApi.js";
import SignUp from "./pages/AuthPages/SignUp.js";
import SignIn from "./pages/AuthPages/SignIn.js";
import { ToastContainer } from 'react-toastify';
import SearchScreen from "./pages/Dashboard/SearchScreen.js";
import SearchAnimes from "./components/DashboardComponents/SearchAnimes.js";
import AnimeDetails from "./pages/Dashboard/AnimeDetails.js";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dashboard" element={<SearchScreen />} />
            <Route path="/searchanimes" element={<SearchAnimes />} />
            <Route path="/anime/:id" element={<AnimeDetails />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>

  );
}

export default App;
