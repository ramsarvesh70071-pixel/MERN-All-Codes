import { useState } from "react";

function FooterSection(){

    const [data,setData] = useState(
        {
            D1: " Pure bootstrap project",
            D2: " Lorem ipsum dolor sit amet.",
            D3: " Copyright 2026 - Made By Ramsarvesh Maurya"
        }
    );

    return(
        <footer className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-white font-weight-light text-capitalize p-3">
                       {data.D1}
                    </h1>
                    <h3 className="text-light font-weight-light font-italic mb-3">
                            {data.D2}
                    </h3>
                    <div className="py-2">
                        <a href="#">
                            <i className="fab fa-google fa-2x text-primary mx-3"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook fa-2x text-warning mx-3"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter fa-2x text-info mx-3"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-youtube fa-2x text-danger mx-3"></i>
                        </a>
                    </div>
                    <p className="text-light py-4 m-0">
                            &copy;{data.D3}
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default FooterSection;
