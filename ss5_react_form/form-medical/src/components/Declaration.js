import {Form, Formik, ErrorMessage, Field} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import * as Yub from 'yup'

function Declaration() {
    return (
        <Formik
            initialValues={
                {
                    name: "",
                    idCard: ""
                    // birth: "",
                    // gender: "",
                    // country: "",
                    // company: "",
                    // partment: "",
                    // medication: "",
                    // province: "",
                    // district: "",
                    // ward: "",
                    // street: "",
                    // phone: "",
                    // email: "",
                    // national: "",
                    // symptom: [],
                    // impact: []
                }
            }
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yub.object({})}

        >
            <Form>
                <h1>Tờ khai báo y tế</h1>
                    <div className="form-control">
                        <label htmlFor="">Họ và tên</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="idCard">CCCD</label>
                        <Field name="idCard" type="text"/>
                        <ErrorMessage name="idCard" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Năm sinh</label>
                        <Field name="name" type="number"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">giới tính</label>
                        <Field name="gender" type="radio"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Quốc tịch</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Công ty làm việc</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Bộ phận làm việc</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>

                    <h1>Địa chỉ liên lạc tại Việt Nam</h1>
                    <div className="form-control">
                        <label htmlFor="">Tỉnh thành</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Quận/huyện</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Phường/Xã</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Đường</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Điện thoại</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                    </div>
                    <h1>
                        Trong vòng 14 ngày qua ,Anh/chị có đến quốc gia / vung lãnh thổ nào
                    </h1>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <Field name="name" type="text"/>
                    <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                </div><h1>
                        Trong vòng 14 ngày qua ,Anh/chị có đến quốc gia / vung lãnh thổ nào
                    </h1>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <Field name="name" type="text"/>
                    <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                </div><h1>
                        Trong vòng 14 ngày qua ,Anh/chị có đến quốc gia / vung lãnh thổ nào
                    </h1>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <Field name="name" type="text"/>
                    <ErrorMessage name="name" component="small" style={{color: "red"}}/>
                </div>
            <button>gửi</button>>
        </Form>
</Formik>
)
}

export default Declaration;