import Image from "./Image";

export default function ImagesList(props) {
  console.log(props.images);
  const allImages = props.images.map((image) => {
    return (
      <Image
        key={image.id}
        alt={image.alt_description}
        src={image.urls.thumb}
      />
    );
  });
  return (
    <div>
      <div>
        <h2 className="heading">
          {props.images.length ? `images of ${props.location}` : ""}
        </h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center">{allImages}</div>
    </div>
  );
}
