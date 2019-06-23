
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import SplashScreen from './components/splashscreen/splashscreen';
import { WelcomeFlow, LoginFlow, CreateAccountFlow } from './components/authscreen';
import { HomeScreen, ProfileScreen, FavoriteScreen, BadgesScreen, DonationsScreen } from './components/homescreen'
// create a component
const Authstacknavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeFlow,
        navigationOptions: {
            header: null,
        }
    },
    login:{
        screen: LoginFlow
    },
    signup:{ 
        screen:CreateAccountFlow
    }
})

const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: () => (
                <Text>hello</Text>
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Text>hello</Text>
            )
        }

    },
    Favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarIcon: () => (
                <Text>hello</Text>
            )
        }

    },
    Badges: {
        screen: BadgesScreen,
        navigationOptions: {
            tabBarLabel: 'Badges',
            tabBarIcon: () => (
                <Text>hello</Text>
            )
        }

    },
    Donations: {
        screen: DonationsScreen,
        navigationOptions: {
            tabBarLabel: 'Donations',
            tabBarIcon: () => (
                <Text>hello</Text>
            )
        }

    },


})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Your App',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text>hello</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
})
const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator
})


const createswitch = createSwitchNavigator({
    splashScreen: SplashScreen,
    Auth: Authstacknavigator,
    App: AppDrawerNavigator

},
    {
        initialRouteName: 'Auth'
    }
)

const Appcontainer = createAppContainer(createswitch);
export default Appcontainer;