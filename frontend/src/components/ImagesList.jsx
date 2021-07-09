import Image from "./Image";
import "../styles/imageList.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ImagesList(props) {
  const [carouselStatus, setCarouselStatus] = useState(false);
  const allImages = props.images.map((image) => {
    return <Image key={image.id} alt={image.alt_description} src={image.url} />;
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    // setCarouselStatus(true);
  };
  const handleShow = () => setShow(true);

  function handleClick(e) {
    setCarouselStatus(true);
  }
  return (
    <div>
      <div>
        <h2 className="heading">
          {props.images.length ? `images of ${props.location}` : ""}
        </h2>
      </div>
      {/* <div className="image-container">{allImages}</div> */}
      <section className="w-50">
        <Button variant="danger">Primary</Button>
        {console.log(carouselStatus)}
        {/* {carouselStatus ? (
          <Carousel autoPlay="true" width="25">
            <div>
              <img src="https://images.unsplash.com/photo-1622495727422-badb2c5a688b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MXwxfHNlYXJjaHwxfHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1581373449483-37449f962b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw0fHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080" />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        ) : null} */}
      </section>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel autoPlay="true" width="75">
            <div>
              <img src="https://images.unsplash.com/photo-1622495727422-badb2c5a688b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MXwxfHNlYXJjaHwxfHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1581373449483-37449f962b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw0fHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080" />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}
