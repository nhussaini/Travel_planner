import Image from "./Image";
import "../styles/imageList.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ImagesList(props) {
  // console.log("line 9---", props.images);
  // const allImages = props.images.slice(0, 10).map((image) => {
  //   return <Image key={image.id} alt={image.alt_description} src={image.url} />;
  // });

  const allImages = props.images.slice(0, 10).map((image) => {
    return (
      <div key={image.id}>
        <img src={image.url} alt={image.alt_description} />
        <p className="image-legend">{image.alt_description}</p>
      </div>
    );
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
      <div className="image-container">
        <div className="first-image">
          <Image
            // key={props.images[0]}
            // alt={props.images[0].alt_description}
            src={`https://images.unsplash.com/photo-1507992781348-310259076fe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
          />
          <button
            className=" btn btn-success overlay-button"
            onClick={handleShow}
          >
            See All Images
          </button>
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
      </div>
      <section className="w-50"></section>
      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>{`Images of ${props.location}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel autoPlay="true" width="100">
            {allImages}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}
