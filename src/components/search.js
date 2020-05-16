import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import MovieCard from './moviecard';
//axios
import { getMovie } from '../actions/searchAction';
import { connect } from 'react-redux';

class Search extends Component {
  onSubmitting = (e) => {
    e.preventDefault();
    this.props.getMovie(e.target[0].value);
    console.log('hey');
    console.log(this.props.movie.Title);
  };

  render() {
    const { movie, loading } = this.props;
    return (
      <div>
        <Form onSubmit={this.onSubmitting}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Enter Movie Name</Form.Label>
            <Row>
              <Col>
                <Form.Control placeholder="movie name" onChange={getMovie} />
              </Col>
            </Row>
            <Form.Text className="text-muted">
              A good movie gives you a good mood
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
        <div className="d-flex justify-content-center">
          {loading ? (
            <MovieCard movie={movie} />
          ) : (
            <p>Sorry...No Movie Found..Search Again</p>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { getMovie })(Search);

/* ({ movie, loading }) => {
  // useEffect(() => {
  //   document.title = movie.Title;
  // }, [movie]);
  const onSubmitting = (e) => {
    e.preventDefault();
    getMovie(e.target[0].value);
    console.log('hey');
  };

  return (
    <div>
      <Form onSubmit={onSubmitting}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Enter Movie Name</Form.Label>
          <Row>
            <Col>
              <Form.Control placeholder="movie name" onChange={getMovie} />
            </Col>
          </Row>
          <Form.Text className="text-muted">
            A good movie gives you a good mood
          </Form.Text>
        </Form.Group>
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </Form>
      <div className="d-flex justify-content-center">
        {loading ? (
          <MovieCard movie={movie} />
        ) : (
          <p>Sorry...No Movie Found..Search Again</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.moviex.movie,
  loading: state.moviex.loading,
});

export default connect(mapStateToProps, { getMovie })(Search); */
