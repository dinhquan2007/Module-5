import {Form, Formik, ErrorMessage, Field} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import * as Yub from 'yup'

function Declaration() {
    return (
        <Formik
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
            // validationSchema={Yub.object({
            //     name:Yub.object.string().required("không được để trống")
            // })}

        >
            <Form>
                <h1>Tờ khai báo y tế</h1>
                <div className="form-control">
                    <label htmlFor="">Họ và tên</label>
                    <Field name="name" type="text"/>
                    {/*<ErrorMessage name="name" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="idCard">CCCD</label>
                    <Field name="idCard" type="text"/>
                    <ErrorMessage name="idCard" component="small" style={{color: "red"}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Năm sinh</label>
                    <Field name="birth" type="number"/>
                    {/*<ErrorMessage name="birth" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="">giới tính</label>
                    <Field name="gender" type="radio" value="1">Nam</Field>
                    <Field name="gender" type="radio" value="0">Nữ</Field>
                    {/*<ErrorMessage name="gender" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="">Quốc tịch</label>
                    <Field name="country" type="text"/>
                    {/*<ErrorMessage name="country" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="company">Công ty làm việc</label>
                    <Field name="company" type="text"/>
                    {/*<ErrorMessage name="company" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="partment">Bộ phận làm việc</label>
                    <Field name="partment" type="text"/>
                    {/*<ErrorMessage name="partment" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <Field name="medication" type="checkbox" value="true">Có bảo hiểm y tế</Field>
                    {/*<ErrorMessage name="medication" component="small" style={{color: "red"}}/>*/}
                </div>

                <h1>Địa chỉ liên lạc tại Việt Nam</h1>
                <div className="form-control">
                    <label htmlFor="province">Tỉnh thành</label>
                    <Field name="province" type="text"/>
                    {/*<ErrorMessage name="province" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="district">Quận/huyện</label>
                    <Field name="district" type="text"/>
                    {/*<ErrorMessage name="district" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="ward">Phường/Xã</label>
                    <Field name="ward" type="text"/>
                    {/*<ErrorMessage name="ward" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="street">Đường</label>
                    <Field name="street" type="text"/>
                    {/*<ErrorMessage name="street" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Điện thoại</label>
                    <Field name="phone" type="text"/>
                    {/*<ErrorMessage name="phone" component="small" style={{color: "red"}}/>*/}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text"/>
                    {/*<ErrorMessage name="email" component="small" style={{color: "red"}}/>*/}
                </div>
                <h1>
                    Trong vòng 14 ngày qua ,Anh/chị có đến quốc gia / vung lãnh thổ nào
                </h1>
                <div className="mb-3">
                    <Field name="national" type="text"/>
                    {/*<ErrorMessage name="national" component="small" style={{color: "red"}}/>*/}
                </div>
                <h1>
                    Trong vòng 14 ngày qua ,Anh/chị có thấy dấu hiệu hay triệu chứng nào sau đây không
                </h1>
                <div className="form-control">
                    <Field name="symptom" type="checkbox" value="sốt">Sốt</Field>
                    <Field name="symptom" type="checkbox" value="Ho">Ho</Field>
                    <Field name="symptom" type="checkbox" value="khó thở">Khó thở</Field>
                    <Field name="symptom" type="checkbox" value="Viêm phổi">Viêm phổi</Field>
                    <Field name="symptom" type="checkbox" value="Đau họng">Đau họng</Field>
                    <Field name="symptom" type="checkbox" value="Mệt mỏi">Mệt mỏi</Field>
                    {/*<ErrorMessage name="symptom" component="small" style={{color: "red"}}/>*/}
                </div>
                <h1>
                    Trong vòng 14 ngày qua ,Anh/chị có tiếp xúc với ?
                </h1>
                <div className="form-control">
                    <Field name="impact" type="checkbox" value="Mệt mỏi">Người nghi ngờ,mắc bệnh</Field>
                    <Field name="impact" type="checkbox" value="Mệt mỏi">Người từ nước có bệnh</Field>
                    <Field name="impact" type="checkbox" value="Mệt mỏi">người có biểu hiện</Field>
                    {/*<ErrorMessage name="impact" component="small" style={{color: "red"}}/>*/}
                </div>
                <button>gửi</button>
            </Form>
        </Formik>
    )
}

export default Declaration;