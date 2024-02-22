import { Outlet } from "react-router-dom";

//ffc
function Layout1() {
    return (
        <div>
            {/*화면 상단에 고정할 것 Outlet 태그에 컴포넌트 출력*/}
            <nav>
                <ul><li>메뉴1</li></ul>
            </nav>

            <Outlet/>{/*컴포넌트가 출력되는 위치*/}

            <footer>
                저작권 나한테 있음
            </footer>
        </div>
    );
}
export default Layout1;