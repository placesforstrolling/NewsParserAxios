import React from "react";

import {
        View,
        Text, 
        StyleSheet,
        SafeAreaView,
} from 'react-native';

import NewsCard from "../../components/NewsCard/NewsCard";

const NewsScreen = () => {
    

    return (
        <SafeAreaView>
        <Text>NewsPaper</Text>
        <NewsCard/>
        </SafeAreaView>
    );
}

export default NewsScreen;