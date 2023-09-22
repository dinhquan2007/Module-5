import {Form, Formik, ErrorMessage, Field} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import * as Yup from 'yup'

function Declaration() {
    return (
        <div><Formik
            initialValues={
                {
                    name: "",
                    idCard: "",
                    birth: "",
                    gender: "",
                    country: "",
                    company: "",
                    partment: "",
                    medication: "",
                    province: "",
                    district: "",
                    ward: "",
                    street: "",
                    phone: "",
                    email: "",
                    national: "",
                    symptom: [],
                    impact: []
                }
            }
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("không được để trống"),
                idCard: Yup.string().required("không được để trống"),
                birth: Yup.number().required("không được để trống").min(1900).max(2023),
                country: Yup.string().required("không được để trống"),
                company: Yup.string().required("không được để trống"),
                province: Yup.string().required("không được để trống"),
                district: Yup.string().required("không được để trống"),
                ward: Yup.string().required("không được để trống"),
                street: Yup.string().required("không được để trống"),
                phone: Yup.string().required("không được để trống"),
                email: Yup.string().required("không được để trống").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"không đúng định dạng")
            })}
        >
            <Form>
                <h1>Tờ khai báo y tế</h1>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <Field className="form-control" id="name" name="name" type="text"/>
                    <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="idCard">CCCD</label>
                    <Field className="form-control" id="idCard" name="idCard" type="text"/>
                    <ErrorMessage name="idCard" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="birth">Năm sinh</label>
                    <Field className="form-control" id="birth" name="birth" type="number"/>
                    <ErrorMessage name="birth" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Giới tính</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <Field
                                className="radio-input"
                                id="gender"
                                name="gender"
                                type="radio"
                                value="1"
                            />
                            <span className="radio-text">Nam</span>
                        </label>
                        <br/>
                        <label className="radio-label">
                            <Field
                                className="radio-input"
                                id="gender"
                                name="gender"
                                type="radio"
                                value="0"
                            />
                            <span className="radio-text">Nữ</span>
                        </label>
                    </div>
                    <ErrorMessage name="gender" component="small" style={{ color: "red" }} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Quốc tịch</label>
                    <Field className="form-control" id="country" name="country" type="text"/>
                    <ErrorMessage name="country" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="company">Công ty làm việc</label>
                    <Field className="form-control" id="company" name="company" type="text"/>
                    <ErrorMessage name="company" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="partment">Bộ phận làm việc</label>
                    <Field className="form-control" id="partment" name="partment" type="text"/>
                    <ErrorMessage name="partment" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <Field className="form-check-input" id="medication" name="medication" type="checkbox" value="true"/>
                    <ErrorMessage name="medication" component="small" style={{color: "red"}}/>
                </div>
                <h1>Địa chỉ liên lạc tại Việt Nam</h1>
                <div className="form-control">
                    <label htmlFor="province">Tỉnh thành</label>
                    <Field className="form-control" id="province" name="province" type="text"/>
                    <ErrorMessage name="province" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="district">Quận/huyện</label>
                    <Field className="form-control" id="district" name="district" type="text"/>
                    <ErrorMessage name="district" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="ward">Phường/Xã</label>
                    <Field className="form-control" id="ward" name="ward" type="text"/>
                    <ErrorMessage name="ward" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="street">Đường</label>
                    <Field className="form-control" id="street" name="street" type="text"/>
                    <ErrorMessage name="street" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Điện thoại</label>
                    <Field className="form-control" id="phone" name="phone" type="text"/>
                    <ErrorMessage name="phone" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field className="form-control" id="email" name="email" type="text"/>
                    <ErrorMessage name="email" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <h1>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact1"
                               value="Người nghi ngờ, mắc bệnh"/>
                        <label className="form-check-label" htmlFor="impact1">Người nghi ngờ, mắc bệnh</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact2"
                               value="Người từ nước có bệnh"/>
                        <label className="form-check-label" htmlFor="impact2">Người từ nước có bệnh</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact3"
                               value="Người có biểu hiện"/>
                        <label className="form-check-label" htmlFor="impact3">Người có biểu hiện</label>
                    </div>
                </div>

                <div className="form-control">
                    <h1>Trong vòng 14 ngày qua, Anh/chị có thấy dấu hiệu hay triệu chứng nào sau đây không?</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom1" value="Sốt"/>
                        <label className="form-check-label" htmlFor="symptom1">Sốt</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom2" value="Ho"/>
                        <label className="form-check-label" htmlFor="symptom2">Ho</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom3"
                               value="Khó thở"/>
                        <label className="form-check-label" htmlFor="symptom3">Khó thở</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom4"
                               value="Viêm phổi"/>
                        <label className="form-check-label" htmlFor="symptom4">Viêm phổi</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom5"
                               value="Đau họng"/>
                        <label className="form-check-label" htmlFor="symptom5">Đau họng</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="symptom" id="symptom6"
                               value="Mệt mỏi"/>
                        <label className="form-check-label" htmlFor="symptom6">Mệt mỏi</label>
                    </div>
                </div>

                <div className="form-control">
                    <h1>Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với?</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact4"
                               value="Người nghi ngờ, mắc bệnh"/>
                        <label className="form-check-label" htmlFor="impact4">Người nghi ngờ, mắc bệnh</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact5"
                               value="Người từ nước có bệnh"/>
                        <label className="form-check-label" htmlFor="impact5">Người từ nước có bệnh</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="impact" id="impact6"
                               value="Người có biểu hiện"/>
                        <label className="form-check-label" htmlFor="impact6">Người có biểu hiện</label>
                    </div>
                </div>

                <button className="btn btn-primary">Gửi</button>
            </Form>
        </Formik></div>

    )
}

export default Declaration;