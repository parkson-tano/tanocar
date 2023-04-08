import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text, List, MD3Colors, Chip } from 'react-native-paper';
import { Carousel } from 'react-native-auto-carousel';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;


const LeftContent = props => <Avatar.Icon {...props} icon="car" />
const DEVICE_WIDTH = Dimensions.get('window').width;

const AdCard = (props) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    // const number = props.price;
    // const formattedNumber = number.toLocaleString("en-US", {
    //     useGrouping: true,
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2,
    //     currency: "USD",
    // });
    return (
        <View className="mt-5">
            <Card style={{ borderRadius: 10 }}>
                <Card.Title title={props.title}
                    titleStyle={{ fontSize: 25, textTransform: 'capitalize', fontWeight: 'bold' }}
                    subtitle={props.description}
                    subtitleStyle={{ fontSize: 15, textTransform: 'capitalize' }}
                    left={LeftContent} />

                <Image
                    src={props.image}
                    resizeMode="contain"
                    style={{
                        width: DEVICE_WIDTH,
                        height: 500
                    }}
                />
                {/* <Carousel
                        data={props.image}
                        renderItem={item => (
                            <Image
                                key={item}
                                src={item}
                                resizeMode="cover"
                                style={{
                                    width: DEVICE_WIDTH,
                                    height: 'auto'
                                }}
                            />
                        )}
                    /> */}
                <View className="px-5">
                    <Text className="text-2xl font-bold text-gray-800">
                        <List.Icon {...props} icon="cash" />
                        {props.price.toLocaleString(
                            "en-US", {
                            useGrouping: true,
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            currency: "USD",
                        }
                        )}
                        {" "} FCFA
                    </Text>
                </View>
                <View style={[s.row, s.px3, s.mb1]}>
                    <Text style={[s.col2, s.title, s.textLarge, s.textBlack200, { fontSize: 20, fontWeight: "bold" }]}>{props.year}</Text>
                    <Text style={[s.col4, s.title, s.textLarge, s.textBlack200, { fontSize: 20, fontWeight: "bold" }]}> {props.make} </Text>
                    <Text style={[s.col4, s.title, s.textLarge, s.textBlack200, { fontSize: 20, fontWeight: "bold" }]}> {props.model}</Text>
                </View>
                <View className="p-5">
                    <Text className="text-2xl font-bold">
                        <List.Icon {...props} icon="map" />
                        {props.location}
                    </Text>
                </View>

                {/* <View className="flex-1 bg-white rounded-lg shadow-md">
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
                </View> */}

            </Card>
        </View>
    )
}

export default AdCard

const styles = StyleSheet.create({})