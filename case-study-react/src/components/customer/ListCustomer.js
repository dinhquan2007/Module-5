import {useEffect, useState} from "react";
import {getAllCustomer, getCustomerForName, removeCustomer} from "../../service/customer";
import ReactModal from "react-modal";
import 'react-bootstrap'
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

function ListCustomer(){
    const [listCustomer,setListCustomer]=useState([]);
    const [post, setPost] = useState({});
    const [modal, setModal] = useState(false);
    const [searchName, setSearchName] = useState("");
    const list =async () => {
      // const res= await getAllCustomer();
        const res =await getCustomerForName(searchName,0,4);
        console.log(res)
      setListCustomer(res);
    }
    const deletePost =async (post) => {
    const res=await removeCustomer(post.id);
    if (res.status===200){
        setModal(false)
        {toast("xóa thành công")}
        // navigate("/customer/list")
    }
    }
    useEffect(()=>{
        list()
    },[modal,searchName])

    const openModal = (post) => {
        setModal((pre) => true);
        setPost((pre) => post);
    }
    return (
        <div className="container mt-4">
            <h2>Danh sách khách hàng</h2>
            <div className="col-12 d-flex justify-content-around">
                <div className="float-start">
                    <a className="nav-link" href="/customer/create">
                        <button className="btn btn-primary">
                        thêm mới
                    </button></a>
                </div>
                <div className="float-end">
                    <input  className="rounded-3" type="text" onChange={(event)=>setSearchName(event.target.value)}/>
                    <button className="btn btn-primary">tìm kiếm</button>
                </div>

            </div>
            <div style={{minHeight:600}}>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>CCCD</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Loại</th>
                        <th>Địa chỉ</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listCustomer.map((c,index)=>(
                            <tr key={c.id}>
                                <td>{index+1}</td>
                                <td>{c.name}</td>
                                <td>{c.birth}</td>
                                <td>{c.gender===1?'Nam':'Nữ'}</td>
                                <td>{c.idCard}</td>
                                <td>{c.phone}</td>
                                <td>{c.email}</td>
                                <td>{c.type.name}</td>
                                <td>{c.address}</td>
                                <td>
                                    <Link className="btn btn-primary m-1" to={`/customer/edit/${c.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger m-1" onClick={() => openModal(c)}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>

            <ReactModal isOpen={modal}>
                <p>Do you sur to delele {post.name}</p>
                <button className="btn btn-danger" onClick={() => deletePost(post)}>Yes</button>
                <button onClick={()=>setModal((pre)=>false)}>No</button>
            </ReactModal>
        </div>

    );
}
export default ListCustomer;