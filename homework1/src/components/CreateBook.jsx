import React, {Component} from 'react';
import styles from './styles/create-bookStyle.css';

export default class CreateBook extends Component {

  state = {
    title: '',
    imageLink: '',
    author: '',
    descr: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if(this.validation()) {

    const {title, imageLink, author, descr} = this.state;

    this.props.onSubmit(title, imageLink, author, descr);

      this.setState({
        title: '',
        imageLink: '',
        author: '',
        descr: '',
      });

    }
    };

  validation = () =>{

    const {title, imageLink, author, descr} = this.state;

    if(
      (title.trim() === '')||
      (imageLink.trim() === '')||
      (author.trim() === '')||
      (descr.trim() === '')
    ) {
      alert('Заполните все поля!');
      return false;
    }
    else return true;
  };

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value,
    });
    };

  render(){

    const {title, imageLink, author, descr} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="imageLink"
          placeholder="Image Link"
          value={imageLink}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={this.handleChange}
        />
        <textarea
          name="descr"
          placeholder="Description"
          value={descr}
          onChange={this.handleChange}
        />
        <button className={styles.btn}>Add to list</button>
      </form>
    );
    }
}

