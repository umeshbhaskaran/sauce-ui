import React, { Component }from 'react';
import { 
  Container, 
  Row, 
  Col,
  Button,
} from 'react-bootstrap';
import SauceLogo from '../images/Logo';
import SearchComponent from './Search';
import FilterSelect from './Filter';
import Result from './Results';
import './Container.css';


const ButtonComponent = ({variant, label}) => {
    return (
      <Button variant={variant}>{label}</Button>
      );
};

class ContainerLayout extends Component {
  
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div className="Container">
        <Container fluid="false">
          <Row>
            <Col className="RowHeader" xs={1} sm={1} md={2} >
              <SauceLogo />
            </Col>
            <Col className="ColumnSearch" xs={5} sm={11} md={10}>
              <ButtonComponent/>
              <SearchComponent/>
            </Col>
          </Row>

          <Row className="RowData">
            <Col xs={2} sm={2} md={3}>
            FILTER
            <FilterSelect label={'Department'}/>
            <FilterSelect label={'Location'}/>
            <FilterSelect label={'Resolution'}/>
            </Col>
            <Col xs={4} sm={9} md={9}>
            RESULTS
            <Result/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContainerLayout;