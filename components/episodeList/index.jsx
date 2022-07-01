import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';


export default function EpisodesListe(){
    const ALL_EPISODES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [episodesList, setEpisodesList] = useState([])
    useEffect(() => {

        const getEpisode = async () => {
            try {
                let dataEpisode = await AsyncStorage.getItem('episodesList')
                dataEpisode = JSON.parse(dataEpisode)
                if (dataEpisode === null){
                    try{
                        await AsyncStorage.setItem('episodesList', JSON.stringify(ALL_EPISODES))
                    } catch(e){
                        console.log('async setItem',e);
                    }
                }
                setEpisodesList(dataEpisode === null ? ALL_EPISODES :  dataEpisode)
            } catch (e) {
                console.log(e);
                // saving error
            }
        }

        getEpisode()

    }, [])

    const seeEpisode = async (nb) => {
        const newList = episodesList.filter(episode => nb !== episode)
        setEpisodesList(newList)

        try{
            await AsyncStorage.setItem('episodesList', JSON.stringify(newList))
        } catch(e){
            console.log(e);
        }
    }

    const reset = async () => {
        try{
            await AsyncStorage.setItem('episodesList', JSON.stringify(ALL_EPISODES))
            setEpisodesList(ALL_EPISODES)
        } catch(e){
            console.log(e);
        }
    }

    const renderEpisode = (nb) => (
        <View key={nb} style={styles.containerItem}>
            <Text>Episode {nb}</Text>
            <TouchableOpacity onPress={ () => {
                seeEpisode(nb)
            }}>
            <Ionicons name={"checkmark-circle"} size={25}/>
            </TouchableOpacity>
        </View>
    )

    return(
        <SafeAreaView>
        <View style={styles.container}>
        <View>
            {episodesList.map(nb => renderEpisode(nb))}
        </View>
            {
                episodesList.length !== ALL_EPISODES.length && (<Button title="Réinitialiser" onPress={reset}></Button>)
            }
            
        </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    containerItem:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    container:{
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    }
})