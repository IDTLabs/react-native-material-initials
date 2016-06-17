# React Native Material Initials
> Initial Icons for React Native

## Usage
```JavaScript
<MaterialInitials
  style={{alignSelf: 'center'}}
  backgroundColor={'red'}
  color={'white'}
  size={100}
  text={'John Doe'}
  single={false}
/>
```

## Installation
```
$ npm install --save react-native-material-initials
```

## React Native
```JavaScript
var MaterialInitials = require('react-native-material-initials/native');
```

## Props
|Key |Type |Description |
|--- |--- |--- |
|`text`|String|The text to use to make initials|
|`size`|Number|The pixel height / width of the icon|
|`seed`|Number|Number uses to seed the random hue generator|
|`color`|String|Override the text color with any valid CSS color value|
|`single`|Boolean|Whether to only use a single initial or now|
|`backgroundColor`|String|Override the background color with any valid CSS color value|
