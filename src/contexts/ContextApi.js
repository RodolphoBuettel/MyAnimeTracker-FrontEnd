import { createContext, useState} from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const imageUrl = "https://fictionhorizon.com/wp-content/uploads/2021/12/maxresdefault-3-1024x576.jpg";
    const [userData, setUserData] = useState("");
    return (
        <UserContext.Provider value = {{imageUrl, userData, setUserData}} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };