import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Badge } from '@mui/material';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    function borderForDiv() {
        let x = document.getElementById("searchForm");
        x.classList.remove("border");
        x.classList.remove("border-2");
        x.style.border = "1.5px solid var(--primary)";
        document.querySelector(".searchForWeb").focus();
    }
    function borderDivOnBlur() {
        let x = document.getElementById("searchForm");
        x.classList.add("border");
        x.classList.add("border-2");
    }

    return (
        <nav className="navbar navbar-expand-lg shadow">
            <div className="container-fluid">
                {/* Left search form */}
                <div className="searchForm bg-white p-1 border border-2" id="searchForm" onClick={borderForDiv} onBlur={borderDivOnBlur}>
                    <input type="text" className='searchForWeb' placeholder='Search here...' />
                    <SearchOutlinedIcon className='bg-white pb-0 fs-3' role="button" />
                </div>


                {/* Branding */}
                <NavLink className="navbar-brand ms-auto siteBranding" to="/" style={({ isActive }) => {
                    return {
                        color: isActive ? "var(--primary)" : ""
                    }
                }}>E-Commerce</NavLink>

                <NavLink className="navbar-brand ms-auto siteBranding" to="/single-product" style={({ isActive }) => {
                    return {
                        color: isActive ? "var(--primary)" : ""
                    }
                }}>Single Product</NavLink>

                {/* Right Side */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navrightSide">

                    <li class="nav-item dropdown">
                        <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">

                        </a>

                        <div class="dropdown">
                            <span><AccountCircleOutlinedIcon className='fs-3 accountIcon' /></span>
                            <div class="dropdown-content">
                                <a href="#" >Register</a><br />
                                <a href="#" >Login</a>
                            </div>
                        </div>

                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Badge badgeContent={2} color="primary">
                                <ShoppingCartOutlined className='text-dark fs-3 cartIcon' />
                            </Badge>
                        </a>
                    </li>
                </ul>
            </div>

        </nav >

    )
}

export default Navbar