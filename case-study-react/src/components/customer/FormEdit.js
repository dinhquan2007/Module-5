import {useNavigate, useParams} from "react-router-dom";
import {createCustomer, getCustomer, saveCustomer} from "../../service/customer";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getAllType} from "../../service/type_customer";
import {toast} from "react-toastify";
import * as yub from "yup";

function FormEdit() {
    const param=useParams();
    const [customer,setCustomer]=useState(null)
    const navigate=useNavigate();
    const [listType, setListType] = useState([]);



    const getCustomerById=async ()=>{
        const c= await getCustomer(param.id)
        setCustomer(c);
    }

    const handleGetList = async () => {
        try {
            const list = await getAllType();
            setListType(list);
        } catch (error) {
            console.log("Error fetching list:", error);
        }
    };
    const handleSubmit =async (data) => {
       data.type=JSON.parse(data.type)
        const res= await saveCustomer(data);
        console.log(res)
        if (res.status===200){
            navigate("/customer/list");
            toast("chỉnh sửa thành công")
        }else {
            toast("chỉnh sửa thất bại")
        }
    }
    useEffect(() => {
        handleGetList()
    }, []);
    useEffect(()=>{
     getCustomerById()
    },[param.id])
    if (customer===null){
        return null;
    }
    return (
        customer&&
        <Formik
            initialValues={{
                ...customer,
                type:JSON.stringify(customer.type)
            }}
            onSubmit={values => {
                handleSubmit(values)
            }
            }
            validationSchema={yub.object(
                {
                    name: yub.string().required("không được để trống"),
                    birth: yub.string().required("không được để trống"),
                    gender: yub.string().required("không được để trống"),
                    idCard: yub.string().required("không được để trống"),
                    phone: yub.string().required("không được để trống"),
                    email: yub.string().required("không được để trống")
                }
            )

            }
        >
            <div className="container mt-4">
                <h2>Chỉnh sửa thông tin khách hàng</h2>
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
                        <label htmlFor="email" className="form-label">Email</label>
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
export default FormEdit;