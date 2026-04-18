function FooterSection(){
    return(
        <footer className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-white font-weight-light text-capitalize p-3">
                        Pure bootstrap project
                    </h1>
                    <h3 className="text-light font-weight-light font-italic mb-3">
                        Lorem ipsum dolor sit amet.
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
                        &copy;Copyright 2026 - Made By Ramsarvesh Maurya
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
} 

export default FooterSection;
