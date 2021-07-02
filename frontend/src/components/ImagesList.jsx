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
    <div className="d-flex">
      <h2 className="text-center">
        {props.images.length ? `images of ${props.location}` : ""}
      </h2>
      <div>{allImages}</div>
    </div>
  );
}
