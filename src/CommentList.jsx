import { Component } from "react";
import { Button, ListGroup, Alert } from "react-bootstrap";

class CommentList extends Component {
  cancelelement = (comment) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${comment}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("DELETE OK");
        } else {
          throw new Error("Qualcosa è andato storto");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {this.props.commenti.length === 0 ? (
          <Alert variant="danger">
            Non ci sono commenti, inseriscine uno
          </Alert>
        ) : (
          this.props.commenti.map((commenti) => (
            <ListGroup key={commenti._id}>
              <ListGroup.Item>
                Autore: {commenti.author}
                Commento: {commenti.comment} voto:
                {commenti.rate}
                <Button
                  variant="btn"
                  onClick={() =>
                    this.cancelelement(commenti._id)
                  }
                >
                  <i className="bi bi-trash3"></i>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))
        )}
      </>
    );
  }
}

export default CommentList;
