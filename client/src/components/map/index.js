import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMaps = ({ latitude, longitude }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="row">
        <div className="col-sm-4">
          Zip: <input type="text" className="form-control" />
          <br />
          State: <input type="text" className="form-control" />
          <br />
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="col-sm-8">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCgcb-5-9ab2TmtlFkJfK3G8ugJxpScfgo",
            }}
            defaultCenter={{ lat: latitude, lng: longitude }}
            defaultZoom={5}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          
          ></GoogleMapReact>
          
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
