import styles from "../CssFile/Banner.module.css";
import { data1, data2, data3, data4, data5, data6 } from "../External-Data/BannerData";

// const data1 = `pure bootstrap`;
// const data2 = `website`;
// const data3 = `This Website is developed by`;
// const data4 = `Ramsarvesh Maurya`;
// const data5 = `Press Here...`;
// const data6 = `Press Here...`;

function Banner() {
    return (
        <section>
            <div className="container-fluid">
                 <div className= {`row bg-info justify-content-center align-items-center text-center ${styles.BannerStyle}`}>
                    <div className="col-sm-10">
                        <h1 className="display-3 display-md-2 text-capitalize">
                            <span className="text-warning font-weight-bold">{data1}</span>
                            <span className="text-white font-weight-bold"> {data2}</span>
                        </h1>
                        <h2 className="font-weight-light font-italic text-light">
                            <span>{data3}</span> 
                            <span className={styles.textStyle}> {data4}.</span>
                        </h2>
                        <div className="mt-4">
                            <a className="btn btn-warning btn-lg px-4 m-2" href="#">{data5}</a>
                            <a className="btn btn-danger btn-lg px-4 m-2" href="#">{data6}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner; 