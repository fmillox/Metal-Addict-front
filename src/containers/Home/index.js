import { connect } from 'react-redux';

import { fetchLastReviews } from 'src/actions/reviews';

// on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  reviews: state.reviews.lastReviews,
  loadingReviews: state.reviews.loading,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  loadReviews: (history) => {
    dispatch(fetchLastReviews(history));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
