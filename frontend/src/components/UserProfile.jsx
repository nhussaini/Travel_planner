import "../styles/UserProfile.scss";

export default function UserProfile(props) {
  return (
    <div>
      <div className="head">
        <div className="head-background"></div>
        <div className="user-name">Linda Guy</div>
      </div>
      <h2>My Trips</h2>
      <div className="to-do">
        To do List
        <p>
          Here will be stuff that the user wants to do while on their trip.{" "}
          <br></br>I put lots of padding in the meantime
        </p>
      </div>
      <div className="user-profile-container">
        <div className="user-trip-card card">
          <div className="city-name-user-profile-title">Paris</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
        <div className="user-trip-card card">
          <div className="city-name-user-profile">Attraction</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
        <div className="user-trip-card card">
          <div className="city-name-user-profile">Restaurant</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
        <div className="user-trip-card card">
          <div className="city-name-user-profile">Museum</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
        <div className="user-trip-card card">
          <div className="city-name-user-profile">Restaurant</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
        <div className="user-trip-card card">
          <div className="city-name-user-profile">Attraction</div>
          <img
            className="user-trip-img"
            alt="city"
            src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
          />
        </div>
      </div>
    </div>
  );
}
