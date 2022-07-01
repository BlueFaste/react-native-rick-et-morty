import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EpisodesList from "./episodeList";
const EpisodeStack = createNativeStackNavigator();

export default function EpisodesNavigation(){
    return (
        <EpisodeStack.Navigator>
            <EpisodeStack.Screen name="EpisodeList"
                component={EpisodesList}
                options={{title: "Liste des épisodes"}}
            />
        </EpisodeStack.Navigator>
    )
}