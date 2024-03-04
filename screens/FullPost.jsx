import React from "react"
import { useEffect, useState } from 'react';
import styled from "styled-components"
import { View } from "react-native";
import axios from "axios";
import { Loading } from "../components/Loading";


const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 20px;
  line-height: 24px;
`;

export const FullPost = ({route, navigation}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const {id, title} = route.params;

    useEffect(() => {
      navigation.setOptions({
        title,
      });

        axios.get('https://65e5d0a6d7f0758a76e77beb.mockapi.io/articles/' + id)
    .then(({data}) => {
      setData(data);
    }).catch(e => {
      console.log(e);
      Alert.alert('Ошибочка!' , 'Не удалось загрузить статью')
    }).finally(() => {
      setIsLoading(false);
    })
    }, [])

    if(isLoading){
        return (<View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
            <Loading/>
        </View>)
      }

    return (
        <View style={{padding: 10}}>
            
            <PostImage source={{uri: data.imageUrl}} />
            <PostText>
                {data.text}
            </PostText>
        </View>
    )
}