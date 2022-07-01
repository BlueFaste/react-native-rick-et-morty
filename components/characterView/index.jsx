import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View, Button } from "react-native";

export default function CharacterView({navigation, route}){
    const {character} = route.params

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image 
                    style={styles.img}
                    source={{uri: character.item.image}} 
                />

                    <Button 
                        onPress={() => {
                            navigation.navigate('Search')
                        }}
                        title="Retour à la recherche"
                    />
            </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    img: {
        width: 200,
        height: 200,
    },
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        paddingVertical: 50
    }
})