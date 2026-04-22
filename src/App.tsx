import Navbar from "./Components/Navbar"
import BannerSection from "./Components/BannerSection"
import SkillSection from "./Components/SkillSection"
import ProjectSection from "./Components/ProjectSection"
import TeamSection from "./Components/TeamSection"
import ProgressSection from "./Components/ProgressSection"
import ContactSection from "./Components/ContactSection"
import FooterSection from "./Components/FooterSection"
 
//Data 

// import { Projects } from "./External-Data/ProjectData"
// import { data1,data2,data3,data4,data5,data6 } from "./External-Data/BannerData"
// import { progressData } from "./External-Data/ProgressData"
// import { object } from "./External-Data/SkillData"
// import { Team } from "./External-Data/TeamData"


// function App() {

//   return (
//     <>
//       <Navbar/>
//       <BannerSection D1={data1} D2={data2} D3={data3} D4={data4} D5={data5} D6={ data6} />
//       <SkillSection obj = {object}/>
//       <ProjectSection projectData = {Projects}/>
//       <TeamSection myTeam = {Team}/>
//       <ProgressSection progressData={progressData}/>
//       <ContactSection/>
//       <FooterSection/>

//     </>
//   )
// }


function App() {

  return (
    <>
      <Navbar />
      <BannerSection/>
      <SkillSection/>
      <ProjectSection />
      <TeamSection/>
      <ProgressSection/>
      <ContactSection />
      <FooterSection />

    </>
  )
}

export default App
