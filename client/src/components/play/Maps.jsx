import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia2luZzk1IiwiYSI6ImNrdTJrNWw5ejJycnQyc3FudHQxeTVqMjIifQ.fRxRHzM06PWD4FJNYn0RlQ",
  center: [43.324399991, 45.747222641],
});

function Maps({ handleSelectEvent, zoom, coordinate }) {
  const events = useSelector((state) => state.events.events);

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        zoom={[zoom]}
        center={coordinate}
        containerStyle={{
          height: "500px",
          width: "750px",
          overflow: "hidden",
        }}
      >
        {events.map((event) => {
          return (
            <div>
                <Marker
                  onClick={() => handleSelectEvent(event)}
                  anchor="bottom"
                  coordinates={[event.width, event.longs]}
                  style={{
                    cursor: "pointer",
                    fontSize: 55,
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ fontSize: 26, color: "darkorange" }}
                  />
                </Marker>
            </div>
        );
        })}
      </Map>
    </div>
  );
}

export default Maps;