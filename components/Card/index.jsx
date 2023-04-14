import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Card = (props) => {

  return (
    <View style={styles.container}>
      {props.occupied ? <Text style={styles.priceTag}>Ocupada</Text> : <></>}
      <Image
        style={styles.banner}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.ANbX-75zI_YlGZjuCrF7BQHaFj?pid=ImgDet&rs=1',
        }}
      />
      <Text style={styles.address}>{props.address}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTag}>R$ {props.price}</Text>
        <Text style={styles.type}>{props.type}</Text>
      </View>

      <View style={styles.roomsContainer}>
        <Text style={styles.bold}>{props.rooms} Quartos</Text>
        <Text style={styles.bold}>{props.bathrooms} Banheiros</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonFont}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonFont}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={props.occupied} style={styles.button} onPress={props.navigation}>
          <Text style={styles.buttonFont}>Alugar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    minHeight: 100,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 8,
  },
  banner: {
    height: undefined,
    aspectRatio: 1,
    width: '100%',
  },
  address: {
    fontSize: 24,
    fontWeight: '700',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
  },
  priceTag: {
    color: '#2196F3',
    fontSize: 22,
    fontWeight: '700',
  },
  type: {
    fontSize: 18,
  },
  roomsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    marginTop: 8,
  },
  bold: {
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginTop: 12,
  },
  button: {
    minWidth: 20,
    minHeight: 10,
    backgroundColor: '#2196F3',

    justifyContent: 'center',
    padding: 12,
  },
  buttonFont: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Card;
