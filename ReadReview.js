import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity, FlatList} from 'react-native';
import WriteReview from './WriteReview';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState, useEffect } from 'react';



const ReadReview = ()=>{
    const [items, setItems] = useState([]);
    const navigation = useNavigation();


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://formserver1.azurewebsites.net/items');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

    return(

        <View style={styles.container}>
        <Text style={styles.header}>All Reviews:</Text>
        
        <FlatList
          data={items}
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
            <View style={styles.reviewContainer}>
              <Text style={styles.reviewName}>{item.name}:</Text>
              <Text style={styles.reviewText}>{item.review}</Text>
            </View>
          )}
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.push('WriteReview')}
        >
          <Text style={styles.buttonText}>Write a Review</Text>
        </TouchableOpacity>
      </View>
    )


}
const styles = StyleSheet.create({
    container: {
      paddingTop:30,
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
    },
    reviewContainer: {
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 4,
      borderRadius: 8,
      backgroundColor: '#fff',
      elevation: 2, // Android shadow
      shadowColor: '#000', // iOS shadow
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    reviewName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red',
    },
    reviewText: {
      fontSize: 26,
      color: '#666',
      marginTop: 4,
    },
    button: {
      backgroundColor: 'red',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 16,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  


export default  ReadReview;