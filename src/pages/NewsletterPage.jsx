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
                      <p className="fh-eyebrow">PODCAST NEWSLETTER</p>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-heading-wrap heading-style-h1 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h1>
                        You'll Appreciate{" "}
                        <span className="fh-highlight">My Research Insights</span>
                      </h1>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "35ch" }}
                    className="g-para-wrap text-size-medium align-center"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        Fill out the form below to subscribe and let me know
                        where to send my next research updates.
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
                        className="button fh-btn w-button"
                      >
                        Join Here
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
                        <p>Here's what my clients have to say about my research support:</p>
                      </div>
                    </div>
                  </div>
                  <div className="newsletter-screenshots-wrapper" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "40px" }}>
                    {[
                      {
                        title: "Thank you! I received it! :D",
                        body: "Hi Ayush,\n\nI actually downloaded your book and wanted to let you know my thoughts.\n\n<mark style='background: var(--fh-yellow-pale); padding: 2px 4px;'>It is simply amazing! I read the first few chapters and could easily get started with my abstract.</mark>\n\nLooking forward to more content from you.\n\nBest,\nAlex",
                      },
                      {
                        title: "Wow, you are amazing! :D",
                        body: "Hi Ayush,\n\nThis is exactly what I've been looking for. I am very much interested in your writing courses and how they can help me publish.\n\n<mark style='background: var(--fh-yellow-pale); padding: 2px 4px;'>Your tips are so practical and easy to follow. I already submitted my first paper!</mark>\n\nThank you so much,\nSarah",
                      },
                      {
                        title: "This detailed form is exactly what I need! :D",
                        body: "Hi Ayush,\n\nThe detailed explanation and step-by-step guidance in your emails are really helpful for someone like me who is just starting out.\n\n<mark style='background: var(--fh-yellow-pale); padding: 2px 4px;'>The checklist for manuscript submission was a life-saver!</mark>\n\nKeep up the great work.\nJohn",
                      },
                      {
                        title: "Your detailed form is wonderful... :D",
                        body: "Hi Ayush,\n\nThank you for this guide. I was struggling with selecting the right journal, and your recent newsletter cleared all my doubts.\n\n<mark style='background: var(--fh-yellow-pale); padding: 2px 4px;'>I appreciate the time you take to explain these complex topics so simply.</mark>\n\nBest regards,\nEmily",
                      }
                    ].map((t, i) => (
                      <div key={i} style={{ border: "1px solid var(--fh-orange)", borderRadius: "12px", padding: "24px", background: "#fff", textAlign: "left" }}>
                        <div style={{ fontWeight: 600, marginBottom: "16px", display: "flex", justifyContent: "space-between" }}>
                          <span>{t.title}</span>
                          <span style={{ color: "#888" }}>Ayush Dubey</span>
                        </div>
                        <div style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--fh-body)" }} dangerouslySetInnerHTML={{ __html: t.body }} />
                      </div>
                    ))}
                  </div>
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
                          Want to see some sample publications before you share your email address?
                        </h2>
                      </div>
                    </div>
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-para-wrap text-size-medium"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>
                          You'll really benefit from my newsletters if you're a doctor, medical resident, PhD scholar or researcher eager to enhance your publication profile.
                        </p>
                        <p>Here are some of the most requested topics:</p>
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
                            10 Steps to Use ChatGPT for Research Assistance...
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
                            Run Research With ChatGPT - 10 clinical AI prompts...
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
                            Trust issues with ChatGPT? Here is How You Can Check Them
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
                        Sign up here to{" "}
                        <span className="fh-highlight">receive my future research updates</span>
                      </h2>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "42ch" }}
                    className="g-para-wrap text-size-medium align-center"
                  >
                    <div className="g-para-rich-text w-richtext text-center">
                      <p>
                        I'll send you emails weekly (or twice a week) with the best advice for research publication.
                      </p>
                      <p>
                        You can unsubscribe at any time — whether you need a break, decide my writing isn't for you, or want to focus on your own research without distractions.
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
                          className="button fh-btn w-button"
                        >
                          Join Here
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
