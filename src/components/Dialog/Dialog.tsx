import * as React from 'react'
import {
    KeyboardAvoidingView,
    Modal,
    StyleSheet,
    View, ViewStyle,
} from 'react-native'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

import DialogActions from './DialogActions'
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle'

type Props = {
    visible: boolean,
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
    },
    modalContainerPadding: {
        paddingTop: 24,
    },
    titleContainer: {
        paddingTop: 24,
        paddingBottom: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

const MaterialDialog: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        visible,
        children,
        theme,
    } = props

    let titleComponent = null
    let contentComponent = null
    let actionsComponent = null

    let containerStyles: ViewStyle[] = [styles.modalContainer, {
        backgroundColor: theme.palette.background,
    }]

    React.Children.forEach(React.Children.toArray(children), (child) => {
        if (typeof child === 'string' || typeof child === 'number') {
            return
        }

        if (child.type === DialogTitle) {
            titleComponent = child
        } else if (child.type === DialogContent) {
            contentComponent = child
        } else if (child.type === DialogActions) {
            actionsComponent = child
        }
    })

    if (!titleComponent) {
        containerStyles = [...containerStyles, styles.modalContainerPadding]
    }

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            hardwareAccelerated={true}
            supportedOrientations={['portrait', 'landscape']}
        >
            <View style={styles.backgroundOverlay} >
                <KeyboardAvoidingView >
                    <View style={containerStyles}>
                        {titleComponent}
                        {contentComponent}
                        {actionsComponent}
                    </View >
                </KeyboardAvoidingView>
            </View>
        </Modal >
    )
}

export default withTheme<Props>(MaterialDialog)
