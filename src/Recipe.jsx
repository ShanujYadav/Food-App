import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Recipe = (props) => {
  console.log("Recipe", props.recipeList)
  return <>
    <Container className="mt-5">
      <Row>
        <Col sm={6}>
          <Card.Img variant="top" src={props.recipeList.recipe.image} />
        </Col>

        <Col sm={6}>
          <Card>
            <h1>{props.recipeList.recipe.label}</h1>
            <ol>
              {props.recipeList.recipe.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
            <h5>Meal Type : {props.recipeList.recipe.mealType}</h5>
            <p>{props.recipeList.recipe.calories} kcal</p>
            <Button variant="primary">Order Now</Button>

          </Card>
        </Col>
      </Row>
    </Container>
  </>
}
export default Recipe;