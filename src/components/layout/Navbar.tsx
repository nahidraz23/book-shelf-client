import { NavLink } from "react-router";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div className="flex justify-between py-6 text-lg">
            <div className="font-bold">
                BookShelf
            </div>
            <div className="flex gap-10">
                <NavLink to={'/books'}>All Books</NavLink>
                <NavLink to={'/create-books'}>Add Book</NavLink>
                <NavLink to={'/borrow-summary'}>Borrow Summary</NavLink>
            </div>
            <div>
                <Button>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Navbar;