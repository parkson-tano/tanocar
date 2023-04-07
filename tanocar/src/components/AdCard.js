import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text, List, MD3Colors, Chip } from 'react-native-paper';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import { NumericFormat } from 'react-number-format';

import { PatternFormat } from 'react-number-format';

const LeftContent = props => <Avatar.Icon {...props} icon="car" />

const AdCard = (props) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    const number = props.price;
    const formattedNumber = number.toLocaleString("en-US", {
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: "USD",
    });
    return (
        <View className="mt-5">
            <Card style={{ borderRadius: 10 }}>
                <Card.Title title={props.title}
                    titleStyle={{ fontSize: 25, textTransform: 'capitalize', fontWeight: 'bold' }}
                    subtitle={props.description}
                    subtitleStyle={{ fontSize: 15, textTransform: 'capitalize' }}
                    left={LeftContent} />

                <View className="flex-1 bg-white rounded-lg shadow-md">
                    <Image
                        src={props.image}
                        resizeMode="contain"
                        className="w-full h-64 min-h-auto max-h-screen"
                    />
                    <View className="mt-4 p-5">
                        
                        <Text className="text-xl font-bold text-gray-800">
                            {formattedNumber}
                        </Text>
                    </View>
                </View>
                <View className="flex-1 bg-white rounded-lg shadow-md">
                    <List.Accordion
                        title="Extra Features"
                        left={props => <List.Icon {...props} icon="engine" />}>
                        {
                            props.features?.map(feature => (

                                <List.Item
                                    title={feature} left={props =>
                                        <List.Icon {...props} icon="car" />} />
                            ))
                        }


                    </List.Accordion>
                </View>

            </Card>
        </View>
    )
}

export default AdCard

const styles = StyleSheet.create({})