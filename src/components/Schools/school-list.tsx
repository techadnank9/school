import React from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface SchoolListProps {
    schools: Array<{ school_name: string; dbn: string; overview_paragraph: string }>;
    navigation: any

}

const SchoolList: React.FC<SchoolListProps> = ({ schools, navigation }) => {

    const handleSchoolPress = (school: { school_name: string; dbn: string; overview_paragraph: string }) => {
        navigation.navigate('SchoolDetails', { school },)
    }

    const renderItem = ({item}: {item: {school_name: string; dbn: string; overview_paragraph: string}}) =>(
        <TouchableOpacity onPress={() => handleSchoolPress(item)} style={styles.card}>
        <View>
            <Text style={styles.schoolName}>{item.school_name} , {item.dbn}</Text>
        </View>
    </TouchableOpacity>
    )

    return (
        <FlatList
            data={schools}
            keyExtractor={(item) => item.dbn}
            renderItem={renderItem}
        />
    )
}

export default SchoolList

const styles = StyleSheet.create({
    card :{
        backgroundColor:'#fff',
        borderRadius:8,
        elevation:3,
        shadowOpacity:0.3,
        margin:8,
        padding:16,
        shadowColor :'fff',
        shadowOffset:{width:1, height:1}

    },
    schoolName:{
        fontSize: 18,
    }
})