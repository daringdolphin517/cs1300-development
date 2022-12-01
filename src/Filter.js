import React, { Component } from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

class Filter extends Component {

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{this.props.title}</FormLabel>
        <FormGroup>{this.props.selections.map((selection) => {
          return (
            <FormControlLabel
              control={<Checkbox onChange={() => this.props.filterItems(selection, this.props.title)} />}
              label={selection}
              key={selection} />
          );
        })}</FormGroup>
      </FormControl>
    )
  }
}

export default Filter;