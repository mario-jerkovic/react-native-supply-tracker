declare module 'react-native-typography' {
    import { TextStyle } from 'react-native'

    export const material: {
        display4: TextStyle,
        display3: TextStyle,
        display2: TextStyle,
        display1: TextStyle,
        headline: TextStyle,
        title: TextStyle,
        subheading: TextStyle,
        body2: TextStyle,
        body1: TextStyle,
        caption: TextStyle,
        button: TextStyle,
        display4White: TextStyle,
        display3White: TextStyle,
        display2White: TextStyle,
        display1White: TextStyle,
        headlineWhite: TextStyle,
        titleWhite: TextStyle,
        subheadingWhite: TextStyle,
        body2White: TextStyle,
        body1White: TextStyle,
        captionWhite: TextStyle,
        buttonWhite: TextStyle,
    }

    export const human: {
        largeTitle: TextStyle,
        title1: TextStyle,
        title2: TextStyle,
        title3: TextStyle,
        headline: TextStyle,
        body: TextStyle,
        callout: TextStyle,
        subhead: TextStyle,
        footnote: TextStyle,
        caption1: TextStyle,
        caption2: TextStyle,

        largeTitleWhite: TextStyle,
        title1White: TextStyle,
        title2White: TextStyle,
        title3White: TextStyle,
        headlineWhite: TextStyle,
        bodyWhite: TextStyle,
        calloutWhite: TextStyle,
        subheadWhite: TextStyle,
        footnoteWhite: TextStyle,
        caption1White: TextStyle,
        caption2White: TextStyle,
    }

    export const iOSUIKit: {
        largeTitleEmphasized: TextStyle,
        title3Emphasized: TextStyle,
        title3: TextStyle,
        bodyEmphasized: TextStyle,
        body: TextStyle,
        subheadEmphasized: TextStyle,
        subhead: TextStyle,
        subheadShort: TextStyle,
        callout: TextStyle,
        footnoteEmphasized: TextStyle,
        footnote: TextStyle,
        caption2Emphasized: TextStyle,
        caption2: TextStyle,

        largeTitleEmphasizedWhite: TextStyle,
        title3EmphasizedWhite: TextStyle,
        title3White: TextStyle,
        bodyEmphasizedWhite: TextStyle,
        bodyWhite: TextStyle,
        subheadEmphasizedWhite: TextStyle,
        subheadWhite: TextStyle,
        subheadShortWhite: TextStyle,
        calloutWhite: TextStyle,
        footnoteEmphasizedWhite: TextStyle,
        footnoteWhite: TextStyle,
        caption2EmphasizedWhite: TextStyle,
        caption2White: TextStyle,
    }

    export const systemWeights: {
        thin: TextStyle,
        light: TextStyle,
        regular: TextStyle,
        semibold: TextStyle,
        bold: TextStyle,
    }

    export const sanFranciscoWeights: {
        thin: TextStyle,
        ultraLight: TextStyle,
        light: TextStyle,
        regular: TextStyle,
        medium: TextStyle,
        semibold: TextStyle,
        bold: TextStyle,
        heavy: TextStyle,
        black: TextStyle,
    }

    export const robotoWeights: {
        thin: TextStyle,
        light: TextStyle,
        regular: TextStyle,
        medium: TextStyle,
        bold: TextStyle,
        condensed: TextStyle,
        condensedBold: TextStyle,
    }

    export const webWeights: {
        thin: TextStyle,
        ultraLight: TextStyle,
        light: TextStyle,
        regular: TextStyle,
        medium: TextStyle,
        semibold: TextStyle,
        bold: TextStyle,
        heavy: TextStyle,
        black: TextStyle,
    }

    export const iOSColors: {
        red: TextStyle,
        orange: TextStyle,
        yellow: TextStyle,
        green: TextStyle,
        tealBlue: TextStyle,
        blue: TextStyle,
        purple: TextStyle,
        pink: TextStyle,

        white: TextStyle,
        customGray: TextStyle,
        lightGray: TextStyle,
        lightGray2: TextStyle,
        midGray: TextStyle,
        gray: TextStyle,
        black: TextStyle,
    }

    export const materialColors: {
        blackPrimary: TextStyle,
        blackSecondary: TextStyle,
        blackTertiary: TextStyle,
        whitePrimary: TextStyle,
        whiteSecondary: TextStyle,
        whiteTertiary: TextStyle,
    }

    export function sanFranciscoSpacing(fontSize: number): number
}
