import styled from "styled-components";
import { useState } from "react";

function ContactSection(){

    //Using Styled Component CSS
    
    const Button = styled.button`
        color: white;                              
        background-color: green;
    `
    const [data,setData] = useState(
        {
            D1: "Contact Us",
            D2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis harum exercitationem placeat veniam ullam tenetur neque voluptatem esse,",
            D3: "Got Question",
            D4: "Stay Connected",
            D5: "First Name",
            D6: "Last Name",
            D7: "Email",
            D8: "Message",
            D9: "Submit Question",
        }
    );

    return(
        <section className="p-5 bg-light">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">{data.D1}</h1>
                        <p className="lead text-secondary">{data.D2}</p>

                 </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="text-center text-secondary">
                        <h2>{data.D3}</h2>
                        <p>{data.D4}</p>
                </div>
                <form className="text-muted">
                    <div className="form-group">
                            <label htmlFor="name">{data.D5}</label>
                        <input type="text" className="form-control" id="fname"/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="name">{data.D6}</label>
                        <input type="text" className="form-control" id="lname"/>
                    </div>

                    <div className="form-group">
                            <label htmlFor="email">{data.D7}</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>

                    <div className="form-group">
                            <label htmlFor="message">{data.D8}</label>
                        <textarea className="form-control" id="msg" rows={3}></textarea>
                    </div>

                        <Button className=" btn-block" id="btnSubmit" type="submit">{data.D9}</Button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default ContactSection;
