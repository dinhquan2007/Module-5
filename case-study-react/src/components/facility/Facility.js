import {useState} from "react";

function Facility() {
    const [service,setService]=useState();
    const list = async () => {

    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>Danh sách dịch vụ</h1>
            </div>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card Image"/>
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility;
