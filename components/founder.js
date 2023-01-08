import React from 'react'

export default function founder() {
  return (
    <>
     <div className="extra text-center m-5">
      <button className="btn btn-primary my-3">Load more</button>
      <h4 className="about-head text-center my-3">Vision of the founder</h4>
    </div>
    


    <section id="founder">
      <div className="card mb-2 m-auto border-0" style={{width: "90vw"}}>
        <div className="row no-gutters">
          <div className="col-md-2 text-center m-auto">
            <img
              src="/ceo.svg"
              className="img-fluid"
              alt="..."
              height="150px"
              width="150px"
            />
          </div>
          <div className="col-md-10 m-auto p-3">
            <div className="card-body">
              <p className="card-text founder-desc">
                “Over the years, I have built lasting relationships with my
                clients and team, whose professional success I believe to be
                closely linked with our long-term progress”
              </p>
              <h5 className="card-title">Debasis Chakraborty</h5>
              <p className="card-text founder-desc">
                <small className="text-dark">CEO FinTract Global</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
