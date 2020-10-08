import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-movie-card/smaill-movie-card";

// не предусмотрена кнопка Load More
const MAX_FILMS_QUANTITY = 8;

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(id) {
    this.setState({
      activeFilmId: id,
    });
  }

  render() {
    const {films} = this.props;
    // const elements = [];
    // for (let i = 0; i < MAX_FILMS_QUANTITY; i++) {
    //   elements.push(<SmallFilmCard key = {films[i].id} preview = {films[i].preview} title = {films[i].title} id = {films[i].id} handleHover= {this.handleHover}/>);
    // }

    return (
      <div className="catalog__movies-list">
        {films
          .slice(0, MAX_FILMS_QUANTITY)
          .map((film) => {
            return <SmallFilmCard key = {film.id} preview = {film.preview} title = {film.title} id = {films.id} handleHover= {this.handleHover}/>
          })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default FilmsList;
