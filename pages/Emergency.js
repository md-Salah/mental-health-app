import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const EmergencyContactPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Contacts</Text>
            <View style={styles.contactContainer}>
                <Text style={styles.contactName}>Ambulance Service</Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${'+8801712-816234'}`)}>
                    <Text style={styles.contactNumber}>+8801712-816234</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.contactName}>Mental Health Doctor Contact</Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${'+8801711-395696'}`)}>
                    <Text style={styles.contactNumber}>+8801711-395696</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.contactName}>Local Hospital Contact</Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${'+8801777-772763'}`)}>
                    <Text style={styles.contactNumber}>+8801777-772763</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: 'green'
    },
    contactContainer: {
        marginBottom: 16,
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    contactNumber: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 18,
    },
});

export default EmergencyContactPage;
