# React Native Material Initials

![react-native-material-initials](https://cloud.githubusercontent.com/assets/5383963/16163426/20d1c50c-34a7-11e6-9b4c-eebea5f5831b.png)

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
import MaterialInitials from 'react-native-material-initials/native';
```

## Props
|Key |Type |Description |
|--- |--- |--- |
|`text`|String|The text to use to make initials|
|`size`|Number|The pixel height / width of the icon|
|`color`|String|Override the text color with any valid CSS color value|
|`single`|Boolean|Whether to only use a single initial or two|
|`backgroundColor`|String|Override the background color with any valid CSS color value|
