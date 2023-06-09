import React from 'react';
import {
  Pressable,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useImobiliariaContext } from '../../contexts/imobiliariaContext';

const Register = ({ navigation }) => {
  const imobiliaria = useImobiliariaContext();

  const [data, setData] = React.useState({
    address: '',
    type: 'house',
    price: 0,
    condominiumPrice: 0,
    rooms: 0,
    bathrooms: 0,
    image:
      'https://th.bing.com/th/id/OIP.ANbX-75zI_YlGZjuCrF7BQHaFj?pid=ImgDet&rs=1',
    occupied: 0,
  });

  const saveImovel = () => {
    imobiliaria.addImovel(data);
    navigation.pop();
  };

  return (
    <SafeAreaView>
      <ScrollView onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setData({ ...data, address: e })}
            value={data.address}
            placeholder={'Address'}
          />
          <Picker
            style={styles.input}
            selectedValue={data.type}
            onValueChange={(itemValue, itemIndex) =>
              setData({ ...data, type: itemValue })
            }
          >
            <Picker.Item style={styles.option} label="House" value="house" />
            <Picker.Item label="Apartment" value="apartment" />
          </Picker>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setData({ ...data, price: e })}
            value={data.price}
            placeholder="Price"
            keyboardType="numeric"
          />
          {data.type === 'apartment' && (
            <TextInput
              style={styles.input}
              onChangeText={(e) => setData({ ...data, condominiumPrice: e })}
              value={data.condominiumPrice}
              placeholder="Condominium Price"
              keyboardType="numeric"
            />
          )}
          <TextInput
            style={styles.input}
            onChangeText={(e) => setData({ ...data, rooms: e })}
            value={data.rooms}
            placeholder="Rooms"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setData({ ...data, bathrooms: e })}
            value={data.bathrooms}
            placeholder="Bathrooms"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setData({ ...data, image: e })}
            value={data.image}
            placeholder={'Image'}
          />
          <Picker
            placeholder="Occupied"
            style={styles.input}
            selectedValue={data.occupied}
            onValueChange={(itemValue, itemIndex) =>
              setData({ ...data, occupied: itemValue })
            }
          >
            <Picker.Item style={styles.option} label="yes" value={1} />
            <Picker.Item label="no" value={0} />
          </Picker>

          <Pressable onPress={saveImovel}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  buttonText: {
    fontSize: 22,
  },
});

export default Register;
