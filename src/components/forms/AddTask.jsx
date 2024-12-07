export function AddTaskModalForm({ task }) {
  return (
    <div className="modal fade" id="addTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form> 
              <div className="mb-3">
                <label>Stuff</label>
                <input type="text" className="form-control" id="stuff" placeholder="Stuff" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary btn-primary-2">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModalForm;