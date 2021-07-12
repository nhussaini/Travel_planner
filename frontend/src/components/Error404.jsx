import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Button from "react-bootstrap/Button";
import "styles/home.scss";

export default function Error404() {
  return (
    <main>
      <NavBar />
      <section className="container-404">
        <div className="image-container-404">
          <img
            src="https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            alt="404 Not Found"
          />
        </div>
        <div>Sorry We could not find the page you were Liooking For!</div>
        <Button href="/">go Back to homepage</Button>
      </section>
      <Footer />
    </main>
  );
}
