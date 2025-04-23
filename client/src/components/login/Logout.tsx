import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout} className="ml-4">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Logout;
