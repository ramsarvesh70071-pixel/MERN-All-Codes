
// import { object } from "../External-Data/SkillData";
// import { useState } from "react";


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


// import { useState } from "react";

// function SkillSection(){

//     const [object,obj] = useState(
//         {
//             obj1: `Skills`,
//             obj2: `I specialize in building modern, responsive,   and user-friendly web applications using the latest technologies. Here’s what I bring to the table.`,
//             obj3: `Learn More`,
//             obj4: `development`,
//             obj5: `Building robust back-end systems with JavaScript  and creating dynamic web interfaces. Experienced in handling databases and
//                                 server-side logic.`,
//             obj6: `Learn More`,
//             obj7: `Design`,
//             obj8: `Crafting beautiful UI/UX layouts using Bootstrap and CSS. Focusing on mobile-first design to ensure websites look great
//                                 on all devices.`,
//             obj9: `Learn More`,
//             obj10: `Creativity`,
//             obj11: `Turning complex problems into simple, elegant solutions. I love experimenting with new animations and interactive web
//                                 elements.`,
//             obj12: `Learn More`

//         }
//     );

//     return(
//         <section className="bg-light p-5">
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-lg-12 text-center mb-3">
//                     <h1 className="text-primary font-weight-bold display-3">{object.obj1}</h1>
//                     <p className="lead text-secondary">{object.obj2} </p>
//                     <a href="">{object.obj3} </a>
//                 </div>
//             </div>

//             <div className="row text-center">
//                 <div className="col-lg-4 col-sm-10 max-auto mb-5">
//                     <i className="fas fa-desktop fa-6x text-warning mb-3"></i>
//                     <h1 className="text-secondary">{object.obj4}</h1>
//                     <p className="text-muted my-4">{object.obj5}</p>
//                     <a href="#" className="btn btn-outline-warning">{object.obj6}</a>
//                 </div>

//                 <div className="col-lg-4 col-sm-10 max-auto mb-5">
//                     <i className="fas fa-edit fa-6x text-warning mb-3"></i>
//                     <h1 className="text-secondary">{object.obj7}
//                     </h1>
//                     <p className="text-muted my-4">{object.obj8}</p>
//                     <a href="#" className="btn btn-outline-warning">{object.obj9}</a>
//                 </div>

//                 <div className="col-lg-4 col-sm-10 max-auto mb-5">
//                     <i className="fas fa-cogs fa-6x text-warning mb-3"></i>
//                     <h1 className="text-secondary">{object.obj10}</h1>
//                     <p className="text-muted my-4">{object.obj11}</p>
//                     <a href="#" className="btn btn-outline-warning">{object.obj12}</a>
                
//                 </div>
//             </div>

//         </div>

//     </section>
//     )
// }

// export default SkillSection; 




import { useState } from "react";
import SkillCard from "./Isolate-Component/SkillCard";

function SkillSection() {

    // Header Data
    const headerData = {
        title: "Skills",
        subtitle: "I specialize in building modern, responsive, and user-friendly web applications using the latest technologies. Here’s what I bring to the table.",
        mainLink: "Learn More"
    };

    // Skills 
    const [skills, setSkills] = useState(
        [
            {
                id: 1,
                icon: "fas fa-desktop",
                title: "Development",
                desc: "Building robust back-end systems with JavaScript and creating dynamic web interfaces. Experienced in handling databases and server-side logic.",
                
            },
            {
                id: 2,
                icon: "fas fa-edit",
                title: "Design",
                desc: "Crafting beautiful UI/UX layouts using Bootstrap and CSS. Focusing on mobile-first design to ensure websites look great on all devices.",
                
            },
            {
                id: 3,
                icon: "fas fa-cogs",
                title: "Creativity",
                desc: "Turning complex problems into simple, elegant solutions. I love experimenting with new animations and interactive web elements.",
                
            }
        ]);

    return (
        <section className="bg-light p-5">
            <div className="container-fluid">

                {/* Header Section */}
                <div className="row">
                    <div className="col-lg-12 text-center mb-3">
                        <h1 className="text-primary font-weight-bold display-3">{headerData.title}</h1>
                        <p className="lead text-secondary">{headerData.subtitle}</p>
                        <a href="#">{headerData.mainLink}</a>
                    </div>
                </div>

                {/* Skills */}
                <div className="row text-center">
                    {skills.map((item) => (

                        <SkillCard item = {item}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;