import * as React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native'

type Props = {
    src?: string,
    imageProps?: object,
    children: React.ReactElement<{ style?: any }> | string,
}

// @TODO: theme support
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#bdbdbd',
        overflow: 'hidden',
    },
    child: {
        color: '#fff',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})

const Avatar: React.SFC<Props> = (props) => {
    const {
        children: childrenProp,
        src,
        imageProps,
    } = props

    let children = null

    if (src) {
        children = (
            <ImageBackground
                source={{ uri: src }}
                style={styles.img}
                {...imageProps}
            />
        )
    } else if (childrenProp && React.isValidElement(childrenProp)) {
        children = React.cloneElement(childrenProp, {
            style: [childrenProp.props.style, styles.child],
        })
    } else {
        children = (
            <Text style={styles.child} >
                {childrenProp}
            </Text >
        )

    }

    return (
        <View style={styles.root} >
            {children}
        </View >
    )
}

export default Avatar
