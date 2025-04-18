import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, color, size, onPress }) => {
    return (
        <Pressable 
            style={({ pressed }) => [styles.button, pressed && styles.pressed]} 
            onPress={onPress} android_ripple={{ color: '#ccc' }}
        >
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
});

export default IconButton;