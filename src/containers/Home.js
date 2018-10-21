import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class Home extends Component {
  state = {};

  componentDidMount() {
    const { actions } = this.props;
    actions.getUpcoming();
    actions.cleanMovieDetails();
    actions.cleanMovieCast();
  }

  handleTitle = title => {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className="search-tile-title long-title">{title}</h5>;
    }
    return <h5 className="search-tile-title longer-title">{title}</h5>;
  };

  handleDescription = desc => {
    if (desc.length > 150) {
      desc = desc.substring(0, 135);
      return <p className="tile-desc">{desc} ... read more</p>;
    }
    return <p className="tile-desc">{desc}</p>;
  };

  handlePic = movie => {
    if (movie.backdrop_path !== null) {
      return `http://image.tmdb.org/t/p/w500//${movie.backdrop_path}`;
    }
    if (movie.poster_path !== null) {
      return `http://image.tmdb.org/t/p/w500//${movie.poster_path}`;
    }
    return "http://via.placeholder.com/280x160";
  };

  render() {
    const { upcoming } = this.props;
    return (
      <div className="container">
        <h1 className="display-4">NetFake</h1>
        <h1 className="display-6">Upcoming</h1>
        <div className="row align-items-start">
          {upcoming.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div
                  className="card"
                  style={{
                    width: "20rem"
                  }}
                >
                  <img
                    className="card-img-top"
                    src={this.handlePic(item)}
                    alt="Imagem de capa do card"
                  />
                  <div className="card-body">
                    <div className="card-title">
                      {this.handleTitle(item.title)}
                    </div>
                    <div className="card-text">
                      {this.handleDescription(item.overview)}
                    </div>
                    <Link to={`/movie/${item.id}`}>
                      <button className="btn btn-primary">Detalhes</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  upcoming: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    upcoming: state.reducer.upcoming
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
