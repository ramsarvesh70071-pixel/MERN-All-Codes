function Projetcard({Card}){
    return(
        <>
             <div className="col-lg-3">
                        <img src={Card.img} className="img-thumbnail img-fluid" alt={Card.title} />
                        <h2 className="my-3 text-warning">{Card.title}</h2>
                        <p className="text-muted">{Card.desc}</p>
                    </div>
        </>
    )
}

export default Projetcard;