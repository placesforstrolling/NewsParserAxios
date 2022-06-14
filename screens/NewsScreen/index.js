import React, {useState, useEffect} from "react";
import newsAPI from '../../Apis/news'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    TextInput
} from 'react-native';

import NewsCard from "../../components/NewsCard/NewsCard";

const NewsScreen = () => {

    const [news, setNews] = useState([]);
    const [country, setCountry] = useState('us');

    useEffect(() => {
        getNewsFromAPI();
        console.log(news)
    }, [country])

    // const newsResponse = async() => {
    //     const response = await newsAPI.get('top-headlines?country=us&apiKey=ea5ec64e9d7e41bb875ef2a6b99c0d63')
    // }

    function getNewsFromAPI() {
        newsAPI.get(`top-headlines?country=${country}&apiKey=ea5ec64e9d7e41bb875ef2a6b99c0d63`)
            .then(function(response){
                setNews(response.data);
            })
            .catch(function(error) {
                console.log('Error: ' + error)
            })
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.inputWrapper}>
                <Text style={styles.title}>NewsPaper</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Choose country code'
                    onChangeText={(text) => setCountry(text)}
                    value={country}
                    />
                  
            </View>
                <FlatList 
                    data={news.articles}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({item}) => {
                        return <NewsCard item={item}/>
                    }}
                    />
                    {news.articles ? (news.articles.length ? null : <Text style={styles.noNews}>No News : (</Text>) : null}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    noNews: {
        position: 'absolute',
        top: '50%',
        alignSelf: 'center'
    },
    input: {
        height: 50,
        width: 150,
        backgroundColor: '#fff',
        marginRight: 20,
        borderRadius: 15,
        marginTop: 20
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#000',
        marginTop: 20,
        marginLeft: 20
    },
    scroll: {
        width: '100%',
    },
    body: {
        backgroundColor: '#eee',
        flex: 1,
    }
});

export default NewsScreen;