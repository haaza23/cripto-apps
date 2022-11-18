import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { generate, getSecret } from './services';

const App = () => {
  const [text, onChangeText] = useState('');
  const [isLinked, setLinked] = useState(false);
  const [token, setToken] = useState({});
  console.log("🚀 ~ isLinked", isLinked)

  const onClickGenerate = async () => {
    const body = {
      secret: text
    }
    const response = generate(body).then((response) => { return response }).catch((error) => { console.log(error) });
    !!response && setLinked(true);
  }

  const onGenerate = async () => {
    getSecret().then((response) => { setToken({ secondsLeft: response.secondsLeft, token: response.token }); }).catch((error) => { console.log(error) });
  }

  return (
    <View style={styles.container}>
      <View style={styles.generator}>
        <Text style={styles.text}>Insert the 2FA secret</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Secret"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClickGenerate()}
        >
          <Text style={{ color: 'white' }}>Link 2FA</Text>
        </TouchableOpacity>
      </View>
      {isLinked &&
        <>
          <TouchableOpacity
            style={styles.button}
            title="Generate TOTP"
            onPress={() => onGenerate()}
          >
            <Text style={{ color: 'white' }}>Generate TOTP</Text>
          </TouchableOpacity>
          {!!token.token &&
            <View style={{ marginTop: 30 }}>
              <Text style={styles.customText}>Token: {token.token}</Text>
              <Text style={styles.customText}>Seconds left: {Math.round(token.secondsLeft * 10) / 10}</Text>
            </View>
          }
        </>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    justifyContent: 'flex-start',
    height: '40%',
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    width: '100%',
    height: 30,
    borderRadius: 20,
    backgroundColor: '#2ea1aa',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default App;
