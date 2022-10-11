
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Navbar = () => {



    return (
        <div>

            <nav className=" flex justify-around bg-slate-500 text-white text-xl p-5">
                <a className="font-bold mx-5 " href="#">Pro-Quize</a>
                <ul className="flex  font-bold  text-xl  ">
                    <li className="mx-5"><Link to="/topic">Topic</Link></li>
                    <li className="mx-5"><Link to ="/statis">Statistics</Link></li>
                    <li className="mx-2"><Link to ="/blog">Blog</Link></li>
                </ul>
            </nav>



            <Header></Header>

        </div>
    )
};

export default Navbar;