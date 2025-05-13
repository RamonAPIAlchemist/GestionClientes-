import { useState } from 'react';
import { StyleSheet, Text, ScrollView,  TouchableOpacity } from 'react-native';
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

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => navigation.navigate('ListarClientes', { clientes })}
      >
        <Text style={styles.smallButtonText}>Ver Lista de Clientes</Text>
      </TouchableOpacity>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#E8F5E9',  // Fondo más claro
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },

  smallButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,          // Reduce la altura
    paddingHorizontal: 12,       // Reduce el ancho
    borderRadius: 4,
    alignSelf: 'center',
    minWidth: 316,               // Ancho mínimo
  },
  smallButtonText: {
    color: 'white',
    fontSize: 21,                // Texto más pequeño
    fontWeight: '500',
    textAlign: 'center',
  }

});