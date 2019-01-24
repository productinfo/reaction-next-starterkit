import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataSearch } from "@appbaseio/reactivesearch";
import { withStyles } from "@material-ui/core/styles";
import { Router } from "routes";

const styles = ({
  container: {
    marginLeft: "auto"
  }
});

export const searchInputProps = {
  dataField: ["product.title"],
  componentId: "search",
  onKeyDown: handleSearch,
  placeholder: "What can we help you find?",
  style: { width: "250px" }
};

/**
 *
 * @param {keyCode} Keyboard event key code
 * @param {target} Target HTML element
 * @returns {undefined} undefined
 */
function handleSearch({ keyCode, target }) {
  // Send user to grid page when the enter key is pressed.
  // The current search string will be appended to the URL as a query param.
  if (keyCode === 13) {
    const { value } = target;
    const route = value === "" ? "/" : `/?search=${value}`;
    Router.pushRoute(route);
  }
}

@withStyles(styles)
export default class SearchInput extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <DataSearch {...searchInputProps} />
      </div>
    );
  }
}
