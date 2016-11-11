//import React from 'react';
//import {render} from 'react-dom';
//import Greeter from './Greeter';
//
//import './main.css';//使用require导入css文件
//
//render(<Greeter />, document.getElementById('root'));
//
//



import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Greeter';

import './main.css';//使用require导入css文件

//render(<Greeter />, document.getElementById('root'));
var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="world"/>,
  document.getElementById('example')
);