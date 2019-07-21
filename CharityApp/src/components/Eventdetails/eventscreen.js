//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Card, CardSection, Progressbar, Title, CircleIcon, Heart, Circleprogress } from '../common'
// create a component
class EventScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('itemName', 'Details Screen'),
        };
    };
    state = {
        sponsers: [
            {
                ID: 20,
                Name: 'company',
                slogan: 'normal',
                sponserimg: 'https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png',

            },
            {
                ID: 21,
                Name: 'company',
                slogan: 'normal',
                sponserimg: 'https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png',

            },
            {
                ID: 22,
                Name: 'company',
                slogan: 'normal',
                sponserimg: 'https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png',

            }
        ]
    }

  

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('itemdetails', 'some default value');
        return (
            <View style={styles.container}>
                <Card style={styles.shadow} paddingpd={-1} margtop={-1} margleft={-1} margright={-1} brdradius={-1}>
                    <CardSection direction="column" style={{ position: 'relative' }}>
                        <View style={styles.ImageContain}>
                            <Image
                                source={{ uri: item.Eventpicture }}
                                style={styles.itemimage}
                                PlaceholderContent={<ActivityIndicator />}

                            />

                        </View>

                    </CardSection>

                    <Card flexdir="row" bgcolor="transparent" heit={100}>
                        <CardSection direction="column" widthcd={'35%'} alignItem="flex-start" align="left"  >
                            <Text style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>From</Text>
                            <Title wdth={'100%'} color="#737c8b" fontsizes={14} title={item.from} align={'center'} />

                        </CardSection>
                        <CardSection direction="column" widthcd={'30%'}>
                            <CircleIcon bordercolors={item.color} url={item.Badge} />
                        </CardSection>

                        <CardSection direction="column" widthcd={'35%'} align="left"  >
                            <Text style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>To</Text>
                            <Title wdth={'100%'} color="#737c8b" fontsizes={14} title={item.to} align={'center'} />
                        </CardSection>
                     
                    </Card>
                    <CardSection paddingtext={20} direction="row"  heit={100} >
                    <View style={{width:'25%'}}>
                    <CircleIcon bordercolors={item.color} url={item.Badge} wdth={70} heit={70} wdth2={65} heit2={65} widthimg={45} heightimg={45} />
                          </View>
                            <View style={{width:'75%'}}>
                                <Title color={item.color} fontsizes={18} title={item.Eventname} />
                                <Title color="#737c8b" fontsizes={16} title="slogan one" />
                            </View>
                           
                        </CardSection>
                  


                </Card>

            </View>
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
        height: 288,


    },
    itemimage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 288,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardtitle: {
        fontSize: 18
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 8,
    }
});

//make this component available to the app
export { EventScreen };
