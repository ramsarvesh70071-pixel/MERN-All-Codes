import { Team } from "../External-Data/TeamData";

// const Team = [

// {    team:["Our Team","Meet the experts behind our digital success.","Learn More"],

//     team1 :[
//         "Ramsarvesh Maurya","King of digital world.","./img1.jpeg"
//     ],

//     team2 :[
//         "Ramsarvesh Maurya",
//         "King of digital world.",
//         "./img2.jpeg"
//     ],

//     team3 :[
//         "Ramsarvesh Maurya",
//         "King of digital world.",
//         "./img3.jpeg"
//     ]
// }
// ];


function TeamSection() {
    return (
        <section className="p-5 p-sm-5 bg-secondary">
            <div className="container-fluid">
                
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-primary font-weight-bold display-4 display-md-3">{Team[0].team[0]}</h1>
                        <p className="lead text-light">{Team[0].team[1]}</p>
                        <a href="#" className="text-warning font-weight-bold">{Team[0].team[2]}</a>
                    </div>
                </div>


                
                <div className="row justify-content-center">
                    
                    <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                        <div className="card shadow-lg border-0 h-100">
                            <img src={Team[0].team1[2]} className="card-img-top img-fluid" alt="Team Member" />
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h3 className="text-muted font-weight-bold">{Team[0].team1[0]}</h3>
                                </div>
                                <div className="card-subtitle text-center mb-3">
                                    <p className="text-secondary">{Team[0].team1[1]}</p>
                                </div>
                                <div className="text-center d-flex justify-content-center">
                                    <a href="#" className="mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-youtube fa-2x text-danger"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                        <div className="card shadow-lg border-0 h-100">
                            <img src={Team[0].team2[2]}className="card-img-top img-fluid" alt="Team Member" />
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h3 className="text-muted font-weight-bold">{Team[0].team2[0]}</h3>
                                </div>
                                <div className="card-subtitle text-center mb-3">
                                    <p className="text-secondary">{Team[0].team2[1]}</p>
                                </div>
                                <div className="text-center d-flex justify-content-center">
                                    <a href="#" className="mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-youtube fa-2x text-danger"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                        <div className="card shadow-lg border-0 h-100">
                            <img src={Team[0].team3[2]}className="card-img-top img-fluid" alt="Team Member" />
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h3 className="text-muted font-weight-bold">{Team[0].team3[0]}</h3>
                                </div>
                                <div className="card-subtitle text-center mb-3">
                                    <p className="text-secondary">{Team[0].team3[1]}</p>
                                </div>
                                <div className="text-center d-flex justify-content-center">
                                    <a href="#" className="mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-youtube fa-2x text-danger"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
                        <div className="card shadow-lg border-0 h-100">
                            <img src={Team[0].team3[2]} className="card-img-top img-fluid" alt="Team Member" />
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h3 className="text-muted font-weight-bold">{Team[0].team3[0]}</h3>
                                </div>
                                <div className="card-subtitle text-center mb-3">
                                    <p className="text-secondary">{Team[0].team3[1]}</p>
                                </div>
                                <div className="text-center d-flex justify-content-center">
                                    <a href="#" className="mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
                                    <a href="#" className="mx-2"><i className="fab fa-youtube fa-2x text-danger"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TeamSection; 
