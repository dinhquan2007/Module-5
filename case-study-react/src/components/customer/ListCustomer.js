import {useEffect, useState} from "react";
import {getCustomerForName, removeCustomer} from "../../service/customer";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListCustomer() {
    const [listCustomer, setListCustomer] = useState([]);
    const [customer, setCustomer] = useState({});
    const [show, setShow] = useState(false);
    const [searchName, setSearchName] = useState("");
    const [page,setPage]=useState(0)
    const handleOnClick = (data) => {
        setCustomer(data);
        setShow(true);
    }

    const list = async () => {
        // const res= await getAllCustomer();
        const res = await getCustomerForName(searchName, page, 4);
        console.log(res)
        setListCustomer(res);
    }
    const deletePost = async (customer) => {
        const res = await removeCustomer(customer.id);
        setShow(false)
        //tắt modal
        if (res.status === 204) {
            toast("xóa thành công")
            // navigate("/customer/list")
        }
    }
    useEffect(() => {
        list()
    }, [show, searchName])
    return (
        listCustomer && <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <h2>Danh sách khách hàng</h2>
            </div>
            <div className="col-12 d-flex">
                <div className="input-group float-start">
                    <a className="nav-link" href="/customer/create">
                        <button className="btn btn-primary">
                            Thêm mới
                        </button>
                    </a>
                </div>
                <div className="input-group float-end m-3">
                    <div className="form-group">
                        <input className="form-control" type="text"
                               onChange={(event) => setSearchName(event.target.value)}/>
                    </div>
                    <button className="btn btn-primary">
                        Tìm kiếm
                    </button>
                </div>
            </div>
            <div style={{minHeight: 600}}>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Mã khách hàng</th>
                        <th>Giới tính</th>
                        <th>CCCD</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Loại</th>
                        <th>Địa chỉ</th>
                        <th colSpan={2}>Chức Năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listCustomer.map((c, index) => (
                        <tr key={c.id}>
                            <td>{index + 1}</td>
                            <td>{c.name}</td>
                            <td>{c.birth}</td>
                            <td>{c.gender === 1 ? 'Nam' : 'Nữ'}</td>
                            <td>{c.idCard}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            <td>{c.type.name}</td>
                            <td>{c.address}</td>
                            <td>
                                <Link className="btn btn-primary m-1" to={`/customer/edit/${c.id}`}>Sửa</Link>
                            </td>
                            <td>
                                <a>
                                    <Button variant="btn btn-danger m-1" onClick={()=>handleOnClick(c)}>
                                       Xóa
                                    </Button>
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal
                    show={show}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       Bạn có muốn xóa khách hàng: {customer.name} ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                          Hủy
                        </Button>
                        <Button variant="primary" onClick={()=>deletePost(customer)}>Xóa</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    );
}
export default ListCustomer;