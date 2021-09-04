import logo from './logo.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import React from 'react';
import { useState } from "react";
import Axios from "axios";
import './App.css';
import styled from "styled-components";

import {Header,AppNameComponent,SearchComponent,SearchInput} from "./components/headerComponents";
//import Header from "./components/headerComponents";

import { 
  RecipeContainer,
  RecipeListContainer,
  CoverImage , 
  IngredientsText,
  FullRecipe,
  RecipeName,
  IngredientsSeeMore,
  IngredientsClose
} from "./components/recipeComponent";

const APP_ID="8eff8e63";
const APP_KEY="10549c38c7c42d3afc6c44e50a8702a4";

const Container=styled.div`
display:flex;
flex-direction: column;
`;
const Placeholder = styled.img`
  width:300px;
  height:300px;
  margin:150px;
`;

const RecipeComponent =  (props) => {
  const { recipeObj } = props;
  const [show, setShow] = React.useState(false);
  

  return (
    <> 
    <Dialog open={show} >
      <DialogTitle>{recipeObj.label} Ingredients</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>

          <tbody>
          {recipeObj.ingredients.map((ingredientObj) => (
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
            ))}        
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
          <IngredientsSeeMore onClick={() => window.open(recipeObj.url)}>See More</IngredientsSeeMore>
          <IngredientsClose onClick={() => setShow(false)}>Close</IngredientsClose>
        </DialogActions>
    </Dialog>

    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}> Ingredients </IngredientsText>
      <FullRecipe onClick={() => window.open(recipeObj.url)}>Full Recipe </FullRecipe>
    </RecipeContainer>
  </>

    
  );
};
function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList ] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    updateRecipeList(response.data.hits);
  };
  const onTextChange=(event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 800);
    updateTimeoutId(timeout);  
  };
  return (
    <Container>
      <Header>
       <AppNameComponent>Cuisine Culture</AppNameComponent>
      
      <SearchComponent>
         <img src="/search-icon.svg" />
        <SearchInput placeholder="Search recipe" onChange={onTextChange}></SearchInput>
      </SearchComponent>
     </Header>
      <RecipeListContainer>
        {
          recipeList.length ? (
          recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj = {recipeObj.recipe} />
          ))): (
          <Placeholder src="./cook.svg" />)
        }

      </RecipeListContainer>

    </Container>
      
    
  );
}

export default App;


