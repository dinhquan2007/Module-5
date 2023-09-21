import {Form, Formik, Field,ErrorMessage} from "formik";
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.css'


function ContactForm(){
    return(
        <Formik
            initialValues={{
                name:"",
                email:"",
                phone:"",
                message:""
            }}
            onSubmit={(values)=>{
                console.log(values);
                alert("thêm mới thành công");
            }}
            validationSchema={Yup.object(
                {
                    name:Yup.string().required("không được để trống")
                        .matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*$/,"chưa đúng định dạng"),
                    email:Yup.string().required("không được để trống").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"chưa đúng định dạng"),
                    phone:Yup.string().required("không được để trống").matches(/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,"10 số từ 0 hoặc 11 số từ +84"),
                    message:Yup.string().required("không được để trống")
                }
            )
            }
        >
            <div>
                <h1>Contact Form</h1>
              <Form className="form-control">
                  <div className="form-control">
                      <span className="form-control-text">
                          Name
                      </span>
                      <Field className="form-control-sm" type='text'  name="name"/>

                  </div>
                  <ErrorMessage name="name" component="span"/>
                  <div className='form-control'>
                      Email
                      <Field className="form-control-sm" type='text' name="email"/>
                  </div>
                  <ErrorMessage name="email" component="span"/>
                  <div className='form-control'>
                      Phone
                      <Field className="form-control-sm" type='text' name="phone"/>
                  </div>
                  <ErrorMessage name="phone" component="span"/>
                  <div className='form-control'>
                      Message
                      <Field className="form-control-sm" name="message"/>
                  </div>
                  <ErrorMessage name="message" component="span"/>
                  <button className="btn btn-primary">
                      submit
                  </button>
              </Form>
            </div>
        </Formik>

    )
}
export default ContactForm;