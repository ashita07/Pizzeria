import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";
import Username from "../features/User/Username";

function Header() {
  return (
    <header className="bg-yellow-500 border-b-2 border-stone-200 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">Fast Reaxt Pizza Co.</Link>
      <SearchOrder />
    <Username/>
    </header>
  );
}

export default Header;
