import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import '../App.css';
import Pagination from "./Pagination";
import ListGroup from "./common/listGroup";
import {paginate} from "./utils/paginate";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash';
import {Link} from "react-router-dom";
import MoviesForm from "./movieForm";
import SearchBox from "./common/search";


class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
    sortColumn: {path: 'title', order: 'asc'}
  };

  componentDidMount() {
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
    this.setState({movies: getMovies(), genres: genres});
  }

  handleDelete = (movieId) => {
    this.setState({
      movies: this.state.movies.filter(m => m._id !== movieId)
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };

  handleFlterChange = (genre) => {
    this.setState({selectedGenre: genre, currentPage: 1})
  };

  handleSort = (sortColumn) => {
    this.setState({sortColumn})
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;

    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, data: movies};
  };

  handleSearch = (e) => {
    // const target = props.target.value;
    // const searched = this.state.movies.filter(m => m.title === target);
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.movies;

      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.title.toString().toLowerCase();
        // change search term to lowercase

        const filter = e.target.value.toString().toLowerCase();

        return lc.includes(filter);
      });
    } else {

      newList = this.state.movies;
    }

    this.setState({
      movies: newList,

    });


  };


  render() {


    const {
      pageSize,
      currentPage,
      sortColumn
    } = this.state;


    const {totalCount, data: movies} = this.getPagedData();

    return (

      <div>
        <div className="row">

          <div className="col-md-4 mt-4">

            <ListGroup genres={this.state.genres}
                       selectedItem={this.state.selectedGenre}
                       onFilterChange={this.handleFlterChange}/>
          </div>
          <div className="col-md-8">
            <Link to="/movies/new"  className="btn btn-primary mb-4 mt-4">New Movie <span className="sr-only">(current)</span></Link>
            <p>Showing {totalCount} movies in the database</p>
            <SearchBox onKeyDown={this.handleSearch}/>
            <MoviesTable movies={movies}
                         onSort={this.handleSort}
                         onLike={this.handleLike}
                         onDelete={this.handleDelete}
                         sortColumn={sortColumn}
            />

            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>

      </div>


    );
  }
}

export default Movies;
