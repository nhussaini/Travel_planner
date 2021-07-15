export default function ConfirmDelete(props) {
  function handleCancel() {
    props.cancel();
  }
  return (
    <div>
      <h4>Are you you want to delete the Trip?</h4>
      <button onClick={() => props.cancel()} className="btn btn-primary mx-3">
        No
      </button>
      <button onClick={() => props.handleDelete()} className="btn btn-danger">
        Yes
      </button>
    </div>
  );
}
