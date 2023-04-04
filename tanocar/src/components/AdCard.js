import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';


const AdCard = (props) => {
    return (
        <View>
            <Card>
                <Card.Title>{props.title}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0, height: 200 }}
                    source={{
                        uri: `${props.image}`,
                    }}
                />
                
                <Text style={{ marginBottom: 10, fontSize:20 }}>
                    {props.price} FCFA
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {props.description}
                </Text>
                <Button
                    icon={
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="See More"
                />
            </Card>
        </View>
    )
}

export default AdCard

const styles = StyleSheet.create({})