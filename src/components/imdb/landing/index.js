import React from 'react'
import { Skeleton } from 'antd';
import { connect } from 'react-redux';
import Landing from './landing';
import getListMovies from '../../../actions/getListMovies';
import getListCredits from '../../../actions/getListCredits';
import findByName from '../../../actions/filteringMovies';
import updatePagination from '../../../actions/updatePagination';


class LandingComponent extends React.Component {

  componentDidMount() {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    const { getListMovies } = this.props;
    getListMovies();
  }

  loadMoreMovies() {
    const { getListMovies, updatePagination, findByName } = this.props;
    updatePagination(this.props.movies.page + 1);

    let filtering = this.props.movies.filter;
    if (filtering == "" || filtering == undefined)
      getListMovies(this.props.movies.page);
    else
      findByName(filtering, this.props.movies.page, this.props.movies.type_filtering);

  }

  render() {
    const { movies, getListCredits} = this.props;

    let trendingMoviesRender;
    if (!movies.isLoading && (movies.list === [] || movies.list === undefined)) {
      window.location.reload();
    } else {
      trendingMoviesRender = <Landing next={() => this.loadMoreMovies()}  getListCredits={getListCredits} type_filtering={movies.type_filtering} credits={movies.credits}  movies={movies.list}></Landing>;
    }

    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {movies.isLoading ? <Skeleton /> : trendingMoviesRender}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getListMovies,
  findByName,
  updatePagination,
  getListCredits
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);