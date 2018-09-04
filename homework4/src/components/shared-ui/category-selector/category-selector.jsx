import React, {Component} from 'react';
import Select from 'react-select';
import selectorOptions from '../../../selectors/selector-options';
import styles from './style.css';

export default class CategorySelector extends Component {

  state = {
    category: 'popular',
  };
    
  changeCategory = category => {
    this.setState({category: category.value})
  };

  componentDidMount(){
    const {fetchFilms} = this.props;
    fetchFilms(this.state.category);
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.category !== this.state.category){
      const {category} = this.state;
      const {fetchFilms} = this.props;
      fetchFilms(category);
    }
  }
    
  render(){

    const { category } = this.state;

    return (
      <div className={styles.container_2}>
        <h3 className={styles.title}>Select by category</h3>
        <Select 
        options={selectorOptions}
        value={category}
        onChange={this.changeCategory}
        />
      </div>
    );
  }
}