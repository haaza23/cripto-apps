import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { generate, getSecret } from './services';

const Generate = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [name, setName] = useState('');

    const onClickGenerate = async () => {
        const body = {
            secret: text,
            pageName: name,
        }
        const response = generate(body).then((response) => { return response }).catch((error) => { console.log(error) });
        !!response && navigation.navigate('Codes');
    }

    return (
        <View style={styles.container}>
            <View style={styles.generator}>
                <Text style={styles.text}>Insert the 2FA secret</Text>
                <TextInput
                    style={styles.inputSecret}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Secret"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Site name"
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onClickGenerate()}
                    >
                        <Text style={{ color: 'white' }}>Link 2FA</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    inputSecret: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    button: {
        width: 100,
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

export default Generate;
