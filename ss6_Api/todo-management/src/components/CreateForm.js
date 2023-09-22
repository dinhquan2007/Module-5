import {Form, Formik, Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import {addTodo} from "../service/TodoService";

function CreateForm() {

    return (
        <Formik
            initialValues={{
                title: ""
            }}
            onSubmit={values => {
                addTodo(values);
                alert("thêm mới thành công")
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("không được để trống")
            })}
        >
            <Form>
                <Field name="title" type="text"/>
                <ErrorMessage name="title" component="span"/>
                <button>Submit</button>
            </Form>
        </Formik>
    )
}

export default CreateForm;