import React, { Component, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { CloseArea, TagProps } from './types';
declare class Tag extends Component<
    TagProps,
    {
        visible: boolean;
    }
> {
    static propTypes: {
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        animation: PropTypes.Requireable<boolean>;
        closeArea: PropTypes.Requireable<string>;
        closable: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        afterAppear: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        _shape: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        prefix: PropTypes.Requireable<string>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
        closeArea: string;
        animation: boolean;
        onClose: () => void;
        afterClose: () => void;
        afterAppear: () => void;
        onClick: () => void;
        _shape: string;
        disabled: boolean;
        rtl: boolean;
        locale: Partial<{
            delete: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    static displayName: string;
    __destroyed: boolean;
    tagNode: HTMLDivElement | null;
    constructor(props: TagProps);
    componentWillUnmount(): void;
    handleClose(from: CloseArea): void;
    handleBodyClick(e: MouseEvent<HTMLDivElement>): void;
    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
    handleTailClick(e: MouseEvent<HTMLSpanElement>): void;
    handleAnimationInit(node: HTMLElement): void;
    handleAnimationEnd(node: HTMLElement): void;
    renderAnimatedTag(children: ReactNode, animationName: string): React.JSX.Element;
    renderTailNode(): React.JSX.Element | null;
    isPresetColor(): boolean;
    getTagStyle(): {
        accentColor?: import('csstype').Property.AccentColor | undefined;
        alignContent?: import('csstype').Property.AlignContent | undefined;
        alignItems?: import('csstype').Property.AlignItems | undefined;
        alignSelf?: import('csstype').Property.AlignSelf | undefined;
        alignTracks?: import('csstype').Property.AlignTracks | undefined;
        animationComposition?: import('csstype').Property.AnimationComposition | undefined;
        animationDelay?: import('csstype').Property.AnimationDelay<string & {}> | undefined;
        animationDirection?: import('csstype').Property.AnimationDirection | undefined;
        animationDuration?: import('csstype').Property.AnimationDuration<string & {}> | undefined;
        animationFillMode?: import('csstype').Property.AnimationFillMode | undefined;
        animationIterationCount?: import('csstype').Property.AnimationIterationCount | undefined;
        animationName?: import('csstype').Property.AnimationName | undefined;
        animationPlayState?: import('csstype').Property.AnimationPlayState | undefined;
        animationRangeEnd?:
            | import('csstype').Property.AnimationRangeEnd<number | (string & {})>
            | undefined;
        animationRangeStart?:
            | import('csstype').Property.AnimationRangeStart<number | (string & {})>
            | undefined;
        animationTimeline?: import('csstype').Property.AnimationTimeline | undefined;
        animationTimingFunction?: import('csstype').Property.AnimationTimingFunction | undefined;
        appearance?: import('csstype').Property.Appearance | undefined;
        aspectRatio?: import('csstype').Property.AspectRatio | undefined;
        backdropFilter?: import('csstype').Property.BackdropFilter | undefined;
        backfaceVisibility?: import('csstype').Property.BackfaceVisibility | undefined;
        backgroundAttachment?: import('csstype').Property.BackgroundAttachment | undefined;
        backgroundBlendMode?: import('csstype').Property.BackgroundBlendMode | undefined;
        backgroundClip?: import('csstype').Property.BackgroundClip | undefined;
        backgroundColor?: string | undefined;
        backgroundImage?: import('csstype').Property.BackgroundImage | undefined;
        backgroundOrigin?: import('csstype').Property.BackgroundOrigin | undefined;
        backgroundPositionX?:
            | import('csstype').Property.BackgroundPositionX<number | (string & {})>
            | undefined;
        backgroundPositionY?:
            | import('csstype').Property.BackgroundPositionY<number | (string & {})>
            | undefined;
        backgroundRepeat?: import('csstype').Property.BackgroundRepeat | undefined;
        backgroundSize?:
            | import('csstype').Property.BackgroundSize<number | (string & {})>
            | undefined;
        blockOverflow?: import('csstype').Property.BlockOverflow | undefined;
        blockSize?: import('csstype').Property.BlockSize<number | (string & {})> | undefined;
        borderBlockColor?: import('csstype').Property.BorderBlockColor | undefined;
        borderBlockEndColor?: import('csstype').Property.BorderBlockEndColor | undefined;
        borderBlockEndStyle?: import('csstype').Property.BorderBlockEndStyle | undefined;
        borderBlockEndWidth?:
            | import('csstype').Property.BorderBlockEndWidth<number | (string & {})>
            | undefined;
        borderBlockStartColor?: import('csstype').Property.BorderBlockStartColor | undefined;
        borderBlockStartStyle?: import('csstype').Property.BorderBlockStartStyle | undefined;
        borderBlockStartWidth?:
            | import('csstype').Property.BorderBlockStartWidth<number | (string & {})>
            | undefined;
        borderBlockStyle?: import('csstype').Property.BorderBlockStyle | undefined;
        borderBlockWidth?:
            | import('csstype').Property.BorderBlockWidth<number | (string & {})>
            | undefined;
        borderBottomColor?: import('csstype').Property.BorderBottomColor | undefined;
        borderBottomLeftRadius?:
            | import('csstype').Property.BorderBottomLeftRadius<number | (string & {})>
            | undefined;
        borderBottomRightRadius?:
            | import('csstype').Property.BorderBottomRightRadius<number | (string & {})>
            | undefined;
        borderBottomStyle?: import('csstype').Property.BorderBottomStyle | undefined;
        borderBottomWidth?:
            | import('csstype').Property.BorderBottomWidth<number | (string & {})>
            | undefined;
        borderCollapse?: import('csstype').Property.BorderCollapse | undefined;
        borderEndEndRadius?:
            | import('csstype').Property.BorderEndEndRadius<number | (string & {})>
            | undefined;
        borderEndStartRadius?:
            | import('csstype').Property.BorderEndStartRadius<number | (string & {})>
            | undefined;
        borderImageOutset?:
            | import('csstype').Property.BorderImageOutset<number | (string & {})>
            | undefined;
        borderImageRepeat?: import('csstype').Property.BorderImageRepeat | undefined;
        borderImageSlice?: import('csstype').Property.BorderImageSlice | undefined;
        borderImageSource?: import('csstype').Property.BorderImageSource | undefined;
        borderImageWidth?:
            | import('csstype').Property.BorderImageWidth<number | (string & {})>
            | undefined;
        borderInlineColor?: import('csstype').Property.BorderInlineColor | undefined;
        borderInlineEndColor?: import('csstype').Property.BorderInlineEndColor | undefined;
        borderInlineEndStyle?: import('csstype').Property.BorderInlineEndStyle | undefined;
        borderInlineEndWidth?:
            | import('csstype').Property.BorderInlineEndWidth<number | (string & {})>
            | undefined;
        borderInlineStartColor?: import('csstype').Property.BorderInlineStartColor | undefined;
        borderInlineStartStyle?: import('csstype').Property.BorderInlineStartStyle | undefined;
        borderInlineStartWidth?:
            | import('csstype').Property.BorderInlineStartWidth<number | (string & {})>
            | undefined;
        borderInlineStyle?: import('csstype').Property.BorderInlineStyle | undefined;
        borderInlineWidth?:
            | import('csstype').Property.BorderInlineWidth<number | (string & {})>
            | undefined;
        borderLeftColor?: import('csstype').Property.BorderLeftColor | undefined;
        borderLeftStyle?: import('csstype').Property.BorderLeftStyle | undefined;
        borderLeftWidth?:
            | import('csstype').Property.BorderLeftWidth<number | (string & {})>
            | undefined;
        borderRightColor?: import('csstype').Property.BorderRightColor | undefined;
        borderRightStyle?: import('csstype').Property.BorderRightStyle | undefined;
        borderRightWidth?:
            | import('csstype').Property.BorderRightWidth<number | (string & {})>
            | undefined;
        borderSpacing?:
            | import('csstype').Property.BorderSpacing<number | (string & {})>
            | undefined;
        borderStartEndRadius?:
            | import('csstype').Property.BorderStartEndRadius<number | (string & {})>
            | undefined;
        borderStartStartRadius?:
            | import('csstype').Property.BorderStartStartRadius<number | (string & {})>
            | undefined;
        borderTopColor?: import('csstype').Property.BorderTopColor | undefined;
        borderTopLeftRadius?:
            | import('csstype').Property.BorderTopLeftRadius<number | (string & {})>
            | undefined;
        borderTopRightRadius?:
            | import('csstype').Property.BorderTopRightRadius<number | (string & {})>
            | undefined;
        borderTopStyle?: import('csstype').Property.BorderTopStyle | undefined;
        borderTopWidth?:
            | import('csstype').Property.BorderTopWidth<number | (string & {})>
            | undefined;
        bottom?: import('csstype').Property.Bottom<number | (string & {})> | undefined;
        boxDecorationBreak?: import('csstype').Property.BoxDecorationBreak | undefined;
        boxShadow?: import('csstype').Property.BoxShadow | undefined;
        boxSizing?: import('csstype').Property.BoxSizing | undefined;
        breakAfter?: import('csstype').Property.BreakAfter | undefined;
        breakBefore?: import('csstype').Property.BreakBefore | undefined;
        breakInside?: import('csstype').Property.BreakInside | undefined;
        captionSide?: import('csstype').Property.CaptionSide | undefined;
        caretColor?: import('csstype').Property.CaretColor | undefined;
        caretShape?: import('csstype').Property.CaretShape | undefined;
        clear?: import('csstype').Property.Clear | undefined;
        clipPath?: import('csstype').Property.ClipPath | undefined;
        color?: string | undefined;
        colorAdjust?: import('csstype').Property.PrintColorAdjust | undefined;
        colorScheme?: import('csstype').Property.ColorScheme | undefined;
        columnCount?: import('csstype').Property.ColumnCount | undefined;
        columnFill?: import('csstype').Property.ColumnFill | undefined;
        columnGap?: import('csstype').Property.ColumnGap<number | (string & {})> | undefined;
        columnRuleColor?: import('csstype').Property.ColumnRuleColor | undefined;
        columnRuleStyle?: import('csstype').Property.ColumnRuleStyle | undefined;
        columnRuleWidth?:
            | import('csstype').Property.ColumnRuleWidth<number | (string & {})>
            | undefined;
        columnSpan?: import('csstype').Property.ColumnSpan | undefined;
        columnWidth?: import('csstype').Property.ColumnWidth<number | (string & {})> | undefined;
        contain?: import('csstype').Property.Contain | undefined;
        containIntrinsicBlockSize?:
            | import('csstype').Property.ContainIntrinsicBlockSize<number | (string & {})>
            | undefined;
        containIntrinsicHeight?:
            | import('csstype').Property.ContainIntrinsicHeight<number | (string & {})>
            | undefined;
        containIntrinsicInlineSize?:
            | import('csstype').Property.ContainIntrinsicInlineSize<number | (string & {})>
            | undefined;
        containIntrinsicWidth?:
            | import('csstype').Property.ContainIntrinsicWidth<number | (string & {})>
            | undefined;
        containerName?: import('csstype').Property.ContainerName | undefined;
        containerType?: import('csstype').Property.ContainerType | undefined;
        content?: import('csstype').Property.Content | undefined;
        contentVisibility?: import('csstype').Property.ContentVisibility | undefined;
        counterIncrement?: import('csstype').Property.CounterIncrement | undefined;
        counterReset?: import('csstype').Property.CounterReset | undefined;
        counterSet?: import('csstype').Property.CounterSet | undefined;
        cursor?: import('csstype').Property.Cursor | undefined;
        direction?: import('csstype').Property.Direction | undefined;
        display?: import('csstype').Property.Display | undefined;
        emptyCells?: import('csstype').Property.EmptyCells | undefined;
        filter?: import('csstype').Property.Filter | undefined;
        flexBasis?: import('csstype').Property.FlexBasis<number | (string & {})> | undefined;
        flexDirection?: import('csstype').Property.FlexDirection | undefined;
        flexGrow?: import('csstype').Property.FlexGrow | undefined;
        flexShrink?: import('csstype').Property.FlexShrink | undefined;
        flexWrap?: import('csstype').Property.FlexWrap | undefined;
        float?: import('csstype').Property.Float | undefined;
        fontFamily?: import('csstype').Property.FontFamily | undefined;
        fontFeatureSettings?: import('csstype').Property.FontFeatureSettings | undefined;
        fontKerning?: import('csstype').Property.FontKerning | undefined;
        fontLanguageOverride?: import('csstype').Property.FontLanguageOverride | undefined;
        fontOpticalSizing?: import('csstype').Property.FontOpticalSizing | undefined;
        fontPalette?: import('csstype').Property.FontPalette | undefined;
        fontSize?: import('csstype').Property.FontSize<number | (string & {})> | undefined;
        fontSizeAdjust?: import('csstype').Property.FontSizeAdjust | undefined;
        fontSmooth?: import('csstype').Property.FontSmooth<number | (string & {})> | undefined;
        fontStretch?: import('csstype').Property.FontStretch | undefined;
        fontStyle?: import('csstype').Property.FontStyle | undefined;
        fontSynthesis?: import('csstype').Property.FontSynthesis | undefined;
        fontSynthesisPosition?: import('csstype').Property.FontSynthesisPosition | undefined;
        fontSynthesisSmallCaps?: import('csstype').Property.FontSynthesisSmallCaps | undefined;
        fontSynthesisStyle?: import('csstype').Property.FontSynthesisStyle | undefined;
        fontSynthesisWeight?: import('csstype').Property.FontSynthesisWeight | undefined;
        fontVariant?: import('csstype').Property.FontVariant | undefined;
        fontVariantAlternates?: import('csstype').Property.FontVariantAlternates | undefined;
        fontVariantCaps?: import('csstype').Property.FontVariantCaps | undefined;
        fontVariantEastAsian?: import('csstype').Property.FontVariantEastAsian | undefined;
        fontVariantEmoji?: import('csstype').Property.FontVariantEmoji | undefined;
        fontVariantLigatures?: import('csstype').Property.FontVariantLigatures | undefined;
        fontVariantNumeric?: import('csstype').Property.FontVariantNumeric | undefined;
        fontVariantPosition?: import('csstype').Property.FontVariantPosition | undefined;
        fontVariationSettings?: import('csstype').Property.FontVariationSettings | undefined;
        fontWeight?: import('csstype').Property.FontWeight | undefined;
        forcedColorAdjust?: import('csstype').Property.ForcedColorAdjust | undefined;
        gridAutoColumns?:
            | import('csstype').Property.GridAutoColumns<number | (string & {})>
            | undefined;
        gridAutoFlow?: import('csstype').Property.GridAutoFlow | undefined;
        gridAutoRows?: import('csstype').Property.GridAutoRows<number | (string & {})> | undefined;
        gridColumnEnd?: import('csstype').Property.GridColumnEnd | undefined;
        gridColumnStart?: import('csstype').Property.GridColumnStart | undefined;
        gridRowEnd?: import('csstype').Property.GridRowEnd | undefined;
        gridRowStart?: import('csstype').Property.GridRowStart | undefined;
        gridTemplateAreas?: import('csstype').Property.GridTemplateAreas | undefined;
        gridTemplateColumns?:
            | import('csstype').Property.GridTemplateColumns<number | (string & {})>
            | undefined;
        gridTemplateRows?:
            | import('csstype').Property.GridTemplateRows<number | (string & {})>
            | undefined;
        hangingPunctuation?: import('csstype').Property.HangingPunctuation | undefined;
        height?: import('csstype').Property.Height<number | (string & {})> | undefined;
        hyphenateCharacter?: import('csstype').Property.HyphenateCharacter | undefined;
        hyphenateLimitChars?: import('csstype').Property.HyphenateLimitChars | undefined;
        hyphens?: import('csstype').Property.Hyphens | undefined;
        imageOrientation?: import('csstype').Property.ImageOrientation | undefined;
        imageRendering?: import('csstype').Property.ImageRendering | undefined;
        imageResolution?: import('csstype').Property.ImageResolution | undefined;
        initialLetter?: import('csstype').Property.InitialLetter | undefined;
        inlineSize?: import('csstype').Property.InlineSize<number | (string & {})> | undefined;
        inputSecurity?: import('csstype').Property.InputSecurity | undefined;
        insetBlockEnd?:
            | import('csstype').Property.InsetBlockEnd<number | (string & {})>
            | undefined;
        insetBlockStart?:
            | import('csstype').Property.InsetBlockStart<number | (string & {})>
            | undefined;
        insetInlineEnd?:
            | import('csstype').Property.InsetInlineEnd<number | (string & {})>
            | undefined;
        insetInlineStart?:
            | import('csstype').Property.InsetInlineStart<number | (string & {})>
            | undefined;
        isolation?: import('csstype').Property.Isolation | undefined;
        justifyContent?: import('csstype').Property.JustifyContent | undefined;
        justifyItems?: import('csstype').Property.JustifyItems | undefined;
        justifySelf?: import('csstype').Property.JustifySelf | undefined;
        justifyTracks?: import('csstype').Property.JustifyTracks | undefined;
        left?: import('csstype').Property.Left<number | (string & {})> | undefined;
        letterSpacing?:
            | import('csstype').Property.LetterSpacing<number | (string & {})>
            | undefined;
        lineBreak?: import('csstype').Property.LineBreak | undefined;
        lineHeight?: import('csstype').Property.LineHeight<number | (string & {})> | undefined;
        lineHeightStep?:
            | import('csstype').Property.LineHeightStep<number | (string & {})>
            | undefined;
        listStyleImage?: import('csstype').Property.ListStyleImage | undefined;
        listStylePosition?: import('csstype').Property.ListStylePosition | undefined;
        listStyleType?: import('csstype').Property.ListStyleType | undefined;
        marginBlockEnd?:
            | import('csstype').Property.MarginBlockEnd<number | (string & {})>
            | undefined;
        marginBlockStart?:
            | import('csstype').Property.MarginBlockStart<number | (string & {})>
            | undefined;
        marginBottom?: import('csstype').Property.MarginBottom<number | (string & {})> | undefined;
        marginInlineEnd?:
            | import('csstype').Property.MarginInlineEnd<number | (string & {})>
            | undefined;
        marginInlineStart?:
            | import('csstype').Property.MarginInlineStart<number | (string & {})>
            | undefined;
        marginLeft?: import('csstype').Property.MarginLeft<number | (string & {})> | undefined;
        marginRight?: import('csstype').Property.MarginRight<number | (string & {})> | undefined;
        marginTop?: import('csstype').Property.MarginTop<number | (string & {})> | undefined;
        marginTrim?: import('csstype').Property.MarginTrim | undefined;
        maskBorderMode?: import('csstype').Property.MaskBorderMode | undefined;
        maskBorderOutset?:
            | import('csstype').Property.MaskBorderOutset<number | (string & {})>
            | undefined;
        maskBorderRepeat?: import('csstype').Property.MaskBorderRepeat | undefined;
        maskBorderSlice?: import('csstype').Property.MaskBorderSlice | undefined;
        maskBorderSource?: import('csstype').Property.MaskBorderSource | undefined;
        maskBorderWidth?:
            | import('csstype').Property.MaskBorderWidth<number | (string & {})>
            | undefined;
        maskClip?: import('csstype').Property.MaskClip | undefined;
        maskComposite?: import('csstype').Property.MaskComposite | undefined;
        maskImage?: import('csstype').Property.MaskImage | undefined;
        maskMode?: import('csstype').Property.MaskMode | undefined;
        maskOrigin?: import('csstype').Property.MaskOrigin | undefined;
        maskPosition?: import('csstype').Property.MaskPosition<number | (string & {})> | undefined;
        maskRepeat?: import('csstype').Property.MaskRepeat | undefined;
        maskSize?: import('csstype').Property.MaskSize<number | (string & {})> | undefined;
        maskType?: import('csstype').Property.MaskType | undefined;
        masonryAutoFlow?: import('csstype').Property.MasonryAutoFlow | undefined;
        mathDepth?: import('csstype').Property.MathDepth | undefined;
        mathShift?: import('csstype').Property.MathShift | undefined;
        mathStyle?: import('csstype').Property.MathStyle | undefined;
        maxBlockSize?: import('csstype').Property.MaxBlockSize<number | (string & {})> | undefined;
        maxHeight?: import('csstype').Property.MaxHeight<number | (string & {})> | undefined;
        maxInlineSize?:
            | import('csstype').Property.MaxInlineSize<number | (string & {})>
            | undefined;
        maxLines?: import('csstype').Property.MaxLines | undefined;
        maxWidth?: import('csstype').Property.MaxWidth<number | (string & {})> | undefined;
        minBlockSize?: import('csstype').Property.MinBlockSize<number | (string & {})> | undefined;
        minHeight?: import('csstype').Property.MinHeight<number | (string & {})> | undefined;
        minInlineSize?:
            | import('csstype').Property.MinInlineSize<number | (string & {})>
            | undefined;
        minWidth?: import('csstype').Property.MinWidth<number | (string & {})> | undefined;
        mixBlendMode?: import('csstype').Property.MixBlendMode | undefined;
        motionDistance?:
            | import('csstype').Property.OffsetDistance<number | (string & {})>
            | undefined;
        motionPath?: import('csstype').Property.OffsetPath | undefined;
        motionRotation?: import('csstype').Property.OffsetRotate | undefined;
        objectFit?: import('csstype').Property.ObjectFit | undefined;
        objectPosition?:
            | import('csstype').Property.ObjectPosition<number | (string & {})>
            | undefined;
        offsetAnchor?: import('csstype').Property.OffsetAnchor<number | (string & {})> | undefined;
        offsetDistance?:
            | import('csstype').Property.OffsetDistance<number | (string & {})>
            | undefined;
        offsetPath?: import('csstype').Property.OffsetPath | undefined;
        offsetPosition?:
            | import('csstype').Property.OffsetPosition<number | (string & {})>
            | undefined;
        offsetRotate?: import('csstype').Property.OffsetRotate | undefined;
        offsetRotation?: import('csstype').Property.OffsetRotate | undefined;
        opacity?: import('csstype').Property.Opacity | undefined;
        order?: import('csstype').Property.Order | undefined;
        orphans?: import('csstype').Property.Orphans | undefined;
        outlineColor?: import('csstype').Property.OutlineColor | undefined;
        outlineOffset?:
            | import('csstype').Property.OutlineOffset<number | (string & {})>
            | undefined;
        outlineStyle?: import('csstype').Property.OutlineStyle | undefined;
        outlineWidth?: import('csstype').Property.OutlineWidth<number | (string & {})> | undefined;
        overflowAnchor?: import('csstype').Property.OverflowAnchor | undefined;
        overflowBlock?: import('csstype').Property.OverflowBlock | undefined;
        overflowClipBox?: import('csstype').Property.OverflowClipBox | undefined;
        overflowClipMargin?:
            | import('csstype').Property.OverflowClipMargin<number | (string & {})>
            | undefined;
        overflowInline?: import('csstype').Property.OverflowInline | undefined;
        overflowWrap?: import('csstype').Property.OverflowWrap | undefined;
        overflowX?: import('csstype').Property.OverflowX | undefined;
        overflowY?: import('csstype').Property.OverflowY | undefined;
        overlay?: import('csstype').Property.Overlay | undefined;
        overscrollBehaviorBlock?: import('csstype').Property.OverscrollBehaviorBlock | undefined;
        overscrollBehaviorInline?: import('csstype').Property.OverscrollBehaviorInline | undefined;
        overscrollBehaviorX?: import('csstype').Property.OverscrollBehaviorX | undefined;
        overscrollBehaviorY?: import('csstype').Property.OverscrollBehaviorY | undefined;
        paddingBlockEnd?:
            | import('csstype').Property.PaddingBlockEnd<number | (string & {})>
            | undefined;
        paddingBlockStart?:
            | import('csstype').Property.PaddingBlockStart<number | (string & {})>
            | undefined;
        paddingBottom?:
            | import('csstype').Property.PaddingBottom<number | (string & {})>
            | undefined;
        paddingInlineEnd?:
            | import('csstype').Property.PaddingInlineEnd<number | (string & {})>
            | undefined;
        paddingInlineStart?:
            | import('csstype').Property.PaddingInlineStart<number | (string & {})>
            | undefined;
        paddingLeft?: import('csstype').Property.PaddingLeft<number | (string & {})> | undefined;
        paddingRight?: import('csstype').Property.PaddingRight<number | (string & {})> | undefined;
        paddingTop?: import('csstype').Property.PaddingTop<number | (string & {})> | undefined;
        page?: import('csstype').Property.Page | undefined;
        pageBreakAfter?: import('csstype').Property.PageBreakAfter | undefined;
        pageBreakBefore?: import('csstype').Property.PageBreakBefore | undefined;
        pageBreakInside?: import('csstype').Property.PageBreakInside | undefined;
        paintOrder?: import('csstype').Property.PaintOrder | undefined;
        perspective?: import('csstype').Property.Perspective<number | (string & {})> | undefined;
        perspectiveOrigin?:
            | import('csstype').Property.PerspectiveOrigin<number | (string & {})>
            | undefined;
        pointerEvents?: import('csstype').Property.PointerEvents | undefined;
        position?: import('csstype').Property.Position | undefined;
        printColorAdjust?: import('csstype').Property.PrintColorAdjust | undefined;
        quotes?: import('csstype').Property.Quotes | undefined;
        resize?: import('csstype').Property.Resize | undefined;
        right?: import('csstype').Property.Right<number | (string & {})> | undefined;
        rotate?: import('csstype').Property.Rotate | undefined;
        rowGap?: import('csstype').Property.RowGap<number | (string & {})> | undefined;
        rubyAlign?: import('csstype').Property.RubyAlign | undefined;
        rubyMerge?: import('csstype').Property.RubyMerge | undefined;
        rubyPosition?: import('csstype').Property.RubyPosition | undefined;
        scale?: import('csstype').Property.Scale | undefined;
        scrollBehavior?: import('csstype').Property.ScrollBehavior | undefined;
        scrollMarginBlockEnd?:
            | import('csstype').Property.ScrollMarginBlockEnd<number | (string & {})>
            | undefined;
        scrollMarginBlockStart?:
            | import('csstype').Property.ScrollMarginBlockStart<number | (string & {})>
            | undefined;
        scrollMarginBottom?:
            | import('csstype').Property.ScrollMarginBottom<number | (string & {})>
            | undefined;
        scrollMarginInlineEnd?:
            | import('csstype').Property.ScrollMarginInlineEnd<number | (string & {})>
            | undefined;
        scrollMarginInlineStart?:
            | import('csstype').Property.ScrollMarginInlineStart<number | (string & {})>
            | undefined;
        scrollMarginLeft?:
            | import('csstype').Property.ScrollMarginLeft<number | (string & {})>
            | undefined;
        scrollMarginRight?:
            | import('csstype').Property.ScrollMarginRight<number | (string & {})>
            | undefined;
        scrollMarginTop?:
            | import('csstype').Property.ScrollMarginTop<number | (string & {})>
            | undefined;
        scrollPaddingBlockEnd?:
            | import('csstype').Property.ScrollPaddingBlockEnd<number | (string & {})>
            | undefined;
        scrollPaddingBlockStart?:
            | import('csstype').Property.ScrollPaddingBlockStart<number | (string & {})>
            | undefined;
        scrollPaddingBottom?:
            | import('csstype').Property.ScrollPaddingBottom<number | (string & {})>
            | undefined;
        scrollPaddingInlineEnd?:
            | import('csstype').Property.ScrollPaddingInlineEnd<number | (string & {})>
            | undefined;
        scrollPaddingInlineStart?:
            | import('csstype').Property.ScrollPaddingInlineStart<number | (string & {})>
            | undefined;
        scrollPaddingLeft?:
            | import('csstype').Property.ScrollPaddingLeft<number | (string & {})>
            | undefined;
        scrollPaddingRight?:
            | import('csstype').Property.ScrollPaddingRight<number | (string & {})>
            | undefined;
        scrollPaddingTop?:
            | import('csstype').Property.ScrollPaddingTop<number | (string & {})>
            | undefined;
        scrollSnapAlign?: import('csstype').Property.ScrollSnapAlign | undefined;
        scrollSnapMarginBottom?:
            | import('csstype').Property.ScrollMarginBottom<number | (string & {})>
            | undefined;
        scrollSnapMarginLeft?:
            | import('csstype').Property.ScrollMarginLeft<number | (string & {})>
            | undefined;
        scrollSnapMarginRight?:
            | import('csstype').Property.ScrollMarginRight<number | (string & {})>
            | undefined;
        scrollSnapMarginTop?:
            | import('csstype').Property.ScrollMarginTop<number | (string & {})>
            | undefined;
        scrollSnapStop?: import('csstype').Property.ScrollSnapStop | undefined;
        scrollSnapType?: import('csstype').Property.ScrollSnapType | undefined;
        scrollTimelineAxis?: import('csstype').Property.ScrollTimelineAxis | undefined;
        scrollTimelineName?: import('csstype').Property.ScrollTimelineName | undefined;
        scrollbarColor?: import('csstype').Property.ScrollbarColor | undefined;
        scrollbarGutter?: import('csstype').Property.ScrollbarGutter | undefined;
        scrollbarWidth?: import('csstype').Property.ScrollbarWidth | undefined;
        shapeImageThreshold?: import('csstype').Property.ShapeImageThreshold | undefined;
        shapeMargin?: import('csstype').Property.ShapeMargin<number | (string & {})> | undefined;
        shapeOutside?: import('csstype').Property.ShapeOutside | undefined;
        tabSize?: import('csstype').Property.TabSize<number | (string & {})> | undefined;
        tableLayout?: import('csstype').Property.TableLayout | undefined;
        textAlign?: import('csstype').Property.TextAlign | undefined;
        textAlignLast?: import('csstype').Property.TextAlignLast | undefined;
        textCombineUpright?: import('csstype').Property.TextCombineUpright | undefined;
        textDecorationColor?: import('csstype').Property.TextDecorationColor | undefined;
        textDecorationLine?: import('csstype').Property.TextDecorationLine | undefined;
        textDecorationSkip?: import('csstype').Property.TextDecorationSkip | undefined;
        textDecorationSkipInk?: import('csstype').Property.TextDecorationSkipInk | undefined;
        textDecorationStyle?: import('csstype').Property.TextDecorationStyle | undefined;
        textDecorationThickness?:
            | import('csstype').Property.TextDecorationThickness<number | (string & {})>
            | undefined;
        textEmphasisColor?: import('csstype').Property.TextEmphasisColor | undefined;
        textEmphasisPosition?: import('csstype').Property.TextEmphasisPosition | undefined;
        textEmphasisStyle?: import('csstype').Property.TextEmphasisStyle | undefined;
        textIndent?: import('csstype').Property.TextIndent<number | (string & {})> | undefined;
        textJustify?: import('csstype').Property.TextJustify | undefined;
        textOrientation?: import('csstype').Property.TextOrientation | undefined;
        textOverflow?: import('csstype').Property.TextOverflow | undefined;
        textRendering?: import('csstype').Property.TextRendering | undefined;
        textShadow?: import('csstype').Property.TextShadow | undefined;
        textSizeAdjust?: import('csstype').Property.TextSizeAdjust | undefined;
        textTransform?: import('csstype').Property.TextTransform | undefined;
        textUnderlineOffset?:
            | import('csstype').Property.TextUnderlineOffset<number | (string & {})>
            | undefined;
        textUnderlinePosition?: import('csstype').Property.TextUnderlinePosition | undefined;
        textWrap?: import('csstype').Property.TextWrap | undefined;
        timelineScope?: import('csstype').Property.TimelineScope | undefined;
        top?: import('csstype').Property.Top<number | (string & {})> | undefined;
        touchAction?: import('csstype').Property.TouchAction | undefined;
        transform?: import('csstype').Property.Transform | undefined;
        transformBox?: import('csstype').Property.TransformBox | undefined;
        transformOrigin?:
            | import('csstype').Property.TransformOrigin<number | (string & {})>
            | undefined;
        transformStyle?: import('csstype').Property.TransformStyle | undefined;
        transitionBehavior?: import('csstype').Property.TransitionBehavior | undefined;
        transitionDelay?: import('csstype').Property.TransitionDelay<string & {}> | undefined;
        transitionDuration?: import('csstype').Property.TransitionDuration<string & {}> | undefined;
        transitionProperty?: import('csstype').Property.TransitionProperty | undefined;
        transitionTimingFunction?: import('csstype').Property.TransitionTimingFunction | undefined;
        translate?: import('csstype').Property.Translate<number | (string & {})> | undefined;
        unicodeBidi?: import('csstype').Property.UnicodeBidi | undefined;
        userSelect?: import('csstype').Property.UserSelect | undefined;
        verticalAlign?:
            | import('csstype').Property.VerticalAlign<number | (string & {})>
            | undefined;
        viewTimelineAxis?: import('csstype').Property.ViewTimelineAxis | undefined;
        viewTimelineInset?:
            | import('csstype').Property.ViewTimelineInset<number | (string & {})>
            | undefined;
        viewTimelineName?: import('csstype').Property.ViewTimelineName | undefined;
        viewTransitionName?: import('csstype').Property.ViewTransitionName | undefined;
        visibility?: import('csstype').Property.Visibility | undefined;
        whiteSpace?: import('csstype').Property.WhiteSpace | undefined;
        whiteSpaceCollapse?: import('csstype').Property.WhiteSpaceCollapse | undefined;
        whiteSpaceTrim?: import('csstype').Property.WhiteSpaceTrim | undefined;
        widows?: import('csstype').Property.Widows | undefined;
        width?: import('csstype').Property.Width<number | (string & {})> | undefined;
        willChange?: import('csstype').Property.WillChange | undefined;
        wordBreak?: import('csstype').Property.WordBreak | undefined;
        wordSpacing?: import('csstype').Property.WordSpacing<number | (string & {})> | undefined;
        wordWrap?: import('csstype').Property.WordWrap | undefined;
        writingMode?: import('csstype').Property.WritingMode | undefined;
        zIndex?: import('csstype').Property.ZIndex | undefined;
        zoom?: import('csstype').Property.Zoom | undefined;
        all?: import('csstype').Globals | undefined;
        animation?: import('csstype').Property.Animation<string & {}> | undefined;
        animationRange?:
            | import('csstype').Property.AnimationRange<number | (string & {})>
            | undefined;
        background?: import('csstype').Property.Background<number | (string & {})> | undefined;
        backgroundPosition?:
            | import('csstype').Property.BackgroundPosition<number | (string & {})>
            | undefined;
        border?: import('csstype').Property.Border<number | (string & {})> | undefined;
        borderBlock?: import('csstype').Property.BorderBlock<number | (string & {})> | undefined;
        borderBlockEnd?:
            | import('csstype').Property.BorderBlockEnd<number | (string & {})>
            | undefined;
        borderBlockStart?:
            | import('csstype').Property.BorderBlockStart<number | (string & {})>
            | undefined;
        borderBottom?: import('csstype').Property.BorderBottom<number | (string & {})> | undefined;
        borderColor?: string | undefined;
        borderImage?: import('csstype').Property.BorderImage | undefined;
        borderInline?: import('csstype').Property.BorderInline<number | (string & {})> | undefined;
        borderInlineEnd?:
            | import('csstype').Property.BorderInlineEnd<number | (string & {})>
            | undefined;
        borderInlineStart?:
            | import('csstype').Property.BorderInlineStart<number | (string & {})>
            | undefined;
        borderLeft?: import('csstype').Property.BorderLeft<number | (string & {})> | undefined;
        borderRadius?: import('csstype').Property.BorderRadius<number | (string & {})> | undefined;
        borderRight?: import('csstype').Property.BorderRight<number | (string & {})> | undefined;
        borderStyle?: import('csstype').Property.BorderStyle | undefined;
        borderTop?: import('csstype').Property.BorderTop<number | (string & {})> | undefined;
        borderWidth?: import('csstype').Property.BorderWidth<number | (string & {})> | undefined;
        caret?: import('csstype').Property.Caret | undefined;
        columnRule?: import('csstype').Property.ColumnRule<number | (string & {})> | undefined;
        columns?: import('csstype').Property.Columns<number | (string & {})> | undefined;
        containIntrinsicSize?:
            | import('csstype').Property.ContainIntrinsicSize<number | (string & {})>
            | undefined;
        container?: import('csstype').Property.Container | undefined;
        flex?: import('csstype').Property.Flex<number | (string & {})> | undefined;
        flexFlow?: import('csstype').Property.FlexFlow | undefined;
        font?: import('csstype').Property.Font | undefined;
        gap?: import('csstype').Property.Gap<number | (string & {})> | undefined;
        grid?: import('csstype').Property.Grid | undefined;
        gridArea?: import('csstype').Property.GridArea | undefined;
        gridColumn?: import('csstype').Property.GridColumn | undefined;
        gridRow?: import('csstype').Property.GridRow | undefined;
        gridTemplate?: import('csstype').Property.GridTemplate | undefined;
        inset?: import('csstype').Property.Inset<number | (string & {})> | undefined;
        insetBlock?: import('csstype').Property.InsetBlock<number | (string & {})> | undefined;
        insetInline?: import('csstype').Property.InsetInline<number | (string & {})> | undefined;
        lineClamp?: import('csstype').Property.LineClamp | undefined;
        listStyle?: import('csstype').Property.ListStyle | undefined;
        margin?: import('csstype').Property.Margin<number | (string & {})> | undefined;
        marginBlock?: import('csstype').Property.MarginBlock<number | (string & {})> | undefined;
        marginInline?: import('csstype').Property.MarginInline<number | (string & {})> | undefined;
        mask?: import('csstype').Property.Mask<number | (string & {})> | undefined;
        maskBorder?: import('csstype').Property.MaskBorder | undefined;
        motion?: import('csstype').Property.Offset<number | (string & {})> | undefined;
        offset?: import('csstype').Property.Offset<number | (string & {})> | undefined;
        outline?: import('csstype').Property.Outline<number | (string & {})> | undefined;
        overflow?: import('csstype').Property.Overflow | undefined;
        overscrollBehavior?: import('csstype').Property.OverscrollBehavior | undefined;
        padding?: import('csstype').Property.Padding<number | (string & {})> | undefined;
        paddingBlock?: import('csstype').Property.PaddingBlock<number | (string & {})> | undefined;
        paddingInline?:
            | import('csstype').Property.PaddingInline<number | (string & {})>
            | undefined;
        placeContent?: import('csstype').Property.PlaceContent | undefined;
        placeItems?: import('csstype').Property.PlaceItems | undefined;
        placeSelf?: import('csstype').Property.PlaceSelf | undefined;
        scrollMargin?: import('csstype').Property.ScrollMargin<number | (string & {})> | undefined;
        scrollMarginBlock?:
            | import('csstype').Property.ScrollMarginBlock<number | (string & {})>
            | undefined;
        scrollMarginInline?:
            | import('csstype').Property.ScrollMarginInline<number | (string & {})>
            | undefined;
        scrollPadding?:
            | import('csstype').Property.ScrollPadding<number | (string & {})>
            | undefined;
        scrollPaddingBlock?:
            | import('csstype').Property.ScrollPaddingBlock<number | (string & {})>
            | undefined;
        scrollPaddingInline?:
            | import('csstype').Property.ScrollPaddingInline<number | (string & {})>
            | undefined;
        scrollSnapMargin?:
            | import('csstype').Property.ScrollMargin<number | (string & {})>
            | undefined;
        scrollTimeline?: import('csstype').Property.ScrollTimeline | undefined;
        textDecoration?:
            | import('csstype').Property.TextDecoration<number | (string & {})>
            | undefined;
        textEmphasis?: import('csstype').Property.TextEmphasis | undefined;
        transition?: import('csstype').Property.Transition<string & {}> | undefined;
        viewTimeline?: import('csstype').Property.ViewTimeline | undefined;
        MozAnimationDelay?: import('csstype').Property.AnimationDelay<string & {}> | undefined;
        MozAnimationDirection?: import('csstype').Property.AnimationDirection | undefined;
        MozAnimationDuration?:
            | import('csstype').Property.AnimationDuration<string & {}>
            | undefined;
        MozAnimationFillMode?: import('csstype').Property.AnimationFillMode | undefined;
        MozAnimationIterationCount?: import('csstype').Property.AnimationIterationCount | undefined;
        MozAnimationName?: import('csstype').Property.AnimationName | undefined;
        MozAnimationPlayState?: import('csstype').Property.AnimationPlayState | undefined;
        MozAnimationTimingFunction?: import('csstype').Property.AnimationTimingFunction | undefined;
        MozAppearance?: import('csstype').Property.MozAppearance | undefined;
        MozBinding?: import('csstype').Property.MozBinding | undefined;
        MozBorderBottomColors?: import('csstype').Property.MozBorderBottomColors | undefined;
        MozBorderEndColor?: import('csstype').Property.BorderInlineEndColor | undefined;
        MozBorderEndStyle?: import('csstype').Property.BorderInlineEndStyle | undefined;
        MozBorderEndWidth?:
            | import('csstype').Property.BorderInlineEndWidth<number | (string & {})>
            | undefined;
        MozBorderLeftColors?: import('csstype').Property.MozBorderLeftColors | undefined;
        MozBorderRightColors?: import('csstype').Property.MozBorderRightColors | undefined;
        MozBorderStartColor?: import('csstype').Property.BorderInlineStartColor | undefined;
        MozBorderStartStyle?: import('csstype').Property.BorderInlineStartStyle | undefined;
        MozBorderTopColors?: import('csstype').Property.MozBorderTopColors | undefined;
        MozBoxSizing?: import('csstype').Property.BoxSizing | undefined;
        MozColumnCount?: import('csstype').Property.ColumnCount | undefined;
        MozColumnFill?: import('csstype').Property.ColumnFill | undefined;
        MozColumnRuleColor?: import('csstype').Property.ColumnRuleColor | undefined;
        MozColumnRuleStyle?: import('csstype').Property.ColumnRuleStyle | undefined;
        MozColumnRuleWidth?:
            | import('csstype').Property.ColumnRuleWidth<number | (string & {})>
            | undefined;
        MozColumnWidth?: import('csstype').Property.ColumnWidth<number | (string & {})> | undefined;
        MozContextProperties?: import('csstype').Property.MozContextProperties | undefined;
        MozFontFeatureSettings?: import('csstype').Property.FontFeatureSettings | undefined;
        MozFontLanguageOverride?: import('csstype').Property.FontLanguageOverride | undefined;
        MozHyphens?: import('csstype').Property.Hyphens | undefined;
        MozImageRegion?: import('csstype').Property.MozImageRegion | undefined;
        MozMarginEnd?:
            | import('csstype').Property.MarginInlineEnd<number | (string & {})>
            | undefined;
        MozMarginStart?:
            | import('csstype').Property.MarginInlineStart<number | (string & {})>
            | undefined;
        MozOrient?: import('csstype').Property.MozOrient | undefined;
        MozOsxFontSmoothing?:
            | import('csstype').Property.FontSmooth<number | (string & {})>
            | undefined;
        MozOutlineRadiusBottomleft?:
            | import('csstype').Property.MozOutlineRadiusBottomleft<number | (string & {})>
            | undefined;
        MozOutlineRadiusBottomright?:
            | import('csstype').Property.MozOutlineRadiusBottomright<number | (string & {})>
            | undefined;
        MozOutlineRadiusTopleft?:
            | import('csstype').Property.MozOutlineRadiusTopleft<number | (string & {})>
            | undefined;
        MozOutlineRadiusTopright?:
            | import('csstype').Property.MozOutlineRadiusTopright<number | (string & {})>
            | undefined;
        MozPaddingEnd?:
            | import('csstype').Property.PaddingInlineEnd<number | (string & {})>
            | undefined;
        MozPaddingStart?:
            | import('csstype').Property.PaddingInlineStart<number | (string & {})>
            | undefined;
        MozStackSizing?: import('csstype').Property.MozStackSizing | undefined;
        MozTabSize?: import('csstype').Property.TabSize<number | (string & {})> | undefined;
        MozTextBlink?: import('csstype').Property.MozTextBlink | undefined;
        MozTextSizeAdjust?: import('csstype').Property.TextSizeAdjust | undefined;
        MozUserFocus?: import('csstype').Property.MozUserFocus | undefined;
        MozUserModify?: import('csstype').Property.MozUserModify | undefined;
        MozUserSelect?: import('csstype').Property.UserSelect | undefined;
        MozWindowDragging?: import('csstype').Property.MozWindowDragging | undefined;
        MozWindowShadow?: import('csstype').Property.MozWindowShadow | undefined;
        msAccelerator?: import('csstype').Property.MsAccelerator | undefined;
        msBlockProgression?: import('csstype').Property.MsBlockProgression | undefined;
        msContentZoomChaining?: import('csstype').Property.MsContentZoomChaining | undefined;
        msContentZoomLimitMax?: import('csstype').Property.MsContentZoomLimitMax | undefined;
        msContentZoomLimitMin?: import('csstype').Property.MsContentZoomLimitMin | undefined;
        msContentZoomSnapPoints?: import('csstype').Property.MsContentZoomSnapPoints | undefined;
        msContentZoomSnapType?: import('csstype').Property.MsContentZoomSnapType | undefined;
        msContentZooming?: import('csstype').Property.MsContentZooming | undefined;
        msFilter?: import('csstype').Property.MsFilter | undefined;
        msFlexDirection?: import('csstype').Property.FlexDirection | undefined;
        msFlexPositive?: import('csstype').Property.FlexGrow | undefined;
        msFlowFrom?: import('csstype').Property.MsFlowFrom | undefined;
        msFlowInto?: import('csstype').Property.MsFlowInto | undefined;
        msGridColumns?:
            | import('csstype').Property.MsGridColumns<number | (string & {})>
            | undefined;
        msGridRows?: import('csstype').Property.MsGridRows<number | (string & {})> | undefined;
        msHighContrastAdjust?: import('csstype').Property.MsHighContrastAdjust | undefined;
        msHyphenateLimitChars?: import('csstype').Property.MsHyphenateLimitChars | undefined;
        msHyphenateLimitLines?: import('csstype').Property.MsHyphenateLimitLines | undefined;
        msHyphenateLimitZone?:
            | import('csstype').Property.MsHyphenateLimitZone<number | (string & {})>
            | undefined;
        msHyphens?: import('csstype').Property.Hyphens | undefined;
        msImeAlign?: import('csstype').Property.MsImeAlign | undefined;
        msLineBreak?: import('csstype').Property.LineBreak | undefined;
        msOrder?: import('csstype').Property.Order | undefined;
        msOverflowStyle?: import('csstype').Property.MsOverflowStyle | undefined;
        msOverflowX?: import('csstype').Property.OverflowX | undefined;
        msOverflowY?: import('csstype').Property.OverflowY | undefined;
        msScrollChaining?: import('csstype').Property.MsScrollChaining | undefined;
        msScrollLimitXMax?:
            | import('csstype').Property.MsScrollLimitXMax<number | (string & {})>
            | undefined;
        msScrollLimitXMin?:
            | import('csstype').Property.MsScrollLimitXMin<number | (string & {})>
            | undefined;
        msScrollLimitYMax?:
            | import('csstype').Property.MsScrollLimitYMax<number | (string & {})>
            | undefined;
        msScrollLimitYMin?:
            | import('csstype').Property.MsScrollLimitYMin<number | (string & {})>
            | undefined;
        msScrollRails?: import('csstype').Property.MsScrollRails | undefined;
        msScrollSnapPointsX?: import('csstype').Property.MsScrollSnapPointsX | undefined;
        msScrollSnapPointsY?: import('csstype').Property.MsScrollSnapPointsY | undefined;
        msScrollSnapType?: import('csstype').Property.MsScrollSnapType | undefined;
        msScrollTranslation?: import('csstype').Property.MsScrollTranslation | undefined;
        msScrollbar3dlightColor?: import('csstype').Property.MsScrollbar3dlightColor | undefined;
        msScrollbarArrowColor?: import('csstype').Property.MsScrollbarArrowColor | undefined;
        msScrollbarBaseColor?: import('csstype').Property.MsScrollbarBaseColor | undefined;
        msScrollbarDarkshadowColor?:
            | import('csstype').Property.MsScrollbarDarkshadowColor
            | undefined;
        msScrollbarFaceColor?: import('csstype').Property.MsScrollbarFaceColor | undefined;
        msScrollbarHighlightColor?:
            | import('csstype').Property.MsScrollbarHighlightColor
            | undefined;
        msScrollbarShadowColor?: import('csstype').Property.MsScrollbarShadowColor | undefined;
        msScrollbarTrackColor?: import('csstype').Property.MsScrollbarTrackColor | undefined;
        msTextAutospace?: import('csstype').Property.MsTextAutospace | undefined;
        msTextCombineHorizontal?: import('csstype').Property.TextCombineUpright | undefined;
        msTextOverflow?: import('csstype').Property.TextOverflow | undefined;
        msTouchAction?: import('csstype').Property.TouchAction | undefined;
        msTouchSelect?: import('csstype').Property.MsTouchSelect | undefined;
        msTransform?: import('csstype').Property.Transform | undefined;
        msTransformOrigin?:
            | import('csstype').Property.TransformOrigin<number | (string & {})>
            | undefined;
        msTransitionDelay?: import('csstype').Property.TransitionDelay<string & {}> | undefined;
        msTransitionDuration?:
            | import('csstype').Property.TransitionDuration<string & {}>
            | undefined;
        msTransitionProperty?: import('csstype').Property.TransitionProperty | undefined;
        msTransitionTimingFunction?:
            | import('csstype').Property.TransitionTimingFunction
            | undefined;
        msUserSelect?: import('csstype').Property.MsUserSelect | undefined;
        msWordBreak?: import('csstype').Property.WordBreak | undefined;
        msWrapFlow?: import('csstype').Property.MsWrapFlow | undefined;
        msWrapMargin?: import('csstype').Property.MsWrapMargin<number | (string & {})> | undefined;
        msWrapThrough?: import('csstype').Property.MsWrapThrough | undefined;
        msWritingMode?: import('csstype').Property.WritingMode | undefined;
        WebkitAlignContent?: import('csstype').Property.AlignContent | undefined;
        WebkitAlignItems?: import('csstype').Property.AlignItems | undefined;
        WebkitAlignSelf?: import('csstype').Property.AlignSelf | undefined;
        WebkitAnimationDelay?: import('csstype').Property.AnimationDelay<string & {}> | undefined;
        WebkitAnimationDirection?: import('csstype').Property.AnimationDirection | undefined;
        WebkitAnimationDuration?:
            | import('csstype').Property.AnimationDuration<string & {}>
            | undefined;
        WebkitAnimationFillMode?: import('csstype').Property.AnimationFillMode | undefined;
        WebkitAnimationIterationCount?:
            | import('csstype').Property.AnimationIterationCount
            | undefined;
        WebkitAnimationName?: import('csstype').Property.AnimationName | undefined;
        WebkitAnimationPlayState?: import('csstype').Property.AnimationPlayState | undefined;
        WebkitAnimationTimingFunction?:
            | import('csstype').Property.AnimationTimingFunction
            | undefined;
        WebkitAppearance?: import('csstype').Property.WebkitAppearance | undefined;
        WebkitBackdropFilter?: import('csstype').Property.BackdropFilter | undefined;
        WebkitBackfaceVisibility?: import('csstype').Property.BackfaceVisibility | undefined;
        WebkitBackgroundClip?: import('csstype').Property.BackgroundClip | undefined;
        WebkitBackgroundOrigin?: import('csstype').Property.BackgroundOrigin | undefined;
        WebkitBackgroundSize?:
            | import('csstype').Property.BackgroundSize<number | (string & {})>
            | undefined;
        WebkitBorderBeforeColor?: import('csstype').Property.WebkitBorderBeforeColor | undefined;
        WebkitBorderBeforeStyle?: import('csstype').Property.WebkitBorderBeforeStyle | undefined;
        WebkitBorderBeforeWidth?:
            | import('csstype').Property.WebkitBorderBeforeWidth<number | (string & {})>
            | undefined;
        WebkitBorderBottomLeftRadius?:
            | import('csstype').Property.BorderBottomLeftRadius<number | (string & {})>
            | undefined;
        WebkitBorderBottomRightRadius?:
            | import('csstype').Property.BorderBottomRightRadius<number | (string & {})>
            | undefined;
        WebkitBorderImageSlice?: import('csstype').Property.BorderImageSlice | undefined;
        WebkitBorderTopLeftRadius?:
            | import('csstype').Property.BorderTopLeftRadius<number | (string & {})>
            | undefined;
        WebkitBorderTopRightRadius?:
            | import('csstype').Property.BorderTopRightRadius<number | (string & {})>
            | undefined;
        WebkitBoxDecorationBreak?: import('csstype').Property.BoxDecorationBreak | undefined;
        WebkitBoxReflect?:
            | import('csstype').Property.WebkitBoxReflect<number | (string & {})>
            | undefined;
        WebkitBoxShadow?: import('csstype').Property.BoxShadow | undefined;
        WebkitBoxSizing?: import('csstype').Property.BoxSizing | undefined;
        WebkitClipPath?: import('csstype').Property.ClipPath | undefined;
        WebkitColumnCount?: import('csstype').Property.ColumnCount | undefined;
        WebkitColumnFill?: import('csstype').Property.ColumnFill | undefined;
        WebkitColumnRuleColor?: import('csstype').Property.ColumnRuleColor | undefined;
        WebkitColumnRuleStyle?: import('csstype').Property.ColumnRuleStyle | undefined;
        WebkitColumnRuleWidth?:
            | import('csstype').Property.ColumnRuleWidth<number | (string & {})>
            | undefined;
        WebkitColumnSpan?: import('csstype').Property.ColumnSpan | undefined;
        WebkitColumnWidth?:
            | import('csstype').Property.ColumnWidth<number | (string & {})>
            | undefined;
        WebkitFilter?: import('csstype').Property.Filter | undefined;
        WebkitFlexBasis?: import('csstype').Property.FlexBasis<number | (string & {})> | undefined;
        WebkitFlexDirection?: import('csstype').Property.FlexDirection | undefined;
        WebkitFlexGrow?: import('csstype').Property.FlexGrow | undefined;
        WebkitFlexShrink?: import('csstype').Property.FlexShrink | undefined;
        WebkitFlexWrap?: import('csstype').Property.FlexWrap | undefined;
        WebkitFontFeatureSettings?: import('csstype').Property.FontFeatureSettings | undefined;
        WebkitFontKerning?: import('csstype').Property.FontKerning | undefined;
        WebkitFontSmoothing?:
            | import('csstype').Property.FontSmooth<number | (string & {})>
            | undefined;
        WebkitFontVariantLigatures?: import('csstype').Property.FontVariantLigatures | undefined;
        WebkitHyphenateCharacter?: import('csstype').Property.HyphenateCharacter | undefined;
        WebkitHyphens?: import('csstype').Property.Hyphens | undefined;
        WebkitInitialLetter?: import('csstype').Property.InitialLetter | undefined;
        WebkitJustifyContent?: import('csstype').Property.JustifyContent | undefined;
        WebkitLineBreak?: import('csstype').Property.LineBreak | undefined;
        WebkitLineClamp?: import('csstype').Property.WebkitLineClamp | undefined;
        WebkitMarginEnd?:
            | import('csstype').Property.MarginInlineEnd<number | (string & {})>
            | undefined;
        WebkitMarginStart?:
            | import('csstype').Property.MarginInlineStart<number | (string & {})>
            | undefined;
        WebkitMaskAttachment?: import('csstype').Property.WebkitMaskAttachment | undefined;
        WebkitMaskBoxImageOutset?:
            | import('csstype').Property.MaskBorderOutset<number | (string & {})>
            | undefined;
        WebkitMaskBoxImageRepeat?: import('csstype').Property.MaskBorderRepeat | undefined;
        WebkitMaskBoxImageSlice?: import('csstype').Property.MaskBorderSlice | undefined;
        WebkitMaskBoxImageSource?: import('csstype').Property.MaskBorderSource | undefined;
        WebkitMaskBoxImageWidth?:
            | import('csstype').Property.MaskBorderWidth<number | (string & {})>
            | undefined;
        WebkitMaskClip?: import('csstype').Property.WebkitMaskClip | undefined;
        WebkitMaskComposite?: import('csstype').Property.WebkitMaskComposite | undefined;
        WebkitMaskImage?: import('csstype').Property.WebkitMaskImage | undefined;
        WebkitMaskOrigin?: import('csstype').Property.WebkitMaskOrigin | undefined;
        WebkitMaskPosition?:
            | import('csstype').Property.WebkitMaskPosition<number | (string & {})>
            | undefined;
        WebkitMaskPositionX?:
            | import('csstype').Property.WebkitMaskPositionX<number | (string & {})>
            | undefined;
        WebkitMaskPositionY?:
            | import('csstype').Property.WebkitMaskPositionY<number | (string & {})>
            | undefined;
        WebkitMaskRepeat?: import('csstype').Property.WebkitMaskRepeat | undefined;
        WebkitMaskRepeatX?: import('csstype').Property.WebkitMaskRepeatX | undefined;
        WebkitMaskRepeatY?: import('csstype').Property.WebkitMaskRepeatY | undefined;
        WebkitMaskSize?:
            | import('csstype').Property.WebkitMaskSize<number | (string & {})>
            | undefined;
        WebkitMaxInlineSize?:
            | import('csstype').Property.MaxInlineSize<number | (string & {})>
            | undefined;
        WebkitOrder?: import('csstype').Property.Order | undefined;
        WebkitOverflowScrolling?: import('csstype').Property.WebkitOverflowScrolling | undefined;
        WebkitPaddingEnd?:
            | import('csstype').Property.PaddingInlineEnd<number | (string & {})>
            | undefined;
        WebkitPaddingStart?:
            | import('csstype').Property.PaddingInlineStart<number | (string & {})>
            | undefined;
        WebkitPerspective?:
            | import('csstype').Property.Perspective<number | (string & {})>
            | undefined;
        WebkitPerspectiveOrigin?:
            | import('csstype').Property.PerspectiveOrigin<number | (string & {})>
            | undefined;
        WebkitPrintColorAdjust?: import('csstype').Property.PrintColorAdjust | undefined;
        WebkitRubyPosition?: import('csstype').Property.RubyPosition | undefined;
        WebkitScrollSnapType?: import('csstype').Property.ScrollSnapType | undefined;
        WebkitShapeMargin?:
            | import('csstype').Property.ShapeMargin<number | (string & {})>
            | undefined;
        WebkitTapHighlightColor?: import('csstype').Property.WebkitTapHighlightColor | undefined;
        WebkitTextCombine?: import('csstype').Property.TextCombineUpright | undefined;
        WebkitTextDecorationColor?: import('csstype').Property.TextDecorationColor | undefined;
        WebkitTextDecorationLine?: import('csstype').Property.TextDecorationLine | undefined;
        WebkitTextDecorationSkip?: import('csstype').Property.TextDecorationSkip | undefined;
        WebkitTextDecorationStyle?: import('csstype').Property.TextDecorationStyle | undefined;
        WebkitTextEmphasisColor?: import('csstype').Property.TextEmphasisColor | undefined;
        WebkitTextEmphasisPosition?: import('csstype').Property.TextEmphasisPosition | undefined;
        WebkitTextEmphasisStyle?: import('csstype').Property.TextEmphasisStyle | undefined;
        WebkitTextFillColor?: import('csstype').Property.WebkitTextFillColor | undefined;
        WebkitTextOrientation?: import('csstype').Property.TextOrientation | undefined;
        WebkitTextSizeAdjust?: import('csstype').Property.TextSizeAdjust | undefined;
        WebkitTextStrokeColor?: import('csstype').Property.WebkitTextStrokeColor | undefined;
        WebkitTextStrokeWidth?:
            | import('csstype').Property.WebkitTextStrokeWidth<number | (string & {})>
            | undefined;
        WebkitTextUnderlinePosition?: import('csstype').Property.TextUnderlinePosition | undefined;
        WebkitTouchCallout?: import('csstype').Property.WebkitTouchCallout | undefined;
        WebkitTransform?: import('csstype').Property.Transform | undefined;
        WebkitTransformOrigin?:
            | import('csstype').Property.TransformOrigin<number | (string & {})>
            | undefined;
        WebkitTransformStyle?: import('csstype').Property.TransformStyle | undefined;
        WebkitTransitionDelay?: import('csstype').Property.TransitionDelay<string & {}> | undefined;
        WebkitTransitionDuration?:
            | import('csstype').Property.TransitionDuration<string & {}>
            | undefined;
        WebkitTransitionProperty?: import('csstype').Property.TransitionProperty | undefined;
        WebkitTransitionTimingFunction?:
            | import('csstype').Property.TransitionTimingFunction
            | undefined;
        WebkitUserModify?: import('csstype').Property.WebkitUserModify | undefined;
        WebkitUserSelect?: import('csstype').Property.UserSelect | undefined;
        WebkitWritingMode?: import('csstype').Property.WritingMode | undefined;
        MozAnimation?: import('csstype').Property.Animation<string & {}> | undefined;
        MozBorderImage?: import('csstype').Property.BorderImage | undefined;
        MozColumnRule?: import('csstype').Property.ColumnRule<number | (string & {})> | undefined;
        MozColumns?: import('csstype').Property.Columns<number | (string & {})> | undefined;
        MozOutlineRadius?:
            | import('csstype').Property.MozOutlineRadius<number | (string & {})>
            | undefined;
        msContentZoomLimit?: import('csstype').Property.MsContentZoomLimit | undefined;
        msContentZoomSnap?: import('csstype').Property.MsContentZoomSnap | undefined;
        msFlex?: import('csstype').Property.Flex<number | (string & {})> | undefined;
        msScrollLimit?: import('csstype').Property.MsScrollLimit | undefined;
        msScrollSnapX?: import('csstype').Property.MsScrollSnapX | undefined;
        msScrollSnapY?: import('csstype').Property.MsScrollSnapY | undefined;
        msTransition?: import('csstype').Property.Transition<string & {}> | undefined;
        WebkitAnimation?: import('csstype').Property.Animation<string & {}> | undefined;
        WebkitBorderBefore?:
            | import('csstype').Property.WebkitBorderBefore<number | (string & {})>
            | undefined;
        WebkitBorderImage?: import('csstype').Property.BorderImage | undefined;
        WebkitBorderRadius?:
            | import('csstype').Property.BorderRadius<number | (string & {})>
            | undefined;
        WebkitColumnRule?:
            | import('csstype').Property.ColumnRule<number | (string & {})>
            | undefined;
        WebkitColumns?: import('csstype').Property.Columns<number | (string & {})> | undefined;
        WebkitFlex?: import('csstype').Property.Flex<number | (string & {})> | undefined;
        WebkitFlexFlow?: import('csstype').Property.FlexFlow | undefined;
        WebkitMask?: import('csstype').Property.WebkitMask<number | (string & {})> | undefined;
        WebkitMaskBoxImage?: import('csstype').Property.MaskBorder | undefined;
        WebkitTextEmphasis?: import('csstype').Property.TextEmphasis | undefined;
        WebkitTextStroke?:
            | import('csstype').Property.WebkitTextStroke<number | (string & {})>
            | undefined;
        WebkitTransition?: import('csstype').Property.Transition<string & {}> | undefined;
        azimuth?: import('csstype').Property.Azimuth | undefined;
        boxAlign?: import('csstype').Property.BoxAlign | undefined;
        boxDirection?: import('csstype').Property.BoxDirection | undefined;
        boxFlex?: import('csstype').Property.BoxFlex | undefined;
        boxFlexGroup?: import('csstype').Property.BoxFlexGroup | undefined;
        boxLines?: import('csstype').Property.BoxLines | undefined;
        boxOrdinalGroup?: import('csstype').Property.BoxOrdinalGroup | undefined;
        boxOrient?: import('csstype').Property.BoxOrient | undefined;
        boxPack?: import('csstype').Property.BoxPack | undefined;
        clip?: import('csstype').Property.Clip | undefined;
        gridColumnGap?:
            | import('csstype').Property.GridColumnGap<number | (string & {})>
            | undefined;
        gridGap?: import('csstype').Property.GridGap<number | (string & {})> | undefined;
        gridRowGap?: import('csstype').Property.GridRowGap<number | (string & {})> | undefined;
        imeMode?: import('csstype').Property.ImeMode | undefined;
        offsetBlock?: import('csstype').Property.InsetBlock<number | (string & {})> | undefined;
        offsetBlockEnd?:
            | import('csstype').Property.InsetBlockEnd<number | (string & {})>
            | undefined;
        offsetBlockStart?:
            | import('csstype').Property.InsetBlockStart<number | (string & {})>
            | undefined;
        offsetInline?: import('csstype').Property.InsetInline<number | (string & {})> | undefined;
        offsetInlineEnd?:
            | import('csstype').Property.InsetInlineEnd<number | (string & {})>
            | undefined;
        offsetInlineStart?:
            | import('csstype').Property.InsetInlineStart<number | (string & {})>
            | undefined;
        scrollSnapCoordinate?:
            | import('csstype').Property.ScrollSnapCoordinate<number | (string & {})>
            | undefined;
        scrollSnapDestination?:
            | import('csstype').Property.ScrollSnapDestination<number | (string & {})>
            | undefined;
        scrollSnapPointsX?: import('csstype').Property.ScrollSnapPointsX | undefined;
        scrollSnapPointsY?: import('csstype').Property.ScrollSnapPointsY | undefined;
        scrollSnapTypeX?: import('csstype').Property.ScrollSnapTypeX | undefined;
        scrollSnapTypeY?: import('csstype').Property.ScrollSnapTypeY | undefined;
        KhtmlBoxAlign?: import('csstype').Property.BoxAlign | undefined;
        KhtmlBoxDirection?: import('csstype').Property.BoxDirection | undefined;
        KhtmlBoxFlex?: import('csstype').Property.BoxFlex | undefined;
        KhtmlBoxFlexGroup?: import('csstype').Property.BoxFlexGroup | undefined;
        KhtmlBoxLines?: import('csstype').Property.BoxLines | undefined;
        KhtmlBoxOrdinalGroup?: import('csstype').Property.BoxOrdinalGroup | undefined;
        KhtmlBoxOrient?: import('csstype').Property.BoxOrient | undefined;
        KhtmlBoxPack?: import('csstype').Property.BoxPack | undefined;
        KhtmlLineBreak?: import('csstype').Property.LineBreak | undefined;
        KhtmlOpacity?: import('csstype').Property.Opacity | undefined;
        KhtmlUserSelect?: import('csstype').Property.UserSelect | undefined;
        MozBackfaceVisibility?: import('csstype').Property.BackfaceVisibility | undefined;
        MozBackgroundClip?: import('csstype').Property.BackgroundClip | undefined;
        MozBackgroundInlinePolicy?: import('csstype').Property.BoxDecorationBreak | undefined;
        MozBackgroundOrigin?: import('csstype').Property.BackgroundOrigin | undefined;
        MozBackgroundSize?:
            | import('csstype').Property.BackgroundSize<number | (string & {})>
            | undefined;
        MozBorderRadius?:
            | import('csstype').Property.BorderRadius<number | (string & {})>
            | undefined;
        MozBorderRadiusBottomleft?:
            | import('csstype').Property.BorderBottomLeftRadius<number | (string & {})>
            | undefined;
        MozBorderRadiusBottomright?:
            | import('csstype').Property.BorderBottomRightRadius<number | (string & {})>
            | undefined;
        MozBorderRadiusTopleft?:
            | import('csstype').Property.BorderTopLeftRadius<number | (string & {})>
            | undefined;
        MozBorderRadiusTopright?:
            | import('csstype').Property.BorderTopRightRadius<number | (string & {})>
            | undefined;
        MozBoxAlign?: import('csstype').Property.BoxAlign | undefined;
        MozBoxDirection?: import('csstype').Property.BoxDirection | undefined;
        MozBoxFlex?: import('csstype').Property.BoxFlex | undefined;
        MozBoxOrdinalGroup?: import('csstype').Property.BoxOrdinalGroup | undefined;
        MozBoxOrient?: import('csstype').Property.BoxOrient | undefined;
        MozBoxPack?: import('csstype').Property.BoxPack | undefined;
        MozBoxShadow?: import('csstype').Property.BoxShadow | undefined;
        MozFloatEdge?: import('csstype').Property.MozFloatEdge | undefined;
        MozForceBrokenImageIcon?: import('csstype').Property.MozForceBrokenImageIcon | undefined;
        MozOpacity?: import('csstype').Property.Opacity | undefined;
        MozOutline?: import('csstype').Property.Outline<number | (string & {})> | undefined;
        MozOutlineColor?: import('csstype').Property.OutlineColor | undefined;
        MozOutlineStyle?: import('csstype').Property.OutlineStyle | undefined;
        MozOutlineWidth?:
            | import('csstype').Property.OutlineWidth<number | (string & {})>
            | undefined;
        MozPerspective?: import('csstype').Property.Perspective<number | (string & {})> | undefined;
        MozPerspectiveOrigin?:
            | import('csstype').Property.PerspectiveOrigin<number | (string & {})>
            | undefined;
        MozTextAlignLast?: import('csstype').Property.TextAlignLast | undefined;
        MozTextDecorationColor?: import('csstype').Property.TextDecorationColor | undefined;
        MozTextDecorationLine?: import('csstype').Property.TextDecorationLine | undefined;
        MozTextDecorationStyle?: import('csstype').Property.TextDecorationStyle | undefined;
        MozTransform?: import('csstype').Property.Transform | undefined;
        MozTransformOrigin?:
            | import('csstype').Property.TransformOrigin<number | (string & {})>
            | undefined;
        MozTransformStyle?: import('csstype').Property.TransformStyle | undefined;
        MozTransition?: import('csstype').Property.Transition<string & {}> | undefined;
        MozTransitionDelay?: import('csstype').Property.TransitionDelay<string & {}> | undefined;
        MozTransitionDuration?:
            | import('csstype').Property.TransitionDuration<string & {}>
            | undefined;
        MozTransitionProperty?: import('csstype').Property.TransitionProperty | undefined;
        MozTransitionTimingFunction?:
            | import('csstype').Property.TransitionTimingFunction
            | undefined;
        MozUserInput?: import('csstype').Property.MozUserInput | undefined;
        msImeMode?: import('csstype').Property.ImeMode | undefined;
        OAnimation?: import('csstype').Property.Animation<string & {}> | undefined;
        OAnimationDelay?: import('csstype').Property.AnimationDelay<string & {}> | undefined;
        OAnimationDirection?: import('csstype').Property.AnimationDirection | undefined;
        OAnimationDuration?: import('csstype').Property.AnimationDuration<string & {}> | undefined;
        OAnimationFillMode?: import('csstype').Property.AnimationFillMode | undefined;
        OAnimationIterationCount?: import('csstype').Property.AnimationIterationCount | undefined;
        OAnimationName?: import('csstype').Property.AnimationName | undefined;
        OAnimationPlayState?: import('csstype').Property.AnimationPlayState | undefined;
        OAnimationTimingFunction?: import('csstype').Property.AnimationTimingFunction | undefined;
        OBackgroundSize?:
            | import('csstype').Property.BackgroundSize<number | (string & {})>
            | undefined;
        OBorderImage?: import('csstype').Property.BorderImage | undefined;
        OObjectFit?: import('csstype').Property.ObjectFit | undefined;
        OObjectPosition?:
            | import('csstype').Property.ObjectPosition<number | (string & {})>
            | undefined;
        OTabSize?: import('csstype').Property.TabSize<number | (string & {})> | undefined;
        OTextOverflow?: import('csstype').Property.TextOverflow | undefined;
        OTransform?: import('csstype').Property.Transform | undefined;
        OTransformOrigin?:
            | import('csstype').Property.TransformOrigin<number | (string & {})>
            | undefined;
        OTransition?: import('csstype').Property.Transition<string & {}> | undefined;
        OTransitionDelay?: import('csstype').Property.TransitionDelay<string & {}> | undefined;
        OTransitionDuration?:
            | import('csstype').Property.TransitionDuration<string & {}>
            | undefined;
        OTransitionProperty?: import('csstype').Property.TransitionProperty | undefined;
        OTransitionTimingFunction?: import('csstype').Property.TransitionTimingFunction | undefined;
        WebkitBoxAlign?: import('csstype').Property.BoxAlign | undefined;
        WebkitBoxDirection?: import('csstype').Property.BoxDirection | undefined;
        WebkitBoxFlex?: import('csstype').Property.BoxFlex | undefined;
        WebkitBoxFlexGroup?: import('csstype').Property.BoxFlexGroup | undefined;
        WebkitBoxLines?: import('csstype').Property.BoxLines | undefined;
        WebkitBoxOrdinalGroup?: import('csstype').Property.BoxOrdinalGroup | undefined;
        WebkitBoxOrient?: import('csstype').Property.BoxOrient | undefined;
        WebkitBoxPack?: import('csstype').Property.BoxPack | undefined;
        alignmentBaseline?: import('csstype').Property.AlignmentBaseline | undefined;
        baselineShift?:
            | import('csstype').Property.BaselineShift<number | (string & {})>
            | undefined;
        clipRule?: import('csstype').Property.ClipRule | undefined;
        colorInterpolation?: import('csstype').Property.ColorInterpolation | undefined;
        colorRendering?: import('csstype').Property.ColorRendering | undefined;
        dominantBaseline?: import('csstype').Property.DominantBaseline | undefined;
        fill?: import('csstype').Property.Fill | undefined;
        fillOpacity?: import('csstype').Property.FillOpacity | undefined;
        fillRule?: import('csstype').Property.FillRule | undefined;
        floodColor?: import('csstype').Property.FloodColor | undefined;
        floodOpacity?: import('csstype').Property.FloodOpacity | undefined;
        glyphOrientationVertical?: import('csstype').Property.GlyphOrientationVertical | undefined;
        lightingColor?: import('csstype').Property.LightingColor | undefined;
        marker?: import('csstype').Property.Marker | undefined;
        markerEnd?: import('csstype').Property.MarkerEnd | undefined;
        markerMid?: import('csstype').Property.MarkerMid | undefined;
        markerStart?: import('csstype').Property.MarkerStart | undefined;
        shapeRendering?: import('csstype').Property.ShapeRendering | undefined;
        stopColor?: import('csstype').Property.StopColor | undefined;
        stopOpacity?: import('csstype').Property.StopOpacity | undefined;
        stroke?: import('csstype').Property.Stroke | undefined;
        strokeDasharray?:
            | import('csstype').Property.StrokeDasharray<number | (string & {})>
            | undefined;
        strokeDashoffset?:
            | import('csstype').Property.StrokeDashoffset<number | (string & {})>
            | undefined;
        strokeLinecap?: import('csstype').Property.StrokeLinecap | undefined;
        strokeLinejoin?: import('csstype').Property.StrokeLinejoin | undefined;
        strokeMiterlimit?: import('csstype').Property.StrokeMiterlimit | undefined;
        strokeOpacity?: import('csstype').Property.StrokeOpacity | undefined;
        strokeWidth?: import('csstype').Property.StrokeWidth<number | (string & {})> | undefined;
        textAnchor?: import('csstype').Property.TextAnchor | undefined;
        vectorEffect?: import('csstype').Property.VectorEffect | undefined;
    };
    render(): React.JSX.Element | null;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    TagProps & import('../config-provider/types').ComponentCommonProps,
    Tag,
    {}
>;
export default _default;
