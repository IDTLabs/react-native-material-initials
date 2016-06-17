"use strict";

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component, PropTypes } from 'react';

class NativeIniticon extends Component {

  _getFontSize() {
    return this.props.single ? (this.props.size)/1.7 : (this.props.size-5)/2
  }

  _getInitials(props) {
    let {text, single} = props;
    if (text !== null && typeof text === 'object') {
      return text;
    } else if (text.indexOf(" ") > 0 && !single) {
      return text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0)
    } else {
      return text.charAt(0)
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={[styles.icon, {
                    backgroundColor: 'red',
                    height: this.props.size,
                    width: this.props.size,
                    borderRadius: this.props.size/2
                  },
                  this.props.style]}
        >
          <Text style={[styles.text, {fontSize: this._getFontSize(this.props)}]}>{this._getInitials(this.props)}</Text>
        </View>
      </View>
    );
  }
};

NativeIniticon.propTypes = {
  text: React.PropTypes.string.isRequired,
  size: React.PropTypes.any.isRequired,
  seed: React.PropTypes.number,
  color: React.PropTypes.any,
  single: React.PropTypes.bool,
  saturation: React.PropTypes.string,
  brightness: React.PropTypes.string
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
});

module.exports = NativeIniticon;
