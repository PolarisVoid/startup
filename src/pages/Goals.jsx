function Goals() {
  return (
    <>
      <h1>Goals</h1>
      <p>Add Goal</p>
      <form class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="goal_name" class="form-label">
            Goal Name
          </label>
          <input
            type="text"
            class="form-control"
            id="goal_name"
            name="goal_name"
            required
          />
          <div class="invalid-feedback">Please provide a goal name.</div>
        </div>
        <div class="mb-3">
          <label for="goal_description" class="form-label">
            Goal Description
          </label>
          <input
            type="text"
            class="form-control"
            id="goal_description"
            name="goal_description"
            required
          />
          <div class="invalid-feedback">Please provide a goal description.</div>
        </div>
        <div class="mb-3">
          <label for="goal_category" class="form-label">
            Goal Category
          </label>
          <input
            type="text"
            class="form-control"
            id="goal_category"
            name="goal_category"
            required
          />
          <div class="invalid-feedback">Please provide a goal category.</div>
        </div>
        <div class="mb-3">
          <label for="goal_due_date" class="form-label">
            Goal Due Date
          </label>
          <input
            type="date"
            class="form-control"
            id="goal_due_date"
            name="goal_due_date"
            required
          />
          <div class="invalid-feedback">Please provide a goal due date.</div>
        </div>
        <div class="mb-3">
          <label for="goal_priority" class="form-label">
            Goal Priority
          </label>
          <input
            type="number"
            class="form-control"
            id="goal_priority"
            name="goal_priority"
            required
          />
          <div class="invalid-feedback">Please provide a goal priority.</div>
        </div>
        <button type="submit" class="btn btn-primary">
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
