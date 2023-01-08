import React from "react";

export default function about() {
  return (
    <>
      <section id="about">
        <div className="container-sm">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md m-3">
              <img className="img-fluid" src="/Group 14.svg" alt="" />
            </div>
            <div className="col-md px-auto container-sm mt-5 text-center">
              <h1 className="about-head m-2 mt-4">
                A platform that grows with you
              </h1>
              <p className="about-desc m-2 mt-4">
                Headquartered in London, Fintract Global is building cutting
                edge fintech and regtech platform as SaaS & BaaS business model
                to support digital economy by providing a range of innovative
                products (such as, Fraudify - Real time Fraud Detection and
                Prevention, Finalytics, B2B Payment, Open Banking, End to End
                Lending, Transaction Monitoring, Trade Finance, Banking
                Chatbot). We are creating comprehensive financial products
                combining security, machine intelligence and automation, unique
                conceptualisation and complete business analysis.
              </p>
              <button type="button" className="btn btn-primary m-2 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="info " className="mt-5">
        <div className="container-sm about">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md px-auto container-sm">
              <h1 className="about-head">Why we are the best</h1>
              <p className="about-desc">
                We provide our innovative way for digital payment which is
                secure and easy to use.
              </p>
            </div>
            <div className="col-md d-flex justify-content-center ">
              <button type="button" className="btn btn-primary">
                Get Started
              </button>
              <button type="button" className="btn btn-light info-btn">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
