import './index.scss';
import img from '../../assets/images/nft_3.png';  

const Contact = () => {
    return(
    <>
    <div className="contact">
        <h2>Contact</h2>
    <form id="contact-form"  method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <img src={img} alt="img"/>
    </div>
    </>
    );
}

export default Contact;