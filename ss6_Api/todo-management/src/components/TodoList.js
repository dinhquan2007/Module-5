import {useEffect, useState} from "react";
import {getAll} from "../service/TodoService";
import CreateForm from "./CreateForm";

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const list = async () => {
        const  res = await getAll()
        setTodoList(res)
    }
    useEffect(() => {
        list()
    }, [todoList])

    return (

        <div>
            <CreateForm/>
            <h1>title</h1>
            {todoList.map((e) => (
                    <ul key={e.id}>
                        <li>{e.title}</li>
                    </ul>
                )
            )}
        </div>
    )
}

export default TodoList;