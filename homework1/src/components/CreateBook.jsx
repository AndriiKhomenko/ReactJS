import React, {Component} from 'react';
import styles from './CreateBook.css';

export default class CreateBook extends Component {

    state = {
            title: '',
            imageLink: '',
            author: '',
            descr: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        const {title, imageLink, author, descr} = this.state;

        if(
            (title.trim() === '')||
            (imageLink.trim() === '')||
            (author.trim() === '')||
            (descr.trim() === '')
        ) {
            alert('Заполните все поля!');
            return;
        }

        this.props.onSubmit(title, imageLink, author, descr);

        this.setState({
            title: '',
            imageLink: '',
            author: '',
            descr: '',
        });
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
                    <input
                        type="text"
                        name="descr"
                        placeholder="Title"
                        value={descr}
                        onChange={this.handleChange}
                    />
                <button>Add to list</button>
            </form>
        );
    }
}

