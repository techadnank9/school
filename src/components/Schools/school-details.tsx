import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SchoolDetailsProps {
    route: any
}

const SchoolDetails: React.FC<SchoolDetailsProps> = ({ route }) => {
    const { school } = route.params
    const { school_name, dbn, overview_paragraph } = school
    return (
        <View style={styles.card}>
            <Text style={styles.schoolName} >{school_name} , {dbn}</Text>
            <Text style={styles.paragraph}>{overview_paragraph}</Text>

        </View>
    )
}

export default SchoolDetails;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowOpacity: 0.3,
        margin: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 }

    },
    schoolName: {
        fontSize: 18,
    },
    paragraph: {
        fontSize: 16,
    }
})