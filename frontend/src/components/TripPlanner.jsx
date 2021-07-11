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

  // console.log("cityAttractions=>", cityAttractions[0]);

  // const location = useLocation();
  const { city } = useParams();

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
  const addAttraction = (attractionName, img_url) => {
    // setAttractions([...attractions, newAttraction]);
    const newAttraction = [...attractions, { attractionName, img_url }];
    // setAttractions((prev) => ({
    //   newAttraction,
    // }));
    setAttractions(newAttraction);
  };
  console.log("attractionsstate=====>", attractions);
  return (
    <div>
      <NavBar />
      <div className="trip-header">
        <img src={cityInfo.image_url} alt="city" className="img-header-trip" />
        <div className="overlay-trip">
          <p>Welcome</p>
        </div>
      </div>
      <div className="attractions-todo">
        <div className="cities-attractions">
          {!attractions.length ? (
            <p>add the places you wanna visit in here</p>
          ) : (
            // <ThingsToDoList
            //   location={cityInfo.short_name}
            //   thingsToDo={cityAttractions.slice(0, 3)}
            //   addAttraction={addAttraction}
            // />
            <p>hi</p>
          )}
        </div>
        <div className="cities-todo">
          <ToDoList userId={id} />
        </div>
      </div>
      {show ? (
        <div className="map-attraction-container">
          <p>Top attractions in {cityInfo.short_name}</p>
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
        <button className="btn btn-primary" onClick={handleClick}>
          see attractions!
        </button>
      )}
    </div>
  );
}
