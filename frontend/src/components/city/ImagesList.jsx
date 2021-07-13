import Image from "./Image";
import "styles/imageList.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ImagesList(props) {
  const allImages = props.images.slice(0, 10).map((image) => {
    return (
      <div key={image.id}>
        <img src={image.url} alt={image.alt_description} />
        <p className="image-legend">{image.alt_description}</p>
      </div>
    );
  });

  const [image1, image2, image3] = props.images;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="image-container">
        <div className="first-image">
          {image1 && (
            <Image
              alt={image1.alt_description}
              src={image1.url}
              onClick={handleShow}
            />
          )}
          <button
            className=" btn btn-success overlay-button btn-sm"
            onClick={handleShow}
          >
            See All Images
          </button>
        </div>

        <div className="nested-image-container">
          <div className="nested-image">
            {image2 && (
              <Image
                alt={image2.alt_description}
                src={image2.url}
                onClick={handleShow}
              />
            )}
          </div>
          <div className="nested-image">
            {image3 && (
              <Image
                alt={image3.alt_description}
                src={image3.url}
                onClick={handleShow}
              />
            )}
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
