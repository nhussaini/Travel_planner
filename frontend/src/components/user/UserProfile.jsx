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

  const deleteTrip = (id) => {
    console.log(id);
    axios.delete(`/users/trip/${id}`).then((data) => {
      let deletedTripId = data.data.id;
      let updatedTrips = [...allTrips].filter(
        (trip) => trip.id !== deletedTripId
      );
      setAllTrips([...allTrips].filter((trip) => trip.id !== deletedTripId));
    });
  };
  // Mapping over trips to create singular trip component
  const userTrips = allTrips.map((trip) => {
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
            <h2>{`Attractions List & Todos for ${tripCity}`} </h2>
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
        </section>
      )}
      <Footer />
    </div>
  );
}

// let state = [
//   {
//     id: '3',
//     image_url: "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw2fHxMb25kb258ZW58MHwwfHx8MTYyNjE5NzIwOA&ixlib=rb-1.2.1&q=80&w=1080";
//     long_name: "London, United Kingdom",
//     short_name: "London",
//     user_id: '1',
//   },
//   {
//     id: '2',
//     image_url: "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw2fHxMb25kb258ZW58MHwwfHx8MTYyNjE5NzIwOA&ixlib=rb-1.2.1&q=80&w=1080";
//     long_name: "Cairo, Egypt",
//     short_name: "Cairo",
//     user_id: '1',
//   },
//   {
//     id: '4',
//     image_url: "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNTMwNjh8MHwxfHNlYXJjaHw2fHxMb25kb258ZW58MHwwfHx8MTYyNjE5NzIwOA&ixlib=rb-1.2.1&q=80&w=1080";
//     long_name: "Sylhet Bangladesh",
//     short_name: "Sylhet",
//     user_id: '1',
//   }
// ]

// let newState = [...state].filter(item => item.id !== 2)
