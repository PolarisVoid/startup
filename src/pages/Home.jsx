import React from "react";
import "./Home.css";
import Footer from "../components/Footer";

function SectionPicture({title, analogy, description, img}) {
  let styling = "viewport-50 d-flex align-items-center justify-content-center";
  if (img) {
    styling += " " + img;
  }
  return (
    <section class={styling}>
      <div class="container glassy-background">
        <div class="p-3">
          <div class="border-bottom border-1 border-dark">
            <h1>{title}</h1>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-40 text-center">
              <p>
                {analogy}
              </p>
            </div>
            <div class="w-40 text-center">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section class="viewport-100 landing-photo d-flex align-items-center justify-content-center text-center">
      <div class="container glassy-background">
        <div class="p-5">
          <h1 class="display-1">Welcome to Pivot</h1>
          <p class="lead">Take control of your daily life</p>
          <button type="button" class="btn btn-primary-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Get Started
          </button>
        </div>
      </div>
    </section>
    <section class="spacer"></section>
    <SectionPicture 
      title="Empty Jar"
      analogy="Imagine your life as a jar"
      description="The jar represents your life, and the rocks, pebbles, and sand represent the things that fill it up."
      img="empty-jar"
    />
    <section class="spacer"></section>
    <section class="viewport-50 text-white rocks d-flex align-items-center justify-content-center">
      <div class="container glassy-background">
        <div class="p-3">
          <div class="border-bottom border-1 border-white">
            <h1>Rocks</h1>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-40 text-center">
              <p>
                The rocks represent the most important scheduled items in your
                life, such as work, family time, and personal activities.
                These are the things that truly matter and should be given the
                most attention.
              </p>
            </div>
            <div class="w-40 text-center">
              <p>
                With Pivot, you can use time blocking to allocate specific
                time slots for your most important scheduled items, ensuring
                that they get the attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="spacer"></section>
    <section class="viewport-50 pebbles d-flex align-items-center justify-content-center">
      <div class="container glassy-background">
        <div class="p-3">
          <div class="border-bottom border-1 border-dark">
            <h1>Pebbles</h1>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-40 text-center">
              <p>
                The pebbles represent the important but less critical tasks in
                your life. These tasks are significant, but they can be moved
                around and adjusted as needed.
              </p>
            </div>
            <div class="w-40 text-center">
              <p>
                With Pivot, you can schedule big tasks for specific times, but
                you have the flexibility to move them around easily as your
                priorities change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="spacer"></section>
    <section class="viewport-50 sand d-flex align-items-center justify-content-center">
      <div class="container glassy-background">
        <div class="p-3">
          <div class="border-bottom border-1 border-dark">
            <h1>Sand</h1>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-40 text-center">
              <p>
                The sand represents all the little tasks that need to get
                done. These are the small, everyday activities that fill up
                the remaining space in your life.
              </p>
            </div>
            <div class="w-40 text-center">
              <p>
                With Pivot, those tasks will be auto-scheduled. Don't stress
                about the small things; let Pivot help you get them done by
                scheduling around the important things in life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="spacer"></section>
    <section class="viewport-50 filled-jar d-flex align-items-center justify-content-center">
      <div class="container glassy-background">
        <div class="p-3">
          <div class="border-bottom border-1 border-dark">
            <h1>Filled Life</h1>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-40 text-center">
              <p>
                The filled life represents a balanced and fulfilling life
                where all aspects are managed effectively.
              </p>
            </div>
            <div class="w-40 text-center">
              <p>
                With Pivot, you can achieve a filled life by managing your
                tasks and priorities efficiently. Ready to take control?
              </p>
              <button type="button" class="btn btn-primary-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form></form>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" required />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="btn btn-primary-1">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Home;

