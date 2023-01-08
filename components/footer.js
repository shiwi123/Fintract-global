import React from 'react'

export default function footer() {
  return (
    <footer className="pt-5">
    <div className="container">
      {/* <!-- Top Content --> */}

      <section id="topContent" className="pt-4 px-1">
        <form action="">
          {/* <!--Grid row--> */}
          <div className="row d-flex justify-content-center">
            {/* <!--Grid column--> */}
            <div className="col-auto">
              <p className="pt-2 text-white">
                <strong>Stay Up to date</strong>
              </p>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-md-5 col-12">
              {/* <!-- Email input --> */}
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                />
              </div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-auto">
              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-danger mb-2">
                Subscribe
              </button>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </form>
      </section>

      {/* <!-- Middle Content --> */}
      <div className="row mt-3">
        <div className="col-md-7 d-flex justify-content-center mb-3">
          <div
            className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"
          >
            <a className="foot" href="#">About</a>
          </div>
          <div
            className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"
          >
            <a className="foot" href="#">Contact Us</a>
          </div>
          <div
            className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"
          >
            <a className="foot" href="#">Pricing</a>
          </div>
          <div
            className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"
          >
            <a className="foot" href="#">Support</a>
          </div>
         
        </div>
        <div className="col-md-3 justify-content-center d-flex">
          <a className="foot" href="#">
            <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
              <div className="fa fa-facebook"></div>
            </div>
          </a>
          <a className="foot" href="#">
            <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
            <div className="fa fa-twitter"></div>
            </div>
          </a>
          <a className="foot" href="#">
            <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
            <div className="fa fa-instagram"></div>
            </div>
          </a>
          <a className="foot" href="#">
            <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
              <div className="fa fa-linkedin"></div>
            </div>
          </a>
          <a className="foot" href="#">
            <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- Bottom content --> */}
      <div className="row mt-5 pt-4 border-top text-center">
        <div className="col-md-4 col-lg-4">
          <p className="copyright">
            Copyright &copy;
            <script
              data-cfasync="false"
              src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            ></script>
            <script>
              document.write(new Date().getFullYear());
            </script>
            Fintract. All rights reserved.
          </p>
        </div>
        <div className="col-md-4 col-lg-4 text-center">
          <h4 style={{color:"#001870"}}>Fintract Global</h4>
        </div>
        <div
          className="col-md-4 col-lg-4 d-inline-flex px-5 px-md-2 px-lg-3 justify-content-center"
        >
          <p className="px-3 text-center">Terms of service</p>
          <p className="px-3 text-center">Privacy policy</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
