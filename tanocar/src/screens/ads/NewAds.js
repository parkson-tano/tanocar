import { Text, View, ScrollView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { IconButton, MD3Colors, ActivityIndicator, MD2Colors } from 'react-native-paper';

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
    const [features, setFeatures] = useState([]);
    const [adDetails, setAdDetails] = useState({ negotiate: false })
    const [images, setImages] = useState([{ uri: "" }]);
    const [submitting, setSubmitting] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    const [ready, setReady] = useState(false);


    const handleAddImage = () => {
        setImages([...images, { uri: "" }]);
    };

    const handleRemoveImage = (index) => {
        const tmpFields = [...images];
        tmpFields.splice(index, 1);
        setImages(tmpFields);
    };

    const handleChangeSelect = (value, name) => {
        setAdDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleChangeMultiSelect = (value) => {
        setFeatures(value);
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

    const uploadImage = async () => {

        let port_form = [...images];
        for (let field of port_form) {
            console.log('field', field)
            const data = new FormData();
            data.append("image", { uri: field.uri, name: field.uri.split('/').pop() });
            await axios.post(API_URL + 'ads/image', data).then((res) => {
                console.log("image response", res.data);
                field.uri = res.data.image;
            }).catch((err) => { console.log(err.response) });
        }
        setImages(port_form);
    };



    const create_ad = async () => {
        if ((adDetails.title == undefined || adDetails.title == '') 
        || (adDetails.description == undefined || adDetails.description == '') 
        || (adDetails.price == undefined || adDetails.price == '') 
        || (adDetails.type == undefined || adDetails.type == '')) {
            (adDetails.title == undefined || adDetails.title == '')  && setErrorTitle(true);
            (adDetails.description == undefined || adDetails.description == '') && setErrorDescription(true);
            (adDetails.price == undefined || adDetails.price == '')  && setErrorPrice(true);
            alert("error")

        }
        else {
            setSubmitting(true);
            await uploadImage();
            const formData = new FormData();
            const ads_data = JSON.stringify({ adDetails, features })
            const ad_image = JSON.stringify(images)
            console.log('ads_data', ads_data)
            formData.append('data', ads_data)
            formData.append('images', ad_image)
            formData.append('title', adDetails.title)
            formData.append('description', adDetails.description)
            formData.append('owner', 2)
            axios
                .post(API_URL + 'ads/add', formData)
                .then((response) => {alert("DONE"); setSubmitting(false);})
                .catch((error) => console.log(error.response));
        }

    }

    return (
        <View>
            <Text variant="headlineSmall" className="text-red-400 mx-20 text-xl p-5 font-extrabold">
                Create New Ads
            </Text>
            {submitting && <ActivityIndicator animating={submitting} color={MD2Colors.blue500} size='large' />}
            <ScrollView className="py-5 px-5" style={{ height: "90%" }}>
                <SelectField label="type" data={data} onChange={handleChangeSelect} search={false} />
                <InputField label="title" onChange={handleChangeSelect} error={errorTitle} />
                <InputField label="description" multiline={true} onChange={handleChangeSelect} error={errorDescription} />
                <InputField label="price" multiline={true} keyboardType='numeric' onChange={handleChangeSelect} error={errorPrice} />
                <CheckBox
                    checked={adDetails.negotiate}
                    onPress={() => {
                        setAdDetails(prevState => ({ ...prevState, negotiate: !adDetails.negotiate }));
                    }}
                    title="Negotiable"
       
                />
                <SelectField label="year" data={spec.year_type} onChange={handleChangeSelect} />
                <SelectField label="manufacturer" data={data} onChange={handleChangeSelect} />
                <SelectField label="make" data={data} onChange={handleChangeSelect} />
                <SelectField label="model" data={data} onChange={handleChangeSelect} />
                <SelectField label="style" data={data} onChange={handleChangeSelect} />
                <SelectField label="trim" data={data} onChange={handleChangeSelect} />
                <SelectField label="body Type" data={spec.body_type} onChange={handleChangeSelect} search={true} name="body_type" />

                <SelectField label="fuel type" data={spec.fuel_type} onChange={handleChangeSelect} />
                <SelectField label="cylinder" data={spec.cylinders_type} onChange={handleChangeSelect} />
                <SelectField label="transmission" data={spec.transmission_type} onChange={handleChangeSelect} />
                <SelectField label="feature" data={spec.car_feature} multi={true} onChange={handleChangeMultiSelect} />
                <SelectField label="drive" data={spec.drive_type} onChange={handleChangeSelect} />

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
                
                    <Button className="mb-10 bg-blue-200" onPress={create_ad}>
                        <Text className='text-2xl uppercase text-red-400 font-extrabold p-3'>
                            Create Ads
                        </Text>

                    </Button>

          

            </ScrollView>

        </View>
    )
}

export default NewAds
