import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert,  TouchableOpacity } from 'react-native';
import { azurefetch, initAzureCosmos } from 'react-native-azure-cosmos/azurecosmos'
import { useNavigation } from '@react-navigation/native';
import ReadReview from './ReadReview';
import { useState, useEffect } from 'react';
import uuid from 'react-native-uuid';

const WriteReview = ()=>{


const navigation = useNavigation();

const [id, setId] = useState('');
const [name, setName] = useState('');
const [review, setReview] = useState('');

const writeData = async () =>{
try{
  console.log('write dATA RUNNNING')
const newID = uuid.v4();
setId(newID);

const response = await fetch('https://formserver1.azurewebsites.net/submit', {
method:'POST',
headers: {'Content-Type': 'application/json',},
body:JSON.stringify({ id:newID, name,review })

})
const data = await response.json();
Alert.alert('success', data.message)
}
catch (error) {
  Alert.alert('Error', 'Failed to send data');
  console.error('Error:', error);
}
navigation.push('ReadReview')
}
    return (

    
        <View style={styles.container}>
              <Text style={styles.title}>User Review Form</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder='Username' 
              
                onChangeText={setName}/>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Review</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                    onChangeText={setReview}
                    
                  placeholder='Write your review here'
                  multiline
                />
              </View>
              <Button title='Submit' onPress={() => writeData()} color="red" />

                <TouchableOpacity onPress={()=>navigation.navigate('ReadReview')}><Text style={styles.link}>Read all reviews</Text></TouchableOpacity>
              <StatusBar style="auto" />
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            paddingTop:30,
            flex: 1,
            padding: 16,
            backgroundColor: '#f4f4f4',
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24,
            textAlign: 'center',
            color: '#343a40',
          },
          formGroup: {
            marginBottom: 16,
          },
          label: {
            fontSize: 16,
            fontWeight: '500',
            color: '#495057',
            marginBottom: 8,
          },
          input: {
            height: 40,
            borderColor: '#ced4da',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 12,
            backgroundColor: '#ffffff',
            fontSize: 16,
          },
          textArea: {
            height: 100,
            textAlignVertical: 'top',
            paddingVertical: 8,
          },
          link: {
            color: 'blue',
            fontSize:18,
            fontWeight: '300',
            marginTop: 20
          }
        });
        

export default WriteReview;
