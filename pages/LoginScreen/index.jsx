import react, { useState } from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  Keyboard,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { registerUser } from '../../requests/RegisterUser';

const RegisterUser = ({ navigation }) => {
  const [errorLabel, setErrorLabel] = useState('');
  const [data, setData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleRegister = async () => {
    const { nome, email, senha } = data;

    if (nome && email && senha) {
      if (await registerUser(data)) {
        navigation.pop();
      } else {
        setErrorLabel('Verifique as informações');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>Edit Profile</Text>
        <Text>{errorLabel}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#787F85'}
          onChangeText={(e) => setData({ ...data, nome: e })}
          value={data.nome}
          placeholder="nome"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#787F85'}
          onChangeText={(e) => setData({ ...data, email: e })}
          value={data.email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#787F85'}
          onChangeText={(e) => setData({ ...data, senha: e })}
          value={data.senha}
          placeholder="senha"
          secureTextEntry
        />
        <TouchableOpacity style={styles.LoginButton} onPress={handleRegister}>
          <Text style={styles.LoginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 32,
    color: '#0090FF',
    marginVertical: 16,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#0090FF',
    backgroundColor: 'white',
    marginBottom: 8,
    color: 'black',
    fontWeight: '400',
  },
  LoginButton: {
    borderRadius: 8,
    width: '100%',
    marginTop: 8,
    padding: 8,
    backgroundColor: '#0090FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    color: '#0090FF',
    textDecorationColor: '#0090FF',
  },
});

export default RegisterUser;
