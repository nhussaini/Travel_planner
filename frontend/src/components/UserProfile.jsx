import "../styles/UserProfile.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
import userProfileCity from "./userProfileCity";

import axios from "axios";

export default function UserProfile(props) {
  const [user, setUser] = useState();
  // const trip = [1];
  // let history = useHistory();
  // const [userTripInfo, setUserTripInfo] = useState({
  // });
  const [userTripAttractions, setUserTripAttractions] = useState([]);
  const [userTripTodos, setUserTripTodos] = useState([]);

  useEffect(() => {
    //get the userinfo from localStorage and store it into state
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);
    setUser(userData);

    axios.post("/users/user-trip", { userId: userData.id }).then((data) => {
      console.log("userProfile trip: ", data);
      setUserTripAttractions(data.data.attractions);
      setUserTripTodos(data.data.todos);
    });
  }, []);
  console.log("userTripAttractions==>", userTripAttractions);
  console.log("userTripTodos==>", userTripTodos);

  return (
    // <div>user Profile</div>
    <div>
      <NavBar />
      <div className="head">
        <div className="head-background">
          <div className="user-name">
            <p className="welcome">Welcome to Your Profile</p>
            <p className="name">{!user ? null : user.first_name}</p>
          </div>
        </div>
      </div>
      <userProfileCity />
      {/* <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
}
