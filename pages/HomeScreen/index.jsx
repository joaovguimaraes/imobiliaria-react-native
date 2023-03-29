import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Pressable, Text } from 'react-native';
import Card from '../../components/Card';
import { useImobiliariaContext } from '../../contexts/imobiliariaContext';

const HomeScreen = ({ navigation }) => {
  const imobiliaria = useImobiliariaContext();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardList}>
        {imobiliaria.imoveis.map((item, index) => {
          return (
            <Card
              key={index}
              address={item.address}
              type={item.type}
              price={item.price}
              rooms={item.rooms}
              bathrooms={item.bathrooms}
            />
          );
        })}
      </ScrollView>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.text}>Go to register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
