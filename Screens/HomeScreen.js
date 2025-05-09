import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import GuardarClientes from './GuardarClientes';

export default function HomeScreen({ navigation }) {
  const [clientes, setClientes] = useState([]);

  const handleGuardarCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Datos del Cliente</Text>
      <GuardarClientes onGuardar={handleGuardarCliente} />
      
      <Button
        title="Ver Lista de Clientes"
        onPress={() => navigation.navigate('ListarClientes', { clientes })}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});