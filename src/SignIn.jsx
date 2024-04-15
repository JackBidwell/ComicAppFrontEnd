/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://[::1]:3000/sessions.json", { email, password })
      .then((response) => {
        localStorage.setItem('jwt', response.data.jwt);
        localStorage.setItem('name', response.data.name);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
      return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <Link to> </Link>
                        <button type="button" className="close" onClick={() => onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input name="email" type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input name="password" type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  };
}
