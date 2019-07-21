//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView,TouchableOpacity} from 'react-native';
import { Card, CardSection, Progressbar, Title, CircleIcon, Heart, Circleprogress, Dividerscreen } from '../common'

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

    _onCompanyPress=(item)=>{
         console.warn('Selected Item :', item)
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('itemdetails', 'some default value');
        return (
            <ScrollView style={styles.container}>
                <Card style={styles.shadow} paddingpd={-1} margtop={-1} margleft={-1} margright={-1} brdradius={-1}>
                    {/* event section  */}
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
                            <Text style={{ fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Finish</Text>
                            <Title wdth={'100%'} color="#737c8b" fontsizes={14} title={item.to} align={'center'} />
                        </CardSection>

                    </Card>
                    {/* company section  */}
                    <TouchableOpacity onPresss={()=>this._onCompanyPress(item)}>
                    <CardSection paddingtext={25} direction="row" heit={100} >
                       
                        <View style={{ width: '25%' }}>
                      
                            <CircleIcon bordercolors={item.color} url="https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png" wdth={70} heit={70} wdth2={65} heit2={65} widthimg={45} heightimg={45} />
                       
                        </View>
                     
                        <View style={{ width: '75%' }}>
                            <Title color={item.color} fontsizes={18} title={item.Eventname} weight="bold" />
                            <Title color="#737c8b" fontsizes={14} title="slogan one" />
                        </View>

                    </CardSection>
                    </TouchableOpacity>


                </Card>
                {/*event description  */}
                <Card style={styles.shadow} margleft={-1} margright={-1} brdradius={-1}>
                    <CardSection direction="column" justifytext="flex-start" alignItem="flex-start">
                        <Title color="#737c8b" fontsizes={16} weight="bold" title={item.Eventname} />
                        <Title color="#737c8b" fontsizes={14} title={item.longdec} />
                        <Dividerscreen/>
                           <Title color="#737c8b" fontsizes={16} weight="bold" title="What you get ?" />
                    </CardSection>
                    <CardSection  paddingtext={25} direction="row" heit={85}>
                        {/* badges sections  */}
                        <View style={{ width: '25%' }}>
                            <CircleIcon bordercolors="transparent" url="https://i.ibb.co/9rsBMWN/donate2.png" wdth={60} heit={60} wdth2={50} heit2={50} widthimg={40} heightimg={40} />
                        </View>
                        <View style={{ width: '75%' }}>
                        <Title color="#737c8b" fontsizes={14} weight="bold" title="badge for gain 50 point " />
                        
                    </View>
                    </CardSection>
                    <CardSection  paddingtext={25} direction="row" heit={85}>
                        {/* badges sections  */}
                        <View style={{ width: '25%' }}>
                            <CircleIcon bordercolors="transparent" url={item.Badge} wdth={60} heit={60} wdth2={50} heit2={50} widthimg={40} heightimg={40} />
                        </View>
                        <View style={{ width: '75%' }}>
                        <Title color="#737c8b" fontsizes={14} weight="bold" title="badge for gain 35 point" />
                        
                    </View>
                    </CardSection>
                    <CardSection  paddingtext={25} direction="row" heit={85}>
                        {/* badges sections  */}
                        <View style={{ width: '25%' }}>
                            <CircleIcon bordercolors="transparent" url="https://i.ibb.co/9rsBMWN/donate2.png" wdth={60} heit={60} wdth2={50} heit2={50} widthimg={40} heightimg={40} />
                        </View>
                        <View style={{ width: '75%' }}>
                        <Title color="#737c8b" fontsizes={14} weight="bold" title="badge for gain 10 point" />
                        
                    </View>
                    </CardSection>
                   
                   <Dividerscreen/>
                   {/* avatars top texn sections  */}
                   <Title color="#737c8b" fontsizes={16} weight="bold" title="Top 10"  />
                    <CardSection paddingtext={15} direction="row" heit={72} bgcolorcard="#ff6969" brradius={20} >
                    <View style={{ width: '10%' }}>
                     
                    <Title color="#fff" fontsizes={14} title="1." />
                
                 </View>
                       <View style={{ width: '20%' }}>
                     
                           <CircleIcon bordercolors="#fff" url="https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png" wdth={60} heit={60} wdth2={55} heit2={55} widthimg={40} heightimg={40}  />
                      
                       </View>
                    
                       <View style={{ width: '50%' }}>
                           <Title color="#fff" fontsizes={16} title="maria john" />
                       </View>

                       <View style={{ width: '20%' }}>
                       <CircleIcon bordercolors="#fff" url="https://i.ibb.co/DwvzgnG/Beats-Music-Logo.png" wdth={60} heit={60} wdth2={55} heit2={55} widthimg={40} heightimg={40}  />
                       </View>

                   </CardSection>
                </Card>

            </ScrollView>
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
