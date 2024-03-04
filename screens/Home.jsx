import { StatusBar } from 'expo-status-bar';
import { 
  Text,
  View,
  Alert,
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { FullPost } from './FullPost';


export const HomeScreen = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://65e5d0a6d7f0758a76e77beb.mockapi.io/articles')
    .then(({data}) => {
      setItems(data);
    }).catch(e => {
      console.log(e);
      Alert.alert('Ошибочка!' , 'Не удалось загрузить данные с мокапи')
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(fetchPosts, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <View>
      <FlatList 
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
      data={items}
      renderItem={({item}) => <TouchableOpacity>
        <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} onPress={<FullPost postID={item.id}/>}/>
      </TouchableOpacity>}
      />
      <StatusBar theme="auto" style="auto" />
    </View>
  );
}


