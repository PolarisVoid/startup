function settings() {
  return (
    <>
      <h1>Settings</h1>
      <form>
        <div className="mb-3">
          <label for="profile_image" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="profile_image"
            name="profile_image"
          />
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="notifications"
            name="notifications"
          />
          <label className="form-check-label" for="notifications">
            Notifications
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dark-mode"
            name="dark-mode"
          />
          <label className="form-check-label" for="dark-mode">
            Dark Mode
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
export default settings;
