import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style2.scss';

const MyComp = (props) => <h1>Hello, {props.title}!</h1>;

class Image extends React.Component {
  constructor(){
    super();
    this.state ={
      title: "NEW Peaks"
    }
  }
  render () {
    return (
      <div>
        <MyComp title={this.props.myName} />
        <h4>{this.state.title}</h4>
        <p>{this.props.caption}</p>
        <div id="image"></div>
      </div>
    )
  }
}

export default Image;

ReactDOM.render(<Image myName="Katie" caption="How cute i am?" />,
  document.getElementById('react-container'));

// const arr = ['JavaScript', 'Node', 'webpack', 'React', 'Angular', 'Emmet'];
//
// console.log(arr);
