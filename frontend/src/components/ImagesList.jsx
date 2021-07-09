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
  console.log(image1);
  image1 && console.log("line 25---", image1.url);
  // // console.log("line 13---", image2);
  // // console.log("line 13---", image3);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="image-container">
        <div className="first-image">
          {image1 && (
            <Image
              key={image1.id}
              alt={image1.alt_description}
              src={image1.url}
            />
          )}
          <button
            className=" btn btn-success overlay-button"
            onClick={handleShow}
          >
            See All Images
          </button>
        </div>

        <div className="nested-image-container">
          <div className="nested-image">
            {image2 && (
              <Image
                key={image2.id}
                alt={image2.alt_description}
                src={image2.url}
              />
            )}
          </div>
          <div className="nested-image">
            {image3 && (
              <Image
                key={image3.id}
                alt={image3.alt_description}
                src={image3.url}
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
