import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';


const NewsCard = ({item}) => {

    return (
        <View style={styles.cardWrapper}>
            <Image style={styles.image} source={{ uri: item.urlToImage}} />
            <View style={styles.cardBody}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <View style={styles.dateWrapper}>
                    <Text style={styles.date}>{item.publishedAt}</Text>
                    <TouchableOpacity style={styles.more}>
                        <Text style={styles.moreText}>More <Icon name='arrow-right' style={styles.moreIcon}/></Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.author}>{item.author}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    author: {
        marginTop: 10
    },
    moreText: {
        color: '#7fb6c7',
        fontWeight: '600'
    },
    date: {
        color: '#dedbdc',
        fontSize: 12
    },
    dateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    desc: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 13,
        color: '#9a9898',
        fontWeight: '500'
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#313133',
    },
    cardBody: {
        backgroundColor: '#fff',
        padding: 24,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    image: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    cardWrapper: {
        width: '80%',
        marginTop: 20,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 3
    }
})

export default NewsCard;