import React from 'react'
import { Skeleton } from 'antd';
import { connect } from 'react-redux'; 
import Landing from './landing';
import getListMovies from '../../../actions/getListMovies';
import findByName from '../../../actions/filteringMovies';
import updatePagination from '../../../actions/updatePagination';


class LandingComponent extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { getListMovies } = this.props;
    getListMovies();
  }

  loadMoreMovies(){
    const { getListMovies,updatePagination,findByName } = this.props;
    updatePagination(this.props.movies.page+1);

    let filtering = this.props.movies.filter;
    if(filtering == "" || filtering == undefined){
      getListMovies(this.props.movies.page);
    }else
      findByName(filtering,this.props.movies.page);

  }

  render() {
    const { movies } = this.props;
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {movies.isLoading ? <Skeleton /> : <Landing next={() => this.loadMoreMovies()} movies={movies.list}></Landing>}
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
  updatePagination
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);