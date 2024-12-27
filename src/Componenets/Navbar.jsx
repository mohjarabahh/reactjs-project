import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Company name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="features">Features</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="enterprise">Enterprise</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="support">Support</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/">Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
