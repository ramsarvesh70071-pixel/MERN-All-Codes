
function TeamMember({members}){
    return(
        <>
            <div className="col-lg-4 col-md-6 col-sm-10 mb-4" >
                    <div className="card shadow-lg border-0 h-100">
                        <img src={members.img} className="card-img-top img-fluid" alt={members.name} />
                        <div className="card-body">
                            <div className="card-title text-center">
                                <h3 className="text-muted font-weight-bold">{members.name}</h3>
                            </div>
                            <div className="card-subtitle text-center mb-3">
                                <p className="text-secondary">{members.role}</p>
                            </div>
                            <div className="text-center d-flex justify-content-center">
                                <a href="#" className="mx-2"><i className="fab fa-facebook fa-2x text-primary"></i></a>
                                <a href="#" className="mx-2"><i className="fab fa-twitter fa-2x text-info"></i></a>
                                <a href="#" className="mx-2"><i className="fab fa-youtube fa-2x text-danger"></i></a>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default TeamMember;