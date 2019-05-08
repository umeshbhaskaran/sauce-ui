import React, { Component }from 'react';
import Select from 'react-select';
import './Filter.js';
import { colourOptions, assets } from "../data/data";


const colourStyles = {
  control: styles => ({
   ...styles, 
   backgroundColor: "#222323",
   fontSize: 12,
   width: 250,
   marginLeft: 20
 }),
  option:  styles => {
    return {
      ...styles,
      backgroundColor: '#222323',
      border: 0,
      fontSize: 12
    }
  },
  menuList: styles => ({ ...styles, backgroundColor: "#222323", height: '180'}),
};

class FilterSelect extends Component {

  state = {
    selected: null
  }

  handleChange = (selected) => {
    this.setState({ selected });
  }
  
  render() {
    const {selected} = this.state
    const {label} = this.props

    return (
      <div style={{height: 250, backgroundColor: "#222322"}}>
	      <p style={{paddingLeft: 20, fontSize: 12}}>{label}</p>
	      <Select
	        closeMenuOnSelect={true}
	        defaultValue={''}
	        isMulti
	        options={colourOptions}
	        styles={colourStyles}
	        placeholder={"select " + label + '...'}
	      />
      </div>
    );
  }
};

export default FilterSelect;