import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Component } from "react";
// import CommentArea from "./CommentArea";
class MySingleBook extends Component {
  handleClickButton = () => {
    this.setState({ isSelected: true });
  };
  render() {
    const cardSelected =
      this.props.elementId === this.props.asin
        ? "my-3 card-selected"
        : "my-3";
    return (
      <>
        <Card
          key={`book-${this.props.asin}`}
          className={cardSelected}
          onClick={() => {
            this.handleClickButton();
            this.props.elementIdNew(this.props.asin);
          }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Categoria:
              {this.props.category}
            </Card.Text>
            <Badge bg="light" text="dark">
              {this.props.price}€
            </Badge>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default MySingleBook;
