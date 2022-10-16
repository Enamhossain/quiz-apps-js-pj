
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {



    return (
        <div>

            <nav className=" flex justify-around bg-slate-500 text-white text-xl p-5">
                <h3 className="font-bold mx-5 " href="#">Pro-Quize</h3>
                <ul className="flex  font-bold  text-xl  ">
                    <li className="mx-5"><Link to="/">Topic</Link></li>
                    <li className="mx-5"><Link to ="/statis">Statistics</Link></li>
                    <li className="mx-2"><Link to ="/blog">Blog</Link></li>
                </ul>
            </nav>



           <Header></Header>

        </div>
    )
};

export default Navbar;