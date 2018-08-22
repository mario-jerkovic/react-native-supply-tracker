import * as React from 'react'
import {
    KeyboardAvoidingView,
    Modal,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import { material } from 'react-native-typography'

import DialogActions from './DialogActions'
import DialogContent from './DialogContent'

type Props = {
    visible: boolean,
    title?: string,
}

const styles = StyleSheet.create({
    backgroundOverlay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContainer: {
        marginHorizontal: 16,
        marginVertical: 106,
        minWidth: 280,
        borderRadius: 2,
        elevation: 24,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    modalContainerPadding: {
        paddingTop: 24,
    },
    titleContainer: {
        paddingHorizontal: 24,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

const MaterialDialog: React.SFC<Props> = (props) => {
    const {
        visible,
        title,
        children,
    } = props

    const containerStyles = [styles.modalContainer]

    let contentComponent = null
    let actionsComponent = null

    React.Children.forEach(React.Children.toArray(children), (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
            return
        }

        if (child.type === DialogContent) {
            contentComponent = child
        } else if (child.type === DialogActions) {
            actionsComponent = child
        }
    })

    if (title) {
        containerStyles.push(styles.modalContainerPadding)
    }

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            hardwareAccelerated={true}
            supportedOrientations={['portrait', 'landscape']}
        >
            <TouchableWithoutFeedback >
                <View style={styles.backgroundOverlay} >
                    <KeyboardAvoidingView >
                        <View style={containerStyles} >
                            <TouchableWithoutFeedback >
                                <View >
                                    {title ? (
                                        <View style={styles.titleContainer} >
                                            <Text style={material.title} >
                                                {title}
                                            </Text >
                                        </View >
                                    ) : null}
                                    {contentComponent}
                                    {actionsComponent}
                                </View >
                            </TouchableWithoutFeedback >
                        </View >
                    </KeyboardAvoidingView >
                </View >
            </TouchableWithoutFeedback >
        </Modal >
    )
}

export default MaterialDialog
