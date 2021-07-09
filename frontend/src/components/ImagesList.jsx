import Image from "./Image";
import "../styles/imageList.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ImagesList(props) {
  console.log("line 9---", props.images);
  const allImages = props.images.slice(0, 10).map((image) => {
    return <Image key={image.id} alt={image.alt_description} src={image.url} />;
  });
  const [image1, image2, image3] = props.images;
  // console.log("line 13---", image1);
  // console.log("line 13---", image2);
  // console.log("line 13---", image3);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <h2 className="heading">
          {props.images.length ? `images of ${props.location}` : ""}
        </h2>
      </div>
      <div className="image-container">
        <div className="first-image">
          <Image
            // key={props.images[0]}
            // alt={props.images[0].alt_description}
            src={`https://images.unsplash.com/photo-1622495727422-badb2c5a688b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MXwxfHNlYXJjaHwxfHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080`}
          />
        </div>

        <div className="nested-image-container">
          <div className="nested-image">
            <Image
              // key={props.images[1]}
              // alt={props.images[1].alt_description}
              src={`https://images.unsplash.com/photo-1581373449483-37449f962b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw0fHxDaGljYWdvfGVufDB8MHx8fDE2MjU3NjYxNjk&ixlib=rb-1.2.1&q=80&w=1080`}
            />
          </div>
          <div className="nested-image">
            <Image
              // key={props.images[2]}
              // alt={props.images[2].alt_description}
              src={`https://www.ctvnews.ca/polopoly_fs/1.5448259.1622323481!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg`}
            />
          </div>
        </div>
        {/* {allImages} */}
      </div>
      <section className="w-50"></section>
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
