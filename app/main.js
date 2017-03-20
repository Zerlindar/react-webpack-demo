//import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import config from './config.json';
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Greeter';
import './main.css';//使用require导入css文件

render(<Demo.Greeter />, document.getElementById('root'));


//render(<Demo />, document.getElementById('root'));
//
//render(<Greeter />, document.getElementById('root'));
var SetOpacity = React.createClass({
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
ReactDOM.render(<SetOpacity/>, document.getElementById('opacity'));

//创建组件
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.getElementById('input'));


//直接渲染
var names = [
 "Zerlinda", "Jerry", "Ace"
]
ReactDOM.render(
  <div>
    {
      names.map(function (name, i) {
        return <div key = {i}><span key = {i}>Hello, {name}!</span></div>
      })
    }
  </div>,
  document.getElementById('name')
);