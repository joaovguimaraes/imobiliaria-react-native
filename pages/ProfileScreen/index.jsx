import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Card from '../../components/Card';
import { useUserContext } from '../../contexts/userContext';

const HomeScreen = ({ navigation }) => {
  const context = useUserContext();

  useEffect(() => {
    console.log(context.properties);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardList}>
        {context.properties.map((item, index) => {
          return (
            <Card
              navigation={() => {
                navigation.navigate('RegisterPerson', { itemId: item.id });
              }}
              key={item.id}
              address={item.endereco}
              type={item.tipoImovel}
              price={item.valorAluguel}
              rooms={item.numeroQuartos}
              bathrooms={item.numeroBanheiros}
              occupied={item.locado}
            />
          );
        })}
      </ScrollView>

      <View style={styles.bottomNavigator}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.text}>New House</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    backgroundColor: 'black',
  },
  bottomNavigator: {
    elevation: 3,
    justifyContent: 'space-around',
    margin: 22,
    backgroundColor: 'black',
    flexDirection: 'row',
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
