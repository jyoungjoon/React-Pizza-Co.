import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";
function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 font-pizza uppercase sm:px-6">
      <Link to="/" className="tracking-[0.25rem]">
        Youngs React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
