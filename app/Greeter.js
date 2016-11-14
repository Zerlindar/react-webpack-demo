import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入

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

export default Greeter
