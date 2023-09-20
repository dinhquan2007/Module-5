import "bootstrap";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-opacity-75">
                <div className="container">
                    <a className="navbar-brand" href="#">FURUMA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#">Facility</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#">Customer</a>
                            </li>
                            {/* Add more navigation items here */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;