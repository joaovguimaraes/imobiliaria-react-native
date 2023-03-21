import React from 'react'
import { TextInput } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Register = () => {
  const [data, setData] = React.useState({
    address: '',
    type: '',
    price: 0,
    condominiumPrice: 0,
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Address'}
      />
      <Picker
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
        <Picker.Item style={styles.option} label="House" value="house" />
        <Picker.Item label="Apartment" value="apartment" />
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Price"
        keyboardType="numeric"
      />
      {type === 'apartment' && (
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Condominium Price"
          keyboardType="numeric"
        />
      )}
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Rooms"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Bathrooms"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Image'}
      />
      <Picker
        placeholder="Occupied"
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
        <Picker.Item style={styles.option} label="yes" value={true} />
        <Picker.Item label="no" value={false} />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '10%',
    flex: 1,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    fontSize: 24,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#2196F3',
    backgroundColor: 'transparent',
  },
})

export default Register
