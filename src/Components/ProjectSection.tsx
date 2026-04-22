// // import { Projects } from "../External-Data/ProjectData";

// import { useState } from "react";


// // const Projects = ["Projects",
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     "Learn More",
// //     "Projects One",
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     "Projects Two",
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     "Projects Three",
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     "Projects Four",
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit."
// // ];


// function ProjectSection() {

//     const [projectData,setProjectData] = useState(
//         [  
//             "Projects",
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             "Learn More",
//             "Projects One",
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             "Projects Two",
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             "Projects Three",
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             "Projects Four",
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit."
//         ]
//     );

//     return (
//         <>
//         <section className="p-5">
//             {/* <!--Project Section-->  */}

//              <div className="row">
//                  <div className="col-lg-12 text-center mb-3">
//                      <h1 className="text-primary font-weight-bold display-3">{projectData[0]}</h1>
//                     <p className="lead text-secondary">{projectData[1]} </p>
//                     <a href="">{projectData[2]}</a>
//                  </div>
//             </div>
//              <div className="row text-center">
//                  <div className="col-lg-3">
//                      <img src="./image4.png" className="img-thumbnail"/>
//                     <h2 className="my-3 text-warning">{projectData[3]}</h2>
//                     <p className="text-muted">{projectData[4]}</p>
//                  </div>
//                  <div className="col-lg-3">
//                      <img src="./image2.jpg" className="img-thumbnail img-fluid" alt="Responsive image"/>
//                     <h2 className="my-3 text-warning">{projectData[5]}</h2>
//                     <p className="text-muted">{projectData[6]}</p>
//                  </div>
//                  <div className="col-lg-3">
//                      <img src="./image 1.png" className="img-thumbnail"/>
//                     <h2 className="my-3 text-warning">{projectData[7]}</h2>
//                     <p className="text-muted">{projectData[8]}</p>
//                  </div>
//                  <div className="col-lg-3">
//                      <img src="./image3.png" className="img-thumbnail"/>
//                     <h2 className="my-3 text-warning">{projectData[9]}</h2>
//                     <p className="text-muted">{projectData[10]}</p>
//                  </div>
             
//              </div>
//          </section >
//         </>
//     );
// }

// export default ProjectSection; 


// =========================================================================================



import { useState } from "react";
import Projetcard from "./Isolate-Component/ProjectCard";

function ProjectSection() {
    // Header 
    const header = {
        title: "Projects",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "Learn More"
    };

    const [projects, setProjects] = useState([
        { title: "Projects One", desc: "Lorem ipsum dolor sit amet consectetur...", img: "./image4.png" },
        { title: "Projects Two", desc: "Lorem ipsum dolor sit amet consectetur...", img: "./image2.jpg" },
        { title: "Projects Three", desc: "Lorem ipsum dolor sit amet consectetur...", img: "./image 1.png" },
        { title: "Projects Four", desc: "Lorem ipsum dolor sit amet consectetur...", img: "./image3.png" }
    ]);

    return (
        <section className="p-5">

            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">{header.title}</h1>
                    <p className="lead text-secondary">{header.desc}</p>
                    <a href="#">{header.link}</a>
                </div>
            </div>
           
            <div className="row text-center">
                {projects.map((item) => (
                    <Projetcard Card = {item}/>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;