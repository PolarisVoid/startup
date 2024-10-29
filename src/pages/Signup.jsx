function Signup() {
    return (
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form method="get" action="./calendar.html">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name="username" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" required />
                    </div>
                    <button type="submit" class="btn btn-primary-1">Login</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;