import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { getSecret } from './services';

const Codes = ({ navigation, route }) => {
    const { isAdded } = route.params;
    const [token, setToken] = useState({});
    const [tokens, setTokens] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const stateRef = useRef();

    useEffect(() => {
        if (isAdded) {
            onGetCodesFirstTime()
        }
    }, [isAdded]);

    useEffect(() => {
        if (token.tokens && !isFetched) {
            const newTokens = Object.keys(token?.tokens).map((key, index) => {

                return ({
                    name: key,
                    token: Object.values(token?.tokens)[index].token,
                    time: Object.values(token?.tokens)[index].time,
                })
            });

            setTokens(newTokens)
            setIsFetched(true)
        }
    }, [token])

    useEffect(() => {
        const interval = setInterval(() => {
            if (tokens && tokens.length) {
                const newTokens = tokens.map((token) => {
                    return ({
                        ...token,
                        time: token.time - 1,
                    })
                })
                setTokens(newTokens)
                stateRef.current.tokens = newTokens;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [tokens])

    // Runs every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            onGetCodes()
        }, 1000);

        return () => clearInterval(interval);
    }, [onGetCodes, token])

    const onGetCodes = useCallback(async () => {
        if (stateRef?.current) {
            const values = Object.values(stateRef?.current?.tokens);
            if (values && values.length && values[0].time < 1) {
                setIsFetched(false)
                const response = await getSecret()
                    .then((response) => {
                        return response
                    })
                    .catch((error) => { console.log(error) });
                if (response) {
                    setToken(response);
                    stateRef.current = response;
                }
            }
        }
    }, [token]);

    // Runs every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            onGetCodesFirstTime()
        }, 15000);

        return () => clearInterval(interval);
    }, [onGetCodesFirstTime]);

    const onGetCodesFirstTime = useCallback(async () => {
        if (!stateRef?.current || !stateRef?.current?.tokens.length) {
            setIsFetched(false)
            const response = await getSecret()
                .then((response) => {
                    return response
                })
                .catch((error) => { throw (error) });
            if (response) {
                setToken(response);
                stateRef.current = response;
            }
        }
    }, [token]);

    return (
        <>
            {tokens && tokens.length ?
                <View style={styles.container}>
                    {tokens.map((token) => (
                        <View style={styles.rowDiv}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.customText}>{token.name || 'FACEBOOK'}</Text>
                                <Text style={styles.customText}>{token.token}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Text style={styles.customText}>{Math.trunc(token.time)}</Text>
                            </View>
                        </View>
                    ))}
                    <StatusBar style="auto" />
                </View>
                :
                <View style={styles.empty}>
                    <Text style={styles.customText}>There are no apps conected. Please add one clicking the '+'</Text>
                </View>
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Generate')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    empty: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10
    },
    customText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 20,
        backgroundColor: '#2ea1aa',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
    },
    rowDiv: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginLeft: 20,
        marginRight: 40,
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
});

export default Codes;
