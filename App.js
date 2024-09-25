import { StyleSheet, View, TextInput } from 'react-native';

const [text, setText] = useState('Hello, World!');
<View>
<TextInput
  style={styles.textInput}
  value={text}
  onChangeText={setText}
  placeholder='Type Something Here'
/>
<Text>You wrote: {text}</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10
  },
  textDisplay: {
    height: 50,
    lineHeight: 50
  }

});