export const Register = () => {
    return(
         
  <section id = "registerSection" className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="register-container col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="/img/registerPhoto.jpg"
            className="w-100" 
            alt=""/>
          <div className="card-body p-4 p-md-5">

          <h3 className="register-header mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">REGISTRATION</h3>
            <form className="px-md-2">


              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Email</label>
                <input type="email" id="form3Example1q" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Phone number</label>
                <input type="text" id="form3Example1q" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Password</label>
                <input type="password" id="form3Example1q" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1q">Repeat Password</label>
                <input type="password" id="form3Example1q" className="form-control" />
              </div>

              <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                className="fw-bold text-body"><u>Login here</u></a></p>


              <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}