import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginData, loginUser } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const loginData: LoginData = { email, password };
      const response = await loginUser(loginData);

      login(response);
      console.log(response);

      navigate("/products");
    } catch (error) {
      setError("Error al iniciar sesión. Verificar credenciales");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-auto min-h-screen px-8">
      <h2 className="font-bold text-lg text-center m-2">Inicia sesión</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md w-3xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded-md w-3xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-3xs"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
