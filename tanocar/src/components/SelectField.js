import { View, Text } from 'react-native'
import React from 'react'
import { SelectList, MultipleSelectList} from 'react-native-dropdown-select-list'
const SelectField = (props) => {
  return (
    <View>
      <Text>
        {props.label}
      </Text>
      {
        props.multi ? (<MultipleSelectList
          setSelected={props.onChange}
          multiple={true}
          data={props.data}
          save="value"
          search={props.search}
        />) :
        (
                    <SelectList
            setSelected={(value) => props.onChange(value, props.label)}
            data={props.data}
            save="value"
            search={props.search}

          />
        )

      }

    </View>
  )
}

export default SelectField