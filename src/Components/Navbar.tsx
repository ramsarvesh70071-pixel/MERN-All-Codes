import "../CssFile/Navbar-External.css";
import { useState } from "react";

function Navbar() {

    const [data,setData] = useState(
        {
            D1: "Home",
            D2: "Skills",
            D3: "Projects",
            D4: "Project 1",
            D5: "Project 2",
            D6: "Project 3",
            D7: "Project 4",
            D8: "Team",
            D9: "Contact"
        }
    );

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
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">{data.D1}</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./skill.html">{data.D2}</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3 dropdown-toggle" data-toggle="dropdown" href="#">{data.D3}</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="./project1.html">{data.D4}</a>
                            <a className="dropdown-item" href="./project2.html">{data.D5}</a>
                            <a className="dropdown-item" href="./project1.html">{data.D6}</a>
                            <a className="dropdown-item" href="./project2.html">{data.D7}</a>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./team.html">{data.D8}</a></li>
                    <li className="nav-item"><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="./contacts.html">{data.D9}</a></li>
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
