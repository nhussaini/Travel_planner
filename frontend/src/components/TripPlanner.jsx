import { useLocation, useParams } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import GoogleMap from "./city/GoogleMap";
import ToDoList from "./ToDoList";
import NavBar from "components/NavBar";
import "styles/cityDetail.scss";
import "styles/TripPlanner.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TripPlanner(props) {
  const [cityInfo, setCityInfo] = useState({});
  const [cityAttractions, setCityAttractions] = useState([]);
  const [show, setShow] = useState(false);
  const [attractions, setAttractions] = useState([]);

  // const location = useLocation();
  const { city } = useParams();
  // console.log("city info===>", cityInfo);

  //to fetch data from db for city and city attractions
  useEffect(() => {
    axios.post("/back/cities/new-trip", { city: city }).then((data) => {
      setCityInfo(data.data.cityInfo);
      setCityAttractions(data.data.cityAttractions);
    });
  }, []);

  //get the logged in userdata from local storge
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  //get the user id
  const id = userData ? userData.id : null;

  //diplay the content conditionally
  const handleClick = () => {
    setShow(true);
  };
  // console.log("city id", cityInfo.id);

  const saveTrip = () => {
    console.log("saveTrip function is called");

    axios
      .post("/api/trip", {
        userId: id,
        cityId: cityInfo.id,
        attractions: attractions,
      })
      .then((data) => {
        console.log(data);
      });
  };

  //update the state for attractions
  const addAttraction = (name, img_url, id) => {
    // setAttractions([...attractions, newAttraction]);
    const newAttraction = [...attractions, { name, img_url, id }];

    setAttractions(newAttraction);
  };
  const attractionsToVisit = attractions.map((attraction) => {
    return (
      <li className="chosen-attractions-list">
        <div className="img-chosen-div">
          <img src={attraction.img_url} alt={attraction.attractionName} />
        </div>
        <p className="chosen-attraction-name">{attraction.attractionName}</p>
        <button
          className="chosen-attraction-delete"
          // onClick={}
        >
          x
        </button>
        <div className="remove-att-div"></div>
      </li>
    );
  });
  return (
    <div>
      <NavBar />
      <div className="trip-header">
        <img src={cityInfo.image_url} alt="city" className="img-header-trip" />
        <div className="overlay-trip">
          <p>Plan your trip here.</p>
        </div>
      </div>
      <div className="attractions-todo">
        <div className="cities-attractions">
          {!attractions.length ? (
            <p className="text-display-choosing-attractions">
              Choose attractions you want to visit by clicking the heart icon.
            </p>
          ) : (
            <div className="chosen-attractions-parent">
              <h5 className="chosen-attractions-title">My Activties</h5>
              <div className="chosen-attractions">
                {attractionsToVisit}
                <div className="add-to-profile-btn-div">
                  <button className="add-to-profile-btn" onClick={saveTrip}>
                    Save Your Trip
                  </button>
                  <button>Cancel Your Trip</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cities-todo">
          <h5 className="chosen-attractions-todo">To-do List</h5>
          {/* <ToDoList userId={id} /> */}
        </div>
      </div>
      {show ? (
        <div className="map-attraction-container">
          <h4 className="title-trip-planner">
            Top Attractions in {cityInfo.short_name}
            <hr className="hr-trip-planner" />
          </h4>
          <section className="map-attraction">
            <ThingsToDoList
              location={cityInfo.short_name}
              thingsToDo={cityAttractions.slice(0, 3)}
              addAttraction={addAttraction}
            />
            <GoogleMap
              lat={Number(cityInfo.latitude)}
              lng={Number(cityInfo.longitude)}
              location={cityInfo.long_name}
              thingsToDo={cityAttractions.slice(0, 10)}
            />
          </section>
        </div>
      ) : (
        <button
          className="btn btn-dark chosen-attrac-btn"
          onClick={handleClick}
        >
          Attractions
        </button>
      )}
    </div>
  );
}
