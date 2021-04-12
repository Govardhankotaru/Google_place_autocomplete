import React from "react";
import { connect } from "react-redux";

import AutoCompleteSearch from "./AutoCompleteSearch";
import GoogleMap from "./GoogleMap";

import { setLocation } from "../actions";

class PlaceAutocomplete extends React.Component {
  render() {
    const { coordinates } = this.props;
    return (
      <div className="main">
        <div className="places_container">
          <div className="places_inner">
            <div className="search_row">
              <AutoCompleteSearch {...this.props} />
            </div>
            <div className="map_styles"><GoogleMap coordinates={coordinates}/></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coordinates: state.coordinates.coordinates
  };
};

const mapDispatchToProps = dispatch => ({
  setLocation: data => {
    dispatch(setLocation(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceAutocomplete);
