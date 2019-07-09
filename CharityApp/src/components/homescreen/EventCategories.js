//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Card, CardSection } from '../common'
import { Image } from 'react-native-elements';


// create a component
class EventCategories extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={[
                        {
                            Eventname: 'Event1',
                            Eventpicture: 'https://via.placeholder.com/150',
                            Eventdetails: 'This is event',
                            Eventavatars: '',
                            Eventdonate: '30$'
                        },
                        {
                            Eventname: 'Event2',
                            Eventpicture: 'https://via.placeholder.com/150',
                            Eventdetails: 'This is event2',
                            Eventavatars: '',
                            Eventdonate: '50$'
                        }
                    
                    ]}
                    renderItem={({ item }) =>
                        <Card paddingpd={0}>
                            <CardSection direction="column">
                                <Image
                                    source={{ uri: item.Eventpicture }}
                                    style={styles.itemimage}
                                    PlaceholderContent={<ActivityIndicator />}
                                    resizeMode="contain"
                                />
                                <Text>{item.Eventname}</Text>
                            </CardSection>
                        </Card>
                    }
                />


            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        
    },
    itemimage:{
        height:150,
        width:'100%',
        alignItems: 'stretch',
        flex:1
       
    }
});

//make this component available to the app
export { EventCategories };
