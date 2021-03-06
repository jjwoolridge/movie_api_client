import React from 'react';

export class MovieView extends React.Component {

  render() {
    const { movieData, onBackClick } = this.props;
//    console.log(this.props);
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
        <div className="genre">
          <span className="label">Genre: </span>
          <span className="value">{movieData.Genre}</span>
        </div>
        <div className="director">
          <span className="label">Director: </span>
          <span className="value">{movieData.Director}</span>
        </div>
        <button onClick={() => {onBackClick(null);}}>Back</button>
      </div>
    );
  }
}
