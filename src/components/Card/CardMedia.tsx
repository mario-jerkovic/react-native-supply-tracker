import * as React from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native'

type Props = {
    image: string,
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    image: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%',
    },
})

const CardMedia: React.SFC<Props> = (props) => {
    const {
        image,
    } = props

    return (
        <View style={styles.root} >
            <ImageBackground
                source={{ uri: image }}
                style={[styles.image]}
            />

        </View >
    )
}

export default CardMedia
