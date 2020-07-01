import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import {loadMovies} from "../../reducer/catalog/catalog";
import {getMoviesByGenres, getActiveGenre} from "../../reducer/catalog/selectors";
import {isAuthorizationRequired} from "../../reducer/user/selectors";



import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";

export class App extends PureComponent {
  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    return this.props.isAuthorizationRequired ? (
      <SignInPage/>
    ) : (
      <MainPage/>
    );
  }

}
App.defaultProps = {
  loadMovies: () => {},
};


const mapStateToProps = (state) => {
  return {
    moviesGenreGroups: getMoviesByGenres(state),
    activeGenre: getActiveGenre(state),
    isAuthorizationRequired: isAuthorizationRequired(state)
  };
};


export default connect(mapStateToProps,{loadMovies} )(App);

