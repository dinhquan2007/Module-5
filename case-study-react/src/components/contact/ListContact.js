import {useEffect, useState} from "react";
import {getAllContract} from "../../service/contract";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default function ListContact() {
    const [listContract, setListContact] = useState([]);
    const list = async () => {
        const res = await getAllContract();
        setListContact(res);
    }
    useEffect(() => {
        list()
    }, [])
    return (
        <div className="container">
            <h1>Danh sách hợp đồng</h1>
            <table className="table table-hover">
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Tiền cọc trước</th>
                    <th>Tổng tiền thanh toán</th>
                </tr>
                {listContract.map((c,index)=>(
                    <tr key={c.id}>
                        <td>{index+1}</td>
                        <td>{c.code}</td>
                        <td>{c.dateStart}</td>
                        <td>{c.dateEnd}</td>
                        <td>{c.deposits}</td>
                        <td>{c.totalAmount}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}