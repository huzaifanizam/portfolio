import React from "react";
import Header from "../components/header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        {/* <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Clarence
              <span class="text-primary">Taylor</span>
            </h1>
            <div class="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p class="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section> */}

        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Web & Graphics Designer</h3>
                <div class="subheading mb-3">Xtylogem</div>
                <p>
                  E-commerce Manager :: Responsible for end-to-end e-commerce
                  operations, including product management, inventory control,
                  order processing, and customer service, ensuring optimal
                  business performance.
                </p>
                <p>
                  Web & Graphics Designer :: Skilled in UI/UX design, creating
                  visually appealing and user-friendly websites, enhancing user
                  experience and engagement.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2023 </span>
              </div>
            </div>

          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
