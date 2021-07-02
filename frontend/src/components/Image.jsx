export default function Image(props) {
  return (
    <div>
      <img className="image-res" alt={props.alt} src={props.src} />
    </div>
  );
}
