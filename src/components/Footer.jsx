import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer1_component">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xxlarge">
            <div className="padding-bottom padding-xxlarge">
              <div className="w-layout-grid footer1_top-wrapper">
                <div className="footer1_left-wrapper">
                  <div className="margin-bottom margin-small">
                    <Link to="/#" className="footer1_logo-link w-nav-brand">
                      <strong style={{ fontSize: '1.5rem', color: '#1a1a1a' }}>60Day Publications</strong>
                    </Link>
                  </div>
                  <div className="margin-bottom margin-small">
                    <div>
                      Research Publication Consultant based in New Delhi, Delhi, India. Join our newsletter to stay up to date.
                    </div>
                  </div>
                  <div className="newsletter_form-block w-form">
                    <form
                      id="wf-form-Newsletter-Form"
                      name="wf-form-Newsletter-Form"
                      data-name="Newsletter Form"
                      // action="https://app.convertkit.com/forms/5156817/subscriptions"
                      method="post"
                      className="newsletter_form"
                      data-wf-page-id="68e4be51857104b3f4a44663"
                      data-wf-element-id="ef8b8f09-9fe6-17cf-b5dd-3435d94ea48b"
                    >
                      <input
                        className="form_input w-node-ef8b8f09-9fe6-17cf-b5dd-3435d94ea48c-d94ea48a w-input"
                        maxLength="256"
                        name="fields[first_name]"
                        data-name="fields[first_name]"
                        placeholder="First Name"
                        type="text"
                        id="fields[first_name]"
                        required=""
                      />
                      <input
                        className="form_input w-input"
                        maxLength="256"
                        name="email_address"
                        data-name="email_address"
                        placeholder="Enter your email"
                        type="email"
                        id="email_address"
                        required=""
                      />
                      <Link
                        id="w-node-ef8b8f09-9fe6-17cf-b5dd-3435d94ea48e-d94ea48a"
                        to="/#"
                        className="button is-alternate w-button"
                      >
                        Subscribe
                      </Link>
                    </form>
                    <div className="text-size-tiny">
                      By subscribing you agree to with our{" "}
                      <Link to="/#">
                        <span>Privacy Policy</span>
                      </Link>{" "}
                      and provide consent to receive updates from our company.
                    </div>
                    <div className="success-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid footer1_menu-wrapper">
                  <div className="footer1_link-list">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-weight-semibold">Quick Links</div>
                    </div>
                    <Link to="/" className="footer1_link" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
                    <Link to="/consultation" className="footer1_link" style={{textDecoration: 'none', color: 'inherit', display: 'block', marginTop: '0.5rem'}}>Work With Me</Link>
                    <Link to="/newsletter" className="footer1_link" style={{textDecoration: 'none', color: 'inherit', display: 'block', marginTop: '0.5rem'}}>Newsletters</Link>
                  </div>
                  
                  <div className="footer1_link-list">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-weight-semibold">Services</div>
                    </div>
                    <Link to="/consultation" className="footer1_link" style={{textDecoration: 'none', color: 'inherit'}}>Manuscript Writing</Link>
                    <Link to="/consultation" className="footer1_link" style={{textDecoration: 'none', color: 'inherit', display: 'block', marginTop: '0.5rem'}}>Statistical Analysis</Link>
                    <Link to="/consultation" className="footer1_link" style={{textDecoration: 'none', color: 'inherit', display: 'block', marginTop: '0.5rem'}}>Journal Publication</Link>
                  </div>

                  <div className="footer1_link-list">
                    <div className="margin-bottom margin-xsmall">
                      <div className="text-weight-semibold">Connect with us</div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/ayush-dubey-08a032145?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer1_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                      <div>LinkedIn</div>
                    </a>
                    <a
                      href="mailto:ayushdubey333@gmail.com"
                      onClick={(e) => {
                        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                        if (!isMobile) {
                          e.preventDefault();
                          window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=ayushdubey333@gmail.com",
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer1_social-link w-inline-block"
                      title="Send email to ayushdubey333@gmail.com"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 6L12 13L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Mail</div>
                    </a>
                    <Link
                      to="/"
                      className="footer1_social-link w-inline-block"
                    >
                      <div className="icon-embed-xsmall w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <line
                            x1="2"
                            y1="12"
                            x2="22"
                            y2="12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Website</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-divider"></div>
            <div className="padding-top padding-medium">
              <div className="footer1_bottom-wrapper">
                <div className="footer1_credit-text">
                  © 2025 60 Day Publications. All rights reserved.
                </div>
                <div className="w-layout-grid footer1_legal-list">
                  <Link to="/refund-policy" className="footer1_legal-link">
                    Refund Policy
                  </Link>
                  <Link to="/privacy-policy" className="footer1_legal-link">
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-and-conditions"
                    className="footer1_legal-link"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
