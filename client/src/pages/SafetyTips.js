import React from "react";
import check from "../assets/images/safe-check.png";
import lock from "../assets/images/lock.png";
import credit from "../assets/images/credit.png";
import notebook from "../assets/images/notebook.png";
import measures from "../assets/images/measures.png";

export const SafetyTips = () => {
  return (
    <section id="stay_safe_part">
      <div className="container">
        <div className="img">
          <img src={check} alt="" />
        </div>

        <div className="heading">
          <h3>Stay safe on Borrow it</h3>
          <p>
            At Borrow it, we are 100% committed to making sure that your
            experience on our platform is as safe as possible. Here's some
            advice on how to stay safe while trading on Borrow it.
          </p>
        </div>

        <div className="safety_advice">
          <img src={lock} alt="" />
          <h3>General safety advice</h3>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Keep things local</h4>
                  <p>
                    Meet the seller in person and check the item before you make
                    a payment. Where available, use and have items delivered to
                    you with 100% buyer protection.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>While applying for a job</h4>
                  <p>
                    Research the job and the employer before you apply. Don’t
                    give out personal information before meeting the employer in
                    person. Avoid going to remote locations for an interview.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Exchange item and payment at the same time</h4>
                  <p>
                    Buyers: don't make any payments before receiving an item.
                    Sellers: don't send an item before receiving payment.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h4>Use common sense</h4>
                  <p>
                    Avoid anything that appears too good to be true, such as
                    unrealistically low prices and promises of quick money.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Never give out financial information</h4>
                  <p>
                    This includes bank account details, eBay/PayPal info, and
                    any other information that could be misused.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_Scams">
          <img src={credit} alt="" />
          <h3>Scams and frauds to watch out for</h3>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Fake payment services</h4>
                  <p>
                    Bikroy does not offer any form of payment scheme or
                    protection. Please report any emails claiming to offer such
                    services. Avoid using online payment services or escrow
                    sites unless you are 100% sure that they are genuine.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Fake information requests</h4>
                  <p>
                    Bikroy never sends emails requesting your personal details.
                    If you receive an email asking you to provide your personal
                    details to us, do not open any links. Please report the
                    email and delete it.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Fake fee requests</h4>
                  <p>
                    Avoid anyone that asks for extra fees to buy or sell an item
                    or service. Bikroy never requests payments for its basic
                    services, and doesn't allow items that are not located in
                    Sri Lanka, so import and brokerage fees should never be
                    required.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h4>
                    Requests to use money transfer services such as Western
                    Union or MoneyGram
                  </h4>
                  <p>
                    Avoid anything that appears too good to be true, such as
                    unrealistically low prices and promises of quick money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety_measures_by_brrowit">
          <img src={measures} alt="" />
          <h3>Safety measures provided by Borrow it</h3>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Email address is not shown on your ad</h4>
                  <p>This ensures that you are protected from spam.</p>
                </div>

                <div className="col-lg-6">
                  <h4>Option to hide phone number on your ad</h4>
                  <p>
                    You can choose to hide your phone number and still be
                    contacted by interested buyers via chat.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Continuous improvements</h4>
                  <p>
                    We make constant imrpovements to our technology to detect
                    and prevent suspicious or inappropriate activity.
                  </p>
                </div>
                <div className="col-lg-6">
                  <h4>Block repeat offendors</h4>
                  <p>
                    We track reports of suspicious or illegal activity to
                    prevent offendors from using the site again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="safety_measures_by_brrowit reporting">
          <img src={notebook} alt="" />
          <h3>Reporting a safety issue</h3>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Victim of a scam?</h4>
                  <p>
                    If you feel that you have been the victim of a scam, please
                    report your situation to us immediately. If you have been
                    cheated, we also recommend that you contact your local
                    police department.
                  </p>
                </div>

                <div className="col-lg-6">
                  <h4>Information sharing</h4>
                  <p>
                    Borrow it is committed to the privacy of our users and does
                    not share user information publicly. However, we take safety
                    seriously and will cooperate with law enforcement if receive
                    requests regarding fraudulent or other criminal activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
