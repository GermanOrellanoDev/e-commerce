import { FiSearch, FiShoppingCart, FiLogIn, FiHome } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import Logout from "../login/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<Props> = ({ onSearch }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [input, setInput] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  const handleClickToCart = async () => {
    navigate("/cart");
  };

  return (
    <nav className="bg-gray-700 fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center justify-center h-16">
          {/*  <div className="flex items-center">
            <span className="text-lg font-bold text-blue-900">Mercado</span>
          </div> */}
          <div className="flex items-center">
            <Link className="hover:bg-black rounded-full" to={"/"}>
              <FiHome className="m-1.5 text-2xl text-white" />
            </Link>
            <div className="relative m-1.5">
              <input
                type="text"
                placeholder="Buscar producto..."
                className="w-auto h-9 px-2 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                value={input}
                onChange={handleSearch}
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button
              onClick={handleClickToCart}
              className="rounded-full hover:bg-black relative "
            >
              <FiShoppingCart className="m-1.5 text-2xl text-white" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            </button>
            {user ? (
              <div className="m-1.5 hover:bg-black rounded-full">
                <Logout />
              </div>
            ) : (
              <Link className="hover:bg-black rounded-full" to={"/login"}>
                <FiLogIn className="m-1.5 text-2xl text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
