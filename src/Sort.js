import React, { Component } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

class Sort extends Component {

  constructor() {
    super()
    this.state = {
      value: 'idx'
    }
  }

  render() {
    return (
      <FormControl>
        <FormLabel>Sort By</FormLabel>
        <RadioGroup value={this.state.value} onChange={event => {
          this.setState({ value: event.target.value });
          this.props.sortItems(event.target.value);
        }}>
          <FormControlLabel value="idx" control={<Radio />} label="Popularity" />
          <FormControlLabel value="price" control={<Radio />} label="Price" />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default Sort;