import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function GuardarClientes({ onGuardar }) {
  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');

  const guardar = () => {
    if (!cedula || !nombres) {
      Alert.alert('Error', 'Cédula y Nombres son obligatorios');
      return;
    }

    const nuevoCliente = {
      cedula,
      nombres,
      apellidos,
      fechaNacimiento,
      sexo,
    };

    setCedula('');
    setNombres('');
    setApellidos('');
    setFechaNacimiento('');
    setSexo('');

    onGuardar(nuevoCliente);
    
    Alert.alert(
      'Datos almacenados',
      `Cédula: ${cedula}\nNombres: ${nombres}\nApellidos: ${apellidos}\nFecha Nacimiento: ${fechaNacimiento}\nSexo: ${sexo}`
    );

   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cédula:</Text>
      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={setCedula}
        placeholder="Ej: 001-1234567-8"
      />

      <Text style={styles.label}>Nombres:</Text>
      <TextInput
        style={styles.input}
        value={nombres}
        onChangeText={setNombres}
        placeholder="Ej: María José"
      />

      <Text style={styles.label}>Apellidos:</Text>
      <TextInput
        style={styles.input}
        value={apellidos}
        onChangeText={setApellidos}
        placeholder="Ej: Pérez García"
      />

      <Text style={styles.label}>Fecha de Nacimiento:</Text>
      <TextInput
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        placeholder="AAAA-MM-DD"
      />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione..." value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Femenino" value="Femenino" />
        </Picker>
      </View>

      <Button
        title="Guardar Cliente"
        onPress={guardar}
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',  // Fondo más claro
  },
  label: {
   fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',  // Centra el texto horizontalmente
    alignSelf: 'center',  // Centra el elemento en su contenedor
    width: '100%',       // Asegura que ocupe todo el ancho disponible
  },
  input: {
    height: 45,                  // Altura aumentada
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,             // Bordes más redondeados
    paddingHorizontal: 12,       // Más padding
    marginBottom: 15,            // Más espacio
    backgroundColor: '#fff',     // Fondo blanco
    fontSize: 15,                // Tamaño de fuente
    color: '#333',               // Color de texto
    shadowColor: '#000',         // Sombra sutil
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,                // Para Android
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,             // Bordes más redondeados
    marginBottom: 25,            // Más espacio
    overflow: 'hidden',
    backgroundColor: '#fff',     // Fondo blanco
    shadowColor: '#000',         // Sombra sutil
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,                // Para Android
  },
  
});