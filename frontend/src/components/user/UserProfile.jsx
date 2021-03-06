import "styles/UserProfile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import UserTripCity from "./UserTripCity";
import NavSticky from "components/NavSticky";
import Footer from "components/Footer";
import UserTripAttraction from "./UserTripAttraction";
import UserTripTodo from "./UserTripTodo";

export default function UserProfile(props) {
  const [user, setUser] = useState();
  const [allTrips, setAllTrips] = useState([]);
  const [tripCity, setTripCity] = useState("");
  const [state, setState] = useState({
    userTripTodos: [],
    userTripAttractions: [],
  });

  function getTripData(trip_id, trip_city) {
    setTripCity(trip_city);
    axios.post("/users/trip-data", { trip_id: trip_id }).then((data) => {
      setState((prev) => ({
        ...prev,
        userTripTodos: data.data.todos,
        userTripAttractions: data.data.attractions,
      }));
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
  }, [state.tripCity]);

  const deleteTrip = (id) => {
    axios.delete(`/users/trip/${id}`).then((data) => {
      let deletedTripId = data.data.id;
      setAllTrips([...allTrips].filter((trip) => trip.id !== deletedTripId));
      setState((prev) => ({
        ...prev,
        userTripTodos: data.data.todos,
        userTripAttractions: data.data.attractions,
      }));
    });
  };
  // Mapping over trips to create singular trip component
  const userTrips = allTrips
    .sort((a, b) => a.id - b.id)
    .map((trip) => {
      return (
        <UserTripCity
          key={trip.id}
          {...trip}
          getTripData={getTripData}
          deleteTrip={deleteTrip}
        />
      );
    });

  return (
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
      {state.userTripAttractions && state.userTripAttractions.length && (
        <section className="w-100">
          <div className="heading">
            <h2>{`Attractions List & Todos for ${tripCity}`} </h2>
            <hr className="hr" />
          </div>
          <div className="attraction-todo-container">
            <div className="attraction-container">
              <div className="heading">
                <h2>Your Attractions</h2>
                <hr className="hr" />
              </div>
              {state.userTripAttractions.length
                ? state.userTripAttractions.map((item) => {
                    return (
                      <UserTripAttraction key={item.attractiion_id} {...item} />
                    );
                  })
                : null}
            </div>
            <div className="todo-container">
              <div className="heading">
                <h2>Todos</h2>
                <hr className="hr" />
              </div>
              {state.userTripTodos.length
                ? state.userTripTodos.map((item) => {
                    return <UserTripTodo key={item.id} {...item} />;
                  })
                : null}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
