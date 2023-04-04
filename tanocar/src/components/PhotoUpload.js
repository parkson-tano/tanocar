import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from "expo-image-picker";
import { Card, Button } from 'react-native-paper';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { IconButton, MD3Colors } from 'react-native-paper';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const PhotoUpload = (props) => {

    // return ({ images.map((image, index) => (
    //      <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} /> 
    //      <Button title="Remove Image" onPress={() => handleRemoveImage(index)} />)) } 
    // < Button title = "Add Image" onPress = {() => handleAddImage()} /> ); }

  return (
    <View className = "mt-5">
          {props.image != "" && <Image
              source={{ uri: props.image }}
              style={[s.imgFluid, { width: '100%', height: 200 }]}
              
          />}
          <Card>
              <Card.Actions>
                  <Text className='text-xl'>Upload Photo</Text>
                  <IconButton
                      icon="camera"
                      iconColor={MD3Colors.error50}
                      size={50}
                      onPress={() => props.pickImage(props.index, props.fieldName)}
                  />
                  <IconButton
                      icon="trash-can-outline"
                      iconColor={MD3Colors.error50}
                      size={50}
                      onPress={props.removeImage}
                  />
              </Card.Actions>
          </Card>
          
    </View>
  )
}

export default PhotoUpload