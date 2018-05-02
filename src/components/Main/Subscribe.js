import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {

  render() {
    return (
      <div className="col-12 col-lg-3">
        <article className="subscribe">
          <h1>Get high on categorized <br/>
Show HN submissions.</h1>
<p>We know the struggle. A lot of great stuff on Hacker News gets lost in the  /shownew limbo.</p>
          <form>
            <fieldset>
              <p>Get the weekly top Show HN picks in your inbox!</p>
              <input placeholder="Your e-mail" type="text" />
              <button>Subscribe</button>
            </fieldset>
          </form>
        </article>
      </div>
    );
  }

}

export default Subscribe;
