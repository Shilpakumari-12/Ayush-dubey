import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/figma-home/img-hero.png";
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
import pathHealthcare from "../assets/figma-home/imgImage6.png";
import pathResearcher from "../assets/figma-home/imgImage7.png";
import introImage from "../assets/figma-home/imgImage150.png";
import checkIcon from "../assets/figma-home/imgIcon.svg";
import starIconOrange from "../assets/figma-home/imgIcon1.svg";
import starIconBrown from "../assets/figma-home/imgIcon2.svg";
import testimonialImage1 from "../assets/figma-home/imgImage8.png";
import testimonialImage2 from "../assets/figma-home/imgImage9.png";
import academyImage from "../assets/figma-home/imgImage10.png";
import avatar1 from "../assets/figma-home/imgContainer.png";
import avatar2 from "../assets/figma-home/imgContainer1.png";
import avatar3 from "../assets/figma-home/imgContainer2.png";
import avatar4 from "../assets/figma-home/imgContainer3.png";
import avatar5 from "../assets/random_person_1.jpg";
import shreyasAvatar from "../assets/shreyas.jpg";
import sudeepAvatar from "../assets/sudeep.jpg";
import venkaAvatar from "../assets/venka.jpg";
import veeraAvatar from "../assets/veera.jpg";
import aboutImage from "../assets/figma-home/imgImage151.png";

const spotlightLogos = [logoA, logoB, logoC, logoD, logoE, logoF, logoG, logoH, logoI, logoJ, logoK, logoL];

const wallTestimonials = [
  {
    name: "Sudeep Sharma",
    avatar: sudeepAvatar,
    quote:
      "I would highly recommend Ayush for his excellent support and guidance throughout the research paper publication process. His assistance in manuscript, journal requirements, submission procedures, and coordination during the publication process was extremely valuable. He was professional, responsive, and committed throughout, and his support helped make the entire process smooth and well managed. I sincerely appreciate his contribution and would gladly recommend him to researchers and scholars seeking reliable support with academic publication.",
  },
  {
    name: "Venka Basavaraja",
    avatar: venkaAvatar,
    quote:
      "One of the best research assistance. For publishing papers in reputed journal's like Scopus, Springers etc. I strongly recommend Mr. Ayush Dubey. One of the best research manuscript reviewer. Any research assistance contact him you will definitely get required output.",
  },
  {
    name: "veera vijayan",
    avatar: veeraAvatar,
    quote:
      "I had the pleasure of working with Ayush for the publication of my research article in and I can confidently say that their expertise made the entire process seamless and speedy",
  },
  {
    name: "Dr Shreyas Aneja",
    avatar: shreyasAvatar,
    quote:
      "I would like to recommend the services provided by Mr Ayush Dubey in writing and editing the research manuscript. The team works in sync to find out the mistakes and discuss with the client to make the required changes. They were able to deliver on time as well.",
  },
  {
    name: "Sam Patel",
    avatar: avatar5,
    quote:
      "I am now a published author, and this is just the beginning of my journey. I started working on my first manuscript last month and am already receiving positive feedback from peers.",
  },
];

