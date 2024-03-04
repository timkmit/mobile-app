import { 
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { HomeScreen } from './screens/Home';

const HeaderBar = styled.View`
height: 70px;
background-color: rgba(0,0,0,0.1);
`;

export default function App() {


  return (
    <View>
      
      <HeaderBar/>
      <HomeScreen/>
      

    </View>
  );
}


