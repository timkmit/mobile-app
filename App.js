import { StatusBar } from 'expo-status-bar';
import { Text, View, Alert, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Post } from './components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HeaderBar = styled.View`
height: 70px;
background-color: rgba(0,0,0,0.1);
`;




export default function App() {

  const [items, setItems] = useState();

  useEffect(() => {
    axios.get('https://65e5d0a6d7f0758a76e77beb.mockapi.io/articles')
    .then(({data}) => {
      setItems(data);
    }).catch(e => {
      console.log(e);
      Alert.alert('Ошибочка!' , 'Не удалось загрузить данные с мокапи')
    });
  }, [])

  return (
    <View>
      <HeaderBar/>
      <FlatList 
      
      data={items}
      renderItem={({item}) => <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>}

      />
      
      <StatusBar theme="auto" style="auto" />
      

    </View>
  );
}


