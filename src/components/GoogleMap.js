import React, { PureComponent } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const API_KEY = process.env.API_KEY;

const mapStyles = {
  width: "73%",
  height: "50%"
};

export class GoogleMap extends PureComponent {
  render() {
    const { coordinates } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: coordinates ? coordinates.lat : '-1.2884',
          lng: coordinates ? coordinates.lng : '36.8233'
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);
