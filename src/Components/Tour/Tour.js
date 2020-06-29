import React, { Component } from "react";
import "./Tour.scss";
export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, img, city, info, name } = this.props.tour;
    const { removeTour } = this.props;
    const infoText = this.state.showInfo ? "hide info" : "show info";
    return (
      <main className="tour">
        <div className="img-container">
          <img src={img} alt="city image" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i class="fa fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            {infoText}{" "}
            <span onClick={this.handleInfo}>
              <i class="fas fa-caret-square-down    "></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </main>
    );
  }
}
