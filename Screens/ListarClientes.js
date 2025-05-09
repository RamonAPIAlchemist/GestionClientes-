
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';

export default function ListarClientes({ route }) {
  const { clientes } = route.params;

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={clientes}
        keyExtractor={( index) => index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Cédula: {item.cedula}</Text>
            <Text>Nombres: {item.nombres} </Text>
            <Text>Apellidos: {item.apellidos}</Text>
            <Text>Fecha Nacimiento: {item.fechaNacimiento}</Text>
            <Text>Sexo: {item.sexo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 10,
  },
});