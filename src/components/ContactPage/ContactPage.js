/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
//import styles from './ContactPage.css';
    
var styles = require("./ContactPage.css");

if(module.hot) {
  module.hot.accept("./ContactPage.css", function() {
    styles = require("./ContactPage.css");
    styles.ref();
  });
}

@withStyles(styles)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    console.log(styles);
    const title = 'Contact Us';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1 className={styles.locals.foo}>Foo: {title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
