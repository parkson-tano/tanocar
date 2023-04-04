import { View, Text } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
const SelectField = (props) => {
  return (
    <View>
          <Text>
              {props.label}
          </Text>
          <SelectList
              setSelected={props.handleChange}
              data={props.data}
              save={props.save}
          />
    </View>
  )
}

export default SelectField