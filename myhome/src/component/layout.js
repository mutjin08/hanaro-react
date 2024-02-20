//메인 골격 디자인 파일-전체적인 윤곽을 만든다.
import { Outlet, NavLink, Link } from "react-router-dom";
function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;