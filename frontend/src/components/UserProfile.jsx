import "../styles/UserProfile.scss";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
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

  // if (!userData) {
  //   history.push("/login");
  // }

  return (
    // <div>user Profile</div>
    <div>
      <NavBar />
      <div className="head">
        <div className="head-background">
          <div className="user-name">
            <p className="welcome">Welcome to Your Profile</p>
            <p className="name">{!user ? null : user.first_name}</p>
            {/* <p>{!user ? null : user.email}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
