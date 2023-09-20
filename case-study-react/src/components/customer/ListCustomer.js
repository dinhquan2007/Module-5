import {useState} from "react";
function ListCustomer(){
    const [showModal, setShowModal] = useState(false)

    const handleDelete = () => {
        // Perform delete operation here
        setShowModal(false);
    };
    return (
        <div className="container mt-4">
            <h2>Items</h2>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>
                        <button className="btn btn-primary m-1">Edit</button>
                        <button className="btn btn-danger m-1" onClick={() => setShowModal(true)}>Delete</button>
                    </td>
                </tr>
                {/* Add more table rows here */}
                </tbody>
            </table>
            {/* Delete Modal */}
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Item</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this item?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Delete Modal */}
        </div>
    );
}
export default ListCustomer;