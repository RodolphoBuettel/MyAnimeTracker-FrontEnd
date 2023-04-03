import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, RegistrationScreen, Form } from "../../assets/css/FormStyles";
import UserContext from "../../contexts/ContextApi";
import { login } from "../../services/authApi";

export default function SignIn() {
    const { imageUrl, setUserData } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function submit(e){
        e.preventDefault();

        const user = {
            email,
            password,
          };
      
          try {
            const userData = await login(user);
            setUserData(userData);
            localStorage.setItem('myToken', JSON.stringify(userData));
            toast.success("Login realizado com sucesso!", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/dashboard");
          } catch (err) {
            console.log(err);
            toast.error("Algo deu errado!", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
    }

    return (
        <Container imageUrl={imageUrl}>
            <h1>MyAnimeTracker</h1>
            <RegistrationScreen>
                <Form onSubmit={submit}>
                    <div>
                        <input id="email" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=" E-mail"
                            required
                        />
                    </div>
                    <div>
                        <input id="password" type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=" Senha"
                            required
                        />
                    </div>
                    <button type="submit">
                        <h2>Entrar</h2>
                    </button>
                </Form>
                <Link style={{ textDecoration: 'none' }} to="/"><h3>Sem conta? Cadastresse agora!</h3></Link>
            </RegistrationScreen>
        </Container>
    );
}