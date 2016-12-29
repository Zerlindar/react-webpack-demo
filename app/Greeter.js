import React, {Component} from 'react';     //导入react, react.component
import config from './config.json';         //导入json
import styles from './Greeter.css';         //导入css样式表

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        <span>
          {config.greetName} ddddddd <span>{config.haha}</span>
        </span>

     </div>
  );
  }
}
class Demo extends Component{
  render() {
    return (

      <div className={styles.demo}>
        <span>
          dfsfdsfdsfdsfsdfsdf{config.haha}
        </span>
      </div>
    );
  }
}
module.exports = {
  Greeter: Greeter,
  Demo: Demo
}
//export default Greeter     import Demo from './Greeter';   render(<Demo />, document.getElementById('root'));
