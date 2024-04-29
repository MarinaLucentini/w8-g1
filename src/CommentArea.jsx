import { Component } from "react";
import AddComments from "./AddComments";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    commenti: [],
  };
  fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.elementId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Richiesta errata o incompleta");
        }
      })
      .then((commenti) => {
        this.setState({ commenti });
        console.log(commenti);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    if (this.props.elementId) {
      this.fetchComment();
    }
  };
  componentDidUpdate = (prevprops) => {
    if (this.props.elementId !== prevprops.elementId) {
      this.fetchComment();
    }
  };
  render() {
    return (
      <>
        {this.props.isSelected && (
          <>
            <AddComments elementId={this.props.elementId} />
            <CommentList commenti={this.state.commenti} />
          </>
        )}
      </>
    );
  }
}
export default CommentArea;
