import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

function MyFooter() {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="bg-dark"
    >
      <div className="p-2">
        <Stack gap={3} className=" mx-auto">
          <Button variant="btn">
            <img src={twitter} alt="twitter" /> Seguici su
            twitter
          </Button>
          <Button variant="btn">
            <img src={facebook} alt="facebook" /> Seguici su
            facebook
          </Button>
          <Button variant="btn">
            <img src={instagram} alt="instagram" /> Seguici
            su instagram
          </Button>
        </Stack>
      </div>
      <div className="p-2 ms-auto">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Inserisci la tua mail"
          />
          <Button variant="outline-success">
            Iscriviti alla newsletter
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

export default MyFooter;
