import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Button from "react-bootstrap/Button";
import "styles/error404.scss";
import ErrorImage from "assets/images/error-404.jpeg";

export default function Error404() {
  return (
    <main>
      <NavBar />
      <section className="container-404">
        <div className="image-container-404">
          <img src={ErrorImage} alt="404 Not Found" />
        </div>
        <div className="message-container-404">
          <span>Oh No, You're lost.</span>
          <span>
            Don't worry though, our world with amazing cities still waiting for
            you!
          </span>
          <Button href="/" variant="success">
            Back to Home!
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
