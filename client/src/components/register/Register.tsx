import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterData, registerUser } from "../../services/authService";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const registerData: RegisterData = { name, lastname, email, password };
      const response = await registerUser(registerData);

      console.log(response);
      navigate("/verify");
    } catch (error) {
      setError("Error al registrar usuario");
    }
  };

  return (
    <div className="flex flex-col w-auto min-h-screen px-8">
      <h2 className="font-bold text-lg text-center m-2">Registrate</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded-md w-3xs"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          className="border p-2 rounded-md w-3xs"
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md w-3xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded-md w-3xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-3xs"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
