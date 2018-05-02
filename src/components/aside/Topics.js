import React from 'react';
import './Topics.css';

const Topics = (props) => (
  <div className="col-12 col-lg-3">
    <ul className="Catogeries">
      <li>
        <i className="fas fa-laptop"></i>
        <a href="">Development</a>
      </li>
      <li>
        <i className="fas fa-wrench"></i>
        <a href="">System</a>
      </li>
      <li>
        <i className="fas fa-cut"></i>
        <a href="">Tools</a>
      </li>
      <li>
        <i className="fas fa-flask"></i>
        <a href="">Data science</a>
      </li>
      <li>
        <i className="fas fa-link"></i>
        <a href="">Blockchain</a>
      </li>
      <li>
        <i className="fas fa-mobile-alt"></i>
        <a href="">Mobile</a>
      </li>
      <li>
        <i className="fas fa-list-alt"></i>
        <a href="">Awesome lists</a>
      </li>
      <li>
        <i className="fas fa-handshake"></i>
        <a href="">Social</a>
      </li>
      <li>
        <i className="fas fa-image"></i>
        <a href="">Visual</a>
      </li>
      <li>
        <i className="fas fa-beer"></i>
        <a href="">Open source</a>
      </li>
      <li>
        <i className="fas fa-dove"></i>
        <a href="">All topics</a>
      </li>
    </ul>
  </div>
);


export default Topics;
