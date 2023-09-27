import {Formik, Form, Field} from "formik";
import {getAllType} from "../../service/type_customer";
import {useEffect, useState} from "react";
import {createCustomer} from "../../service/customer";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function AddCustomer() {
    const navigate=useNavigate();
    const [listType, setListType] = useState([]);
    const handleGetList = async () => {
        try {
            const list = await getAllType();
            setListType(list);
        } catch (error) {
            console.log("Error fetching list:", error);
        }
    };
    const handleSubmit =async (data) => {
        const newData = {...data, type: JSON.parse(data.type)}
           const res= await createCustomer(newData);
            if (res.status===201){
                navigate("/customer/list");
                toast("thêm mới thành công")
            }else {
                toast("thêm mới thất bại")
            }
    }
    useEffect(() => {
        handleGetList()
    }, []);
    return (
        <Formik
            initialValues={
                {
                    name: "",
                    birth: "",
                    gender: "",
                    idCard: "",
                    phone: "",
                    email: "",
                    type: {},
                    address: ""
                }
            }
            onSubmit={values => {
                handleSubmit(values)
            }
            }
        >
            <div className="container mt-4">
                <h2>Thêm mới khách hàng</h2>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên</label>
                        <Field name="name" type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birth" className="form-label">Ngày sinh</label>
                        <Field name="birth" type="date" className="form-control" id="birth"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Giới tính</label>
                        <Field name="gender" as="select" className="form-control" id="gender">
                            <option value="1">Nam</option>
                            <option value="0">Nữ</option>
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idCard" className="form-label">CCCD</label>
                        <Field name="idCard" type="text" className="form-control" id="idCard"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Điện thoại</label>
                        <Field name="phone" className="form-control" id="phone" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <Field type="text" name="email" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <Field as="select" name="type">
                            <option value="chọn loại khách hàng">Chọn loại khách hàng</option>
                            {listType.map((type, index) => (
                                    <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                                )
                            )}
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Địa chỉ</label>
                        <Field type="text" name="address" className="form-control" id="address"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu</button>
                </Form>
            </div>
        </Formik>
    );
}

export default AddCustomer;