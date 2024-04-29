import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.commenti.map((commenti) => (
            <ListGroup.Item key={commenti._id}>
              {commenti.comment} + {commenti.rate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentList;
