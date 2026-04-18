import "../CssFile/Navbar-External.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark px-3">
            <a href="#" className="navbar-brand">
                <img src="/brand_logo.png" alt="Logo" id="img1"/>
            </a>
            <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav mr-auto" id="alignContent">
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./skill.html">Skills</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3 dropdown-toggle" data-toggle="dropdown" href="#">Projects</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="./project1.html">Project 1</a>
                            <a className="dropdown-item" href="./project2.html">Project 2</a>
                            <a className="dropdown-item" href="./project1.html">Project 3</a>
                            <a className="dropdown-item" href="./project2.html">Project 4</a>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./team.html">Team</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./contacts.html">Contact</a></li>
                </ul>
                <form className="form-inline my-2 my-md-0">
                    <div className="input-group">
                        <input type="text" placeholder="Search" className="form-control" />
                        <div className="input-group-append">
                            <button type="button" className="btn bg-warning"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
