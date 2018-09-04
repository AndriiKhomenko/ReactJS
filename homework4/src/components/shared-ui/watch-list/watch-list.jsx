import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteFromFavourites} from '../../../redux/watch-list/actions';
import styles from './style.css';

class WatchList extends Component {

  // componentDidUpdate(){
  //   localStorage.setItem('favFilms', JSON.stringify(this.props.favourites));
  // }

  render(){
    const { favourites, deleteFromFavourites } = this.props;
    return (
      <ul className={styles.container}>
        <h1 className={styles.text_1}>Watchlist</h1>
        {favourites.map(film => (
          <li key={film.id} className={styles.card}>
            <img src={"https://image.tmdb.org/t/p/w200" + film.poster_path} alt="kartinka" className={styles.image}/>
              <div className={styles.data}>
                <h3 className={styles.text}>{film.title}</h3>
                <p className={styles.text}>Released: {film.release_date}</p>
                <p className={styles.text}>Rating: {film.vote_average}</p>          
                <button className={styles.btndel} onClick={() => deleteFromFavourites(film)}>Delete</button>
              </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites.movies
});

const mapDispatchToProps = { deleteFromFavourites };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);