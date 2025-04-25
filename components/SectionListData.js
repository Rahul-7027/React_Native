import React from 'react'
import { View, Text, SectionList } from 'react-native'

const SectionListData = () => {
    const developers = [
        {
            id: 1,
            name: "Rahul Bhati",
            data: ["React JS", "React Native"]
        },
        {
            id: 2,
            name: "Sneha Sharma",
            data: ["Node.js", "Express", "MongoDB"]
        },
        {
            id: 3,
            name: "Aman Verma",
            data: ["Python", "Django", "Flask"]
        },
        {
            id: 4,
            name: "Priya Singh",
            data: ["Java", "Spring Boot", "Hibernate"]
        },
        {
            id: 5,
            name: "Karan Mehta",
            data: ["HTML", "CSS", "JavaScript"]
        }
    ];

    return (
        <View>
            <Text style={{ fontSize: 33 }}>Section List</Text>
            <SectionList
                sections={developers}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (<Text style={{ fontSize: 23, color: "orange" }}>{name}</Text>)}
            />
        </View>
    )
}

export default SectionListData
