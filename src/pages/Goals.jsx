function Goals() {
  return (
    <>
      <h1>Goals</h1>
      <p>Add Goal</p>
      <form className="needs-validation" novalidate>
        <div className="mb-3">
          <label for="goal_name" className="form-label">
            Goal Name
          </label>
          <input
            type="text"
            className="form-control"
            id="goal_name"
            name="goal_name"
            required
          />
          <div className="invalid-feedback">Please provide a goal name.</div>
        </div>
        <div className="mb-3">
          <label for="goal_description" className="form-label">
            Goal Description
          </label>
          <input
            type="text"
            className="form-control"
            id="goal_description"
            name="goal_description"
            required
          />
          <div className="invalid-feedback">Please provide a goal description.</div>
        </div>
        <div className="mb-3">
          <label for="goal_category" className="form-label">
            Goal Category
          </label>
          <input
            type="text"
            className="form-control"
            id="goal_category"
            name="goal_category"
            required
          />
          <div className="invalid-feedback">Please provide a goal category.</div>
        </div>
        <div className="mb-3">
          <label for="goal_due_date" className="form-label">
            Goal Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="goal_due_date"
            name="goal_due_date"
            required
          />
          <div className="invalid-feedback">Please provide a goal due date.</div>
        </div>
        <div className="mb-3">
          <label for="goal_priority" className="form-label">
            Goal Priority
          </label>
          <input
            type="number"
            className="form-control"
            id="goal_priority"
            name="goal_priority"
            required
          />
          <div className="invalid-feedback">Please provide a goal priority.</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Goal
        </button>
      </form>
      <h2>My Goals</h2>
      <ul>
        <li>Goal 1 [Pulled from DB]</li>
        <li>Goal 2</li>
      </ul>
    </>
  );
}
export default Goals;
