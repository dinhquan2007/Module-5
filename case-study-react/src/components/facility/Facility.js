import {useEffect, useState} from "react";
import {getAllFacility} from "../../service/facility";
import {Link} from "react-router-dom";

function Facility() {
    const [listService,setListService]=useState([]);
    const list = async () => {
        const res=await getAllFacility();
        setListService(res);
    }
    useEffect(()=>{
        list()
    },[])

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>Danh sách dịch vụ</h1>
            </div>
            <div className="input-group float-start">
                <Link className="nav-link" to="/facility/create">
                    <button className="btn btn-primary">
                        thêm mới
                    </button>
                </Link>
            </div>
            <div className="row">
            {listService.map((f)=>(
                    <div className="col-4">
                        <img src="https://www.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg" className="card-img-top" alt="Card Image"/>
                        <div className="card-body">
                            <h5 className="card-title">{f.name}</h5>
                            <p className="card-text">Diện tích {f.acreage}</p>
                            <p className="card-text">Chi phí {f.rentalCost}</p>
                            <p className="card-text">người tối đa: {f.maxSlot}</p>
                            <p className="card-text">loại: {f.typeService.name}</p>
                        </div>
                    </div>
            ))}
            </div>

        </div>
    )
}

export default Facility;
