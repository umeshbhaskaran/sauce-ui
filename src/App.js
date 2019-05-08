import React, { Component }from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button,
  InputGroup,
  FormControl,
  CardDeck,
  Card,
  Form
} from 'react-bootstrap';
import Select from 'react-select';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SauceLogo from './images/Logo'
import './App.css';
import { departments, locations, resolutions, assets } from "./data/data";


const styles = {
  table: {
    backgroundColor: "#222323",
  }
}


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


class SearchButton extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log('event called')
    this.props.handleSearchSubmit(event);
  };

  render() {
    return(
      <Button
      variant={this.props.variant}
      onClick={this.handleSubmit}>
      {this.props.label}
      </Button>
      );
  }
}

class SearchBar extends Component {
   constructor(props){
    super(props);
   }

   handleChange = (event) => {
    this.props.handleSearchInputChange(event.target.value);
   }

   handleSubmit = (event) => {
    this.props.handleSearchSubmit(event);
  } 

  render() {
    const {placeholder, label} = this.props
    return (
    <InputGroup style={{width: 700, paddingLeft: 20}}>
      <FormControl
        placeholder={placeholder}
        aria-label={label}
        aria-describedby="basic-addon2"
        inputRef={input => this.textInput = input}
        onChange={this.handleChange}
        value={this.props.searchTerm}
        onSubmit={this.handleSubmit}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={this.handleSubmit}>
        <i className="fa fa-search"></i>
        </Button>
      </InputGroup.Append>
    </InputGroup>
    
  )
  }
}
  

class FilterSelect extends Component {


  handleChange = (selected) => {
    const selectedList = []

    selected.forEach (selection => {
      console.log(selection.value)
      selectedList.push(selection.value)
      console.log(selectedList)
    })
    this.props.handleOptionsChange(selectedList);
  }
  
  render() {
    const {label} = this.props

    return (
      <div style={{height: 250, backgroundColor: "#222322"}}>
      <p style={{paddingLeft: 20, fontSize: 12}}>{label}</p>
      <Select
        closeMenuOnSelect={true}
        defaultValue={''}
        isMulti
        options={this.props.options}
        styles={colourStyles}
        placeholder={"select " + label + '...'}
        onChange={this.handleChange}
      />
      </div>
    );
  }
}

class ListTable extends Component {

  constructor(props){
    super(props);
  }

    rowClassNameFormat = (row, rowIdx) => {
       return 'selectRowProp';
    };

  render() {
    const selectRowProp = {
      color: 'white',
    };
    
    return(
      <BootstrapTable data={this.props.data} containerStyle={ { background: "#222322", maxHeight: '100%', overflowY: 'scroll', border: 0 } }  trClassName={this.rowClassNameFormat} version='4'>
        <TableHeaderColumn dataField='thumbnail' className="column-select">Thumbnail</TableHeaderColumn>
        <TableHeaderColumn isKey={ true } dataSort={true} dataField='name' className="column-select">Asset Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' className="column-select">Asset Type</TableHeaderColumn>
        <TableHeaderColumn dataField='date' className="column-select">Date</TableHeaderColumn>
        <TableHeaderColumn dataField='location' className="column-select">Location</TableHeaderColumn>
        <TableHeaderColumn dataField='tags' className="column-select">Tags</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}


class ListGrid extends Component {
  constructor(props){
    super(props)
  }


  render() {
    
    return(
    <div style={{width: '90%', height: '90%', overflow: 'scroll'}}>
     <CardDeck style={{display: 'flex', flexDirection: 'row'}}>  
     {this.props.data.map(asset=> 
        <Card style={{ width: 400, height: 300, display: 'flex' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{asset.name}e</Card.Title>
          <Card.Text>
            {asset.tags}
          </Card.Text>
        </Card.Body>
      </Card>
      )}
    </CardDeck>
    </div>
    );
  }
}

class Result extends Component {
  
  constructor(props) {
    super(props);
    this.handleListView.bind(this)
    this.handleGridView.bind(this)

  }

  state = {
    isList: true,
    isGrid: false,
  }

  handleListView = (event) => {
    this.setState({isList: !this.state.isList})
    this.setState({isGrid: !this.state.isGrid})
  }
  handleGridView = (event) => {
    this.setState({isGrid: !this.state.isGrid})
    this.setState({isList: !this.state.isList})
  }

  render() {
    return (
    <div>
      <Button variant="secondary pull-right" onClick={this.handleListView} disabled={this.state.isList}> List </Button>
      <Button variant="secondary pull-right" onClick={this.handleGridView} disabled={this.state.isGrid}> Grid </Button>
      {this.state.isList ? <ListTable data={this.props.data}/> : <ListGrid data={this.props.data}/>}
    </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      searchTerm: '',
      departments: [],
      locations: [],
      resolutions: [],
      result: []
    }
    this.handleSearchInputChange.bind(this);
    this.setDepartments.bind(this)
    this.setLocations.bind(this)
    this.setResolutions.bind(this)
    this.handleSearchSubmit.bind(this)
  }

  handleSearchInputChange = (value) => {
    this.setState({searchTerm: value});
  }

  setDepartments = (depts) => {
    this.setState({depts});
    let filteredByDept = []
    const filterDepartments = (asset) => {
      return depts.includes(asset.type)
    }
    filteredByDept = this.state.departments && this.state.result.filter(filterDepartments)
    this.setState({result: filteredByDept ? filteredByDept: this.state.result})
  }

  setLocations = (locs) => {
    this.setState({locs});
    let filteredByLoc = []
    const filterLocations = (asset) => {
      return locs.includes(asset.location)
    }
    filteredByLoc = this.state.locations && this.state.result.filter(filterLocations)
    this.setState({result: filteredByLoc && filteredByLoc})
  }

  setResolutions = (resolutions) => {
    this.setState({resolutions});
  }

  handleSearchSubmit = (event) => {
    const assetMatch = (asset) => {
      return asset.name.includes(this.state.searchTerm)  || asset.tags.includes(this.state.searchTerm)
    }
    const updatedResult = assets.filter(assetMatch)
    this.setState({result: updatedResult})
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <Container fluid="false">
          <Row>
            <Col xs={1} sm={1} md={2} style={{display: 'flex', justifyContent: 'center'}}>
              <SauceLogo />
            </Col>
            <Col xs={5} sm={11} md={10} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <SearchButton 
                variant={"secondary"} 
                label={"All"}
                handleSearchSubmit={() => this.handleSearchSubmit}
              />
              <SearchBar 
                placeholder={"Search for assets"} 
                label={"search"}
                handleSearchInputChange={this.handleSearchInputChange}
                handleSearchSubmit={this.handleSearchSubmit}
              />
            </Col>
          </Row>

          <Row style={{height: '95%'}}>
            <Col xs={2} xsOffset={6} sm={2} md={3}>
            FILTER
            <FilterSelect label={'Department'} options={departments} handleOptionsChange={this.setDepartments}/>
            <FilterSelect label={'Location'} options={locations}  handleOptionsChange={this.setLocations}/>
            <FilterSelect label={'Resolution'} options={resolutions} handleOptionsChange={this.setResolutions}/>
            </Col>
            <Col xs={4} sm={9} md={9}>
            RESULTS
            <Result 
              data={this.state.result}
            />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;