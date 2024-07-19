// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

export type LayoutSize =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96
  | 104
  | 112
  | 120
  | 128
  | 136
  | 144
  | 152
  | 160
  | 168
  | 176
  | 184
  | 192
  | 200
  | 208
  | 216
  | 224
  | 232
  | 240
  | 248
  | 256
  | 264
  | 272
  | 280
  | 320;

type alignContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'
  | 'normal'
  | '';

type justifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'normal'
  | '';

type alignItemsType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'normal' | '';

type flexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse' | '';

type flexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse' | '';

type Props = {
  children?: ?React$Node,

  alignContent?: alignContentType,
  justifyContent?: justifyContentType,
  alignItems?: alignItemsType,
  flexDirection?: flexDirectionType,
  flexWrap?: flexWrapType,
  columnGap?: LayoutSize,
  rowGap?: LayoutSize,

  alignContentM?: ?alignContentType,
  justifyContentM?: ?justifyContentType,
  alignItemsM?: ?alignItemsType,
  flexDirectionM?: ?flexDirectionType,
  flexWrapM?: ?flexWrapType,
  columnGapM?: ?LayoutSize,
  rowGapM?: ?LayoutSize,

  className?: string,
};

const styles = stylex.create({
  common: {
    display: 'flex',
  },
  'alignContent-flex-start': {
    alignContent: 'flex-start',
  },
  'alignContent-flex-end': {
    alignContent: 'flex-end',
  },
  'alignContent-center': {
    alignContent: 'center',
  },
  'alignContent-space-between': {
    alignContent: 'space-between',
  },
  'alignContent-space-around': {
    alignContent: 'space-around',
  },
  'alignContent-stretch': {
    alignContent: 'stretch',
  },
  'alignContent-normal': {
    alignContent: 'normal',
  },
  'alignContentM-flex-start': {
    '@media (max-width: 960px)': {
      alignContent: 'flex-start',
    },
  },
  'alignContentM-flex-end': {
    '@media (max-width: 960px)': {
      alignContent: 'flex-end',
    },
  },
  'alignContentM-center': {
    '@media (max-width: 960px)': {
      alignContent: 'center',
    },
  },
  'alignContentM-space-between': {
    '@media (max-width: 960px)': {
      alignContent: 'space-between',
    },
  },
  'alignContentM-space-around': {
    '@media (max-width: 960px)': {
      alignContent: 'space-around',
    },
  },
  'alignContentM-stretch': {
    '@media (max-width: 960px)': {
      alignContent: 'stretch',
    },
  },
  'alignContentM-normal': {
    '@media (max-width: 960px)': {
      alignContent: 'normal',
    },
  },
  'justifyContent-flex-start': {
    justifyContent: 'flex-start',
  },
  'justifyContent-flex-end': {
    justifyContent: 'flex-end',
  },
  'justifyContent-center': {
    justifyContent: 'center',
  },
  'justifyContent-space-between': {
    justifyContent: 'space-between',
  },
  'justifyContent-space-around': {
    justifyContent: 'space-around',
  },
  'justifyContent-space-evenly': {
    justifyContent: 'space-evenly',
  },
  'justifyContent-normal': {
    justifyContent: 'normal',
  },
  'justifyContentM-flex-start': {
    '@media (max-width: 960px)': {
      justifyContent: 'flex-start',
    },
  },
  'justifyContentM-flex-end': {
    '@media (max-width: 960px)': {
      justifyContent: 'flex-end',
    },
  },
  'justifyContentM-center': {
    '@media (max-width: 960px)': {
      justifyContent: 'center',
    },
  },
  'justifyContentM-space-between': {
    '@media (max-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
  'justifyContentM-space-around': {
    '@media (max-width: 960px)': {
      justifyContent: 'space-around',
    },
  },
  'justifyContentM-space-evenly': {
    '@media (max-width: 960px)': {
      justifyContent: 'space-evenly',
    },
  },
  'justifyContentM-normal': {
    '@media (max-width: 960px)': {
      justifyContent: 'normal',
    },
  },
  'alignItems-flex-start': {
    alignItems: 'flex-start',
  },
  'alignItems-flex-end': {
    alignItems: 'flex-end',
  },
  'alignItems-center': {
    alignItems: 'center',
  },

  'alignItems-baseline': {
    alignItems: 'baseline',
  },
  'alignItems-stretch': {
    alignItems: 'stretch',
  },
  'alignItems-normal': {
    alignItems: 'normal',
  },
  'alignItemsM-flex-start': {
    '@media (max-width: 960px)': {
      alignItems: 'flex-start',
    },
  },
  'alignItemsM-flex-end': {
    '@media (max-width: 960px)': {
      alignItems: 'flex-end',
    },
  },
  'alignItemsM-center': {
    '@media (max-width: 960px)': {
      alignItems: 'center',
    },
  },

  'alignItemsM-baseline': {
    '@media (max-width: 960px)': {
      alignItems: 'baseline',
    },
  },
  'alignItemsM-stretch': {
    '@media (max-width: 960px)': {
      alignItems: 'stretch',
    },
  },
  'alignItemsM-normal': {
    '@media (max-width: 960px)': {
      alignItems: 'normal',
    },
  },
  'flexDirection-row': {
    flexDirection: 'row',
  },
  'flexDirection-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'flexDirection-column': {
    flexDirection: 'column',
  },
  'flexDirection-column-reverse': {
    flexDirection: 'column-reverse',
  },
  'flexDirectionM-row': {
    '@media (max-width: 960px)': {
      flexDirection: 'row',
    },
  },
  'flexDirectionM-row-reverse': {
    '@media (max-width: 960px)': {
      flexDirection: 'row-reverse',
    },
  },
  'flexDirectionM-column': {
    '@media (max-width: 960px)': {
      flexDirection: 'column',
    },
  },
  'flexDirectionM-column-reverse': {
    '@media (max-width: 960px)': {
      flexDirection: 'column-reverse',
    },
  },
  'flexWrap-nowrap': {
    flexWrap: 'nowrap',
  },
  'flexWrap-wrap': {
    flexWrap: 'wrap',
  },
  'flexWrap-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'flexWrapM-nowrap': {
    '@media (max-width: 960px)': {
      flexWrap: 'nowrap',
    },
  },
  'flexWrapM-wrap': {
    '@media (max-width: 960px)': {
      flexWrap: 'wrap',
    },
  },
  'flexWrapM-wrap-reverse': {
    '@media (max-width: 960px)': {
      flexWrap: 'wrap-reverse',
    },
  },
  columnGap0: {
    columnGap: 0,
  },
  columnGap4: {
    columnGap: 4,
  },
  columnGap8: {
    columnGap: 8,
  },
  columnGap12: {
    columnGap: 12,
  },
  columnGap16: {
    columnGap: 16,
  },
  columnGap20: {
    columnGap: 20,
  },
  columnGap24: {
    columnGap: 24,
  },
  columnGap32: {
    columnGap: 32,
  },
  columnGap40: {
    columnGap: 40,
  },
  columnGap48: {
    columnGap: 48,
  },
  columnGap56: {
    columnGap: 56,
  },
  columnGap64: {
    columnGap: 64,
  },
  columnGap72: {
    columnGap: 72,
  },
  columnGap80: {
    columnGap: 80,
  },
  columnGap88: {
    columnGap: 88,
  },
  columnGap96: {
    columnGap: 96,
  },
  columnGap104: {
    columnGap: 104,
  },
  columnGap112: {
    columnGap: 112,
  },
  columnGap120: {
    columnGap: 120,
  },
  columnGap128: {
    columnGap: 128,
  },
  columnGap136: {
    columnGap: 136,
  },
  columnGap144: {
    columnGap: 144,
  },
  columnGap152: {
    columnGap: 152,
  },
  columnGap160: {
    columnGap: 160,
  },
  columnGap168: {
    columnGap: 168,
  },
  columnGap176: {
    columnGap: 176,
  },
  columnGap184: {
    columnGap: 184,
  },
  columnGap192: {
    columnGap: 192,
  },
  columnGap200: {
    columnGap: 200,
  },
  columnGap208: {
    columnGap: 208,
  },
  columnGap216: {
    columnGap: 216,
  },
  columnGap224: {
    columnGap: 224,
  },
  columnGap232: {
    columnGap: 232,
  },
  columnGap240: {
    columnGap: 240,
  },
  columnGap248: {
    columnGap: 248,
  },
  columnGap256: {
    columnGap: 256,
  },
  columnGap264: {
    columnGap: 264,
  },
  columnGap272: {
    columnGap: 272,
  },
  columnGap280: {
    columnGap: 280,
  },
  columnGap320: {
    columnGap: 320,
  },
  columnGapM0: {
    '@media (max-width: 960px)': {
      columnGap: 0,
    },
  },
  columnGapM4: {
    '@media (max-width: 960px)': {
      columnGap: 4,
    },
  },
  columnGapM8: {
    '@media (max-width: 960px)': {
      columnGap: 8,
    },
  },
  columnGapM12: {
    '@media (max-width: 960px)': {
      columnGap: 12,
    },
  },
  columnGapM16: {
    '@media (max-width: 960px)': {
      columnGap: 16,
    },
  },
  columnGapM20: {
    '@media (max-width: 960px)': {
      columnGap: 20,
    },
  },
  columnGapM24: {
    '@media (max-width: 960px)': {
      columnGap: 24,
    },
  },
  columnGapM32: {
    '@media (max-width: 960px)': {
      columnGap: 32,
    },
  },
  columnGapM40: {
    '@media (max-width: 960px)': {
      columnGap: 40,
    },
  },
  columnGapM48: {
    '@media (max-width: 960px)': {
      columnGap: 48,
    },
  },
  columnGapM56: {
    '@media (max-width: 960px)': {
      columnGap: 56,
    },
  },
  columnGapM64: {
    '@media (max-width: 960px)': {
      columnGap: 64,
    },
  },
  columnGapM72: {
    '@media (max-width: 960px)': {
      columnGap: 72,
    },
  },
  columnGapM80: {
    '@media (max-width: 960px)': {
      columnGap: 80,
    },
  },
  columnGapM88: {
    '@media (max-width: 960px)': {
      columnGap: 88,
    },
  },
  columnGapM96: {
    '@media (max-width: 960px)': {
      columnGap: 96,
    },
  },
  columnGapM104: {
    '@media (max-width: 960px)': {
      columnGap: 104,
    },
  },
  columnGapM112: {
    '@media (max-width: 960px)': {
      columnGap: 112,
    },
  },
  columnGapM120: {
    '@media (max-width: 960px)': {
      columnGap: 120,
    },
  },
  columnGapM128: {
    '@media (max-width: 960px)': {
      columnGap: 128,
    },
  },
  columnGapM136: {
    '@media (max-width: 960px)': {
      columnGap: 136,
    },
  },
  columnGapM144: {
    '@media (max-width: 960px)': {
      columnGap: 144,
    },
  },
  columnGapM152: {
    '@media (max-width: 960px)': {
      columnGap: 152,
    },
  },
  columnGapM160: {
    '@media (max-width: 960px)': {
      columnGap: 160,
    },
  },
  columnGapM168: {
    '@media (max-width: 960px)': {
      columnGap: 168,
    },
  },
  columnGapM176: {
    '@media (max-width: 960px)': {
      columnGap: 176,
    },
  },
  columnGapM184: {
    '@media (max-width: 960px)': {
      columnGap: 184,
    },
  },
  columnGapM192: {
    '@media (max-width: 960px)': {
      columnGap: 192,
    },
  },
  columnGapM200: {
    '@media (max-width: 960px)': {
      columnGap: 200,
    },
  },
  columnGapM208: {
    '@media (max-width: 960px)': {
      columnGap: 208,
    },
  },
  columnGapM216: {
    '@media (max-width: 960px)': {
      columnGap: 216,
    },
  },
  columnGapM224: {
    '@media (max-width: 960px)': {
      columnGap: 224,
    },
  },
  columnGapM232: {
    '@media (max-width: 960px)': {
      columnGap: 232,
    },
  },
  columnGapM240: {
    '@media (max-width: 960px)': {
      columnGap: 240,
    },
  },
  columnGapM248: {
    '@media (max-width: 960px)': {
      columnGap: 248,
    },
  },
  columnGapM256: {
    '@media (max-width: 960px)': {
      columnGap: 256,
    },
  },
  columnGapM264: {
    '@media (max-width: 960px)': {
      columnGap: 264,
    },
  },
  columnGapM272: {
    '@media (max-width: 960px)': {
      columnGap: 272,
    },
  },
  columnGapM280: {
    '@media (max-width: 960px)': {
      columnGap: 280,
    },
  },
  columnGapM320: {
    '@media (max-width: 960px)': {
      columnGap: 320,
    },
  },
  rowGap0: {
    rowGap: 0,
  },
  rowGap4: {
    rowGap: 4,
  },
  rowGap8: {
    rowGap: 8,
  },
  rowGap12: {
    rowGap: 12,
  },
  rowGap16: {
    rowGap: 16,
  },
  rowGap20: {
    rowGap: 20,
  },
  rowGap24: {
    rowGap: 24,
  },
  rowGap32: {
    rowGap: 32,
  },
  rowGap40: {
    rowGap: 40,
  },
  rowGap48: {
    rowGap: 48,
  },
  rowGap56: {
    rowGap: 56,
  },
  rowGap64: {
    rowGap: 64,
  },
  rowGap72: {
    rowGap: 72,
  },
  rowGap80: {
    rowGap: 80,
  },
  rowGap88: {
    rowGap: 88,
  },
  rowGap96: {
    rowGap: 96,
  },
  rowGap104: {
    rowGap: 104,
  },
  rowGap112: {
    rowGap: 112,
  },
  rowGap120: {
    rowGap: 120,
  },
  rowGap128: {
    rowGap: 128,
  },
  rowGap136: {
    rowGap: 136,
  },
  rowGap144: {
    rowGap: 144,
  },
  rowGap152: {
    rowGap: 152,
  },
  rowGap160: {
    rowGap: 160,
  },
  rowGap168: {
    rowGap: 168,
  },
  rowGap176: {
    rowGap: 176,
  },
  rowGap184: {
    rowGap: 184,
  },
  rowGap192: {
    rowGap: 192,
  },
  rowGap200: {
    rowGap: 200,
  },
  rowGap208: {
    rowGap: 208,
  },
  rowGap216: {
    rowGap: 216,
  },
  rowGap224: {
    rowGap: 224,
  },
  rowGap232: {
    rowGap: 232,
  },
  rowGap240: {
    rowGap: 240,
  },
  rowGap248: {
    rowGap: 248,
  },
  rowGap256: {
    rowGap: 256,
  },
  rowGap264: {
    rowGap: 264,
  },
  rowGap272: {
    rowGap: 272,
  },
  rowGap280: {
    rowGap: 280,
  },
  rowGap320: {
    rowGap: 320,
  },
  rowGapM0: {
    '@media (max-width: 960px)': {
      rowGap: 0,
    },
  },
  rowGapM4: {
    '@media (max-width: 960px)': {
      rowGap: 4,
    },
  },
  rowGapM8: {
    '@media (max-width: 960px)': {
      rowGap: 8,
    },
  },
  rowGapM12: {
    '@media (max-width: 960px)': {
      rowGap: 12,
    },
  },
  rowGapM16: {
    '@media (max-width: 960px)': {
      rowGap: 16,
    },
  },
  rowGapM20: {
    '@media (max-width: 960px)': {
      rowGap: 20,
    },
  },
  rowGapM24: {
    '@media (max-width: 960px)': {
      rowGap: 24,
    },
  },
  rowGapM32: {
    '@media (max-width: 960px)': {
      rowGap: 32,
    },
  },
  rowGapM40: {
    '@media (max-width: 960px)': {
      rowGap: 40,
    },
  },
  rowGapM48: {
    '@media (max-width: 960px)': {
      rowGap: 48,
    },
  },
  rowGapM56: {
    '@media (max-width: 960px)': {
      rowGap: 56,
    },
  },
  rowGapM64: {
    '@media (max-width: 960px)': {
      rowGap: 64,
    },
  },
  rowGapM72: {
    '@media (max-width: 960px)': {
      rowGap: 72,
    },
  },
  rowGapM80: {
    '@media (max-width: 960px)': {
      rowGap: 80,
    },
  },
  rowGapM88: {
    '@media (max-width: 960px)': {
      rowGap: 88,
    },
  },
  rowGapM96: {
    '@media (max-width: 960px)': {
      rowGap: 96,
    },
  },
  rowGapM104: {
    '@media (max-width: 960px)': {
      rowGap: 104,
    },
  },
  rowGapM112: {
    '@media (max-width: 960px)': {
      rowGap: 112,
    },
  },
  rowGapM120: {
    '@media (max-width: 960px)': {
      rowGap: 120,
    },
  },
  rowGapM128: {
    '@media (max-width: 960px)': {
      rowGap: 128,
    },
  },
  rowGapM136: {
    '@media (max-width: 960px)': {
      rowGap: 136,
    },
  },
  rowGapM144: {
    '@media (max-width: 960px)': {
      rowGap: 144,
    },
  },
  rowGapM152: {
    '@media (max-width: 960px)': {
      rowGap: 152,
    },
  },
  rowGapM160: {
    '@media (max-width: 960px)': {
      rowGap: 160,
    },
  },
  rowGapM168: {
    '@media (max-width: 960px)': {
      rowGap: 168,
    },
  },
  rowGapM176: {
    '@media (max-width: 960px)': {
      rowGap: 176,
    },
  },
  rowGapM184: {
    '@media (max-width: 960px)': {
      rowGap: 184,
    },
  },
  rowGapM192: {
    '@media (max-width: 960px)': {
      rowGap: 192,
    },
  },
  rowGapM200: {
    '@media (max-width: 960px)': {
      rowGap: 200,
    },
  },
  rowGapM208: {
    '@media (max-width: 960px)': {
      rowGap: 208,
    },
  },
  rowGapM216: {
    '@media (max-width: 960px)': {
      rowGap: 216,
    },
  },
  rowGapM224: {
    '@media (max-width: 960px)': {
      rowGap: 224,
    },
  },
  rowGapM232: {
    '@media (max-width: 960px)': {
      rowGap: 232,
    },
  },
  rowGapM240: {
    '@media (max-width: 960px)': {
      rowGap: 240,
    },
  },
  rowGapM248: {
    '@media (max-width: 960px)': {
      rowGap: 248,
    },
  },
  rowGapM256: {
    '@media (max-width: 960px)': {
      rowGap: 256,
    },
  },
  rowGapM264: {
    '@media (max-width: 960px)': {
      rowGap: 264,
    },
  },
  rowGapM272: {
    '@media (max-width: 960px)': {
      rowGap: 272,
    },
  },
  rowGapM280: {
    '@media (max-width: 960px)': {
      rowGap: 280,
    },
  },
  rowGapM320: {
    '@media (max-width: 960px)': {
      rowGap: 320,
    },
  },
});

