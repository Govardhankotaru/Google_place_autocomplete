import React, { useState, memo } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";

const API_KEY = process.env.API_KEY;

const classNames = require("classnames");

function AutoCompleteSearch({ setLocation }) {
  const [address, setAddress] = useState("");
  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        const location = {
          lat,
          lng
        };
        setLocation(location);
      })
      .catch(error => console.error("Error", error));
  };

  const handleCloseClick = () => {
    setAddress("");
  };

  const handleError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      onError={handleError}
      debounce={600}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search_bar_container">
          <div className="search_input_container">
            <input
              {...getInputProps({
                placeholder: "Search Places...",
                className: "search_input"
              })}
            />
            {address.length > 0 && (
              <button
                className="search_clear_button"
                onClick={handleCloseClick}
              >
                x
              </button>
            )}
          </div>
          {suggestions.length > 0 && (
            <div className="search_autocomplete_container">
              {suggestions.map((suggestion, index) => {
                const className = classNames("search_suggestion_item", {
                  search_suggestion_item_active: suggestion.active
                });
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, { className })}
                  >
                    <strong>{suggestion.formattedSuggestion.mainText}</strong>{" "}
                    <small>
                      {suggestion.formattedSuggestion.secondaryText}
                    </small>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
  libraries: ["places"]
})(memo(AutoCompleteSearch));
