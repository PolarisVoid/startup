function settings() {
  return (
    <>
      <h1>Settings</h1>
      <form>
        <div class="mb-3">
          <label for="profile_image" class="form-label">
            Profile Image
          </label>
          <input
            type="file"
            class="form-control"
            id="profile_image"
            name="profile_image"
          />
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="notifications"
            name="notifications"
          />
          <label class="form-check-label" for="notifications">
            Notifications
          </label>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="dark-mode"
            name="dark-mode"
          />
          <label class="form-check-label" for="dark-mode">
            Dark Mode
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
export default settings;
