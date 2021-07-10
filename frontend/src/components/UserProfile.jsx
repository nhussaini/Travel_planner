import "../styles/UserProfile.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ToDoList from "./ToDoList";

export default function UserProfile(props) {
  const [user, setUser] = useState();
  const trip = [1];
  let history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API

    // localStorage.clear();
    let userData = localStorage.getItem("user");
    console.log("----------------->", userData);

    userData = JSON.parse(userData);
    setUser(userData);
    console.log("----------------->", userData);
  }, []);

  // if (!userData) {
  //   history.push("/login");
  // }

  return (
    <div>
      <Navbar />
      <div className="head">
        <div className="head-background">
          <div className="user-name">
            <p className="welcome">Welcome to Your Profile</p>
            <p className="name">Linda Guy</p>
            <p>{!user ? null : user.email}</p>
          </div>
        </div>
      </div>

      {trip.length === 0 ? (
        <div className="no-trip-added card">
          <div class="message">
            <p className="card-body">
              You have no trips added, wanna add a trip?
              <span>
                <a href="/">Visit the home page</a>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h2>Your Trips</h2>
          <div className="to-do">
            To do List
            <p>
              Here will be stuff that the user wants to do while on their trip.{" "}
              <br></br>I put lots of padding in the meantime
            </p>
          </div>
          {/* <div className="user-profile-container">
            <div className="user-trip-card card">
              <div className="city-name-user-profile-title">Paris</div>
              <img
                className="user-trip-img"
                alt="city"
                src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
              />
            </div>
          </div> */}
          <div className="trip-container">
            <div className="trip-city-img-container">
              <img
                className="city-image"
                src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
                alt="city"
              />
              <div className="trip-city-name">Paris</div>
            </div>

            <div className="attractions-container">
              <div className="attractions-img-container">
                <img
                  className="attractions-img"
                  src={`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                  alt="attraction"
                />
                <span className="attractions-detail">Eiffel Tower</span>
              </div>
              <div className="attractions-remove">
                <p>Remove</p>
              </div>
            </div>
            <div className="attractions-container">
              <div className="attractions-img-container">
                <img
                  className="attractions-img"
                  src={`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                  alt="attraction"
                />
                <span className="attractions-detail">Eiffel Tower</span>
              </div>
              <div className="attractions-remove">
                <p>Remove</p>
              </div>
            </div>
          </div>
          {/* <div className="user-profile-container">
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
          </div> */}
          <ToDoList />
        </div>
      )}
    </div>
  );
}
