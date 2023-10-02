import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {useEffect, useState} from "react";
import {getAllTypeService} from "../../service/typeServicce";
import {deselectOptions} from "@testing-library/user-event/dist/select-options";
import {addFacility} from "../../service/facility";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


export default function CreateFacility() {
    const [typeService, setTypeService] = useState([]);
    const navigate=useNavigate()
    const listType = async () => {
        const res = await getAllTypeService()
        setTypeService(res)
    }
    const handleSubmit=async (values)=>{
        const newData={
            ...values,
            typeService:JSON.parse(values.typeService)
        }
        const res=await addFacility(newData)
        if (res.status===201){
            {toast("thêm mới dịch vụ thành công")}
            navigate("/facility/list")
        }
    }
    useEffect(() => {
        listType()
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    acreage: "",
                    rentalCost: "",
                    maxSlot: "",
                    rentalType: "",
                    typeService: {}
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                // validationSchema={Yup.object({
                //     // name:Yup.string().required("không được để trống"),
                //
                // })}
            >
                <div className="d-flex justify-content-center m-5">
                <Form style={{width:"50%"}}>
                    <div>
                        <h1>Thêm mới dịch vụ</h1>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text"  style={{width: "30%"}}>Tên <span style={{color:"red"}}>*</span></span>
                        <Field name="name" type="text" className="form-control"/>
                    </div>
                    <div style={{height: "30px"}}>
                        <ErrorMessage name="name" component={"span"} style={{color: "red"}}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text"  style={{width: "30%"}}>Diện tích <span style={{color:"red"}}>*</span></span>
                        <Field name="acreage" type="text" className="form-control"/>
                    </div>
                    <div style={{height: "30px"}}>
                        <ErrorMessage name="acreage" component={"span"} style={{color: "red"}}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text"  style={{width: "30%"}}>Chi phí <span style={{color:"red"}}>*</span></span>
                        <Field name="rentalCost" type="text" className="form-control"/>
                    </div>
                    <div style={{height: "30px"}}>
                        <ErrorMessage name="rentalCost" component={"span"} style={{color: "red"}}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text" style={{width: "30%"}}>Người tối đa <span style={{color:"red"}}>*</span></span>
                        <Field name="maxSlot" type="text" className="form-control"/>
                    </div>
                    <div style={{height: "30px"}}>
                        <ErrorMessage name="maxSlot" component={"span"} style={{color: "red"}}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text"  style={{width: "30%"}}>Kiểu thuê <span style={{color:"red"}}>*</span></span>
                        <Field name="rentalType" type="text" className="form-control"/>
                    </div>
                    <div style={{height: "30px"}}>
                        <ErrorMessage name="rentalType" component={"span"} style={{color: "red"}}/>
                    </div>
                    <div>
                        <div className="input-group">
                            <span className="input-group-text"  style={{width: "30%"}}>Kiểu thuê <span style={{color:"red"}}>*</span></span>
                            <Field name="typeService" as="select" className="custom-select">
                                {typeService.map((e, index) => (
                                    <option value={JSON.stringify(e)}>{e.name}</option>
                                ))}
                            </Field>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary px-4 py-2">Lưu</button>
                    </div>

                </Form>
                </div>
            </Formik>
        </>
    )
}