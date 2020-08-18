import React, { Component } from "react";
import { getMovies } from "../sevices/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utlis/paginate";
import ListGroup from "./common/Listgroups";
import { getGenres, genres } from "../sevices/fakeGenreService";
import MoiveTable from "./moivesTables";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "./searchBox";

class Moives extends Component {
  state = {
    moives: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    sortColumns: { path: "title", order: "asc" },
    selectGenere: null,
    searchQuery: "",
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ moives: getMovies(), genres: genres });
  }

  handleDelete = (moive) => {
    const moives = this.state.moives.filter((m) => m._id !== moive._id);
    this.setState({ moives });
  };
  handleLiked = (moive) => {
    const moives = [...this.state.moives];
    const index = moives.indexOf(moive);
    moives[index] = { ...moives[index] };
    moives[index].liked = !moives[index].liked;
    this.setState({ moives });
  };
  handlePageChange = (page) => {
    //console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenereSelect = (genre) => {
    this.setState({ selectGenere: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumns) => {
    this.setState({ sortColumns });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectGenere: null, currentPage: 1 });
  };

  getPageData = () => {
    const {
      currentPage,
      pageSize,
      moives: allmoives,
      selectGenere,
      sortColumns,
    } = this.state;
    const filtered =
      selectGenere && selectGenere._id
        ? allmoives.filter((m) => m.genre._id === selectGenere._id)
        : allmoives;

    const sorted = _.orderBy(filtered, [sortColumns.path], [sortColumns.order]);

    const moives = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: moives };
  };

  render() {
    const { currentPage, pageSize, sortColumns } = this.state;
    if (this.state.moives.length === 0)
      return <p>There is no moives in Database!</p>;
    const { totalCount, data: moives } = this.getPageData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenereSelect}
            selectedItem={this.state.selectGenere}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} moives in Database!</p>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
          <MoiveTable
            moives={moives}
            onLike={this.handleLiked}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumns={sortColumns}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Moives;
