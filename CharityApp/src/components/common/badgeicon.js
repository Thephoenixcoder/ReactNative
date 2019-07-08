import React from 'react'
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import { Icon,Badge } from 'react-native-elements'

const Badgeicon = props => {
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ paddingHorizontal: 15,position:'relative' }}>
                <Icon
                    name='bell'
                    type='feather'
                    color='#ff696a'
                    size={25}
                />
                <Badge value={props.count} status="error" containerStyle={styles.Badges} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Badges: {
       position:'absolute',
       top:-5,
       right:8
       
       }
});
export { Badgeicon }
