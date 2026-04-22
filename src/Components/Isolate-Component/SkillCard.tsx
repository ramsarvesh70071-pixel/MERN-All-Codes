function SkillCard({item}){
    return(
        <>
            <div className="col-lg-4 col-sm-10 mx-auto mb-5" >
                            <i className={`${item.icon} fa-6x text-warning mb-3`}></i>
                            <h1 className="text-secondary">{item.title}</h1>
                            <p className="text-muted my-4">{item.desc}</p>
                            <a href="#" className="btn btn-outline-warning">Learn More</a>
                        </div>
        </>
    )
}

export default SkillCard;