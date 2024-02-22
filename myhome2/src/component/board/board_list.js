import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
function Layout1() {
    return (
        <div>
            {/*화면 상단에 고정할 것 Outlet 태그에 컴포넌트 출력*/}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" href="javascript:void(0)">Link</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" href="javascript:void(0)">Link</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" href="javascript:void(0)">Link</NavLink>
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
            <Outlet/>{/*컴포넌트가 출력되는 위치*/}
            <footer>
                저작권 나한테 있음
            </footer>
        </div>
     );
}
export default Layout1;