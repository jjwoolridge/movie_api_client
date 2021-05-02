import React from 'react';
import PropTypes from 'prop-types';
//import .scss for view'
import "./movie-view.scss";

export class MovieView extends React.Component {

  render() {
    const { movieData, onBackClick } = this.props;
    return (
      <div className="movie-view" >
        <div className="movie-poster">
          <img src={movieData.ImagePath} />
        </div>
        <div className="movie-title">
          <span className = "label">Title: </span>
          <span className = "value">{movieData.Title}</span>
        </div>
        <div className="description">
          <span className="label">Description: </span>
          <span className="value">{movieData.Description}</span>
        </div>
        <div className="year">
          <span className="label">Year: </span>
          <span className="value">{movieData.Year}</span>
        </div>
        {/* <div className="genre">
          <span className="label">Genre: </span>
          <span className="value">[{movieData.Genre}]</span>
        </div> */}
        {/* <div className="director">
          <span className="label">Director: </span>
          <span className="value">[{movieData.Director}]</span>
        </div> */}
        <button onClick={() => {onBackClick(null);}}>Back</button>
      </div>
    );
  }
}

MovieView.propTypes = {
  movieData: PropTypes.shape({ 
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Birth: PropTypes.string
    }), 
    Year: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};