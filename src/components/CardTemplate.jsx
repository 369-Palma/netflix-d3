import Card from "react-bootstrap/Card";

const CardTemplate = (props) => {
  return (
    <Card className="text-bg-dark">
      <Card.Img variant="top" src={props.movie.Poster} />
      <Card.Body>
        <Card.Title>{props.movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardTemplate;
