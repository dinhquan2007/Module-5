function AddNewForm() {
    return (
        <div className="container mt-4">
            <h2>Add New Item</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3"/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}
export default AddNewForm;