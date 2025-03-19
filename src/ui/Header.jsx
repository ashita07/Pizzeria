import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Reaxt Pizza Co.</Link>
      <SearchOrder />
      <p>jonas</p>
    </header>
  );
}

export default Header;
