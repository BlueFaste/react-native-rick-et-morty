import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, Button, Switch, TouchableOpacity, View } from "react-native";

export default function Search({ navigation }){
    const [search, setSearch] = useState('')
    const [isAlive, setIsAlive] = useState(false)

    const launchSearch = ()=> {
        navigation.navigate('CharacterList',{search, isAlive})
    }

    const switchIsAlive = ()=>{
        setIsAlive(!isAlive)
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    placeholder="Search"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={{display: "flex", flexDirection: "row", alignItems:"center"}}
                    onPress={switchIsAlive}
                >
                    <Text>Personnages seulement vivants</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isAlive ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={switchIsAlive}
                        value={isAlive}
                    />
                </TouchableOpacity>
                <Button
                    title="Recherche"
                    onPress={launchSearch}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 40
    },
    container:{
        marginHorizontal: 10,
        marginVertical: 20
    }
});