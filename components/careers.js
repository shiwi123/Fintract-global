import React from "react";

function careers() {
  return (
    <>
      <section className="overview p-5">
        <div className="container">
          <h6>Overview</h6>
          <p>
            Fintract Global is providing opportunities that constantly challenge
            management and technical trainee programme to learn and develop in a
            fast-paced environment. We are looking for students who are driven
            and motivated to work with some of the brightest minds in the
            management consulting world. You’ll connect with mentors and
            experts, who will help you delve deeper into the intricacies of the
            corporate world. These roles will equip you with the nuances of
            business strategy through several hands-on and practical
            experiences.
          </p>
          <h5 style={{ color: "#A7BFFF" }}>Find Your Perfect Role</h5>
          <p>
            Fintract Global provides management and technical trainee programme
            to suitable candidates who:
          </p>
          <ul>
            <li>Are available for a minimum work duration of 4 months.</li>
            <li>
              Demonstrate unflinching commitment and dedication towards the
              company and its business interests.
            </li>
            <li>
              Are pursuing programs/have graduated from distinguished
              institutes/universities and possess the requisite skills and
              interests, for various arenas.
            </li>
            <li>
              Are willing to gain practical exposure under the mentorship of
              experienced professionals in their selected fields.
            </li>
          </ul>
          <p />
        </div>
      </section>
      {/* cards */}
      {/* career areas */}
      <section className="career p-5">
        <hr
          style={{
            border: "5px solid rgba(0, 56, 207, 0.43)",
            width: "80%",
            margin: "auto",
          }}
        />
        <h3 className="text-center py-5 font-weight-bold">
          Explore <span style={{ color: "#A7BFFF" }}>Career</span> Areas
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/1.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 border-0 img-thumbnail"
              />
              <h5 className="px-2">Marketing &amp; sales (CEO)</h5>
            </div>
          </div>
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/2.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 border-0 img-thumbnail"
              />
              <h5 className="mb-0">Design and content writing</h5>
            </div>
          </div>
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/3.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 border-0 img-thumbnail"
              />
              <h5 className="mb-0">Human resources and Management</h5>
            </div>
          </div>
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/4.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 border-0 img-thumbnail"
              />
              <h5 className="mb-0">Finance and Marketing</h5>
            </div>
          </div>
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/5.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 border-0 img-thumbnail"
              />
              <h5 className="mb-0">Product and corporate management</h5>
            </div>
          </div>
          <div
            className="col-xl-3 col-sm-6 mb-5 mx-5"
            style={{ width: "18rem" }}
          >
            <div
              className="bg-white py-5 px-4 text-center careerCard"
              style={{ height: "100%" }}
            >
              <img
                src="/career/6.png"
                alt=""
                width={100}
                className="img-fluid rounded-circle mb-3 img-thumbnail border-0 shadow-sm"
              />
              <h5 className="mb-0">Marketing &amp; sales (CEO)</h5>
            </div>
          </div>
        </div>
      </section>
      <hr
        style={{
          border: "5px solid rgba(0, 56, 207, 0.43)",
          width: "80%",
          margin: "auto",
        }}
      />
      <section className="p-5">
        <h3 className="text-center py-5 font-weight-bold">
          Additional <span style={{ color: "#A7BFFF" }}>Perks</span> and{" "}
          <span style={{ color: "#A7BFFF" }}>Benefits</span>
        </h3>

        <div className="row row-cols-1 row-cols-md-3 ">
          <div
            className="col-xl-4 col-sm-6 mb-5 py-5 rounded-circle"
            style={{
              width: "23rem",
              height: "23rem",
              zIndex: "1",
              background: "#eee url(/career/G1.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>

          <div
            className="col-xl-4 col-sm-6 mb-5 py-4 rounded-circle"
            style={{
              width: "8rem",
              height: "20rem",
              zIndex: "-1",
              background: "#eee url(/career/G2.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-sm-6 mb-5 py-5 rounded-circle"
            style={{
              width: "23rem",
              height: "23rem",
              zIndex: "1",
              background: "#eee url(/career/G3.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-sm-6 mb-5 py-5 rounded-circle"
            style={{
              width: "20rem",
              height: "20rem",
              background: "#eee url(/career/G4.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>
          <div
            className="col-xl-4-3 col-sm-6 mb-5 py-5 rounded-circle"
            style={{
              width: "25rem",
              height: "25rem",
              background: "#eee url(/career/G5.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-sm-6 mb-5 py-5 rounded-circle"
            style={{
              width: "20rem",
              height: "20rem",
              background: "#eee url(/career/G6.png) center center",
            }}
          >
            <div
              className="py-5 px-4 text-center m-auto"
              style={{ width: "75%" }}
            >
              <p className="mb-0 text-white">
                Accredited Certification from Fintract Global, demonstrating
                your abilities and Flexible Work Hours
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr
        style={{
          border: "5px solid rgba(0, 56, 207, 0.43)",
          width: "80%",
          margin: "auto",
        }}
      />
      {/* form */}
      <div className="container d-flex justify-content-center my-5 bg-light">
        <div className="row  mx-2 main">
          {/*left-column*/}
          <div className="col-md-7 col-12 xcol">
            <form className="myform">
              <div className="row rone">
                <div className="form-group col-md-6 fone py-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group col-md-6 ffour py-3">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control lm" id="Email" />
                </div>
              </div>
              <div className="row rtwo">
                <div className="form-group col-md-6 fthree py-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="text" className="form-control jk" id="phone" />
                </div>
                <div className="form-group col-md-6 ffour py-3">
                  <label htmlFor="linkedin" className="form-label">
                    Linkedin Profile
                  </label>
                  <input
                    type="text"
                    className="form-control lm"
                    id="linkedin"
                  />
                </div>
              </div>
              <div className="row rthree">
                <div className="form-group col-md-12 ffive py-3">
                  <label htmlFor="role" className="form-label">
                    Which role you are interested in?
                  </label>
                  <select className="form-select form-control jk" id="role">
                    <option>Select</option>
                    <option>Frontend developer</option>
                    <option>Backend developer</option>
                    <option>Android developer</option>
                    <option>IOS developer</option>
                  </select>
                </div>
              </div>
              <div className="row rfour">
                <div className="form-group col-md-9 fsix py-3">
                  <label htmlFor="formFile" className="form-label">
                    Upload Resume
                  </label>
                </div>
                <div className="form-group col-md-3 feight py-3">
                  <label className="btn-form btn btn-primary">
                    Browse <input type="file" hidden/>
                  </label>
                </div>
                <hr style={{ color: "grey" }} />
              </div>
              <div className="row rfive">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="form-group col-md-12 feight py-3 input-group">
                  <textarea className="form-control" defaultValue={""} />
                  <span className="input-group-text rounded-circle p-3 btn btn-form">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-send-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </span>
                </div>
                <div className="row rsix col-md-3 m-auto py-3">
                  <button className="btn-form btn">Signup</button>
                </div>
              </div>
            </form>
          </div>
          {/*right-column*/}
          <div
            className="col-md-5 col-12 mycol py-5 text-white bg-image"
            style={{
              backgroundImage: 'url("/career/Form img.png")',
             
            }}
          >
            {/*image*/}
            <h3 className="px-4">
              Interested in joining the team but not ready to apply or dont see
              the right oppurtunity?
            </h3>
            <p className="px-4">
              Sign up - We’ll keep you up to date with the latest from the team
              at segment and let you know when we have a new role that may be a
              fit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default careers;
