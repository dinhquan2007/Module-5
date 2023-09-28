import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";
import {addNewContract} from "../../service/contract";
import {toast} from "react-toastify";

export default function CreateContract() {
    const navigate=useNavigate()
    const handleSubmit=async (values)=>{
        const res= await addNewContract(values)
        console.log(res.status)
        if (res.status===201){
            {toast("Thêm mới thành công")}
        }
        navigate("/contract/list")
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        code: "",
                        dateStart: "",
                        dateEnd: "",
                        deposits: "",
                        totalAmount: "",
                    }
                }
                onSubmit={values => {
                    handleSubmit(values)
                }
                }
                validationSchema={
                    Yup.object({
                            code: Yup.string().required("không được để trống"),
                            dateStart: Yup.string().required("không được để trống"),
                            dateEnd: Yup.string().required("không được để trống"),
                            deposits: Yup.string().required("không được để trống"),
                            totalAmount: Yup.string().required("không được để trống")
                        }
                    )
                }
            >
                <div className="container mt-4" style={{width: "40%", textAlign: "center"}}>
                    <div className="col-12">
                        <h2>Thêm mới hợp đồng</h2>
                    </div>
                    <div className="col-12  bg-light p-5">
                        <Form>
                            <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Mã hợp đồng<span
                                style={{color: "red"}}>*</span></span>
                                <Field name="code" type="text" className="form-control"/>
                            </div>
                            <div style={{height: "30px"}}>
                                <ErrorMessage name="code" component="span" style={{color: "red"}}/>
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Ngày bắt đầu<span
                                style={{color: "red"}}>*</span></span>
                                <Field name="dateStart" type="date" className="form-control"/>

                            </div>
                            <div style={{height: "30px"}}>
                                <ErrorMessage name="dateStart" component="span" style={{color: "red"}}/>
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Ngày kết thúc<span
                                style={{color: "red"}}>*</span></span>
                                <Field name="dateEnd" type="date" className="form-control"/>

                            </div>
                            <div style={{height: "30px"}}>
                                <ErrorMessage name="dateEnd" component="span" style={{color: "red"}}/>
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Tiền đặt cọc<span
                                style={{color: "red"}}>*</span></span>
                                <Field name="deposits" type="number" className="form-control"/>

                            </div>
                            <div style={{height: "30px"}}>
                                <ErrorMessage name="deposits" component="span" style={{color: "red"}}/>
                            </div>
                            <div className="input-group mb-3">
                            <span className="input-group-text" style={{width: "30%"}}>Tổng tiền
                                <span style={{color: "red"}}>*</span></span>
                                <Field name="totalAmount" className="form-control" type="number"/>

                            </div>
                            <div style={{height: "30px"}}>
                                <ErrorMessage name="totalAmount" component="span" style={{color: "red"}}/>
                            </div>
                            <button type="submit" className="btn btn-primary px-4 py-2 m-2">Lưu</button>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}
