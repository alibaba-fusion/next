import { HTMLAttributes, ElementType, Component, ComponentType } from "react";
import CommonProps from '../util';

export interface TextProps extends HTMLAttributes<HTMLElement>, CommonProps {
    delete?: boolean;
    mark?: boolean;
    underline?: boolean;
    strong?: boolean;
    code?: boolean;
    component?: ElementType;
}

export interface TitleProps extends TextProps {

}

export interface ParagraphProps extends TextProps {
}

export interface TypographyProps extends TextProps {}

export default class Typography extends Component<TypographyProps, any> {
    static H1: ComponentType<TitleProps>;
    static H2: ComponentType<TitleProps>;
    static H3: ComponentType<TitleProps>;
    static H4: ComponentType<TitleProps>;
    static H5: ComponentType<TitleProps>;
    static H6: ComponentType<TitleProps>;
    static Text: ComponentType<TextProps>;
    static Paragraph: ComponentType<ParagraphProps>;
}
