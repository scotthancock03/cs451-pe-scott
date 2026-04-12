import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import icon from '../../assets/images/icon.png';

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* 1. Image on top */}
            <Image 
                source={icon} 
                style={styles.image} 
            />

            {/* 2. User Input Section */}
            <Text style={styles.text}>Enter your favorite course</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: CS451" 
            />

            {/* 3. Core Requirements */}
            <Text style={styles.heading}>Core Requirements (45 Credits)</Text>
            <Text style={styles.text}>CS 320 Fundamentals of AI</Text>
            <Text style={styles.text}>CS 330 Network Communications</Text>
            <Text style={styles.text}>CS 340 Operating Systems and Administration</Text>
            <Text style={styles.text}>CS 351 Discrete Mathematics in Computing (NS)</Text>
            <Text style={styles.text}>IS 312 Web Design and Programming</Text>
            <Text style={styles.text}>IS 345 Cybersecurity</Text>
            <Text style={styles.text}>IS 360 Database Technologies</Text>
            <Text style={styles.text}>IS 471 Cyber Ethics (SS)</Text>
            <Text style={styles.text}>IT 434 Cloud Computing</Text>

            {/* 4. Computer Science */}
            <Text style={styles.heading}>Computer Science (30 Credits)</Text>
            <Text style={styles.text}>CS 440 Software Quality Assurance</Text>
            <Text style={styles.text}>CS 445 Software Process Management</Text>
            <Text style={styles.text}>CS 451 Frontend Development</Text>
            <Text style={styles.text}>CS 452 Backend Development</Text>
            <Text style={styles.text}>CS 469 Data Structures and Algorithms in Computing</Text>
            <Text style={styles.text}>CS 475 Artificial Intelligence</Text>

            {/* 5. Electives */}
            <Text style={styles.heading}>Electives (10 Credits)</Text>
            <Text style={[styles.electiveText]}>
                Students may select two electives from any other undergraduate upper-division courses within the School of Technology & Computing or complete the internship.
            </Text>

            {/* 6. Capstone */}
            <Text style={styles.heading}>Capstone (5 Credits)</Text>
            <Text style={styles.text}>CS 497 Technology and Computing Capstone (5)</Text>

        </ScrollView>
    );
};

{/* 7. StyleSheet */}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
    heading: {
        fontFamily: 'Arial',
        fontSize: 28,
        backgroundColor: 'yellow',
        marginTop: 20,
    },
    text: {
        fontFamily: 'Arial',
        fontSize: 20,
    },
    electiveText: {
        fontFamily: 'Arial',
        fontSize: 20,
        width: '60%',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default App;