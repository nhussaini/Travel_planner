import { useParams } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import GoogleMap from "./city/GoogleMap";
import ToDoList from "./ToDoList";
import NavSticky from "components/NavSticky";
import "styles/cityDetail.scss";
import "styles/TripPlanner.scss";
import { getUser } from "helpers/helper.js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TripPlanner(props) {
  const [cityInfo, setCityInfo] = useState({});
  const [cityAttractions, setCityAttractions] = useState([]);
  const [show, setShow] = useState(false);
  const [attractions, setAttractions] = useState([]);
  const [todos, setTodos] = useState([]);
  const [saveStatus, setSaveStatus] = useState(false);

  //add a new todo
  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  //remove a todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const { city } = useParams();

  //to fetch data from db for city and city attractions
  useEffect(() => {
    axios.post("/back/cities/new-trip", { city: city }).then((data) => {
      setCityInfo(data.data.cityInfo);
      setCityAttractions(data.data.cityAttractions);
    });
  }, []);

  const id = getUser();

  //diplay the content conditionally
  const handleDisplayAttraction = () => {
    setShow(true);
  };

  //save a trip for a user to db
  const saveTrip = () => {
    axios
      .post("/api/trip", {
        userId: id,
        cityId: cityInfo.id,
        attractions: attractions,
        todos: todos,
      })
      .then((data) => {
        if (data.data === "ok") {
          setSaveStatus(true);
        }
      });
  };

  //add chosen attraction to the state attraction
  const addAttraction = (name, img_url, id) => {
    const filterItems = attractions.filter((item) => item.name === name);
    if (!filterItems.length) {
      const newAttraction = [...attractions, { name, img_url, id }];
      setAttractions(newAttraction);
    }
  };

  //remove an attraction from state
  const handleRemoveAttraction = (index) => {
    const newAttractions = [...attractions];
    newAttractions.splice(index, 1);
    setAttractions(newAttractions);
    if (newAttractions.length === 0) {
      setShow(false);
    }
  };

  const attractionsToVisit = attractions.map((attraction, index) => {
    return (
      <li className="chosen-attractions-list" key={index}>
        <div className="img-chosen-div">
          <img src={attraction.img_url} alt={attraction.attractionName} />
        </div>
        <p className="chosen-attraction-name">{attraction.name}</p>
        <button
          className="chosen-attraction-delete"
          onClick={() => {
            handleRemoveAttraction(index);
          }}
        >
          x
        </button>
        <div className="remove-att-div"></div>
      </li>
    );
  });
  return (
    <main>
      <NavSticky />
      <div className="trip-header">
        <img src={cityInfo.image_url} alt="city" className="img-header-trip" />
        <div className="overlay-trip">
          <p>
            Plan your trip to <i>{cityInfo.short_name}</i>.
          </p>
        </div>
      </div>
      <section className="attractions-todo">
        <div className="cities-attractions">
          {!attractions.length ? (
            <div className="attractions-message">
              <p className="text-display-choosing-attractions">
                Choose attractions you want to visit in
                <i> {cityInfo.short_name}</i>.
              </p>
              <button
                className="btn btn-dark chosen-attrac-btn"
                onClick={handleDisplayAttraction}
              >
                Attractions
              </button>
            </div>
          ) : (
            <div className="chosen-attractions-parent">
              <h5 className="chosen-attractions-title">My Activties</h5>
              <div className="chosen-attractions">
                {attractionsToVisit}
                <div className="add-to-profile-btn-div"></div>
              </div>
            </div>
          )}
        </div>
        <div className="cities-todo">
          <h5 className="chosen-attractions-todo">Your notes for this trip</h5>
          <ToDoList
            userId={id}
            addTodo={addTodo}
            removeTodo={removeTodo}
            todos={todos}
          />
        </div>
      </section>

      {/* All Our Buttons */}
      <section className="button-container">
        {!saveStatus ? (
          <div>
            <button
              className="add-to-profile-btn btn btn-dark mx-2"
              onClick={saveTrip}
            >
              Save Trip
            </button>
            <a href={`/cities/${city}`}>
              <button className="btn btn-danger">Cancel Trip</button>
            </a>
          </div>
        ) : (
          <div>
            <a href={`/cities/${city}`}>
              <button className="add-to-profile-btn btn btn-info mx-2">
                Back to City!
              </button>
            </a>
            <a href={`/users/${id}`}>
              <button className="btn btn-primary">Check your Trips</button>
            </a>
          </div>
        )}
      </section>

      {/* Show atttraction and map if user wants to see them and add them to their list */}
      {show ? (
        <section>
          <div className="map-attraction-container">
            <h4 className="title-trip-planner">
              Top Attractions in {cityInfo.short_name}
              <hr className="hr-trip-planner" />
            </h4>
            <section className="map-attraction">
              <ThingsToDoList
                location={cityInfo.short_name}
                thingsToDo={cityAttractions}
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
        </section>
      ) : null}
    </main>
  );
}
