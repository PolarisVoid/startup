function Signup() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form method="get" action="./calendar.html">
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" required />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary-1">Login</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;