import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="rounded-full hover:bg-gray-100 relative"
      >
        <FiLogOut className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default Logout;
