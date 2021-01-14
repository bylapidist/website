import { Styles } from '@lapidist/components';

export const wrapperStyles: Styles = {
    padding: '6',
    marginX: 'auto',
    containerMaxWidth: 'xxl',
    breakpoints: {
        md: {
            padding: '8'
        },
        lg: {
            padding: '12'
        }
    }
};

export const headingStyles: Styles = {
    fontSize: '8',
    fontWeight: 'bold',
    marginBottom: '12'
};

export const containerStyles: Styles = {
    width: 'full',
    breakpoints: {
        md: {
            width: '2/3'
        },
        lg: {
            width: '1/2'
        }
    }
};

export const logoStyles: Styles = { sizeWidth: 16 };

export const linkContainerStyles: Styles = {
    marginBottom: '16'
};

export const introStyles: Styles = {
    textColor: { group: 'grey', shade: 'base' },
    marginBottom: '4'
};

export const cardContainerStyles: Styles = {
    display: 'block',
    flexWrap: 'wrap',
    breakpoints: {
        md: {
            display: 'flex'
        }
    }
};

export const cardStyles: Styles = {
    width: 'full',
    marginBottom: '4',
    breakpoints: {
        md: {
            width: '3/4'
        }
    }
};

const cardWrapperStyles: Styles = {
    borderWidth: '1',
    borderStyle: 'solid',
    boxShadow: '1',
    breakpoints: {
        md: {
            marginRight: '4'
        }
    }
};

export const cardPrimaryWrapperStyles: Styles = {
    ...cardWrapperStyles,
    textColor: { group: 'primary', shade: 'dark' }
};

export const cardSecondaryWrapperStyles: Styles = {
    ...cardWrapperStyles,
    textColor: { group: 'secondary', shade: 'dark' }
};

export const cardTertiaryWrapperStyles: Styles = {
    ...cardWrapperStyles,
    textColor: { group: 'tertiary', shade: 'dark' }
};

export const cardInnerStyles: Styles = {
    paddingX: '4',
    paddingY: '2'
};

const cardHeadingStyles: Styles = {
    textColor: { group: 'base', shade: 'light' },
    fontSize: '3',
    paddingTop: '4',
    fontWeight: 'bold'
};

export const cardPrimaryHeadingStyles: Styles = {
    ...cardInnerStyles,
    ...cardHeadingStyles,
    textColor: { group: 'primary', shade: 'dark' }
};

export const cardSecondaryHeadingStyles: Styles = {
    ...cardInnerStyles,
    ...cardHeadingStyles,
    textColor: { group: 'secondary', shade: 'dark' }
};

export const cardTertiaryHeadingStyles: Styles = {
    ...cardInnerStyles,
    ...cardHeadingStyles,
    textColor: { group: 'tertiary', shade: 'dark' }
};

export const cardDescriptionStyles: Styles = {
    fontSize: '2',
    marginBottom: '2',
    textColor: { group: 'grey', shade: 'base' }
};

export const linkStyles: Styles = { marginRight: '4' };
