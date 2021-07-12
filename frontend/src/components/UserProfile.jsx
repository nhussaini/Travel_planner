import "../styles/UserProfile.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
import axios from "axios";

export default function UserProfile(props) {
  // const [user, setUser] = useState();
  // const trip = [1];
  // let history = useHistory();

  // localStorage.clear();
  let userData = localStorage.getItem("user");
  console.log("----------------->", userData);

  userData = JSON.parse(userData);
  // setUser(userData);
  console.log("userData----------------->", userData);

  useEffect(() => {
    axios.post("/users/user-trip", { userId: userData.id }).then((data) => {
      console.log("userProfile trip: ", data);
    });
  }, []);

  // if (!userData) {
  //   history.push("/login");
  // }

  return (
    <div>user Profile</div>
    // <div>
    //   <NavBar />
    //   <div className="head">
    //     <div className="head-background">
    //       <div className="user-name">
    //         <p className="welcome">Welcome to Your Profile</p>
    //         <p className="name">Linda Guy</p>
    //         <p>{!user ? null : user.email}</p>
    //       </div>
    //     </div>
    //   </div>

    //   {trip.length === 0 ? (
    //     <div className="no-trip-added card">
    //       <div class="message">
    //         <p className="card-body">
    //           You have no trips added, wanna add a trip?
    //           <span>
    //             <a href="/">Visit the home page</a>
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //   ) : (
    //     <div>
    //       <h2>Your Trips</h2>
    //       <div>
    //         {/* To do List

    //         {/* <ToDoList /> */}
    //       </div>

    //       <div className="trip-container">
    //         <div className="trip-city-img-container">
    //           <img
    //             className="city-image"
    //             src={`https://images.unsplash.com/photo-1499174549139-68d3f37243b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
    //             alt="city"
    //           />
    //           <div className="trip-city-name">Paris</div>
    //         </div>

    //         <div className="attractions-container">
    //           <div className="attractions-img-container">
    //             <img
    //               className="attractions-img"
    //               src={`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
    //               alt="attraction"
    //             />
    //             <span className="attractions-detail">Eiffel Tower</span>
    //           </div>
    //           <div className="attractions-remove">
    //             <p>Remove</p>
    //           </div>
    //         </div>
    //         <div className="attractions-container">
    //           <div className="attractions-img-container">
    //             <img
    //               className="attractions-img"
    //               src={`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
    //               alt="attraction"
    //             />
    //             <span className="attractions-detail">Eiffel Tower</span>
    //           </div>
    //           <div className="attractions-remove">
    //             <p>Remove</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}
