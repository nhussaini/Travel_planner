import Image from "./Image";

export default function ImagesList(props) {
  const allImages = props.images.map((image) => {
    return <Image alt={image.alt_description} src={image.urls.thumb} />;
  });
  return <div>{allImages}</div>;
}
