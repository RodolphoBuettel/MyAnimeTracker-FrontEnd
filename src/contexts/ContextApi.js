import { createContext} from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const imageUrl = "https://fictionhorizon.com/wp-content/uploads/2021/12/maxresdefault-3-1024x576.jpg";
    return (
        <UserContext.Provider value = {{imageUrl}} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };