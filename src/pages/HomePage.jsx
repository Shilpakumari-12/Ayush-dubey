import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clientArmsCrossed from "../assets/client_arms_crossed.jpg";
import clientGesturing from "../assets/client_gesturing.jpg";
export default function HomePage() {
  const sectionRef = useRef(null);
  const [leftY, setLeftY] = useState(0);
  const [rightY, setRightY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative scroll progress through the viewport (0 to 1)
      const totalDistance = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDistance));

      // Translate back and forth on scroll
      const offset = (progress - 0.5) * 260; // moves up to ~130px back and forth
      setLeftY(-offset);
      setRightY(offset);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="main-wrapper">
      <header className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid hero_component">
                <div className="header-copy-wrap z-index-2">
                  <div
                    style={{ maxWidth: "16ch" }}
                    className="g-heading-wrap heading-style-h2 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h1>
                        Research Publication Consultant for{" "}
                        <strong>Medical Professionals & Scholars</strong>
                      </h1>
                    </div>
                  </div>
                  <div className="show-on-tablet">
                    <img
                      src={clientArmsCrossed}
                      alt="Research Publication Consultant"
                      className="hero_image"
                      style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '2rem 0', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ maxWidth: "45ch" }} className="g-para-wrap">
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        Helping Doctors, Medical Residents, PhD Scholars & Researchers Publish in Scopus, PubMed & WoS Journals.
                      </p>
                      <p>
                        We specialize in Manuscript Writing, Statistical Analysis, and comprehensive Journal Publication Support to ensure your research gets the recognition it deserves.
                      </p>
                    </div>
                  </div>
                  <div className="button-group">
                    <Link to="/consultation" className="button w-button">
                      Work With Me
                    </Link>
                  </div>
                </div>
                <div className="hero_image-wrap hide-tablet">
                  <img
                    src={clientArmsCrossed}
                    alt="Research Publication Consultant"
                    className="hero_image"
                    style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        data-w-id="f17aa683-a0f6-bd5e-53fe-f8ff56662ecf"
        className="featured-in-section"
      >
        <div className="padding-section-small">
          <div className="margin-bottom margin-large">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <p className="text-size-medium text-color-white">FEATURED IN</p>
              </div>
            </div>
          </div>
          <div className="logo3_component">
            <div className="logo3_list">
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ed8-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7111_pepper%20content.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eda-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7119_scoopwhoop.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662edc-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7113_TEDx.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ede-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7115_telegraph.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee0-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7117_women%27s%20web.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee2-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e710f_flexifunnel.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee4-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7111_pepper%20content.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee6-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7119_scoopwhoop.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
            </div>
            <div className="logo3_list">
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee9-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7113_TEDx.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eeb-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7115_telegraph.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eed-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7117_women%27s%20web.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eef-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e710f_flexifunnel.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef1-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7111_pepper%20content.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef3-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7119_scoopwhoop.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef5-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7113_TEDx.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef7-f4a44663"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec919b5f8509d0743e7115_telegraph.png"
                  alt=""
                  className="logo3_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_path">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="max-width-xlarge align-center">
                <div className="header-copy-wrap is-center">
                  <div
                    style={{ maxWidth: "35ch" }}
                    className="g-para-wrap text-color-brown-700 text-style-allcaps"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>HOW CAN I HELP</p>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-heading-wrap heading-style-h2 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h2>
                        Your Path to Success <strong>Starts Here</strong>
                      </h2>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "35ch" }}
                    className="g-para-wrap text-size-medium align-center"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>Let’s get you the info you’re looking for.</p>
                      <p>Which of these options sounds most like you?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="margin-top margin-large">
                <div className="path-cards-wrap">
                  <div className="path-card">
                    <div className="header-copy-wrap is-center">
                      <img
                        src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93cb7e8e64a07782bb3de_path%20card%20img%202.avif"
                        loading="lazy"
                        sizes="(max-width: 798px) 100vw, 798px"
                        srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93cb7e8e64a07782bb3de_path%20card%20img%202-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93cb7e8e64a07782bb3de_path%20card%20img%202.avif 798w"
                        alt=""
                        className="path-card-img"
                      />
                      <div
                        style={{ maxWidth: "16ch" }}
                        className="g-heading-wrap heading-style-h4 text-color-brown-700"
                      >
                        <div className="g-heading-rich-text w-richtext">
                          <h3>Medical Professional</h3>
                        </div>
                      </div>
                      <div style={{ maxWidth: "none" }} className="g-para-wrap">
                        <div className="g-para-rich-text w-richtext">
                          <p>
                            Through our expertise and academic insights,
                            we&#x27;ll streamline your manuscript writing,
                            optimize your statistical data, and achieve
                            high-impact journal publications.
                          </p>
                          <p>
                            Let&#x27;s create a tailored publication strategy that resonates
                            with peer reviewers and propels your academic career
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="button-group">
                      <Link to="/consultation" className="button w-button">
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="path-card">
                    <div className="header-copy-wrap is-center">
                      <img
                        src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93ebe1b1598e618d48729_path%20researchr%20img.avif"
                        loading="lazy"
                        sizes="(max-width: 798px) 100vw, 798px"
                        srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93ebe1b1598e618d48729_path%20researchr%20img-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e93ebe1b1598e618d48729_path%20researchr%20img.avif 798w"
                        alt=""
                        className="path-card-img"
                      />
                      <div
                        style={{ maxWidth: "16ch" }}
                        className="g-heading-wrap heading-style-h4 text-color-brown-700"
                      >
                        <div className="g-heading-rich-text w-richtext">
                          <h3>PhD Scholar</h3>
                        </div>
                      </div>
                      <div style={{ maxWidth: "none" }} className="g-para-wrap">
                        <div className="g-para-rich-text w-richtext">
                          <p>
                            With our guidance and proven strategies, you&#x27;ll
                            navigate the peer-review process, respond to reviewers
                            confidently, and establish yourself as a
                            sought-after researcher.{" "}
                          </p>
                          <p>
                            Let&#x27;s embark on this transformative research journey
                            together.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="button-group">
                      <Link to="/#f101-waitlist" className="button w-button">
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_intro">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="w-layout-grid intro_component">
                <div className="header-copy-wrap">
                    <div
                      style={{ maxWidth: "35ch" }}
                      className="g-para-wrap text-color-brown-700 text-style-allcaps"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>Hey there, dedicated researcher!</p>
                      </div>
                    </div>
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-heading-wrap heading-style-h2 text-color-gray-900"
                    >
                      <div className="g-heading-rich-text w-richtext">
                        <h2>
                          We are 60 Day Publications, your{" "}
                          <strong>Publication Partner</strong>
                        </h2>
                      </div>
                    </div>
                    <div className="margin-top margin-xxsmall">
                      <div className="intro_image-wrapper">
                        <img
                          src={clientGesturing}
                          alt="Research Publication Consultant"
                          className="intro_image"
                          style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="header-copy-wrap gap-2rem">
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-para-wrap text-size-medium"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>
                          If you&#x27;re tired of facing journal rejections and
                          struggling with complex statistical analyses, we&#x27;ve
                          got your back. Together, let&#x27;s harness the power of
                          high-impact research to skyrocket your academic success.
                        </p>
                      </div>
                    </div>
                  <div className="list-items-wrap">
                    <div
                      id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a45-f4a44663"
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
                        Proven strategies to grow your following and increase
                        engagement
                      </div>
                    </div>
                    <div
                      id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a4a-f4a44663"
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
                        Expert guidance to generate quality leads and boost your
                        revenue
                      </div>
                    </div>
                    <div
                      id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a4f-f4a44663"
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
                        Personalized approach tailored to your unique business
                        goals
                      </div>
                    </div>
                    <div
                      id="w-node-_0c6a5ce3-44d2-fc22-5e00-33a22a536a54-f4a44663"
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
                        Support to help you crush it in the ever-changing
                        digital landscape
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-para-wrap text-size-medium"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        <strong>
                          Ready to take your business to new heights?
                        </strong>
                      </p>
                      <p>
                        Let&#x27;s connect and make academic publishing work for you.
                      </p>
                    </div>
                  </div>
                  <div className="button-group">
                    <Link to="/consultation" className="button w-button">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_testimonial13">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="testimonial_cards_list">
                <div className="w-layout-grid testimonial_card">
                  <div
                    id="w-node-ecb6e865-cbf4-eb86-bd2a-7768ff3c70a6-f4a44663"
                    className="testimonial13_content"
                  >
                    <div className="testimonial13_rating-wrapper">
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="margin-vertical margin-medium">
                      <div className="heading-style-h6">
                        &quot;60 Day Publications&#x27; timing, expertise, and our existing
                        connection made her offer irresistible. Her proven track
                        record and social proof gave me the confidence to trust
                        her with my Instagram growth.
                        <br />‍<br />
                        In just the first month, 60 Day Publications&#x27; strategies
                        delivered outstanding results. I&#x27;m now entering the
                        second month with complete satisfaction and excitement.
                        If you&#x27;re looking for someone who truly understands
                        academic publishing and delivers exceptional results, 60 Day Publications is
                        the real deal.&quot;
                      </div>
                    </div>
                    <div className="testimonial13_client">
                      <div className="testimonial13_client-info">
                        <p className="text-weight-semibold">Chase Dimond</p>
                        <p>Email publication Expert</p>
                      </div>
                      <div className="testimonial13_divider"></div>
                      <div className="testimonial13_logo-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e8abbfa75c2368a219fd8b_logo-webflow.svg"
                          alt=""
                          className="testimonial13_logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial13_client-image-wrapper">
                    <img
                      sizes="(max-width: 1100px) 100vw, 1100px"
                      srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889dc982075b45092108_chase%20dimond-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889dc982075b45092108_chase%20dimond-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889dc982075b45092108_chase%20dimond.avif 1100w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889dc982075b45092108_chase%20dimond.avif"
                      loading="lazy"
                      className="testimonial13_client-image"
                    />
                  </div>
                </div>
                <div className="w-layout-grid testimonial_card">
                  <div className="testimonial13_client-image-wrapper">
                    <img
                      sizes="(max-width: 1100px) 100vw, 1100px"
                      srcset="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889d93852b989ab8791b_sharan-p-500.avif 500w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889d93852b989ab8791b_sharan-p-800.avif 800w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889d93852b989ab8791b_sharan-p-1080.avif 1080w, https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889d93852b989ab8791b_sharan.avif 1100w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68ec889d93852b989ab8791b_sharan.avif"
                      loading="lazy"
                      className="testimonial13_client-image"
                    />
                  </div>
                  <div
                    id="w-node-_90c8a307-b00d-c6ed-3db8-bca43022cd99-f4a44663"
                    className="testimonial13_content"
                  >
                    <div className="testimonial13_rating-wrapper">
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="testimonial13_rating-icon">
                        <div className="icon-embed-xsmall w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="margin-vertical margin-medium">
                      <div className="heading-style-h5">
                        &quot;I think one of the best sources out there to, you
                        know, create an additional source of income for yourself
                        is 60 Day Publications&#x27; research course. Now, I have
                        personally worked with her on improving my business, so
                        I know that when she says something, you better follow
                        it.&quot;
                      </div>
                    </div>
                    <div className="testimonial13_client">
                      <div className="testimonial13_client-info">
                        <p className="text-weight-semibold">Sharan Hegde</p>
                        <p>Founder &amp; CEO, The 1% Club</p>
                      </div>
                      <div className="testimonial13_divider"></div>
                      <div className="testimonial13_logo-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/68e4be4f857104b3f4a445f8/68e8abbfa75c2368a219fd8b_logo-webflow.svg"
                          alt=""
                          className="testimonial13_logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="section_about">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="w-layout-grid hero_component">
                <div className="header-copy-wrap z-index-2">
                  <div
                    style={{ maxWidth: "16ch" }}
                    className="g-heading-wrap heading-style-h2 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h2>
                        I&#x27;ll guide you towards success with effective
                        publication strategies
                      </h2>
                    </div>
                  </div>
                  <div className="show-on-tablet">
                    <img
                      src={clientArmsCrossed}
                      alt="Research Publication Consultant"
                      className="hero_image"
                      style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '2rem 0', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-para-wrap text-size-small"
                  >
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        As an ambitious individual, I understand the challenges
                        of conforming to societal expectations for success. But
                        there&#x27;s a better way.
                      </p>
                      <p>
                        Through effective publication, I&#x27;ve discovered the
                        power of embracing your true self and sharing unique
                        perspectives. Let me guide you on this transformative
                        journey.
                      </p>
                      <p>
                        If you&#x27;re struggling to get your papers accepted,
                        it&#x27;s time to tap into authentic publication.
                        Together, we&#x27;ll craft strategies that align with
                        your values, amplify your voice, and leave a lasting
                        impact.
                      </p>
                      <p>
                        Let&#x27;s build a business that brings you joy,
                        fulfillment, and helps clients achieve their goals
                        authentically. Get in touch today, and let&#x27;s embark
                        on this exciting adventure together.
                      </p>
                    </div>
                  </div>
                  <div className="button-group">
                    <Link to="/consultation" className="button w-button">
                      Work with me
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={clientGesturing}
                    loading="lazy"
                    alt="Research Publication Consultant"
                    style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
