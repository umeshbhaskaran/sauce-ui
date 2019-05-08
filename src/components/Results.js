import React, { Component }from 'react';
import { 
  CardDeck,
  Card,
  Button
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Results.css';
import { colourOptions, assets } from "../data/data";




class ListTable extends Component {

    rowClassNameFormat = (row, rowIdx) => {
       return 'selectRowProp';
    };

  render() {
    const selectRowProp = {
      color: 'white',
    };
    
    return(
      <BootstrapTable data={assets} containerStyle={ { background: "#222322", maxHeight: '100%', overflowY: 'scroll', border: 0 } }  trClassName={this.rowClassNameFormat} version='4'>
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

  render() {
    
    return(
    <div style={{width: '90%', height: '90%', overflow: 'scroll'}}>
     <CardDeck style={{display: 'flex', flexDirection: 'row'}}>  
     {assets.map(asset => 
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
    this.handleGridClick.bind(this)

  }

  state = {
    isList: true,
    isGrid: false
  }

  handleGridClick = (event) => {
    this.state.isList ? 
    this.setState({isList: false, isGrid: true}) :
    this.setState({isList: true, isGrid: false})
  }
  render() {
    return (
    <div>
      <Button variant="secondary pull-right" onClick={() => this.handleGridClick}> List </Button>
      <Button variant="secondary pull-right" onClick={() => this.handleGridClick}> Grid </Button>
      {this.state.isList ? <ListTable/> : <ListGrid/>}
    </div>
    );
  }
};

export default Result;