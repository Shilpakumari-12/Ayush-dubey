import React from "react";
import { Link } from "react-router-dom";
import clientArmsCrossed from "../assets/ayush_coat_1.jpg";


export default function NewsletterPage() {
  return (
    <main className="main-wrapper">
      <section className="section_hero newsletter">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="max-width-xlarge align-center">
                <div className="header-copy-wrap gap-2rem is-center">
                  <div
                    style={{ maxWidth: "35ch" }}
                    className="g-para-wrap tagline"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>Newsletter</p>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-heading-wrap heading-style-h1 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h1>
                        You’ll Love{" "}
                        <strong>
                          <em>My Emails</em>
                        </strong>
                      </h1>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "35ch" }}
                    className="g-para-wrap text-size-medium align-center"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        Use the form below to sign up and let me know where to
                        send you my next email.
                      </p>
                    </div>
                  </div>
                  <div className="newsletter_form-block w-form">
                    <form
                      id="wf-form-Newsletter-Form"
                      name="wf-form-Newsletter-Form"
                      data-name="Newsletter Form"
                      action="https://app.convertkit.com/forms/5156817/subscriptions"
                      method="post"
                      className="newsletter_form"
                      data-wf-page-id="68edeb708db1453f39c8d885"
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
                        to="/newsletter#"
                        className="button is-alternate w-button"
                      >
                        Subscribe
                      </Link>
                    </form>
                    <div className="text-size-tiny">
                      By subscribing you agree to with our{" "}
                      <Link to="/newsletter#">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_newsletter_samples">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="newsletters-samples-wrap">
                <div className="samples-screenshots-component">
                  <div className="header-copy-wrap is-center">
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-heading-wrap heading-style-h1 text-color-gray-900"
                    >
                      <div className="g-heading-rich-text w-richtext">
                        <h2>But don’t just take my word for it…</h2>
                      </div>
                    </div>
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-para-wrap text-size-medium align-center"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>Here’s what my readers have said about my emails.</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="newsletter-screenshots-wrapper">
                    <div
                      id="w-node-d2a13d9d-3ef2-a5e4-2091-844d8beb12d9-39c8d885"
                      className="newsletter-ss-img-wrapper"
                    >
                      <img
                        sizes="100vw"
                        // srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d046c_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(4)-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d046c_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(4)-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d046c_saheli%27s%20newsletter%20-%20readers%20message%20(4).avif 960w"
                        alt=""
                        //src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d046c_saheli%27s%20newsletter%20-%20readers%20message%20(4).avif"
                        loading="lazy"
                        className="newsletter-ss-img"
                      />
                    </div>
                    <div
                      id="w-node-d2a13d9d-3ef2-a5e4-2091-844d8beb12db-39c8d885"
                      className="newsletter-ss-img-wrapper"
                    >
                      <img
                        sizes="100vw"
                        //srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0478_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(1)-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0478_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(1)-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0478_saheli%27s%20newsletter%20-%20readers%20message%20(1).avif 960w"
                        alt=""
                        //src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0478_saheli%27s%20newsletter%20-%20readers%20message%20(1).avif"
                        loading="lazy"
                        className="newsletter-ss-img"
                      />
                    </div>
                    <div
                      id="w-node-d2a13d9d-3ef2-a5e4-2091-844d8beb12dd-39c8d885"
                      className="newsletter-ss-img-wrapper"
                    >
                      <img
                        sizes="100vw"
                        //srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d047e_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(3)-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d047e_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(3)-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d047e_saheli%27s%20newsletter%20-%20readers%20message%20(3).avif 960w"
                        alt=""
                        //src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d047e_saheli%27s%20newsletter%20-%20readers%20message%20(3).avif"
                        loading="lazy"
                        className="newsletter-ss-img"
                      />
                    </div>
                    <div
                      id="w-node-d2a13d9d-3ef2-a5e4-2091-844d8beb12df-39c8d885"
                      className="newsletter-ss-img-wrapper"
                    >
                      <img
                        sizes="100vw"
                        //srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0472_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(2)-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0472_saheli%27s%2520newsletter%2520-%2520readers%2520message%2520(2)-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0472_saheli%27s%20newsletter%20-%20readers%20message%20(2).avif 960w"
                        alt=""
                        //src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68eded2a6f627db2431d0472_saheli%27s%20newsletter%20-%20readers%20message%20(2).avif"
                        loading="lazy"
                        className="newsletter-ss-img"
                      />
                    </div>
                  </div> */}
                </div>
                <div className="w-layout-grid samples_links_component">
                  <div className="intro_image-wrapper">
                    <img
                      sizes="100vw"
                      alt=""
                      src={clientArmsCrossed}
                      loading="eager"
                      className="intro_image"
                    />
                  </div>
                  <div className="header-copy-wrap">
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-heading-wrap heading-style-h2 text-color-gray-900"
                    >
                      <div className="g-heading-rich-text w-richtext">
                        <h2>
                          Want to read some sample emails before you share your
                          email address?
                        </h2>
                      </div>
                    </div>
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-para-wrap text-size-medium"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>
                          You&#x27;ll love my newsletters if you are navigating the world of academic publishing as a doctor, medical resident, PhD scholar, or researcher. I share actionable tips on manuscript writing, statistical analysis, and getting published in Scopus, PubMed, and WoS journals.
                        </p>
                        <p>Here are a few of my most popular emails:</p>
                      </div>
                    </div>
                    <div className="list-items-wrap">
                      <div
                        id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a45-39c8d885"
                        className="list-item"
                      >
                        <div className="list-item-icon-wrap">
                          <div className="icon-embed-xxsmall w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            target="_blank"
                            className="text-size-medium text-color-orange-700"
                          >
                            10 Steps to Writing a High-Impact Introduction Section...
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a4a-39c8d885"
                        className="list-item"
                      >
                        <div className="list-item-icon-wrap">
                          <div className="icon-embed-xxsmall w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            target="_blank"
                            className="text-size-medium text-color-orange-700"
                          >
                            How to Choose the Perfect Target Journal for Your Research
                          </a>
                        </div>
                      </div>
                      <div
                        id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a4f-39c8d885"
                        className="list-item"
                      >
                        <div className="list-item-icon-wrap">
                          <div className="icon-embed-xxsmall w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            target="_blank"
                            className="text-size-medium text-color-orange-700"
                          >
                            Top 5 Reasons Your Manuscript Was Rejected (And How to Fix It)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_hero newsletter">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="max-width-xlarge align-center">
                <div className="header-copy-wrap is-center gap-2rem">
                  <div
                    style={{ maxWidth: "14ch" }}
                    className="g-heading-wrap heading-style-h1 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h2>
                        Sign up right here to{" "}
                        <strong>
                          <em>get my future emails</em>
                        </strong>
                      </h2>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "42ch" }}
                    className="g-para-wrap text-size-medium align-center"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        I’ll send you an email every week (ish) and share my
                        best free content for building a thriving and inclusive
                        business.
                      </p>
                      <p>
                        You can unsubscribe anytime — whether it’s because you
                        need a break, decide that don’t like my writing, or want
                        to focus on writing your own stuff without too much
                        external influence or distractions.
                      </p>
                    </div>
                  </div>
                  <div className="margin-top margin-small">
                    <div className="newsletter_form-block w-form">
                      <form
                        id="wf-form-Newsletter-Form"
                        name="wf-form-Newsletter-Form"
                        data-name="Newsletter Form"
                        action="https://app.convertkit.com/forms/5156817/subscriptions"
                        method="post"
                        className="newsletter_form"
                        data-wf-page-id="68edeb708db1453f39c8d885"
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
                          to="/newsletter#"
                          className="button is-alternate w-button"
                        >
                          Subscribe
                        </Link>
                      </form>
                      <div className="text-size-tiny">
                        By subscribing you agree to with our{" "}
                        <Link to="/newsletter#">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
