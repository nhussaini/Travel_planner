export default function Image(props) {
  return (
    <div className="m-1">
      <img className="image-res" alt={props.alt} src={props.src} />
    </div>
  );
}
