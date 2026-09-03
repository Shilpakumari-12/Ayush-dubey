import React, { useState } from "react";
import { Link } from "react-router-dom";
import clientArmsCrossed from "../assets/client_arms_crossed.jpg";
import clientGesturing from "../assets/gesturingAyush.png";

import testimonial1 from "../assets/images/testimonial-1.jpg";
import sudeepAvatar from "../assets/sudeep.jpg";
import whoIsThisForDoctor from "../assets/images/consultation_doctor.jpg";
import ayushCoat1 from "../assets/stillPhoto.png";
import ayushCoat2 from "../assets/ayush_coat_2.jpg";
import ayushCoat3 from "../assets/ayush_coat_3.jpg";
import step1Image from "../assets/images/step1_target_journal.jpg";
import step2Image from "../assets/images/step2_writing_paper.jpg";
import step3Image from "../assets/images/step3_published_paper.jpg";
import logoA from "../assets/logos/1.png";
import logoB from "../assets/logos/2.png";
import logoC from "../assets/logos/3.png";
import logoD from "../assets/logos/4.png";
import logoE from "../assets/logos/5.png";
import logoF from "../assets/logos/6.png";
import logoG from "../assets/logos/7.png";
import logoH from "../assets/logos/8.png";
import logoI from "../assets/logos/9.png";
import logoJ from "../assets/logos/10.png";
import logoK from "../assets/logos/11.png";
import logoL from "../assets/logos/12.png";
export default function ConsultationPage() {
  const spotlightLogos = [logoA, logoB, logoC, logoD, logoE, logoF, logoG, logoH, logoI, logoJ, logoK, logoL];
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqList = [
    {
      question: "How can I get started with research publication support?",
      answer: (
        <p>
          Simply choose the research service that best matches your requirements and share your research details with us. Our consultant will review your requirements and guide you through the next steps, whether you need manuscript preparation, statistical analysis, journal selection, or publication support.
        </p>
      ),
    },
    {
      question: "What if I don't know which research service I need?",
      answer: (
        <p>
          No problem. You can connect with our research consultant and discuss your research topic, study design, manuscript status, and publication goals. We will help you identify the most suitable service based on your requirements.
        </p>
      ),
    },
    {
      question: "How long does the consultation usually last?",
      answer: (
        <p>
          A consultation generally lasts around <strong>30–60 minutes</strong>, depending on the complexity of your research. The discussion may cover your research objectives, methodology, statistical requirements, manuscript status, and target journal. For projects requiring detailed guidance, additional sessions may be recommended.
        </p>
      ),
    },
    {
      question: "Do you provide support for Scopus, PubMed, and Web of Science journals?",
      answer: (
        <p>
          Yes. We provide research publication support for journals indexed in <strong>Scopus, PubMed, and Web of Science</strong>, including guidance on journal selection, manuscript preparation, formatting, submission, and responding to reviewer comments. Journal acceptance, however, depends on the journal's editorial and peer-review process.
        </p>
      ),
    },
    {
      question: "Is my research and manuscript information kept confidential?",
      answer: (
        <p>
          Yes. We treat your research data, manuscript, unpublished findings, and other project-related information as confidential. Your information will be handled responsibly and will not be shared with third parties without appropriate authorization.
        </p>
      ),
    },
    {
      question: "What if I need additional support after the consultation?",
      answer: (
        <p>
          We offer continued support based on your research needs. This may include <strong>manuscript editing, statistical analysis, journal selection, formatting, submission assistance, reviewer-response support, and publication guidance</strong>. You can continue with the relevant service depending on your project requirements.
        </p>
      ),
    },
  ];

  return (
    <main className="main-wrapper">
      <header className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid hero_component">
                <div className="header-copy-wrap z-index-2">
                  <div
                    style={{ maxWidth: "18ch" }}
                    className="g-heading-wrap heading-style-h1 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h1>
                        Need Help Getting Published In Scopus/WoS Journals? <strong>I'm Here...</strong>
                      </h1>
                    </div>
                  </div>
                  <div className="show-on-tablet">
                    <img
                      src={clientGesturing}
                      alt="Research Publication Consultant"
                      loading="eager"
                      className="hero_image"
                      style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '12px', margin: '2rem auto', display: 'block' }}
                    />
                  </div>
                  <div style={{ maxWidth: "45ch" }} className="g-para-wrap">
                    <div className="g-para-rich-text w-richtext">
                      <p>
                        I help you get maximum ROI in your publication, build a
                        unique brand, and Outperform Your Competitors with
                        Data-Backed Approach to Content and publication.
                      </p>
                    </div>
                  </div>
                  <div className="list-items-wrap">
                    <div className="list-item">
                      <div className="list-item-icon-wrap">
                        <div className="icon-embed-xxsmall w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div>Publish your research paper in Scopus/PubMed indexed journals</div>
                    </div>
                    <div className="list-item">
                      <div className="list-item-icon-wrap">
                        <div className="icon-embed-xxsmall w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div>Get 1-1 guidance for publication</div>
                    </div>
                    <div className="list-item">
                      <div className="list-item-icon-wrap">
                        <div className="icon-embed-xxsmall w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div>Accelerate your academic career</div>
                    </div>
                  </div>
                  <div className="button-group">
                    <a
                      href="https://wa.me/917307726842"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button fh-btn w-button"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>
                <div className="hero_image-wrap v2 hide-tablet">
                  <img
                    src={clientGesturing}
                    alt="Research Publication Consultant"
                    loading="eager"
                    className="hero_image"
                    style={{ borderRadius: '12px', width: '100%', maxWidth: '450px', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <section
        data-w-id="f17aa683-a0f6-bd5e-53fe-f8ff56662ecf"
        className="featured-in-section"
      > */}
      <style>{`
  .featured-in-section {
    background-color: var(--fh-brown-bg, #935a16) !important;
    border-top: none;
    border-bottom: none;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    overflow: hidden !important;
  }
  .featured-in-section .text-color-white {
    color: #ffffff !important;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 1rem;
  }
  .logo3_component {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow: hidden !important;
  }
  .logo3_list {
    display: flex !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: space-around !important;
    gap: 80px !important;
    min-width: 100% !important;
    padding-right: 80px !important; 
  }
  .logo3_logo {
    height: 120px !important;
    width: 250px !important;
    object-fit: contain !important;
    mix-blend-mode: normal !important;
    opacity: 1 !important;
    filter: brightness(0) invert(1) !important; /* Make logos white */
    transition: all 0.3s ease !important;
    flex-shrink: 0 !important;
    display: block !important;
    transform: scale(1.5) !important;
  }
  .logo3_wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
    flex: 0 0 auto !important;
    width: 250px !important;
    height: 150px !important;
    overflow: hidden !important; /* Hide the overlapping white padding */
  }
`}</style>
      {/* <div className="padding-section-small">
          <div className="margin-bottom margin-large">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <p className="text-size-medium text-color-white">AS SEEN ON</p>
              </div>
            </div>
          </div>
          <div className="logo3_component">
            <div className="logo3_list">
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ed8-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eda-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoB}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662edc-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoC}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ede-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoD}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee0-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee2-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee4-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee6-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoB}
                  alt=""
                  className="logo3_logo"
                />
              </div>
            </div>
            <div className="logo3_list">
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ee9-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoC}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eeb-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoD}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eed-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662eef-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef1-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoA}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef3-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoB}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef5-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoC}
                  alt=""
                  className="logo3_logo"
                />
              </div>
              <div
                id="w-node-f17aa683-a0f6-bd5e-53fe-f8ff56662ef7-563f0d1b"
                className="logo3_wrapper"
              >
                <img
                  loading="lazy"
                  src={logoD}
                  alt=""
                  className="logo3_logo"
                />
              </div>
            </div>
          </div>
        </div> */}
      <section className="fh-spotlight">
        <p className="fh-spotlight__label">SPOTLIGHT ON</p>
        <div className="fh-marquee">
          <div className="fh-marquee__track">
            {[...spotlightLogos, ...spotlightLogos].map((logo, i) => (
              <img key={i} src={logo} alt="" className="fh-marquee__logo" />
            ))}
          </div>
        </div>
      </section>
      {/* </section> */}
      {/* Testimonial removed to match new mockup 
      <section className="section_testimonial13">
        ...
      </section>
      */}
      <section className="section_offers">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              {/* Who is this for section */}
              <div className="w-layout-grid offers_content-layout" style={{ marginBottom: "80px", alignItems: "center" }}>
                <div className="offers_image-wrapper" style={{ order: -1 }}>
                  <img src={whoIsThisForDoctor} alt="Doctor researching medical literature" loading="lazy" className="offers_image" style={{ width: '100%', maxWidth: '360px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                </div>
                <div className="offers_content-left">
                  <div className="header-copy-wrap is-left">
                    <p className="fh-eyebrow">WHO IS THIS FOR?</p>
                    <div className="g-heading-wrap heading-style-h2 text-color-gray-900">
                      <h2>Are you a doctor or researcher who struggles with...</h2>
                    </div>
                    <div className="g-para-wrap">
                      <div className="g-para-rich-text w-richtext">
                        <p><strong>Let me guess...</strong></p>
                        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "16px", lineHeight: "1.6" }}>
                          <li>You have the data but don't know where to start writing?</li>
                          <li>You get overwhelmed by formatting rules of journals?</li>
                          <li>You face constant rejections without constructive feedback?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps Section */}
              <div className="text-align-center margin-bottom margin-large">
                <div className="max-width-large align-center">
                  <h2 className="heading-style-h2">The exact process I use to get you published</h2>
                </div>
              </div>

              <div className="offers_component">
                <div className="offers_content-item first-content-item">
                  <div className="padding-vertical padding-large">
                    <div className="w-layout-grid offers_content-layout">
                      <div className="offers_content-left">
                        <div className="header-copy-wrap is-left">
                          <div className="g-heading-wrap heading-style-h3 text-color-gray-900">
                            <h2>Step 1: Choose your Target Journal & Fix the Aim, Title and Paper Structure...</h2>
                          </div>
                          <div className="g-para-wrap">
                            <div className="g-para-rich-text w-richtext">
                              <p>We will select a target journal based on your research scope and outline the structure. This is the foundation of getting accepted.</p>
                            </div>
                          </div>
                          <div className="button-group">
                            <a href="https://wa.me/917307726842" target="_blank" rel="noopener noreferrer" className="button fh-btn w-button">Let's Connect</a>
                          </div>
                        </div>
                      </div>
                      <div className="offers_image-wrapper">
                        <img src={step1Image} alt="Step 1: Target Journal Selection" loading="lazy" className="offers_image" style={{ width: '100%', maxWidth: '320px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers_content-item content-item-2">
                  <div className="padding-vertical padding-large">
                    <div className="w-layout-grid offers_content-layout">
                      <div className="offers_content-left">
                        <div className="header-copy-wrap is-left">
                          <div className="g-heading-wrap heading-style-h3 text-color-gray-900">
                            <h2>Step 2: Write the paper, address reviewer comments...</h2>
                          </div>
                          <div className="g-para-wrap">
                            <div className="g-para-rich-text w-richtext">
                              <p>Once you have the structure, writing the paper becomes a breeze. I will guide you through manuscript drafting and handling peer-review feedback effectively.</p>
                            </div>
                          </div>
                          <div className="button-group">
                            <a href="https://wa.me/917307726842" target="_blank" rel="noopener noreferrer" className="button fh-btn w-button">Let's Connect</a>
                          </div>
                        </div>
                      </div>
                      <div className="offers_image-wrapper">
                        <img src={step2Image} alt="Step 2: Manuscript Writing and Review" loading="lazy" className="offers_image" style={{ width: '100%', maxWidth: '320px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers_content-item content-item-3">
                  <div className="padding-vertical padding-large">
                    <div className="w-layout-grid offers_content-layout">
                      <div className="offers_content-left">
                        <div className="header-copy-wrap is-left">
                          <div className="g-heading-wrap heading-style-h3 text-color-gray-900">
                            <h2>Step 3: Publish your paper and increase citations...</h2>
                          </div>
                          <div className="g-para-wrap">
                            <div className="g-para-rich-text w-richtext">
                              <p>Once published, it's time to get the world to read your paper. I will show you strategies to maximize visibility and boost your citation count.</p>
                            </div>
                          </div>
                          <div className="button-group">
                            <a href="https://wa.me/917307726842" target="_blank" rel="noopener noreferrer" className="button fh-btn w-button">Let's Connect</a>
                          </div>
                        </div>
                      </div>
                      <div className="offers_image-wrapper">
                        <img src={step3Image} alt="Step 3: Paper Publication and Citations" loading="lazy" className="offers_image" style={{ width: '100%', maxWidth: '320px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                      </div>
                    </div>
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
            <div className="padding-section-large">
              <div className="testimonial_cards_list">
                <div className="w-layout-grid testimonial_card">
                  <div
                    id="w-node-_50cdfd70-5d2c-c618-8c76-8efe9d14fc38-563f0d1b"
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
                        &quot;I would highly recommend Ayush for his excellent support and guidance throughout the research paper publication process. His assistance in manuscript, journal requirements, submission procedures, and coordination during the publication process was extremely valuable.
                        <br /><br />
                        He was professional, responsive, and committed throughout, and his support helped make the entire process smooth and well managed. I sincerely appreciate his contribution and would gladly recommend him to researchers and scholars seeking reliable support with academic publication.&quot;
                      </div>
                    </div>
                    <div className="testimonial13_client">
                      <div className="testimonial13_client-info">
                        <p className="text-weight-semibold">Sudeep Sharma</p>
                        <p>Head Legal &amp; Compliance | Healthcare Law</p>
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
                    <img src={sudeepAvatar} alt="Sudeep Sharma" loading="lazy" className="testimonial13_client-image" style={{ width: '100%', maxWidth: '420px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '16px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_tailored" style={{ backgroundColor: "#f9f9f9", padding: "80px 0" }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="w-layout-grid offers_content-layout" style={{ alignItems: "center", marginBottom: "60px" }}>
              <div className="offers_content-left">
                <div className="header-copy-wrap is-left">
                  <p className="fh-eyebrow">IS THIS FOR YOU?</p>
                  <div className="g-heading-wrap heading-style-h2 text-color-gray-900">
                    <h2>Wait, is this consultation right for you?</h2>
                  </div>
                  <div className="g-para-wrap">
                    <div className="g-para-rich-text w-richtext">
                      <p>If you are confused whether this consultation is right for you, then let me clarify.</p>
                      <p><strong>My services are exclusively tailored for:</strong></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offers_image-wrapper">
                <img src={ayushCoat1} alt="Consultation Fit" loading="lazy" className="offers_image" style={{ width: '100%', maxWidth: '350px', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '12px' }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "12px", border: "1px solid #eaeaea", borderTop: "4px solid #a46800" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#a46800", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", marginBottom: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="heading-style-h5" style={{ marginBottom: "12px" }}>Doctors</h3>
                <p>Looking to publish their cases, reviews, or original research in top medical journals.</p>
              </div>

              <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "12px", border: "1px solid #eaeaea", borderTop: "4px solid #a46800" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#a46800", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", marginBottom: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="heading-style-h5" style={{ marginBottom: "12px" }}>PhD scholars</h3>
                <p>Who need guidance on study design, data analysis, and manuscript structure.</p>
              </div>

              <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "12px", border: "1px solid #eaeaea", borderTop: "4px solid #a46800" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#a46800", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", marginBottom: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="heading-style-h5" style={{ marginBottom: "12px" }}>Researchers</h3>
                <p>Aiming to boost their academic profile with Scopus and WoS indexed publications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section_faq">
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-section-medium">
              <div className="max-width-large align-center">
                <div className="text-align-center">
                  <div
                    style={{ maxWidth: "none" }}
                    className="g-heading-wrap heading-style-h2 text-color-gray-900"
                  >
                    <div className="g-heading-rich-text w-richtext">
                      <h2>Frequently Asked Questions</h2>
                    </div>
                  </div>
                </div>
                <div className="margin-top margin-large">
                  <div className="faq-component">
                    <div className="js-accordion">
                      {faqList.map((item, index) => {
                        const isOpen = openFaq === index;
                        return (
                          <div
                            key={index}
                            className={`js-accordion-item ${isOpen ? "active" : ""}`}
                          >
                            <div
                              className="js-accordion-header"
                              onClick={() => toggleFaq(index)}
                              style={{ cursor: "pointer", userSelect: "none" }}
                            >
                              <h3 className="faq-question">{item.question}</h3>
                              <div className={`js-accordion-icon ${isOpen ? "active" : ""}`}>
                                <div className="accordion2_icon w-embed">
                                  <svg
                                    width="18"
                                    height="2"
                                    viewBox="0 0 18 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.853657 0C0.625549 0.0049979 0.408467 0.0990813 0.248907 0.262175C0.0893482 0.425268 0 0.64441 0 0.872574C0 1.10074 0.0893482 1.31978 0.248907 1.48287C0.408467 1.64597 0.625549 1.74015 0.853657 1.74515H16.5563C16.7845 1.74015 17.0015 1.64597 17.1611 1.48287C17.3207 1.31978 17.41 1.10074 17.41 0.872574C17.41 0.64441 17.3207 0.425268 17.1611 0.262175C17.0015 0.0990813 16.7845 0.0049979 16.5563 0H0.853657Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div
                                  className="accordion2_icon _2 w-embed"
                                  style={{
                                    display: isOpen ? "none" : "flex",
                                    transition: "all 0.2s ease",
                                  }}
                                >
                                  <svg
                                    width="3"
                                    height="18"
                                    viewBox="0 0 3 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.83252 16.724C0.837517 16.9521 0.931601 17.1692 1.09469 17.3287C1.25779 17.4883 1.47693 17.5776 1.70509 17.5776C1.93326 17.5776 2.1523 17.4883 2.31539 17.3287C2.47849 17.1692 2.57267 16.9521 2.57767 16.724L2.57767 1.02129C2.57267 0.793185 2.47849 0.576103 2.31539 0.416544C2.1523 0.256985 1.93326 0.167637 1.70509 0.167637C1.47693 0.167637 1.25779 0.256985 1.09469 0.416544C0.931601 0.576103 0.837517 0.793185 0.83252 1.02129L0.83252 16.724Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            {isOpen && (
                              <div className="js-accordion-body">
                                <div className="margin-bottom margin-small">
                                  {item.answer}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="margin-top margin-large">
                  <div className="header-copy-wrap is-center">
                    <div
                      style={{ maxWidth: "none" }}
                      className="g-para-wrap heading-style-h4"
                    >
                      <div className="g-para-rich-text w-richtext">
                        <p>Still have questions?</p>
                      </div>
                    </div>
                    <a
                      href="mailto:hi@60daypublications.com"
                      className="button w-button"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
