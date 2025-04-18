import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = ({ items }) => {
    return (
        <View style={styles.listContainer}>
            {items.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 10,
    },
    listItem: {
        backgroundColor: '#e2e2e2',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default List;