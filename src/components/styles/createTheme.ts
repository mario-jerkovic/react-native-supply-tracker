import Color from 'color'

import { ColorPalette } from './themes/types'

export type Theme = {
    palette: {
        primary: string,
        onPrimary: string,
        primaryVariant: string,
        secondary: string,
        onSecondary: string,
        secondaryVariant: string,
        background: string,
        error: string,
        onError: string,
        textPrimary: string,
        textSecondary: string,
    },
}

export default function createTheme(theme: ColorPalette): Theme {
    const {
        primaryColor,
        secondaryColor,
        backgroundColor,
        errorColor,
    } = theme

    const black = '#000000'
    const white = '#FFFFFF'

    let textPrimaryColor = Color(black)
        .alpha(0.87)
        .toString()
    let textSecondaryColor = Color(textPrimaryColor)
        .alpha(0.54)
        .toString()

    if (Color(backgroundColor).isDark()) {
        textPrimaryColor = white
        textSecondaryColor = Color(textPrimaryColor)
            .alpha(0.7)
            .toString()
    }

    return {
        palette: {
            primary: primaryColor,
            onPrimary: Color(primaryColor).isDark() ? white : black,
            primaryVariant: Color(primaryColor)
                .darken(0.54)
                .toString(),
            secondary: secondaryColor,
            onSecondary: Color(secondaryColor).isDark() ? white : black,
            secondaryVariant: Color(secondaryColor)
                .darken(0.54)
                .toString(),
            // @TODO: custom background color
            background: white,
            error: errorColor,
            onError: Color(errorColor).isLight() ? black : white ,
            textPrimary: textPrimaryColor,
            textSecondary: textSecondaryColor,
        },
    }
}
