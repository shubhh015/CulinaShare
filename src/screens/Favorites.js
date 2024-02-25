import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container className="mt-5 pt-5" style={{minHeight:"42.8rem"}}>
      <h1 className="my-5 text-center" style={{ color: '#E07A5F', fontFamily: 'Quicksand, sans-serif' }}>My Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <RecipeList recipes={favorites} />
      ) : (
        <p className="text-center" style={{color:"#81B29A"}}>No favorite recipes yet. Save some recipes to your favorites!</p>
      )}
    </Container>
  );
};

export default Favorites;