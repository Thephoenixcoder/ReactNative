//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator, FlatList,View ,TouchableOpacity} from 'react-native';
import { Card, CardSection,Progressbar } from '../common'
import { Image } from 'react-native-elements';



// create a component
class EventCategories extends Component {
    _onPress =(item)=>{
        console.warn('Selected Item :',item)
    }
    render() {
        return (
          
                <FlatList style={styles.container}
                    data={[
                        {
                            Eventname: 'Event1',
                            Eventpicture: 'https://via.placeholder.com/100',
                            Eventdetails: 'This is event',
                            Eventavatars: '',
                            Eventdonate: '30$'
                        },
                        {
                            Eventname: 'Event2',
                            Eventpicture: 'https://via.placeholder.com/100',
                            Eventdetails: 'This is event2',
                            Eventavatars: '',
                            Eventdonate: '50$'
                        },
                        {
                            Eventname: 'Event3',
                            Eventpicture: 'https://via.placeholder.com/100',
                            Eventdetails: 'This is event2',
                            Eventavatars: '',
                            Eventdonate: '50$'
                        },
                        {
                            Eventname: 'Event4',
                            Eventpicture: 'https://via.placeholder.com/100',
                            Eventdetails: 'This is event2',
                            Eventavatars: '',
                            Eventdonate: '50$'
                        },
                        {
                            Eventname: 'Event5',
                            Eventpicture: 'https://via.placeholder.com/100',
                            Eventdetails: 'This is event2',
                            Eventavatars: '',
                            Eventdonate: '50$'
                        }
                    
                    ]}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() =>this._onPress(item)}>
                        <Card paddingpd={-1}>
                            <CardSection direction="column">
                                <View style={styles.ImageContain}>
                                <Image
                                    source={{ uri: item.Eventpicture }}
                                    style={styles.itemimage}
                                    PlaceholderContent={<ActivityIndicator />}
                                    resizeMode="cover"
                                />
                                </View>
                                <Progressbar/>
                                <Text>{item.Eventname}</Text>
                            </CardSection>
                        </Card>
                        </TouchableOpacity>
                    }
                    
                />

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        
    },
     ImageContain:{
             position:'relative',
             width:'100%',
             height:100,
           
            
        },
        itemimage:{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          height:100,
          borderTopLeftRadius:10,
          borderTopRightRadius:10
        }
});

//make this component available to the app
export { EventCategories };
