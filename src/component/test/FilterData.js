import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FilterData = ({data,name}) => {
  return (
    <React.Fragment>
          <Container fluid>
          <h3 className="search-header">Search Result for {name}</h3>
        <Row className="filter-main-wrap">
          {data && data.map((item) => (
            <Col xs lg="2" className="filter-wrapper">
            <img src={item.strMealThumb} className="img-meal"  alt={item.strMeal}/>
            <h1 className="meal-header">{item.strMeal}</h1>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default FilterData
