import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style2.scss';

const MyComp = (props) => <h1>Hello, {props.title}!</h1>;

class Message extends React.Component {
  render () {
    return (
      <div>
        <MyComp title={this.props.myName} />
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Message;

ReactDOM.render(<Message myName="Email Wendy" message="Can you send me a email?" />,
  document.getElementById('react-container'));

// const arr = ['JavaScript', 'Node', 'webpack', 'React', 'Angular', 'Emmet'];
//
// console.log(arr);
