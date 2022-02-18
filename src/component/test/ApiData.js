import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { mealCategory } from "../Server/api";
import Filter from "./Filter";
import './Categories.scss'

const ApiDataNew = () => {
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    mealCategory()
      .then((res) => {
        setLoading(false)
        setCategory(res && res.data && res.data.categories);
      })
      .catch((err) => {
        setLoading(false)
        console.log("err", err);
      });
  }, []);

  console.log("catt", category);

  return (
    <React.Fragment>
      
      <Filter />
      <h3 className="header">Meal Categories</h3>
      {loading && <p>Loading</p>}
     
      <Container fluid>
        <Row className="categories-main-wrap">
        {!loading && (
         (category && category.map((item) => (
            <Col xs lg="3" className="categories-wrapper">
            <img src={item.strCategoryThumb} />
            <h1 className="categori-header">{item.strCategory}</h1>
            <p className="category-desc">{item.strCategoryDescription}</p>
            </Col>
          )))
        )}
        </Row>
      </Container>

    </React.Fragment>
  );
};

export default ApiDataNew;
