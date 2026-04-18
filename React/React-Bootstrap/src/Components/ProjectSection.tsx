import { Projects } from "../External-Data/ProjectData";


// const Projects = ["Projects",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Learn More",
//     "Projects One",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Projects Two",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Projects Three",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     "Projects Four",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit."
// ];


function ProjectSection() {
    return (
        <section className="p-5">
            {/* <!--Project Section-->  */}

             <div className="row">
                 <div className="col-lg-12 text-center mb-3">
                     <h1 className="text-primary font-weight-bold display-3">{Projects[0]}</h1>
                     <p className="lead text-secondary">{Projects[1]} </p>
                     <a href="">{Projects[2]}</a>
                 </div>
            </div>
             <div className="row text-center">
                 <div className="col-lg-3">
                     <img src="./image4.png" className="img-thumbnail"/>
                     <h2 className="my-3 text-warning">{Projects[3]}</h2>
                     <p className="text-muted">{Projects[4]}</p>
                 </div>
                 <div className="col-lg-3">
                     <img src="./image2.jpg" className="img-thumbnail img-fluid" alt="Responsive image"/>
                     <h2 className="my-3 text-warning">{Projects[5]}</h2>
                     <p className="text-muted">{Projects[6]}</p>
                 </div>
                 <div className="col-lg-3">
                     <img src="./image 1.png" className="img-thumbnail"/>
                     <h2 className="my-3 text-warning">{Projects[7]}</h2>
                     <p className="text-muted">{Projects[8]}</p>
                 </div>
                 <div className="col-lg-3">
                     <img src="./image3.png" className="img-thumbnail"/>
                     <h2 className="my-3 text-warning">{Projects[9]}</h2>
                     <p className="text-muted">{Projects[10]}</p>
                 </div>
             
             </div>
         </section >
    );
}

export default ProjectSection; 