
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import SplashScreen from './components/splashscreen/splashscreen';
import { LoginFlow, CreateAccountFlow } from './components/authscreen';
import { HomeScreen, ProfileScreen, FavoriteScreen, BadgesScreen, DonationsScreen, SearchBars, NotificationsScreen, EventCategories } from './components/homescreen'
import { Badgeicon } from './components/common'
import { EventScreen, DonatedetailsScreen } from './components/Eventdetails'
// create a component



const Authstacknavigator = createStackNavigator({

    login: {
        screen: LoginFlow,
        navigationOptions: {
            header: null,
        }
    },
    signup: {
        screen: CreateAccountFlow,
        navigationOptions: {
            header: null,
        }
    }
})

const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: () => (
                <Icon
                    name='home'
                    type='MaterialIcons'
                    color='#828996'
                    size={25}
                />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (

                <Icon
                    name='user'
                    type='antdesign'
                    color='#828996'
                    size={25}
                />
            )
        }

    },
    Favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favorite',

            tabBarIcon: () => (
                <Icon
                    name='favorite-border'
                    type='MaterialIcons'
                    color='#828996'
                    size={25}
                />
            )
        }

    },
    Badges: {
        screen: BadgesScreen,
        navigationOptions: {
            tabBarLabel: 'Badges',
            tabBarIcon: () => (
                <Icon
                    name='stars'
                    type='MaterialIcons'
                    color='#828996'
                    size={25}

                />
            )
        }

    },
    Donations: {
        screen: DonationsScreen,
        navigationOptions: {
            tabBarLabel: 'Donations',
            tabBarIcon: () => (
                <Icon
                    name='linechart'
                    type='antdesign'
                    color='#828996'
                    size={25}
                />
            )
        }

    }



})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <SearchBars />,
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Icon
                            name='bars'
                            type='antdesign'
                            color='#ff696a'
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: (
                <Badgeicon count={10} onPress={() => navigation.navigate('Notification')} />
            )
        })
    },
    Notification: {
        screen: NotificationsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Notifications'
        })
    },
    EventDetails: {
        screen: EventScreen,
        navigationOptions: {
            headerTitleStyle: {
                color: '#ff7272'
            },
            headerTintColor: '#ff7272',
            
        }
    },
    DonateDetails: {
        screen: DonatedetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Donate',
            headerTitleStyle: {
                color: '#ff7272'
            },
            headerTintColor: '#ff7272',
        })
    }

})


const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,


})


const createswitch = createSwitchNavigator({
    splashScreen: SplashScreen,
    Auth: Authstacknavigator,
    App: AppDrawerNavigator,




},
    {
        initialRouteName: 'App'
    }
)

const Appcontainer = createAppContainer(createswitch);
export default Appcontainer;