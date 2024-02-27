import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavLink } from "react-router-dom";
function Layout1() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/board/list">Board</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="javascript:void(0)">Link</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <footer></footer>
        </div>
    );
}

export default Layout1;