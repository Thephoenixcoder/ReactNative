//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Progressbar, Title, CircleIcon ,Heart} from '../common'
import { Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import {SearchBars} from '../homescreen'


// create a component
class EventCategories extends Component {
    
    state = {
        flag:true,
        data: [
            {
                ID: 1,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/L8v8YFx/17cafdac3cb3ac19edc07079037c3de3a7957f6c.jpg',
                Eventdetails: 'This is event This is event2 This is event2',
                Eventavatars: '',
                Eventdonate: '30 Egp',
                color: '#69d2ff',
                bar: 1,
                from:'November 5 2019',
                to:'december 5 2019'
            },
            {
                ID: 2,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/1d25pP8/136743329-15103581457011n.jpg',
                Eventdetails: 'This is event2 This is event2 This is event2',
                Eventavatars: '',
                Eventdonate: '50 Egp',
                color: '#be69ff',
                bar: 0.4,
                from:'November 5 2019',
                to:'december 5 2019'
            },
            {
                ID: 3,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/5Mj11D8/img-5152-large.jpg',
                Eventdetails: 'This is event2 This is event2 This is event2 ..',
                Eventavatars: '',
                Eventdonate: '50 Egp',
                color: '#ffc41f',
                bar: 0.3,
                from:'November 5 2019',
                to:'december 5 2019'
            },
            {
                ID: 4,
                Eventname: 'At vero eos et accusamus hello come',
                Eventpicture: 'https://i.ibb.co/1d25pP8/136743329-15103581457011n.jpg',
                Eventdetails: 'This is event2 This is event2 This is event2 ..',
                Eventavatars: '',
                Eventdonate: '50 Egp',
                color: '#ff6969',
                bar: 0.5,
                from:'November 5 2019',
                to:'december 5 2019'
            },
            {
                ID: 5,
                Eventname: 'At vero eos et accusamus ',
                Eventpicture: 'https://i.ibb.co/L8v8YFx/17cafdac3cb3ac19edc07079037c3de3a7957f6c.jpg',
                Eventdetails: 'This is event2 This is event2',
                Eventavatars: '',
                Eventdonate: '50 Egp',
                color: '#30d700',
                bar: 0.9,
                from:'November 5 2019',
                to:'december 5 2019'
            }

        ]
    }
    _onPress = (item) => {
       this.props.navigation.navigate('EventDetails', {
            itemdetails:item,
            itemName:item.Eventname
            
          });
        // console.warn('Selected Item :', item)
    }
    donateMoney =(item)=>{
        this.props.navigation.navigate('DonateDetails', {
            itemdetails:item,
            
          });
    }
    _onPressLike= (item)=>{
        console.warn('itemid' + item)
    }

    render() {
      
        return (

            <FlatList style={styles.container}

                data={this.state.data}
              

                renderItem={({ item }) =>



                    <Card paddingpd={-1}>
                         
                         <Heart onTouch={()=>this._onPressLike(item.ID)}/>
                        
                        <TouchableOpacity onPress={()=>this._onPress(item)}>
                            <CardSection direction="column" style={{position:'relative'}}>
                               
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
                            <View style={{width:'75%'}}>
                                <Title color={item.color} fontsizes={18} title={item.Eventname} />
                                <Title color="#737c8b" fontsizes={16} title={item.Eventdetails} />
                            </View>
                            <View style={{width:'25%'}}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => this.donateMoney(item)}>
                              
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
        backgroundColor: '#f9f9f9',

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
const NavigationConnected = withNavigation( EventCategories );
export { NavigationConnected as EventCategories };
