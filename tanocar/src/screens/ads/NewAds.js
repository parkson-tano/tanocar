import { Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-native-paper';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { IconButton, MD3Colors } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import InputField from '../../components/InputField';
import PhotoUpload from '../../components/PhotoUpload';
import SelectField from '../../components/SelectField';
import axios from "axios";
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;


const NewAds = () => {
    const [selected, setSelected] = useState("");
    const [images, setImages] = useState([{uri: ""}]);
    const handleAddImage = () => {
        setImages([...images, { uri: "" }]);
    };

    const handleRemoveImage = (index) => {
        const tmpFields = [...images];
        tmpFields.splice(index, 1);
        setImages(tmpFields);
    };
    const pickImage = async (fieldIndex, fieldName ) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('rse', result.uri);

        if (!result.canceled) {
            const url = result.uri;
            const tmpFields = [...images];
            tmpFields[fieldIndex][fieldName] = url;
            setImages(tmpFields);
            // setImages([...images, { uri: url }]);
        }
    };
    console.log('images', images)
    const data = [
        { key: 'car', value: 'Car' },
        { key: 'motor-cycle', value: 'Motor Cycle' },
    ]
const options = {
  method: 'GET',
  url: 'https://car-api2.p.rapidapi.com/api/years',
  headers: {
    'X-RapidAPI-Key': '5faa52bf0bmshc514d81e102214dp174eddjsn474b0a61cce1',
    'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
  }
};


    return (
        <View>
            <Text variant="headlineSmall" className="text-red-400 mx-20 text-xl p-5 font-extrabold">
                Create New Ads
            </Text>

            <ScrollView className="py-5 px-5" style={{height: "90%"}}>
                <SelectField label="Type" data={data} />
                <InputField label="Title" multiline={false} />
                <InputField label="Description" multiline={true} />
                <InputField label="price" multiline={true} keyboardType='numeric' />
                {images.map((image, idx) => {
                    return (
                        <PhotoUpload pickImage={pickImage} index={idx} 
                        fieldName="uri"
                        image={image.uri} removeImage={() => handleRemoveImage(idx)} />
                    )
                })}
    
                <View className="flex justify-end">
                    <View style={{ flexDirection: 'row', alignItems: 'center', position:'relative' }}>
                        <IconButton
                            icon="plus"
                            animated={true}
                            iconColor={MD3Colors.error50}
                            size={30}
                            onPress={() => handleAddImage()}
                            accessibilityLabel="Add Photo"
                            className='border-2 border-red-400'
                            style={{ marginLeft: 'auto' }}
                        />
                        <Text className='text-gray-400 text-lg'>Add Photo</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default NewAds
