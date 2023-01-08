import React from 'react'

export default function services() {
    const styles = {
        maxWidth:"100vw"
    };
  return (
    <section id="services">
    <div className="container mt-5">
      <div className="mb-5" style={styles}>
        <div className="row no-gutters">
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h1 className="card-title company-head">Open Banking</h1>
              <p className="cardText section-desc mt-3">
                Our target is to develop an ecosystem of products and services
                augmented with production environments, Fraudify Certified
                APIs by PSD2, enhanced authentication by OpenID and
                multi-factor authentication....
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/img-1.svg" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>

      <div className="mb-5" style={styles}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src="/img-2.svg" className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h1 className="card-title company-head">Fraudify</h1>
              <p className="cardText section-desc mt-3">
                To greatly reduce the current state of rampant online fraud
                with our cutting-edge tech-stack with niche solutions. With
                our fraud detection capabilities, we bring trust and
                credibility to all financial transactions....
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5" style={styles}>
        <div className="row no-gutters">
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h1 className="card-title company-head">SME Lending</h1>
              <p className="cardText section-desc mt-3">
                We enable start-ups to focus solely on their business instead
                of fretting about gaps in their cash-flows.Our vision is to
                lend our contribution to the growth of the industrial economy
                by providing superior financial solutions to under....
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/img-05.svg" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>

      <div className="mb-5" style={styles}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src="/img-4.svg" className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h1 className="card-title company-head">B2B Payment</h1>
              <p className="cardText section-desc mt-3">
                To be a leading international payment platform for banking and
                financial institutions. We aim to support payments in all the
                major FIAT(s) and cryptocurrencies with support for real-time
                currency conversions....
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5" style={styles}>
        <div className="row no-gutters">
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h1 className="card-title company-head">Banking as a Service</h1>
              <p className="cardText section-desc mt-3">
                To develop our partner businesses by providing a ‘banking as a
                service’ platform for seamless integration of financial
                services. We aim to push out APIs at an unmatched pace and
                strive for complete automation of all processes....
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/img-3.svg" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
