import React,{Component} from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreatePost from "./Screens/CreatePost";
import DrawerNavigator from "./Navigation/DrawerNavigator";


const Tab = createBottomTabNavigator();

export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
     < DrawerNavigator />
    </NavigationContainer>
  );
}
}