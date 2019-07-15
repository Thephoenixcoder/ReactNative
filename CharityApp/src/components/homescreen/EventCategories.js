//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Progressbar, Title, CircleIcon ,Avatar} from '../common'
import { Image } from 'react-native-elements';




// create a component
class EventCategories extends Component {
    state = {
    
        data: [
            {
                ID: 1,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/L8v8YFx/17cafdac3cb3ac19edc07079037c3de3a7957f6c.jpg',
                Eventdetails: 'This is event',
                Eventavatars: '',
                Eventdonate: '30$',
                color: '#69d2ff',
                bar: 1
            },
            {
                ID: 2,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/1d25pP8/136743329-15103581457011n.jpg',
                Eventdetails: 'This is event2',
                Eventavatars: '',
                Eventdonate: '50$',
                color: '#be69ff',
                bar: 0.4
            },
            {
                ID: 3,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/5Mj11D8/img-5152-large.jpg',
                Eventdetails: 'This is event2',
                Eventavatars: '',
                Eventdonate: '50$',
                color: '#ffc41f',
                bar: 0.3
            },
            {
                ID: 4,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/1d25pP8/136743329-15103581457011n.jpg',
                Eventdetails: 'This is event2',
                Eventavatars: '',
                Eventdonate: '50$',
                color: '#ff6969',
                bar: 0.5
            },
            {
                ID: 5,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/L8v8YFx/17cafdac3cb3ac19edc07079037c3de3a7957f6c.jpg',
                Eventdetails: 'This is event2',
                Eventavatars: '',
                Eventdonate: '50$',
                color: '#30d700',
                bar: 0.9
            }

        ]
    }
    _onPress = (item) => {
        console.warn('Selected Item :', item)
    }
    donateMoney =(item)=>{
         console.warn('donateID',item)
    }
    render() {
        return (

            <FlatList style={styles.container}

                data={this.state.data}
              

                renderItem={({ item }) =>



                    <Card paddingpd={-1}>
                        <TouchableOpacity onPress={() => this._onPress(item)}>
                            <CardSection direction="column">
                                <View style={styles.ImageContain}>
                                    <Image
                                        source={{ uri: item.Eventpicture }}
                                        style={styles.itemimage}
                                        PlaceholderContent={<ActivityIndicator />}
                                        resizeMode="cover"
                                    />
                                </View>

                                <Progressbar colors={item.color} widthprog={item.bar} />

                            </CardSection>
                        </TouchableOpacity>
                        <CardSection paddingtext={10} direction="row" alignItem="flex-start" >
                            <View>
                                <Title color={item.color} fontsizes={18} title={item.Eventname} />
                                <Title color="#000" fontsizes={16} title={item.Eventdetails} />
                            </View>
                            <View>
                            <TouchableOpacity onPress={() => this.donateMoney(item.ID)}>
                              
                                <CircleIcon bordercolors={item.color} title={item.Eventdonate} />
                            </TouchableOpacity>
                            </View>
                        </CardSection>
                      
                    </Card>

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
    ImageContain: {
        position: 'relative',
        width: '100%',
        height: 100,


    },
    itemimage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardtitle: {
        fontSize: 18
    }
});

//make this component available to the app
export { EventCategories };
