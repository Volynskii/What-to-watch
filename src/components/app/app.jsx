import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import {loadMovies} from "../../reducer/catalog/catalog";
import {getMoviesByGenres, getActiveGenre} from "../../reducer/catalog/selectors";
import {loginUser} from "../../reducer/user/user";
import {isAuthorizationRequired} from "../../reducer/user/selectors";


import SignIn from "../sign-in/sign-in";
import PageTitle from "../page-title/page-title";
import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import MainPage from "../main-page/main-page";

export class App extends PureComponent {
  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    if (this.props.isAuthorizationRequired) {
      //return this._renderSignIn();
      return <MainPage/>;
    }
    return (
      <MainPage/>
    );
  }

  _renderSignIn() {
    return (
      <div className="user-page">
        <PageHeader
          className="user-page__head">
          <PageTitle
            className="user-page__title">
            {`Sign in`}
          </PageTitle>
        </PageHeader>
        <SignIn
          className="user-page__content"
          onSubmit={this.props.onUserLogin}/>
        <PageFooter/>
      </div>
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

const mapDispatchToProps = {
  onGenreChange: loginUser,
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