function Flexbox({
  children,
  className,
  flexWrap = 'nowrap',
  flexDirection = 'row',
  alignItems = 'normal',
  alignContent = 'normal',
  justifyContent = 'normal',
  columnGap = 0,
  rowGap = 0,

  flexWrapM = null,
  flexDirectionM = null,
  alignItemsM = null,
  alignContentM = null,
  justifyContentM = null,
  columnGapM = null,
  rowGapM = null,
}: Props): React$Node {
  return (
    <div
      className={`${className || ''} ${stylex(
        styles.common,
        styles[flexWrap ? `flexWrap-${flexWrap}` : 'flexWrap-nowrap'],
        styles[`flexDirection-${flexDirection}`],
        styles[`alignItems-${alignItems}`],
        styles[`alignContent-${alignContent}`],
        styles[`justifyContent-${justifyContent}`],
        styles[`columnGap${columnGap}`],
        styles[`rowGap${rowGap}`],

        flexWrapM !== null ? styles[`alignContentM-${flexWrapM}`] : null,
        flexDirectionM !== null ? styles[`flexDirectionM-${flexDirectionM}`] : null,
        alignItemsM !== null ? styles[`alignItemsM-${alignItemsM}`] : null,
        alignContentM !== null ? styles[`alignContentM-${alignContentM}`] : null,
        justifyContentM !== null ? styles[`justifyContentM-${justifyContentM}`] : null,
        columnGapM !== null ? styles[`columnGapM${columnGapM}`] : null,
        rowGapM !== null ? styles[`rowGapM${rowGapM}`] : null,
      )}`}
    >
      {children}
    </div>
  );
}

Flexbox.defaultProps = {
  flexWrap: 'nowrap',
  flexDirection: 'row',
  alignItems: 'normal',
  alignContent: 'normal',
  justifyContent: 'normal',
  columnGap: 0,
  rowGap: 0,

  alignContentM: null,
  justifyContentM: null,
  alignItemsM: null,
  flexDirectionM: null,
  flexWrapM: null,
  columnGapM: null,
  rowGapM: null,

  className: '',
  children: null,
};

export default (memo<Props>(Flexbox): React$AbstractComponent<Props, mixed>);
