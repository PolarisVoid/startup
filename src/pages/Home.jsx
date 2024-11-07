import React from "react";
import "./Home.css";
import Footer from "../components/Footer";

function SectionPicture({ title, analogy, description, img, children }) {
  let styling = "viewport-50 d-flex align-items-center justify-content-center";
  if (img) {
    styling += " " + img;
  }
  return (
    <section className={styling}>
      <div className="container glassy-background">
        <div className="p-3">
          <div className="border-bottom border-1 border-dark">
            <h1>{title}</h1>
          </div>
          <div className="d-flex justify-content-between">
            <div className="w-40 text-center">
              <p>{analogy}</p>
            </div>
            <div className="w-40 text-center">
              <p>{description}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="scroll">
      <section className="viewport-100 landing-photo d-flex align-items-center justify-content-center text-center">
        <div className="container glassy-background">
          <div className="p-5">
            <h1 className="display-1">Welcome to Pivot</h1>
            <p className="lead">Take control of your daily life</p>
            <button
              type="button"
              className="btn btn-primary-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="spacer"></section>
      <SectionPicture
        title="Empty Jar"
        analogy="Imagine your life as a jar"
        description="The jar represents your life, and the rocks, pebbles, and sand represent the things that fill it up."
        img="empty-jar"
      />
      <section className="spacer"></section>
      <SectionPicture
        title="Rocks"
        analogy="The rocks represent the most important scheduled items in your
                life, such as work, family time, and personal activities.
                These are the things that truly matter and should be given the
                most attention."
        description="With Pivot, you can use time blocking to allocate specific
                time slots for your most important scheduled items, ensuring
                that they get the attention they deserve."
        img="rocks text-white"
      />
      <section className="spacer"></section>
      <SectionPicture
        title="Pebbles"
        analogy="The pebbles represent the important but less critical tasks in
                your life. These tasks are significant, but they can be moved
                around and adjusted as needed."
        description="With Pivot, you can schedule big tasks for specific times, but
                you have the flexibility to move them around easily as your
                priorities change."
        img="pebbles"
      />
      <section className="spacer"></section>
      <SectionPicture
        title="Sand"
        analogy="The sand represents all the little tasks that need to get
                done. These are the small, everyday activities that fill up
                the remaining space in your life."
        description="With Pivot, those tasks will be auto-scheduled. Don't stress
                about the small things; let Pivot help you get them done by
                scheduling around the important things in life."
        img="sand"
      />
      <section className="spacer"></section>
      <SectionPicture
        title="Filled Jar"
        analogy="The filled jar represents a balanced and fulfilling life where
                all aspects are managed effectively."
        description="With Pivot, you can achieve a filled life by managing your
                tasks and priorities efficiently. Ready to take control?"
        img="filled-jar"
      >
        <button
          type="button"
          className="btn btn-primary-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Sign Up Now
        </button>
      </SectionPicture>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form></form>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary-1">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
