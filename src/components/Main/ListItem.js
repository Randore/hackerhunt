import React, { Component } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return(
      <div className="list">
        <article className="d-flex">
          <a href="">
            <span className="rate-up"><i className="mr-1 fa fa-caret-up">&nbsp;</i>{props.count}</span>
            <span className="comments"><i className="mr-1 fa fa-comment">&nbsp;</i>{props.comments}</span>
          </a>
          <div>
            <h2>
              <a href="">
                {props.title} <em>&nbsp;</em>
              </a>
            </h2>
            <p>I've spend the last 2 years building a new email client</p>
            <summary>
              <time>{props.time} an hour ago</time> by&nbsp;
              <a href="">{props.author}</a>
              <a href="" className="tag">
                System
              </a>
              <a href="" className="tag">
                Media
              </a>
              <a href="" className="tag">
                Social
              </a>
            </summary>
          </div>
        </article>
      </div>
  )
}

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 10 }
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="col-12 col-lg-6">
        <ListItem onClick={this.handleCount} count={this.state.counter} comments={351} time={8} title={"ivelope.com"} author={"musc-master"} />
        <ListItem count={65} comments={21} time={3} title={"Skor"} author={"mesid"} />
        <ListItem count={43} comments={42} time={9} title={"Ping.gy"} author={"vasanth"} />
        <ListItem count={15} comments={2} time={12} title={"youtube.com"} author={"williamtrask"} />
      </div>
    );
  }
}

export default Lists;
