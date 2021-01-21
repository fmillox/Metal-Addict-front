import { connect } from 'react-redux';

import { fetchBands, fetchCountries } from 'src/actions/searchForm';
import { fetchLastReviews } from 'src/actions/reviews';

// on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  reviews: state.reviews.lastReviews,
  loadingReviews: state.reviews.loading,
  loadingSearchForm: state.searchForm.loadingBands || state.searchForm.loadingCountries,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadBands: () => {
    dispatch(fetchBands());
  },

  loadCountries: () => {
    dispatch(fetchCountries());
  },

  loadReviews: () => {
    dispatch(fetchLastReviews());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
