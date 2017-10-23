"use strict";

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NativeIniticon extends Component {

  _getFontSize() {
    return this.props.single ? (this.props.size)/1.7 : (this.props.size-5)/2
  }

  _getInitials(props) {
    let {text, single} = props;
    if (text !== null && typeof text === 'object') {
      return text;
    } else if (text.indexOf(" ") > 0 && !single) {
      return (text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0)).toUpperCase();
    } else {
      return text.charAt(0).toUpperCase();
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'transparent'}}>
        <View style={[styles.icon, {
                    backgroundColor: this.props.backgroundColor,
                    height: this.props.size,
                    width: this.props.size,
                    borderRadius: this.props.size/2
                  },
                  this.props.style]}
        >
          <Text allowFontScaling={false} style={[styles.text, {fontSize: this._getFontSize(this.props), color: this.props.color, backgroundColor: 'transparent'}]}>{this._getInitials(this.props)}</Text>
        </View>
      </View>
    );
  }
};

NativeIniticon.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.any.isRequired,
  color: PropTypes.any,
  backgroundColor: PropTypes.any,
  single: PropTypes.bool
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff'
  }
});

module.exports = NativeIniticon;
