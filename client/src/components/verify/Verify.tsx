import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyData, verifyUser } from "../../services/authService";
import { toast } from "sonner";

const Verify = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const verifyData: VerifyData = { email, code };
      const response = await verifyUser(verifyData);
      toast.success("Validación exitosa");
      console.log(response);
      navigate("/login");
    } catch (error) {
      setError("Error de validación");
      toast.error("Error de validación");
    }
  };

  return (
    <div className="flex flex-col w-auto min-h-screen px-8">
      <h2 className="font-bold text-lg text-white text-center m-2">
        Verificación
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-md bg-white w-3xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Código de verificación"
          className="border p-2 rounded-md bg-white w-3xs"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-3xs"
        >
          Verificar
        </button>
      </form>
    </div>
  );
};

export default Verify;
