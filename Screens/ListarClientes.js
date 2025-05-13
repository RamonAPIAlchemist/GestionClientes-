
import { View, StyleSheet, Text, FlatList } from 'react-native';

export default function ListarClientes({ route }) {
  const { clientes } = route.params;

  

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={(index) => index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.contenedorletras} >Cédula: {item.cedula}</Text>
            <Text style={styles.contenedorletras} >Nombres: {item.nombres} </Text>
            <Text style={styles.contenedorletras} >Apellidos: {item.apellidos}</Text>
            <Text style={styles.contenedorletras} >Fecha Nacimiento: {item.fechaNacimiento}</Text>
            <Text style={styles.contenedorletras} >Sexo: {item.sexo}</Text>
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
    backgroundColor: '#E8F5E9',  // Fondo más claro
  },
  item: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
   },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },
  contenedorletras:{
  fontSize:19
}
});