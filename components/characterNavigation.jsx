import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./search";
import CharacterList from "./characterList";
import CharacterView from "./characterView";
const CharacterStack = createNativeStackNavigator();

export default function CharactersNavigation(){
    return (
        <CharacterStack.Navigator>
            <CharacterStack.Screen name="Search"
                component={Search}
                options={{title: "Rechercher un personnage"}}
            />
            <CharacterStack.Screen name="CharacterList"
                component={CharacterList}
                options={({route})=> {
                    return{
                        title: ` Liste de "${route.params.search}"`
                    }
                }}
            />
            <CharacterStack.Screen name="CharacterView"
                component={CharacterView}
                options={({route})=> {
                    return{
                        title: route.params.character.item.name
                    }
                }}
            />
        </CharacterStack.Navigator>
    )
}