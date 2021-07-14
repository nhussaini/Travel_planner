import "styles/UserProfile.scss";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
// import NavBar from "components/NavBar";
// import ToDoList from "../ToDoList";
import UserTripCity from "./UserTripCity";
import NavSticky from "components/NavSticky";
import Footer from "components/Footer";
import UserTripAttraction from "./UserTripAttraction";
import UserTripTodo from "./UserTripTodo";

export default function UserProfile(props) {
  const [user, setUser] = useState();
  // const trip = [1];
  // let history = useHistory();
  // const [userTripInfo, setUserTripInfo] = useState({
  // });
  const [allTrips, setAllTrips] = useState([]);
  const [userTripAttractions, setUserTripAttractions] = useState([]);
  const [userTripTodos, setUserTripTodos] = useState([]);
  const [tripCity, setTripCity] = useState("");

  function getTripData(trip_id, trip_city) {
    setUserTripAttractions([]);
    setUserTripTodos([]);
    setTripCity("");
    axios.post("/users/trip-data", { trip_id: trip_id }).then((data) => {
      setUserTripAttractions(data.data.attractions);
      setUserTripTodos(data.data.todos);
      setTripCity(trip_city);
    });
  }
  useEffect(() => {
    //get the userinfo from localStorage and store it into state
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);
    setUser(userData);

    axios.post("/users/user-trip", { userId: userData.id }).then((data) => {
      setAllTrips(data.data);
    });
  }, []);

  // useEffect(() => {
  //   userTripAttractions
  // }, [userTripAttractions, userTripTodos]);

  // Mapping over trips to create singular trip component
  const userTrips = allTrips.map((trip) => {
    return <UserTripCity key={trip.id} {...trip} getTripData={getTripData} />;
  });

  return (
    // <div>user Profile</div>
    <div>
      <NavSticky />
      <div className="head">
        <div className="head-background">
          <div className="user-name">
            <p className="welcome">Welcome to Your Profile,</p>
            <p className="name">{!user ? null : user.first_name}</p>
          </div>
        </div>
      </div>
      <div className="trip-container">
        <div className="heading">
          <h2>Your Trips</h2>
          <hr className="hr" />
        </div>
        {userTrips}
      </div>
      {userTripAttractions.length && (
        <section className="w-100">
          <div className="heading">
            <h2>{`Attractions List & Todos for ${tripCity}`}</h2>
            <hr className="hr" />
          </div>
          <div className="attraction-todo-container">
            <div className="attraction-container">
              <div className="heading">
                <h2>Your Attractions</h2>
                <hr className="hr" />
              </div>
              {userTripAttractions.length
                ? userTripAttractions.map((item) => {
                    return <UserTripAttraction key={item.id} {...item} />;
                  })
                : null}
            </div>
            <div className="todo-container">
              <div className="heading">
                <h2>Todos</h2>
                <hr className="hr" />
              </div>
              {userTripTodos.length
                ? userTripTodos.map((item) => {
                    return <UserTripTodo key={Math.random()} {...item} />;
                  })
                : null}
            </div>
          </div>
          {/* <UserTripTodo /> */}
        </section>
      )}
      <Footer />
    </div>
  );
}
