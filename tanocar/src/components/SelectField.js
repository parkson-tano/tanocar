import { View, Text } from 'react-native'
import React from 'react'
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
const SelectField = (props) => {
  
  return (
    <View>
      <Text className="my-2 font-bold text-lg">
        {props.label.toUpperCase()}
      </Text>
      {
        props.multi ? (<MultipleSelectList
          setSelected={props.onChange}
          multiple={true}
          data={props.data}
          save="value"
          search={props.search}
          defaultOption={props.data[0]} 
          notFoundText="No data found"
          boxStyles={{
            width: '100%',
            height: 50,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
          }}
          labelStyles={{
            fontSize: 16,
          }}
          inputStyles={{
            fontSize: 16,
          }}
          dropdownItemStyles={{
            padding: 10,
          }}

          dropdownTextStyles={{
            fontSize: 20,
          }}

        />) :
          (
            <SelectList
              setSelected={(value) => props.onChange(value, props.label)}
              data={props.data}
              save="value"
              search={props.search}
              boxStyles={{
                width: '100%',
                height: 50,
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
              }}
              labelStyles={{
                fontSize: 16,
              }}
              inputStyles={{
                fontSize: 16,
              }}
              dropdownItemStyles={{
                padding: 10,
              }}

              dropdownTextStyles={{
                fontSize: 20,
                
              }}
              defaultOption={props.data[0]} 

            />
          )

      }

    </View>
  )
}

export default SelectField