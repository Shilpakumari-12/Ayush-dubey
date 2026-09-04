import React from "react";
import { Link } from "react-router-dom";

export default function RefundPolicyPage() {
  return (
    <main className="main-wrapper">
      <section className="section_hero legal">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="margin-bottom margin-large">
                <h1>Refund Policy</h1>
              </div>
              <div className="leagal-copy-wrap">
                <div className="legal-rich-text w-richtext">
                  <h3>
                    Medical Research Academy, being comprised of digital access and
                    downloadable files, is usually a non-refundable program. The
                    same applies to our Masterclasses as well.
                  </h3>
                  <p>​</p>
                  <p>
                    However, Medical Research Academy comes with personal support
                    for all students in our community - so you would have 12
                    months from your date of purchase to actually implement what
                    you learnt.
                  </p>
                  <p>​</p>
                  <h6>In exceptional cases, with substantial proof that :</h6>
                  <p>
                    1. You did not get any results despite 60 days of
                    implementation.
                  </p>
                  <p>2. You did not get access to course content.</p>
                  <p>​</p>
                  <h6>A refund may be issued.</h6>
                  <p>
                    When you enroll for Medical Research Academy, it is mutually
                    understood that you signed up at your own will with full
                    understanding that the implementation of the materials to
                    get results will be your sole responsibility. That being
                    said, we will be aiding you with setbacks, as long as they
                    are a part of our curriculum.
                  </p>
                  <p>​</p>
                  <h6>
                    It is also to be noted that your subscription may be
                    canceled with no refunds in case of the following events :
                  </h6>
                  <ol role="list">
                    <li>
                      {" "}
                      Fraudulent activities include but are not limited to:
                      copying our content, sharing login details with other
                      parties except yourself, and reselling the course.
                    </li>
                    <li>
                      Verbal Disrespect towards Medical Research Academy Team
                      Members or Community Members
                    </li>
                    <li>
                      Any activities deemed as inappropriate by the research
                      101 Academy Team ( for ex. unsolicited unprofessional
                      messages )<br />{" "}
                    </li>
                  </ol>
                  <p>
                    We hope to have you as a valuable member of the research
                    101 Academy Community.
                  </p>
                  <p>‍</p>
                  <h6>
                    You should receive your log-in details within 24hours of
                    purchase, further details are to be shared in Your Welcome
                    Kit. In case of unexpected errors, you can connect with
                    60 Day Publications at{" "}
                    <a href="mailto:ayushdubey333@gmail.com">
                      ayushdubey333@gmail.com
                    </a>
                    .
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
