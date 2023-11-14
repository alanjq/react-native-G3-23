import { FlatList, Text, View } from "react-native";

export default function ListViewDestinos({ onSelect }) {
    const DESTINOS = [
        { key: 'Europa' },
        { key: 'México' },
        { key: 'Australia' },
        { key: 'USA' },
        { key: 'Canadá' }
    ]

    const handlePress = (label) => {
        if(onSelect){
            onSelect(label)
        }
    }

    return (
        <View>
            <FlatList
                data={DESTINOS}
                renderItem={({ item }) => <Text onPress={()=>handlePress(item.key)}>{item.key}</Text>}
            ></FlatList>
        </View>
    )
}
