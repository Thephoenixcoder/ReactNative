import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const Badgeicon = (props) => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
            <View style={{ paddingHorizontal: 10 }}>
                <Icon
                    name='bells'
                    type='antdesign'
                    color='#ff696a'
                    size={25}
                />
            </View>
        </TouchableOpacity>
    )
}

export { Badgeicon }
