import {Formik, Form, Field, ErrorMessage} from "formik";
import {getAllType} from "../../service/type_customer";
import {useEffect, useState} from "react";
import {createCustomer} from "../../service/customer";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import * as yub from 'yup'

function AddCustomer() {
    const navigate = useNavigate();
    const [listType, setListType] = useState([]);
    const handleGetList = async () => {
        try {
            const list = await getAllType();
            setListType(list);
        } catch (error) {
            console.log("Error fetching list:", error);
        }
    };
    const handleSubmit = async (data) => {
        const newData = {
            ...data,
            type: JSON.parse(data.type)}
        const res = await createCustomer(newData);
        if (res.status === 201) {

            toast("thêm mới thành công")
        } else {
            toast("thêm mới thất bại")
        }
        navigate("/customer/list");
    }
    const validate = yub.object(
        {
            name: yub.string().required("không được để trống")
                .matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*$/, "sai định dạng"),
            birth: yub.string().required("không được để trống"),
            gender: yub.string().required("không được để trống"),
            idCard: yub.string().required("không được để trống")
                .matches(/^[0-9]{12}$/, "căn cước phải 12 số"),
            phone: yub.string().required("không được để trống")
                .matches(/^0[0-9]{9}$/, "nhập đúng định dạng"),
            email: yub.string().required("không được để trống")
                .matches(/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/, "vui lòng nhập đúng định dạng"),
            type: yub.string().required("không được để trống"),
            address: yub.string().required("không được để trống")
        })
    useEffect(() => {
        handleGetList()
    }, []);
    return (

        <Formik
            initialValues={
                {
                    name: "",
                    birth: "",
                    gender: "true",
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
            validationSchema={validate}
        >
            <div className="container mt-4" style={{width: "40%",textAlign:"center"}}>
                <div className="col-12">
                    <h2>Thêm mới khách hàng</h2>
                </div>
                <div className="col-12  bg-light p-5" >
                    <Form>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Tên <span
                                style={{color: "red"}}>*</span></span>
                            <Field name="name" type="text" className="form-control" id="name"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Ngày sinh <span
                                style={{color: "red"}}>*</span></span>
                            <Field name="birth" type="date" className="form-control" id="birth"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="birth" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Giới tính <span
                                style={{color: "red"}}>*</span></span>
                            <Field name="gender" as="select" className="form-control" id="gender">
                                <option value="true">Nam</option>
                                <option value="false">Nữ</option>
                            </Field>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="gender" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>CCCD <span
                                style={{color: "red"}}>*</span></span>
                            <Field name="idCard" type="text" className="form-control" id="idCard"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="idCard" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Số điện thoại <span
                                style={{color: "red"}}>*</span></span>
                            <Field name="phone" className="form-control" id="phone" type="text"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Email <span
                                style={{color: "red"}}>*</span></span>
                            <Field type="text" name="email" className="form-control" id="email"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Loại khách<span
                                style={{color: "red"}}>*</span></span>
                            <Field as="select" className="custom-select border-1" name="type">
                                <option value="chọn loại khách hàng">Chọn loại khách hàng</option>
                                {listType.map((type, index) => (
                                        <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                                    )
                                )}
                            </Field>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="type" component="span"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Địa chỉ <span
                                style={{color: "red"}}>*</span></span>
                            <Field type="text" name="address" className="form-control" id="address"/>

                        </div>
                        <div style={{height:"30px"}}>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}/>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 py-2 m-2">Lưu</button>
                    </Form>
                </div>

            </div>
        </Formik>
    );
}

export default AddCustomer;