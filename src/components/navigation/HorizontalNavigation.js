import React from 'react';
import Link from 'next/link';

/**
 * Top navigation,
 * @type {Component}
 */
const HorizontalNavigation = () => (
  <nav id="horizontal-navigation">
    <div className="row">
      <div className="col-6">
        <Link href="/">
          <span className="logo">
            <img src="/static/images/logo.svg" alt="ReachHigh" />
          </span>
        </Link>
      </div>
      <div className="col-6">
        <img src="/static/images/icons/search.svg" alt="search" />
      </div>
    </div>
  </nav>
);

export default HorizontalNavigation;
