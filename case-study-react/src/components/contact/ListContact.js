import {useEffect, useState} from "react";
import {getAllContract} from "../../service/contract";
import 'react-bootstrap'

export default function ListContact() {
    const [listContract, setListContact] = useState([]);
    // const [searchName, setSearchName] = useState("")
    const list = async () => {
        const res = await getAllContract();
        setListContact(res);
    }
    const search=()=>{

    }
    useEffect(() => {
        list()
    }, [])
    return (
        <div className="container">
            <h1>Danh sách hợp đồng</h1>
            <div className="col-12 d-flex">
                <div className="input-group float-start">
                    <a className="nav-link" href="/contract/create">
                        <button className="btn btn-primary">
                            thêm mới
                        </button>
                    </a>
                </div>
                {/*<div className="input-group float-end m-3">*/}
                {/*    <div className="form-group">*/}
                {/*        <input className="form-control" type="text"*/}
                {/*               onChange={(event) => setSearchName(event.target.value)}/>*/}
                {/*    </div>*/}
                {/*    <button className="btn btn-primary">*/}
                {/*        Tìm kiếm*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Tiền cọc trước</th>
                    <th>Tổng tiền thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {listContract.map((c, index) => (
                    <tr key={c.id}>
                        <td>{index + 1}</td>
                        <td>{c.code}</td>
                        <td>{c.dateStart}</td>
                        <td>{c.dateEnd}</td>
                        <td>{c.deposits}</td>
                        <td>{c.totalAmount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}