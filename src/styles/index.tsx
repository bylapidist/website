import { Styles } from '@lapidist/styles';

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
    fontWeight: 700,
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
            width: '2/3'
        }
    }
};

export const cardDescriptionStyles: Styles = {
    fontSize: '2',
    marginBottom: '2',
    textColor: { group: 'grey', shade: 'base' }
};

export const linkStyles: Styles = { marginRight: '4' };
