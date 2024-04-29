import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Component } from "react";
import CommentArea from "./CommentArea";
class MySingleBook extends Component {
  state = {
    isSelected: false,
  };
  handleClickButton = () => {
    this.setState({ isSelected: true });
  };
  render() {
    const cardSelected = this.state.isSelected
      ? "my-3 card-selected"
      : "my-3";
    return (
      <>
        <Card
          key={`book-${this.props.asin}`}
          className={cardSelected}
          onClick={this.handleClickButton}
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
        {this.state.isSelected && (
          <CommentArea
            isSelected={this.state.isSelected}
            elementId={this.props.asin}
          />
        )}
      </>
    );
  }
}

export default MySingleBook;
