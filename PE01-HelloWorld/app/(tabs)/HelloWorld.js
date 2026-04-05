import {StyleSheet, Text, View} from 'react-native';

export default function App() {
 return(
    <View style = {styles.container}>
        <Text>Scott Hancock</Text>
        <Text>BSACS</Text>
        <Text>City University of Seattle</Text>
    </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});