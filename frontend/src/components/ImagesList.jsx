import Image from "./Image";
import "../styles/imageList.scss";

export default function ImagesList(props) {
  const allImages = props.images.map((image) => {
    return <Image key={image.id} alt={image.alt_description} src={image.url} />;
  });
  return (
    <div>
      <div>
        <h2 className="heading">
          {props.images.length ? `images of ${props.location}` : ""}
        </h2>
      </div>
      <div className="image-container">{allImages}</div>
      <section></section>
    </div>
  );
}
