import { Outlet, NavLink } from "react-router-dom";

function Layout() {
    let activestyle={
        color : "darkgreen",
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeStyle={activestyle} to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activestyle} to="/hero/list" className="nav-link">영웅들</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
