import { Component } from "react";
import { Button, Form } from "react-bootstrap";
class AddComments extends Component {
  state = {
    commenti: {
      comment: "",
      rate: "",
      elementId: this.props.elementId,
    },
  };

  fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        body: JSON.stringify(this.state.commenti),
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjYwYTdmMzA0NjAwMWFlNTlmYTEiLCJpYXQiOjE3MTQ0MDAxMTIsImV4cCI6MTcxNTYwOTcxMn0.R1bNr5Db_DgmIlOFTMUMkxtY2H6Nt-0wEcEDw9S58-8",
        },
      }
    )
      .then((rep) => {
        if (rep.ok) {
          this.setState({
            commenti: {
              comment: "",
              rate: "",
              elementId: "",
            },
          });
        } else {
          throw new Error("si è verificato un errore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    this.fetchComment();
  };
  handleChanged = (propertyName, propertyValue) => {
    this.setState(
      (prevState) => ({
        commenti: {
          ...prevState.commenti,
          [propertyName]: propertyValue,
        },
      }),
      () => {
        console.log(this.state.commenti);
      }
    );
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handlesubmit}>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Aggiungi un commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) =>
                this.handleChanged(
                  "comment",
                  e.target.value
                )
              }
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              this.handleChanged("rate", e.target.value)
            }
          >
            <option>
              Seleziona il voto che intendi attribuire al
              libro
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button
            type="submit"
            variant="success"
            className="my-3"
          >
            Invia il commento
          </Button>
        </Form>
      </>
    );
  }
}
export default AddComments;
