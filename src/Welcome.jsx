import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      <Alert variant="success" className="my-3">
        <Alert.Heading>Benvenuto in Epibook!</Alert.Heading>
        <p>
          Qui sotto puoi vedere tutti i libri di Epibook la
          libreria libera!
        </p>
      </Alert>
    </>
  );
}

export default Welcome;
