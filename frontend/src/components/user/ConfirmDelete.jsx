export default function ConfirmDelete(props) {
  return (
    <div>
      <h4>Are you you want to delete the Trip?</h4>
      <button
        onClick={() => props.cancel()}
        className="btn btn-primary mx-1 px-3"
      >
        No
      </button>
      <button
        onClick={() => props.handleDelete()}
        className="btn btn-danger px-3"
      >
        Yes
      </button>
    </div>
  );
}
