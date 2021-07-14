import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { title, img, excerpt, post_id } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {excerpt.substring(0,30)}
          </p>
          <a href={'/article/'+post_id} class="btn btn-outline-primary">
            Read More..
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
