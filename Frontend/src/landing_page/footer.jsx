import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className=" cont container p-5 mt-1 border-top">
        {/* Top Section */}
        <div className="row mt-5 text-center text-md-start">
          {/* Logo & Copyright */}
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <img
              style={{ width: "70%" }}
              src="media/images/logo.svg"
              alt="logo"
            />

            <p className="mt-3 small">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <i className="m-2  text-muted fs fs-5 fa-solid fa-x"></i>
            <i className=" m-2 text-muted fs-5  fa-brands fa-square-facebook"></i>
            <i className=" m-2  text-muted fs fs-5  fa-brands fa-instagram"></i>
            <i className=" m-2  text-muted fs fs-5  fa-brands fa-square-linkedin"></i>
            <br /><br />
            <i className=" m-2  text-muted fs fs-5  fa-brands fa-youtube"></i>
            <i className=" m-2  text-muted fs fs-5  fa-brands fa-whatsapp"></i>
            <i className=" m-2   text-muted fs fs-5  fa-brands fa-telegram"></i>
          </div>

          {/* Account */}
          <div className=" foCont  col-6 col-md-4 col-lg-2 mb-4">
            <p className=" fs-5 ">Account</p>
            <a href="">Open demat account</a>
            <br />
            <a href="">Minor demat account</a>
            <br />
            <a href="">NRI demat account</a>
            <br />
            <a href="">Commodity</a>
            <br />
            <a href="">Dematerialisation</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">MTF</a>
            <br />
            <a href="">Referral program</a>
          </div>

          {/* Support */}
          <div className="foCont col-6 col-md-4 col-lg-2 mb-4">
            <p className="fs-5">Support</p>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
          </div>

          {/* Company */}
          <div className=" foCont col-6 col-md-4 col-lg-2 mb-4">
            <p className="fs-5">Company</p>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
          </div>

          {/* Quick links */}
          <div className=" foCont col-6 col-md-4 col-lg-2 mb-4">
            <p className="fs-5">Quick links</p>
            <a href="">Upcoming IPOs</a>
            <br />
            <a href="">Brokerage charges</a>
            <br />
            <a href="">Market holidays</a>
            <br />
            <a href="">Economic calendar</a>
            <br />
            <a href="">Calculators</a>
            <br />
            <a href="">Markets</a>
            <br />
            <a href="">Sectors</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div
          className="mt-5 text-muted small "
          style={{ fontSize: "11px", lineHeight: "1.9" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            <a href=""style={{textDecoration:"none",color:"#387ED1"}}>complaints@zerodha.com</a>, for DP related to <a href=""style={{textDecoration:"none" ,color:"#387ED1"}}> dp@zerodha.com</a>. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href=""style={{textDecoration:"none",color:"#387ED1"}}>SEBI SCORES:</a> Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <a href=""style={{textDecoration:"none",color:"#387ED1"}}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. 3 Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href=""style={{textDecoration:"none", color:"#387ED1"}}>NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="row text-center mt-3 mb-3" style={{ fontSize: "13px" }}>
          <div>
            <a href="" className="a2 mx-2">
              NSE
            </a>
            <a href="" className="a2 mx-2">
              BSE
            </a>
            <a href="" className="a2 mx-2">
              MCX
            </a>
            <a href="" className="a2 mx-2">
              Terms & conditions
            </a>
            <a href="" className="a2 mx-2">
              Policies & procedures
            </a>
            <a href="" className="a2 mx-2">
              Privacy policy
            </a>
            <a href="" className="a2 mx-2">
              Disclosure
            </a>
            <a href="" className="a2 mx-2">
              For investor's attention
            </a>
            <a href="" className="a2 mx-2">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
