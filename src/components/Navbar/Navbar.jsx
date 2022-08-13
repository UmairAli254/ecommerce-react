import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import "./Navbar.css";

const Navbar = () => {

    function borderForDiv() {
        let x = document.getElementById("searchForm");
        x.classList.remove("border");
        x.classList.remove("border-2");
        x.style.border = "2px solid var(--primary)";
    }
    
    return (
        <nav className="navbar navbar-expand-lg shadow">
            <div className="container-fluid">
                {/* Left search form */}
                <div className="searchForm bg-white p-1 rounded border border-2" id="searchForm" onClick={borderForDiv}>
                    <input type="text" className='searchForWeb' />
                    <SearchOutlinedIcon className='bg-white pb-0 fs-3' role="button" />
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Branding */}
                    <a className="navbar-brand ms-auto" href="#">E-Commerce</a>

                    {/* Right Side */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Register</a>
                        </li>
                        <li className="nav-item pe-3">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Badge badgeContent={2} color="primary">
                                    <ShoppingCartOutlined className='text-dark' />
                                </Badge>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar