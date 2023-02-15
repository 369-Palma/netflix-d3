import { Component } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import CardTemplate from "./CardTemplate";

class PhotoGallery extends Component {
  state = {
    movies: [],
    erMessage: "",
    loading: true,
    badError: false,
  };

  fetchDataMovies = async () => {
    try {
      let res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d8d3090e&s=${this.props.titolo}`
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({ movies: data.Search, erMessage: "", loading: false });
        console.log(this.state.movies);
      } else {
        this.setState({
          loading: false,
          badError: true,
          erMessage: `Errore nel caricamento dei contenuti. ERRORE: ${res.status}`,
        });
      }
    } catch (error) {
      this.setState({ loading: false, badError: true, message: error.message });
    }
  };

  componentDidMount() {
    console.log(this.fetchDataMovies());
    this.fetchDataMovies();
  }

  render() {
    return (
      <Container>
        {this.state.badError && (
          <Alert variant="danger">{this.state.erMessage}</Alert>
        )}
        {this.state.loading && (
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row className="d-flex">
          {this.state.movies
            .filter((film) => {
              return film.Type !== "game" && film.Poster !== "N/A";
            })
            .map((film, imdbID) => {
              return (
                <Col xs={6} md={2} key={imdbID}>
                  <CardTemplate movie={film} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default PhotoGallery;
