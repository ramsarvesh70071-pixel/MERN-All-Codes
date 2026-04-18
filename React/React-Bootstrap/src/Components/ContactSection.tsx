import styled from "styled-components";

function ContactSection(){

    //Using Styled Component CSS
    
    const Button = styled.button`
        color: white;                              
        background-color: green;
    `


    return(
        <section className="p-5 bg-light">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary font-weight-bold display-3">Contact Us</h1>
                     <p className="lead text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod officiis harum exercitationem placeat veniam ullam tenetur neque voluptatem esse,</p>

                 </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="text-center text-secondary">
                    <h2>Got Question</h2>
                    <p>Stay Connected</p>
                </div>
                <form className="text-muted">
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" id="fname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" className="form-control" id="lname"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="msg" rows={3}></textarea>
                    </div>

                    <Button className=" btn-block" id="btnSubmit" type="submit">Submit Question</Button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default ContactSection;
