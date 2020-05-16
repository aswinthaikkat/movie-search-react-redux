import React from 'react';
import { Card, Button } from 'react-bootstrap';
const MovieCard = (props) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.movie.Poster} />
    <Card.Body>
      <Card.Title>{props.movie.Title}</Card.Title>
      <Card.Text> The movie was relesed on {props.movie.Year}.</Card.Text>
    </Card.Body>
  </Card>
);
export default MovieCard;
