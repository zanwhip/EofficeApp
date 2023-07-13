import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const News = ({
    image,
    name, 
    date
}
) => {
  return (
   <TouchableOpacity>
    <View style={styles.container}>
    <Image source={require('../assets/image/bannerNew.png')} style={styles.image}/>
    <View style={styles.newscontent}>
        <Text style={styles.newtext}>Phát động Cuộc thi “Khởi nghiệp Công nghệ trong sinh viên” InTE-UD lần thứ III: Góp phần kiến t...</Text>
        <Text style={styles.date}>09/09/2020</Text>
    </View>
    </View>
   </TouchableOpacity>
     )
}

export default News

const styles = StyleSheet.create({
    container : {
        marginTop : 10,
        flexDirection : 'row',
        height : 100,
        width : 328,
        backgroundColor : '#ffffff',
        borderRadius :10,
    },
    image : {
        height : '100%',
        width : 93,

    },
    newscontent : {
        marginLeft : 5,
        height : '100%',
        width : 225,
    },
    newtext : {
        fontWeight : 'bold',

    },
    date : {
        marginTop : 14,
        marginLeft : 140
    }
})