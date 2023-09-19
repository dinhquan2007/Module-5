import {Component} from "react";

class StudentInfoComponont extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Danh sách học sinh</h1>
                <table border="1px">
                    <tr>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Địa chỉ</th>
                    </tr>
                    {this.props.students.map(s=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.address}</td>
                            </tr>)
                    )}
                </table>
            </div>
        )
    }
}
export default StudentInfoComponont;