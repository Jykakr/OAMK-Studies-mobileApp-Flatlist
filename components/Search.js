import React,{useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('');
    
    return (
        <View style={[styles.searchBox, { marginTop: 20}]}>
            <TextInput
                value={search}
                onChangeText={(text) => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"  
                onSubmitEditing={() => executeSearch(search)}
                autoFocus
            />

        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5
    }
});