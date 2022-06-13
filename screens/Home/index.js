import React from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

import Header from "../../components/Header/Header";
import TripTabs from "../../components/TripTabs/TripTabs";

const Home = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <Header/>
            <TripTabs navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        flex: 1,
        paddingTop: 20
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default Home;