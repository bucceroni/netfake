import React from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class MovieDetails extends React.Component {
  componentDidMount() {
    const {
      actions,
      match: {
        params: { movieId }
      }
    } = this.props;

    actions.getMovieDetails(movieId);
    actions.getMovieCast(movieId);
  }

  render() {
    const { movieDetails, movieCast } = this.props;
    return (
      <div className="container">
      <div className="container">

        <div className="row">
        <div className="col">
          <img
            src={movieDetails.poster_path ? `http://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : null}
            alt="Poster"
          />
        </div>
        <div className="col">
          <h4>
            <div>{movieDetails.title}</div>
          </h4>
          <p>
            <b>Rating: </b>
            {movieDetails.vote_average}
          </p>
          <p>
            <b>Runtime: </b>
            {movieDetails.runtime}
            minutes
          </p>
          <p>
            <b>Release date: </b>
            {movieDetails.release_date}
          </p>
          <p>
            <b>Overview: </b>
            {movieDetails.overview}
          </p>
        </div>
        </div>
        </div>
        <br />
        <div className="container">
          <b>Cast: </b>
          <div className="row align-items-start">
            {movieCast.map((person, index) => (
              <div className="col" key={index}>
                <img
                  src={
                    person.profile_path
                      ? `http://image.tmdb.org/t/p/w200/${person.profile_path}`
                      : "http://via.placeholder.com/200x300"
                  }
                  alt={person.profile_path ? "Elenco" : null}
                />
                <p className="lead">{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  actions: PropTypes.object.isRequired,
  movieCast: PropTypes.array.isRequired,
  movieDetails: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    movieDetails: state.reducer.movieDetails,
    movieCast: state.reducer.movieCast
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetails)
);
