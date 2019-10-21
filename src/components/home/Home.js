import React from 'react';
import Link from 'next/link';

/**
 * Displays landing page,
 * and ability to route to the signup page.
 * @type {Component}
 */
const Home = () => (
  <section id="home">
    <div className="top-wrapper">
      <div className="intro">
        <div className="row">
          <div className="col-xl-6 m-r-n p-r-n">
            <nav>
              <div className="row">
                <div className="col-6">
                  <Link href="/">
                    <span className="logo">
                      <img src="/static/images/logo.svg" alt="ReachHigh" />
                    </span>
                  </Link>
                </div>
                <div className="col-6 nav-right">
                  <Link href="/signup">
                    <span className="link">
                      Sign Up
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
            <div className="text-content">
              <h1>
                Take Control of your Career.
              </h1>
              <p>
                Complete short, actionable tasks guaranteed to
                get you further in your career, faster than ever.
                <br />
                Ready to get started? Take the short quiz
                below and get your personalized path today.
              </p>
              <Link href="/signup">
                <span className="btn-curve-purple">
                  Get Started
                </span>
              </Link>
            </div>
            <div className="row bottom">
              <div className="col-sm-6">
                <div className="testimonial">
                  <div className="row">
                    <div className="col-4">
                      <img src="/static/images/avatar1.png" alt="ReachHigh" />
                    </div>
                    <div className="col-8">
                      <p>
                        I love how quickly I can do the tasks, and see progress.
                      </p>
                      <p>
                        — Mary Smith
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 b-l">
                <div className="testimonial">
                  <div className="row">
                    <div className="col-4">
                      <img src="/static/images/avatar2.png" alt="ReachHigh" />
                    </div>
                    <div className="col-8">
                      <p>
                        The best investment I&rsquo;ve made in myself in ages.
                      </p>
                      <p>
                        — Ben Johnson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 m-l-n p-l-n d-none d-xl-block">
            <div className="top-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
