import React from 'react'

function company() {
  return (
    <div className="text-center mt-5">
      <div className="card-body" id="company">
        <h1 className="card-title mt-3 company-head">
          Many big comapany trusted us
        </h1>

        <p className="card-text mt-3">
          Our clients include multinational corporations, financial
          institutions, private equity funds, domestic corporations, joint
          ventures, emerging companies, start-ups, non-governmental
          organizations, international organizations, individuals and
          government.
        </p>

        <div className="container mt-3">
          <div className="row d-flex justify-content-around align-items-center">
            {/* <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-5">
              {/* <!--Image--> */}
              <div className="view overlay z-depth-1-half">
                <img src="/Group 40.svg" className="img-fluid" alt="" />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            {/* <!--Grid column-->

            <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-5">
              {/* <!--Image--> */}
              <div className="view overlay z-depth-1-half">
                <img src="/Group 41.svg" className="img-fluid" alt="" />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-5">
              {/* <!--Image--> */}
              <div className="view overlay z-depth-1-half">
                <img src="/Group 42.svg" className="img-fluid" alt="" />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            {/* <!--Grid column-->

            <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-5">
              {/* <!--Image--> */}
              <div className="view overlay z-depth-1-half">
                <img src="/Group 43.svg" className="img-fluid" alt="" />
                <a href="">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>

        <h1 className="card-title mt-3 company-head">
          Here are all the services you get <br />
          when you register with Fintract Global
        </h1>
      </div>
    </div>
  )
}

export default company