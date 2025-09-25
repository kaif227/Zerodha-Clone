import React from "react";
import AccountAccordion from "./AccountAccordion";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-5">
        <h1 className="fs-3 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8 col-md-12 mb-4">
            <AccountAccordion
              name={"Account Opening"}
              Url={[
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
              ]}
            />
            <br />
            <AccountAccordion
              name={"Your Zerodha Account"}
              Url={[
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities",
              ]}
            />
            <br />
            <AccountAccordion
              name={"Kite"}
              Url={[
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alerts and Nudges",
                "General",
              ]}
            />
            <br />
            <AccountAccordion
              name={"Funds"}
              Url={[
                "Add money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates",
              ]}
            />
            <br />
            <AccountAccordion
              name={"Console"}
              Url={[
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments",
              ]}
            />
            <br />
            <AccountAccordion
              name={"Coin"}
              Url={[
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General",
              ]}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-12">
            <div
              className="p-2  mb-4"
              style={{
                fontSize: "1.1rem",
                backgroundColor: "#fff4edff",
                borderLeft: "10px solid #ff9500ff",
              }}
            >
              <ul style={{ color: "#387ED1", textDecoration: "underline",lineHeight:"2.2rem" }}>
                <li>Electricity Futures contracts expiry - September 2025</li>
                <li>Surveillance measure on scrips - September 2025</li>
              </ul>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "#f5f5f5ff",
                  padding: "15px",
                  fontSize: "1.2rem",
                }}
              >
                Quick Links
              </div>
              <div>
                <ol
                  style={{
                    paddingLeft: "30px",
                    lineHeight: "3.5rem",
                    fontSize: "1.3rem",
                    color: "#387ED1",
                    border: "1px solid #f0e8e8ff",
                    borderTop: "none",
                  }}
                >
                  <li>Track account opening</li>
                  <li>Track segment activation</li>
                  <li>Intraday margins</li>
                  <li>Kite user manual</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
