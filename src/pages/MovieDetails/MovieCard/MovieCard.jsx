import React from 'react';
import {
  Genres,
  ImageWrapper,
  MovieCardStyled,
  Overview,
  Rating,
} from './MovieCard.styled';

export const MovieCard = ({ genres, title, image, overview, rating }) => {
  return (
    <MovieCardStyled>
      <ImageWrapper>
        <img src={image} alt={title} width="200px" height="300px" />
      </ImageWrapper>
      <div>
        <h2>{title}</h2>
        <Rating>Rating: {rating}</Rating>
        <Overview>
          <h3>Overview</h3>
          <p>{overview}</p>
        </Overview>
        <Genres>
          <h3>Genres</h3>
          <p>{genres.join(', ')}</p>
        </Genres>
      </div>
    </MovieCardStyled>
  );
};
