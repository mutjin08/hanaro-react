
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Home() {
    return (  
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
        
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="image/la.jpg" alt="Los Angeles" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="image/chicago.jpg" alt="Chicago" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                <img src="image/ny.jpg" alt="New York" className="d-block w-100"/>
                </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Home;