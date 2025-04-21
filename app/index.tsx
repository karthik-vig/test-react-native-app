import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function App() {
    return (
        <View style={style.container} >
            <Text>Hello world</Text>
        </View>
    );
}