function Stars({ icon, size = 22 }) {
  return (
    <div className="fh-testi__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src={icon} alt="" style={{ width: size, height: "auto" }} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="fh-page">
      {/* Hero */}
      <section className="fh-hero">
        <div className="fh-container">
          <div className="fh-hero__grid">
            <div className="fh-hero__copy">
              <h1 className="fh-h1">
                Unlock Your Research Potential with{" "}
                <span className="fh-highlight">Research Publication Strategies</span>
              </h1>
              <div className="fh-hero__paras">
                <p className="fh-body-lg">
                  Are you finding it challenging to get your research noticed and published despite your hard work?
                </p>
                <p className="fh-body-lg">
                  As a Research Publication Consultant, I specialize in assisting medical professionals, PhD
                  candidates, and researchers like you in navigating the publication process for top-tier journals.
                </p>
                <p className="fh-body-lg">
                  Let me guide you to excel in research publication and achieve outstanding recognition in your
                  field.
                </p>
              </div>
              <Link to="/consultation" className="fh-btn">
                Work with me
              </Link>
            </div>
            <div className="fh-hero__image-wrap">
              <img src={heroImage} alt="Ayush Dubey, Research Publication Consultant" className="fh-hero__image" />
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight / featured logos */}
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

      {/* Path cards */}
      <section className="fh-section fh-path">
        <div className="fh-container">
          <div className="fh-path__head">
            <p className="fh-eyebrow">How Can I Assist You?</p>
            <div className="fh-path__title">
              <h2 className="fh-h2">Your Journey to Publication Success</h2>
              <span className="fh-h2 fh-highlight">Begins Here</span>
            </div>
            <p className="fh-body">
              Let's find the information you need.
              <br />
              Which of these best describes you?
            </p>
          </div>

          <div className="fh-path__cards">
            <div className="fh-path__card">
              <img src={pathHealthcare} alt="Healthcare Professional" />
              <h3>Healthcare Professional</h3>
              <p className="fh-body">
                With my expertise and insights, we will enhance your research visibility, streamline your manuscript
                preparation, and achieve significant publication success.
              </p>
              <p className="fh-body">
                Let's develop a customized publication strategy that resonates with your research goals and
                elevates your work.
              </p>
              <Link to="/consultation" className="fh-btn">
                Learn More
              </Link>
            </div>
            <div className="fh-path__card">
              <img src={pathResearcher} alt="Researcher" />
              <h3>Researcher</h3>
              <p className="fh-body">
                With my support and proven methodologies, you'll successfully publish your work, gain recognition,
                and establish yourself as a leading researcher.
              </p>
              <p className="fh-body">Let's embark on this transformative publication journey together.</p>
              <Link to="/consultation" className="fh-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / bio */}
      <section className="fh-section">
        <div className="fh-container">
          <div className="fh-intro__head">
            <p className="fh-eyebrow">Hello, aspiring researcher!</p>
            <div className="fh-intro__title">
              <h2 className="fh-h2">I'm Ayush, your</h2>
              <span className="fh-h2 fh-highlight">Publication Consultant</span>
            </div>
          </div>

          <div className="fh-intro__grid">
            <img src={introImage} alt="Ayush Dubey" className="fh-intro__image" />
            <div>
              <p className="fh-body-lg">
                If you're struggling to get your research published despite your efforts, I'm here to help.
                Together, we can leverage the publication process to elevate your academic career.
              </p>

              <ul className="fh-checklist">
                <li>
                  <span className="fh-checklist__badge">
                    <img src={checkIcon} alt="" />
                  </span>
                  <span className="fh-body">
                    Proven strategies to enhance your manuscript and increase publication chances.
                  </span>
                </li>
                <li>
                  <span className="fh-checklist__badge">
                    <img src={checkIcon} alt="" />
                  </span>
                  <span className="fh-body">
                    Expert guidance to navigate the complexities of journal submissions and boost your academic
                    profile.
                  </span>
                </li>
                <li>
                  <span className="fh-checklist__badge">
                    <img src={checkIcon} alt="" />
                  </span>
                  <span className="fh-body">
                    A personalized approach tailored to your unique research objectives.
                  </span>
                </li>
                <li>
                  <span className="fh-checklist__badge">
                    <img src={checkIcon} alt="" />
                  </span>
                  <span className="fh-body">Support to help you thrive in the competitive academic landscape.</span>
                </li>
              </ul>

              <div style={{ marginTop: "32px" }}>
                <p style={{ fontWeight: 600, color: "var(--fh-body)", margin: 0 }}>
                  Ready to elevate your research career?
                </p>
                <p className="fh-body" style={{ marginTop: "4px" }}>
                  Let's connect and make your research publication goals a reality.
                </p>
              </div>

              <div style={{ marginTop: "24px" }}>
                <Link to="/consultation" className="fh-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Embedded testimonial 1 */}
          <div className="fh-testi">
            <div>
              <Stars icon={starIconOrange} />
              <p className="fh-testi__quote">
                "Ayush's expertise and our existing rapport made his guidance invaluable. His proven strategies gave
                me the confidence to trust him with my publication journey.
                <br />
                <br />
                In just the first month, Ayush's insights led to significant improvements in my manuscript. I'm now
                entering the next phase with complete satisfaction and excitement. If you're looking for someone
                who truly understands the publication process and delivers results, Ayush is the one to turn to."
              </p>
              <p className="fh-testi__name">Jordan Smith</p>
              <p className="fh-testi__role">Academic Publishing Specialist</p>
            </div>
            <div className="fh-testi__image">
              <img src={testimonialImage1} alt="Jordan Smith" />
            </div>
          </div>

          {/* Embedded testimonial 2 */}
          <div className="fh-testi fh-testi--reverse">
            <div className="fh-testi__image">
              <img src={testimonialImage2} alt="Taylor Lee" />
            </div>
            <div>
              <Stars icon={starIconOrange} />
              <p className="fh-testi__quote">
                "I believe one of the best ways to enhance your academic profile is through Ayush's publication
                consultancy. Having worked with him to improve my research visibility, I can confidently say that
                his advice is invaluable."
              </p>
              <p className="fh-testi__name">Taylor Lee</p>
              <p className="fh-testi__role">Director, Research Innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Mastery Academy promo */}
      {/* <section className="fh-section">
        <div className="fh-container">
          <div className="fh-promo">
            <div className="fh-promo__head">
              <p className="fh-eyebrow">For Researchers</p>
              <h2 className="fh-h2">Publication Mastery Academy</h2>
              <p className="fh-body-lg">
                Imagine a career where you publish your research, gain recognition, and work on projects that
                inspire you. With our proven strategies, you'll attract attention from top journals and command
                respect in your field.
              </p>
            </div>

            <div className="fh-promo__image-wrap">
              <img src={academyImage} alt="Publication Mastery Academy" />
            </div>

            <div className="fh-promo__cta">
              <p>
                Don't let your research go unnoticed – seize the opportunity, enroll in Publication Mastery Academy,
                and embark on an exciting journey towards academic success!
              </p>
              <Link to="/newsletter" className="fh-btn">
                Join the Waitlist Now!
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial wall */}
      <section className="fh-section">
        <div className="fh-container">
          <div className="fh-wall">
            <div className="fh-wall__head">
              <h2 className="fh-h2" style={{ lineHeight: 1.15 }}>
                Here's <span className="fh-highlight">What Others Say</span> About My Consultancy...
              </h2>
              <Link to="/newsletter" className="fh-btn">
                Join Waitlist
              </Link>
            </div>

            <div className="fh-wall__grid">
              {wallTestimonials.map((t) => (
                <div className="fh-wall__card" key={t.name}>
                  <div className="fh-wall__card-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img key={i} src={starIconBrown} alt="" />
                    ))}
                  </div>
                  <p>{t.quote}</p>
                  <div className="fh-wall__card-author">
                    <img src={t.avatar} alt={t.name} />
                    <span>{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / closing strategy */}
      <section className="fh-section">
        <div className="fh-container">
          <div className="fh-about__grid">
            <div className="fh-about__copy">
              <h2 className="fh-h2">
                I'll guide you towards publication success with effective strategies.
              </h2>
              <div className="fh-about__paras">
                <p className="fh-body">
                  As an ambitious researcher, I understand the challenges of meeting publication standards. But
                  there's a better way.
                </p>
                <p className="fh-body">
                  Through effective publication strategies, I've discovered the power of showcasing your unique
                  research. Let me guide you on this transformative journey.
                </p>
                <p className="fh-body">
                  If you're struggling to get your research published, it's time to embrace authentic strategies.
                  Together, we'll craft approaches that align with your research goals and make a lasting impact.
                </p>
                <p className="fh-body">
                  Let's build a research career that brings you fulfillment and helps others achieve their goals.
                  Get in touch today, and let's embark on this exciting journey together.
                </p>
              </div>
              <Link to="/consultation" className="fh-btn">
                Collaborate with me
              </Link>
            </div>
            <div className="fh-about__image-wrap">
              <img src={aboutImage} alt="Ayush Dubey" className="fh-about__image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
