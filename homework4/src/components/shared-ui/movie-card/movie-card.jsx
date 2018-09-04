import React, { Component } from 'react';
import styles from './style.css';
import LinesEllipsis from 'react-lines-ellipsis';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: '#000',
    opacity: '0.85'
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '300px',
    opacity: '1'
  }
};

Modal.setAppElement('#root');

class MovieCard extends Component {

  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    console.log('openModal');
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    const {poster_path, title, overview} = this.props;
    return (
      <div className={styles.container}>
        <div onClick={this.openModal}>
          <img 
          src="https://www.shareicon.net/download/2016/08/20/817680_info_512x512.png" 
          alt="information" 
          className={styles.inf}
          />
        </div>
        <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt="kartinka"/>
        <h2 className={styles.text}>{title}</h2>
        <LinesEllipsis
          className={styles.text1}
          text={overview}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
            <h3 className={styles.fulldescrtitle}>Full Description</h3>
            <p className={styles.fulldescr}>{overview}</p>
            <button className={styles.btnclose} onClick={this.closeModal}>close</button>
        </Modal>
      </div>
);
  }
}

export default MovieCard;