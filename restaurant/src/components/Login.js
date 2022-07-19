export const Login = () => {

    return (
        <section className=" loginSection h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="login-container col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="/img/registerPhoto.jpg"
                  className="w-100" 
                  />
                <div className="card-body p-4 p-md-5">
                  <h3 id = "loginHeader" className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">LOGIN</h3>
      
                  <form className="px-md-2">
      
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Email</label>
                      <input type="text" id="form3Example1q" className="form-control" />
                    </div>
    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1q">Password</label>
                      <input type="password" id="form3Example1q" className="form-control" />
                    </div>
    
    
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