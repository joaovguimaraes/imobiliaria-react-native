import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useImobiliariaContext } from '../../contexts/imobiliariaContext';

const RegisterUser = ({ route, navigation }) => {
    const imobiliaria = useImobiliariaContext();
    const [data, setData] = React.useState({
        name: '',
        cpf: '',
        birthDate: '',
        income: '',
        rentPaymentDate: 1,
        contractStartDate: '',
        contractEndDate: ''
    });

    const saveUsuario = () => {
        imobiliaria.addUsuario(data, route.params.itemId);
        navigation.pop();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, name: e })}
                value={data.name}
                placeholder={'Nome completo'}
            />
            
            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, cpf: e })}
                value={data.cpf}
                placeholder="CPF (ex: 12345667855)"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, birthDate: e })}
                value={data.birthDate}
                placeholder="Data de nascimento"
            />

            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, income: e })}
                value={data.income}
                placeholder="Renda"
            />


            <Picker
                placeholder="rentPaymentDate"
                style={styles.input}
                selectedValue={data.rentPaymentDate}
                onValueChange={(itemValue, itemIndex) =>
                    setData({ ...data, rentPaymentDate: itemValue })
                }
            >
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="7" value={7} />
            </Picker>

            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, contractStartDate: e })}
                value={data.contractStartDate}
                placeholder="Data do começo do contrato"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={(e) => setData({ ...data, contractEndDate: e })}
                value={data.contractEndDate}
                placeholder="Data do fim do contrato"
            />
    
            <Pressable onPress={saveUsuario}>
                <Text style={styles.buttonText}>Comprar</Text>
            </Pressable>
        </View>
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

export default RegisterUser;