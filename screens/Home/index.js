import React from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

import Header from "../../components/Header/Header";

const Home = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <Header navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        flex: 1,
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default Home;