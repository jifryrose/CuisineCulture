import styled from 'styled-components';

export const RecipeListContainer = styled.div`
display:flex;
flex-direction: row;
padding: 30px;
gap:20px;
flex-wrap:wrap;
justify-content:space-evenly;
`;
export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
`;
export const CoverImage=styled.img`
height:150px;
object-fit:cover;
`;
export const RecipeName=styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;
export const IngredientsText=styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin-bottom:12px;
cursor:pointer;
border: solid 1px green;
padding:10px 15px;
color:green;
text-align:center;
`;
export const FullRecipe = styled(IngredientsText)`

border: solid 1px #eb3300;
color: red;
`;
export const IngredientsSeeMore =styled.span`
font-size:16px;
font-weight:500;
cursor: pointer;
padding: 6px 10px;
border: 1px solid green;
text-align:center;
margin-bottom:10px;
`;
export const IngredientsClose = styled(IngredientsSeeMore)`
border: 1px solid red;
color:red;
`;

