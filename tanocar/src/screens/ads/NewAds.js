import { Text, View, ScrollView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-native-paper';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { IconButton, MD3Colors } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";
import InputField from '../../components/InputField';
import PhotoUpload from '../../components/PhotoUpload';
import SelectField from '../../components/SelectField';
import axios from "axios";
import * as spec from '../../utilities/data';
import { API_URL } from '../../api';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;


const NewAds = () => {
    const [selected, setSelected] = useState([]);
    const [adDetails, setAdDetails] = useState({})
    const [images, setImages] = useState([{ uri: "" }]);


    const handleAddImage = () => {
        setImages([...images, { uri: "" }]);
    };

    const handleRemoveImage = (index) => {
        const tmpFields = [...images];
        tmpFields.splice(index, 1);
        setImages(tmpFields);
    };

    const handleChangeSelect = (value, name) => {
        console.log('select', selected)
        setAdDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleChangeMultiSelect = (value) => {
        setSelected(value);
    };

    const pickImage = async (fieldIndex, fieldName) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('rse', result.assets[0].uri);

        if (!result.canceled) {
            const url = result.assets[0].uri;
            const tmpFields = [...images];
            tmpFields[fieldIndex][fieldName] = url;
            setImages(tmpFields);
            // setImages([...images, { uri: url }]);
        }
    };
    const data = [
        { key: 'car', value: 'Car' },
        { key: 'motor-cycle', value: 'Motor Cycle' },
    ]

    const feature = {feature : selected}
    const formData = new FormData();
    const ads_data = JSON.stringify(adDetails, feature)
    const ad_image = JSON.stringify(images)
    console.log('ads_data', ads_data)
    formData.append('data', ads_data)
    formData.append('images', ad_image)
    formData.append('owner', 2)
    const create_ad = () => {
        axios
            .post(API_URL + 'ads/add', formData)
            .then((response) => alert("DONE"))
            .catch((error) => console.log(error.response));
    }

    return (
        <View>
            <Text variant="headlineSmall" className="text-red-400 mx-20 text-xl p-5 font-extrabold">
                Create New Ads
            </Text>

            <ScrollView className="py-5 px-5" style={{ height: "90%" }}>
                <SelectField label="Type" data={data} onChange={handleChangeSelect} search={false} />
                <InputField label="Title" multiline={false} onChange={handleChangeSelect} />
                <InputField label="Description" multiline={true} onChange={handleChangeSelect} />
                <InputField label="price" multiline={true} keyboardType='numeric' onChange={handleChangeSelect} />
                <SelectField label="Year" data={spec.year_type} onChange={handleChangeSelect} />
                <SelectField label="Manufacturer" data={data} onChange={handleChangeSelect} />
                <SelectField label="Make" data={data} onChange={handleChangeSelect} />
                <SelectField label="Model" data={data} onChange={handleChangeSelect} />
                <SelectField label="Style" data={data} onChange={handleChangeSelect} />
                <SelectField label="Trim" data={data} onChange={handleChangeSelect} />
                <SelectField label="Body Type" data={spec.body_type} onChange={handleChangeSelect} search={true} name="body_type" />

                <SelectField label="Fuel type" data={spec.fuel_type} onChange={handleChangeSelect} />
                <SelectField label="Cylinder" data={spec.cylinders_type} onChange={handleChangeSelect} />
                <SelectField label="Transmission" data={spec.transmission_type} onChange={handleChangeSelect} />
                <SelectField label="Feature" data={spec.car_feature} multi={true} onChange={handleChangeMultiSelect} />
                <SelectField label="Drive" data={spec.drive_type} onChange={handleChangeSelect} />

                {images.map((image, idx) => {
                    return (
                        <View key={idx}>
                            <PhotoUpload pickImage={pickImage} index={idx}
                                fieldName="uri"
                                image={image.uri} removeImage={() => handleRemoveImage(idx)} />
                        </View>
                    )
                })}

                <View className="flex justify-end">
                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
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
                <TouchableOpacity>
                    <Button className="mb-10 p-2 bg-blue-200" onPress={create_ad}>
                        <Text className='text-2xl uppercase text-red-400 font-extrabold'>
                            Create Ads
                        </Text>

                    </Button>

                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

export default NewAds
