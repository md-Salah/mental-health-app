import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, ImageBackground, Image } from 'react-native';

const ReadArticle = () => {

    const handleOpenLink = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        }
    };

    const articlesData = [
        {
            id: 4,
            title: "What Happens When Anxiety Turns to Anger",
            image: 'https://images.ctfassets.net/cnu0m8re1exe/5fX7TliX2wYAPHZdl6SIs5/e760944e98288d53d9dc7d4ce1691b7f/shutterstock_2167253405.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
            author: 'Naomi Weinshenker',
            date: 'Mar 2, 2023',
            url: 'https://www.discovermagazine.com/mind/what-happens-when-anxiety-turns-to-anger',
        },
        {
            id: 5,
            title: "50 of Our All-Time Best Mental Health Tips to Help You Feel a Little Bit Better",
            image: 'https://media.self.com/photos/6149e1495c7426d5aa080597/4:3/w_2560%2Cc_limit/Kibele%2520Yarman%2520-%25203.jpg',
            author: 'Hannah Dylan Pasternak',
            date: 'October 5, 2021',
            url: 'https://www.self.com/story/best-mental-health-tips',
        },
        {
            id: 3,
            title: "Best Anger Management Tips To Help You Keep Your Cool",
            image: 'https://www.allthingshealth.com/en-us/_next/image/?url=https%3A%2F%2Fallthingshealth.b-cdn.net%2Fen-us%2Fwp-content%2Fuploads%2Fsites%2F3%2F2022%2F03%2Fanger-management-min-768x512.jpg&w=1920&q=75',
            author: 'Heather Hanks',
            date: 'March 21, 2022',
            url: 'https://www.allthingshealth.com/en-us/mental-health/stress-anxiety-relief/anger-management/',
        },
        {
            id: 2,
            title: "Anger - how it affects people",
            image: 'https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?w=826&t=st=1689344110~exp=1689344710~hmac=1f00b3eb5dbd4c6d5e623c61c1f17c0c684cfa2e6a76596be94b4e974acddd73',
            author: 'Department of Health',
            date: '',
            url: 'https://www.betterhealth.vic.gov.au/health/healthyliving/anger-how-it-affects-people',
        },
        {
            id: 1,
            title: "10 Things You Can Do for Your Mental Health ",
            image: 'https://uhs.umich.edu/files/uhs/styles/large/public/field/image/man-playing-basketball.jpg?itok=4t8LUjvT',
            author: 'University of Michigan',
            date: '',
            url: 'https://uhs.umich.edu/tenthings',
        },
    ]

    const [articles, setArticles] = useState(articlesData);

    const RenderArticleItem = ({ item }) => (
        <ImageBackground source={require('../images/hospital-bg.jpg')} style={styles.articleItem}>
            <TouchableOpacity onPress={() => { handleOpenLink(item.url) }}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{'By ' + item.author + ' | ' + item.date}</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                renderItem={RenderArticleItem}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f1f3f7',
    },
    articleItem: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
    },
    img: {
        width: "100%",
        height: 180,
    },
    shadowBox: {
        backgroundColor: '#1A2421',
        opacity: 0.7,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
    author: {
        color: 'gray',
        marginBottom: 5,
        textAlign: 'left',
        textTransform: 'capitalize'
    },
});

export default ReadArticle;
