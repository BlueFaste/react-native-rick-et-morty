import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CharacterList({navigation, route}) {
    const [charactersList, setCharactersList] = useState([])
    const [totalResult, setTotalResult] = useState(0)
    const [error, setError] = useState(false)
    const {search, isAlive} = route.params
    const fetchCharacter = () => {
        return fetch(`https://rickandmortyapi.com/api/character/?name=${search}${isAlive ? '&status=alive': ''}`)
        .then(response => {
            return response.json()
        })
    }

    useEffect(()=> {
        setError(false)
        fetchCharacter().then((result)=> {
            if (result.error){
                setError(true)
            } 
            else {
                setTotalResult(result.info.count)
                setCharactersList(result.results)
            }
        })
    }, [])

    const renderCharacter = (character) => (
        <TouchableOpacity
            onPress={()=> {
                navigation.navigate('CharacterView', {character})
            }}
        >
            <View style={styles.character}>
                <Image 
                    style={styles.img}
                    source={{uri: character.item.image}} 
                />
                <Text>{character.item.name}</Text>
            </View>
        </TouchableOpacity>
    )
    return(
        <SafeAreaView>
            {!error ? (
                <View>
                    <Text>{charactersList.length} résultats sur {totalResult}</Text>
                    <FlatList
                        data={charactersList}
                        renderItem={renderCharacter}
                    />
            </View>
            ) : (
                <View>
                    <Text>Aucun personnage ne correspondant à votre recherche</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    img: {
        width: 200,
        height: 200,
    },
    character:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    }
})