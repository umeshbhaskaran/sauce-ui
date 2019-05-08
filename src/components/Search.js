import React, { Component }from 'react';
import { 
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './Search.css';

const SearchComponent = ({placeholder, label}) => {
  return (
    <InputGroup className="input-group">
      <FormControl
        placeholder="Search for assets.."
        aria-label="search"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">
        <i className="fa fa-search"></i>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
};

export default SearchComponent;