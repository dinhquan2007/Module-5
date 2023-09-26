import {useEffect, useState} from "react";
import {getAllCustomer, removeCustomer} from "../../service/customer";
import ReactModal from "react-modal";
import 'react-bootstrap'
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

function ListCustomer(){
    const [listCustomer,setListCustomer]=useState([]);
    const [post, setPost] = useState({});
    const [modal, setModal] = useState(false);
    const navigate=useNavigate();
    const list =async () => {
      const res= await getAllCustomer();
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
        console.log("okkkk")
    },[modal])

    const openModal = (post) => {
        setModal((pre) => true);
        setPost((pre) => post);
    }
    return (
        <div className="container mt-4">
            <h2>Danh sách khách hàng</h2>
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