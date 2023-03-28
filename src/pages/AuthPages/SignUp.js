import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, RegistrationScreen, Form } from "../../assets/css/FormStyles";
import UserContext from "../../contexts/ContextApi";
import { register } from "../../services/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const { imageUrl } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    try {
      const userData = await register(user);
      console.log(userData);
      toast.success("Cadastro realizado com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/sign-in");
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
            <input
              id="nome"
              type="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Nome"
              required
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" E-mail"
              required
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Senha"
              required
            />
          </div>
          <button type="submit">
            <h2>Cadastrar</h2>
          </button>
        </Form>
        <Link style={{ textDecoration: "none" }} to="/sign-in">
          <h3>Já possui uma conta? Entre agora!</h3>
        </Link>
      </RegistrationScreen>
    </Container>
  );
}
