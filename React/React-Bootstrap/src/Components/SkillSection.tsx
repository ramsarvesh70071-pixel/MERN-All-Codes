function SkillSection(){
    return(
        <section className="bg-light p-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">Skills</h1>
                    <p className="lead text-secondary">I specialize in building modern, responsive, and user-friendly web applications using the latest technologies. Here’s
                    what I bring to the table. </p>
                    <a href="">Learn More</a>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-desktop fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">development</h1>
                    <p className="text-muted my-4">Building robust back-end systems with JavaScript  and creating dynamic web interfaces. Experienced in handling databases and
                    server-side logic.</p>
                    <a href="#" className="btn btn-outline-warning">Learn More</a>
                </div>

                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-edit fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">Design
                    </h1>
                    <p className="text-muted my-4">Crafting beautiful UI/UX layouts using Bootstrap and CSS. Focusing on mobile-first design to ensure websites look great
                    on all devices.</p>
                    <a href="#" className="btn btn-outline-warning">Learn More</a>
                </div>

                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-cogs fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">Creativity</h1>
                    <p className="text-muted my-4">Turning complex problems into simple, elegant solutions. I love experimenting with new animations and interactive web
                    elements.</p>
                    <a href="#" className="btn btn-outline-warning">Learn More</a>
                
                </div>
            </div>
        </div>

    </section>
    )
}

export default SkillSection;


/**import { object } from "../External-Data/SkillData";


// const object = {
//     obj1: `Skills`,
//     obj2:`I specialize in building modern, responsive,   and user-friendly web applications using the latest technologies. Here’s what I bring to the table.`,
//     obj3:`Learn More`,
//     obj4:`development`,
//     obj5:`Building robust back-end systems with JavaScript  and creating dynamic web interfaces. Experienced in handling databases and
//                     server-side logic.`,
//     obj6: `Learn More`,      
//     obj7: `Design`,
//     obj8: `Crafting beautiful UI/UX layouts using Bootstrap and CSS. Focusing on mobile-first design to ensure websites look great
//                     on all devices.`,
//     obj9: `Learn More`,
//     obj10: `Creativity`,
//     obj11: `Turning complex problems into simple, elegant solutions. I love experimenting with new animations and interactive web
//                     elements.`,
//     obj12: `Learn More`

// }


function SkillSection(){
    return(
        <section className="bg-light p-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">{object.obj1}</h1>
                    <p className="lead text-secondary">{object.obj2} </p>
                    <a href="">{object.obj3} </a>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-desktop fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">{object.obj4}</h1>
                    <p className="text-muted my-4">{object.obj5}</p>
                    <a href="#" className="btn btn-outline-warning">{object.obj6}</a>
                </div>

                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-edit fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">{object.obj7}
                    </h1>
                    <p className="text-muted my-4">{object.obj8}</p>
                    <a href="#" className="btn btn-outline-warning">{object.obj9}</a>
                </div>

                <div className="col-lg-4 col-sm-10 max-auto mb-5">
                    <i className="fas fa-cogs fa-6x text-warning mb-3"></i>
                    <h1 className="text-secondary">{object.obj10}</h1>
                    <p className="text-muted my-4">{object.obj11}</p>
                    <a href="#" className="btn btn-outline-warning">{object.obj12}</a>
                
                </div>
            </div>

        </div>

    </section>
    )
}

export default SkillSection; */