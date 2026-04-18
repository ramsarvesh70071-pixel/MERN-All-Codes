
import { progressData } from "../External-Data/ProgressData";


// const progressData={
//     data1: 'Progress',
//     data2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quos impedit perspiciatis quidem facere commodi vitae quam, minus aut?',
//     data3: 'Learn More',
//     data4: 'HTML',
//     data5: '50%',
//     data6: 'CSS',
//     data7: '70%',
//     data8: "Javascript",
//     data9: '90%',
//     data10: 'Bootstrap',
//     data11: '95%'

// };


function ProgressSection(){


const htmlWidth = {
    width: '50%'
}

const cssWidth = {
    width: '70%'
}                                  // CSS (using JavaScript Object)

const JSWidth = {
    width: '90%'
}

const bootstrapWidth = {
    width: '95%'
}



    return(
        <section className="p-5">
        <div className="container-fluid">
             <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">{progressData.data1}</h1>
                    <p className="lead text-secondary">{progressData.data2} </p>
                    <a href="">{progressData.data3}</a>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 text-secondary">
                    <h2>{progressData.data4}</h2>
                <div className="progress bg-secondary mb-3 ">
                            <div className="progress-bar" style={htmlWidth}>
                    {progressData.data5}
                    </div>
                </div>

                    <h2>{progressData.data6}</h2>
                <div className="progress bg-secondary mb-3 ">
                            <div className="progress-bar bg-danger" style={cssWidth}>
                    {progressData.data7}
                    </div>
                </div>

                 <h2>{progressData.data8}</h2>
                <div className="progress bg-secondary mb-3 ">
                            <div className="progress-bar" style={JSWidth}>
                    {progressData.data9}
                    </div>
                </div>

                    <h2>{progressData.data10}</h2>
                <div className="progress bg-secondary mb-3 ">
                            <div className="progress-bar bg-success" style={bootstrapWidth}>
                    {progressData.data11}
                    </div>
                </div>

            </div>
            </div>
        </div>
    </section>
    )
}

export default ProgressSection; 