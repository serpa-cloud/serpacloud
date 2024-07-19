// @flow
import { memo } from 'react';
import stylex from '@serpa-cloud/stylex';

import type { LayoutSize } from './Flexbox';

export type PaddingProps = {
  top?: LayoutSize | 'auto',
  bottom?: LayoutSize | 'auto',
  left?: LayoutSize | 'auto',
  right?: LayoutSize | 'auto',
  vertical?: LayoutSize,
  horizontal?: LayoutSize,

  topM?: ?(LayoutSize | 'auto'),
  bottomM?: ?(LayoutSize | 'auto'),
  leftM?: ?(LayoutSize | 'auto'),
  rightM?: ?(LayoutSize | 'auto'),
  verticalM?: ?LayoutSize,
  horizontalM?: ?LayoutSize,

  children: React$Node,
  className?: string,
};

const styles = stylex.create({
  top0: {
    paddingTop: 0,
  },
  top4: {
    paddingTop: 4,
  },
  top8: {
    paddingTop: 8,
  },
  top12: {
    paddingTop: 12,
  },
  top16: {
    paddingTop: 16,
  },
  top20: {
    paddingTop: 20,
  },
  top24: {
    paddingTop: 24,
  },
  top32: {
    paddingTop: 32,
  },
  top40: {
    paddingTop: 40,
  },
  top48: {
    paddingTop: 48,
  },
  top56: {
    paddingTop: 56,
  },
  top64: {
    paddingTop: 64,
  },
  top72: {
    paddingTop: 72,
  },
  top80: {
    paddingTop: 80,
  },
  top88: {
    paddingTop: 88,
  },
  top96: {
    paddingTop: 96,
  },
  top104: {
    paddingTop: 104,
  },
  top112: {
    paddingTop: 112,
  },
  top120: {
    paddingTop: 120,
  },
  top128: {
    paddingTop: 128,
  },
  top136: {
    paddingTop: 136,
  },
  top144: {
    paddingTop: 144,
  },
  top152: {
    paddingTop: 152,
  },
  top160: {
    paddingTop: 160,
  },
  top168: {
    paddingTop: 168,
  },
  top176: {
    paddingTop: 176,
  },
  top184: {
    paddingTop: 184,
  },
  top192: {
    paddingTop: 192,
  },
  top200: {
    paddingTop: 200,
  },
  top208: {
    paddingTop: 208,
  },
  top216: {
    paddingTop: 216,
  },
  top224: {
    paddingTop: 224,
  },
  top232: {
    paddingTop: 232,
  },
  top240: {
    paddingTop: 240,
  },
  top248: {
    paddingTop: 248,
  },
  top256: {
    paddingTop: 256,
  },
  top264: {
    paddingTop: 264,
  },
  top272: {
    paddingTop: 272,
  },
  top280: {
    paddingTop: 280,
  },
  top320: {
    paddingTop: 320,
  },
  topM0: {
    '@media (max-width: 960px)': {
      paddingTop: 0,
    },
  },
  topM4: {
    '@media (max-width: 960px)': {
      paddingTop: 4,
    },
  },
  topM8: {
    '@media (max-width: 960px)': {
      paddingTop: 8,
    },
  },
  topM12: {
    '@media (max-width: 960px)': {
      paddingTop: 12,
    },
  },
  topM16: {
    '@media (max-width: 960px)': {
      paddingTop: 16,
    },
  },
  topM20: {
    '@media (max-width: 960px)': {
      paddingTop: 20,
    },
  },
  topM24: {
    '@media (max-width: 960px)': {
      paddingTop: 24,
    },
  },
  topM32: {
    '@media (max-width: 960px)': {
      paddingTop: 32,
    },
  },
  topM40: {
    '@media (max-width: 960px)': {
      paddingTop: 40,
    },
  },
  topM48: {
    '@media (max-width: 960px)': {
      paddingTop: 48,
    },
  },
  topM56: {
    '@media (max-width: 960px)': {
      paddingTop: 56,
    },
  },
  topM64: {
    '@media (max-width: 960px)': {
      paddingTop: 64,
    },
  },
  topM72: {
    '@media (max-width: 960px)': {
      paddingTop: 72,
    },
  },
  topM80: {
    '@media (max-width: 960px)': {
      paddingTop: 80,
    },
  },
  topM88: {
    '@media (max-width: 960px)': {
      paddingTop: 88,
    },
  },
  topM96: {
    '@media (max-width: 960px)': {
      paddingTop: 96,
    },
  },
  topM104: {
    '@media (max-width: 960px)': {
      paddingTop: 104,
    },
  },
  topM112: {
    '@media (max-width: 960px)': {
      paddingTop: 112,
    },
  },
  topM120: {
    '@media (max-width: 960px)': {
      paddingTop: 120,
    },
  },
  topM128: {
    '@media (max-width: 960px)': {
      paddingTop: 128,
    },
  },
  topM136: {
    '@media (max-width: 960px)': {
      paddingTop: 136,
    },
  },
  topM144: {
    '@media (max-width: 960px)': {
      paddingTop: 144,
    },
  },
  topM152: {
    '@media (max-width: 960px)': {
      paddingTop: 152,
    },
  },
  topM160: {
    '@media (max-width: 960px)': {
      paddingTop: 160,
    },
  },
  topM168: {
    '@media (max-width: 960px)': {
      paddingTop: 168,
    },
  },
  topM176: {
    '@media (max-width: 960px)': {
      paddingTop: 176,
    },
  },
  topM184: {
    '@media (max-width: 960px)': {
      paddingTop: 184,
    },
  },
  topM192: {
    '@media (max-width: 960px)': {
      paddingTop: 192,
    },
  },
  topM200: {
    '@media (max-width: 960px)': {
      paddingTop: 200,
    },
  },
  topM208: {
    '@media (max-width: 960px)': {
      paddingTop: 208,
    },
  },
  topM216: {
    '@media (max-width: 960px)': {
      paddingTop: 216,
    },
  },
  topM224: {
    '@media (max-width: 960px)': {
      paddingTop: 224,
    },
  },
  topM232: {
    '@media (max-width: 960px)': {
      paddingTop: 232,
    },
  },
  topM240: {
    '@media (max-width: 960px)': {
      paddingTop: 240,
    },
  },
  topM248: {
    '@media (max-width: 960px)': {
      paddingTop: 248,
    },
  },
  topM256: {
    '@media (max-width: 960px)': {
      paddingTop: 256,
    },
  },
  topM264: {
    '@media (max-width: 960px)': {
      paddingTop: 264,
    },
  },
  topM272: {
    '@media (max-width: 960px)': {
      paddingTop: 272,
    },
  },
  topM280: {
    '@media (max-width: 960px)': {
      paddingTop: 280,
    },
  },
  topM320: {
    '@media (max-width: 960px)': {
      paddingTop: 320,
    },
  },
  left0: {
    paddingLeft: 0,
  },
  left4: {
    paddingLeft: 4,
  },
  left8: {
    paddingLeft: 8,
  },
  left12: {
    paddingLeft: 12,
  },
  left16: {
    paddingLeft: 16,
  },
  left20: {
    paddingLeft: 20,
  },
  left24: {
    paddingLeft: 24,
  },
  left32: {
    paddingLeft: 32,
  },
  left40: {
    paddingLeft: 40,
  },
  left48: {
    paddingLeft: 48,
  },
  left56: {
    paddingLeft: 56,
  },
  left64: {
    paddingLeft: 64,
  },
  left72: {
    paddingLeft: 72,
  },
  left80: {
    paddingLeft: 80,
  },
  left88: {
    paddingLeft: 88,
  },
  left96: {
    paddingLeft: 96,
  },
  left104: {
    paddingLeft: 104,
  },
  left112: {
    paddingLeft: 112,
  },
  left120: {
    paddingLeft: 120,
  },
  left128: {
    paddingLeft: 128,
  },
  left136: {
    paddingLeft: 136,
  },
  left144: {
    paddingLeft: 144,
  },
  left152: {
    paddingLeft: 152,
  },
  left160: {
    paddingLeft: 160,
  },
  left168: {
    paddingLeft: 168,
  },
  left176: {
    paddingLeft: 176,
  },
  left184: {
    paddingLeft: 184,
  },
  left192: {
    paddingLeft: 192,
  },
  left200: {
    paddingLeft: 200,
  },
  left208: {
    paddingLeft: 208,
  },
  left216: {
    paddingLeft: 216,
  },
  left224: {
    paddingLeft: 224,
  },
  left232: {
    paddingLeft: 232,
  },
  left240: {
    paddingLeft: 240,
  },
  left248: {
    paddingLeft: 248,
  },
  left256: {
    paddingLeft: 256,
  },
  left264: {
    paddingLeft: 264,
  },
  left272: {
    paddingLeft: 272,
  },
  left280: {
    paddingLeft: 280,
  },
  left320: {
    paddingLeft: 320,
  },
  leftM0: {
    '@media (max-width: 960px)': {
      paddingLeft: 0,
    },
  },
  leftM4: {
    '@media (max-width: 960px)': {
      paddingLeft: 4,
    },
  },
  leftM8: {
    '@media (max-width: 960px)': {
      paddingLeft: 8,
    },
  },
  leftM12: {
    '@media (max-width: 960px)': {
      paddingLeft: 12,
    },
  },
  leftM16: {
    '@media (max-width: 960px)': {
      paddingLeft: 16,
    },
  },
  leftM20: {
    '@media (max-width: 960px)': {
      paddingLeft: 20,
    },
  },
  leftM24: {
    '@media (max-width: 960px)': {
      paddingLeft: 24,
    },
  },
  leftM32: {
    '@media (max-width: 960px)': {
      paddingLeft: 32,
    },
  },
  leftM40: {
    '@media (max-width: 960px)': {
      paddingLeft: 40,
    },
  },
  leftM48: {
    '@media (max-width: 960px)': {
      paddingLeft: 48,
    },
  },
  leftM56: {
    '@media (max-width: 960px)': {
      paddingLeft: 56,
    },
  },
  leftM64: {
    '@media (max-width: 960px)': {
      paddingLeft: 64,
    },
  },
  leftM72: {
    '@media (max-width: 960px)': {
      paddingLeft: 72,
    },
  },
  leftM80: {
    '@media (max-width: 960px)': {
      paddingLeft: 80,
    },
  },
  leftM88: {
    '@media (max-width: 960px)': {
      paddingLeft: 88,
    },
  },
  leftM96: {
    '@media (max-width: 960px)': {
      paddingLeft: 96,
    },
  },
  leftM104: {
    '@media (max-width: 960px)': {
      paddingLeft: 104,
    },
  },
  leftM112: {
    '@media (max-width: 960px)': {
      paddingLeft: 112,
    },
  },
  leftM120: {
    '@media (max-width: 960px)': {
      paddingLeft: 120,
    },
  },
  leftM128: {
    '@media (max-width: 960px)': {
      paddingLeft: 128,
    },
  },
  leftM136: {
    '@media (max-width: 960px)': {
      paddingLeft: 136,
    },
  },
  leftM144: {
    '@media (max-width: 960px)': {
      paddingLeft: 144,
    },
  },
  leftM152: {
    '@media (max-width: 960px)': {
      paddingLeft: 152,
    },
  },
  leftM160: {
    '@media (max-width: 960px)': {
      paddingLeft: 160,
    },
  },
  leftM168: {
    '@media (max-width: 960px)': {
      paddingLeft: 168,
    },
  },
  leftM176: {
    '@media (max-width: 960px)': {
      paddingLeft: 176,
    },
  },
  leftM184: {
    '@media (max-width: 960px)': {
      paddingLeft: 184,
    },
  },
  leftM192: {
    '@media (max-width: 960px)': {
      paddingLeft: 192,
    },
  },
  leftM200: {
    '@media (max-width: 960px)': {
      paddingLeft: 200,
    },
  },
  leftM208: {
    '@media (max-width: 960px)': {
      paddingLeft: 208,
    },
  },
  leftM216: {
    '@media (max-width: 960px)': {
      paddingLeft: 216,
    },
  },
  leftM224: {
    '@media (max-width: 960px)': {
      paddingLeft: 224,
    },
  },
  leftM232: {
    '@media (max-width: 960px)': {
      paddingLeft: 232,
    },
  },
  leftM240: {
    '@media (max-width: 960px)': {
      paddingLeft: 240,
    },
  },
  leftM248: {
    '@media (max-width: 960px)': {
      paddingLeft: 248,
    },
  },
  leftM256: {
    '@media (max-width: 960px)': {
      paddingLeft: 256,
    },
  },
  leftM264: {
    '@media (max-width: 960px)': {
      paddingLeft: 264,
    },
  },
  leftM272: {
    '@media (max-width: 960px)': {
      paddingLeft: 272,
    },
  },
  leftM280: {
    '@media (max-width: 960px)': {
      paddingLeft: 280,
    },
  },
  leftM320: {
    '@media (max-width: 960px)': {
      paddingLeft: 320,
    },
  },
  right0: {
    paddingRight: 0,
  },
  right4: {
    paddingRight: 4,
  },
  right8: {
    paddingRight: 8,
  },
  right12: {
    paddingRight: 12,
  },
  right16: {
    paddingRight: 16,
  },
  right20: {
    paddingRight: 20,
  },
  right24: {
    paddingRight: 24,
  },
  right32: {
    paddingRight: 32,
  },
  right40: {
    paddingRight: 40,
  },
  right48: {
    paddingRight: 48,
  },
  right56: {
    paddingRight: 56,
  },
  right64: {
    paddingRight: 64,
  },
  right72: {
    paddingRight: 72,
  },
  right80: {
    paddingRight: 80,
  },
  right88: {
    paddingRight: 88,
  },
  right96: {
    paddingRight: 96,
  },
  right104: {
    paddingRight: 104,
  },
  right112: {
    paddingRight: 112,
  },
  right120: {
    paddingRight: 120,
  },
  right128: {
    paddingRight: 128,
  },
  right136: {
    paddingRight: 136,
  },
  right144: {
    paddingRight: 144,
  },
  right152: {
    paddingRight: 152,
  },
  right160: {
    paddingRight: 160,
  },
  right168: {
    paddingRight: 168,
  },
  right176: {
    paddingRight: 176,
  },
  right184: {
    paddingRight: 184,
  },
  right192: {
    paddingRight: 192,
  },
  right200: {
    paddingRight: 200,
  },
  right208: {
    paddingRight: 208,
  },
  right216: {
    paddingRight: 216,
  },
  right224: {
    paddingRight: 224,
  },
  right232: {
    paddingRight: 232,
  },
  right240: {
    paddingRight: 240,
  },
  right248: {
    paddingRight: 248,
  },
  right256: {
    paddingRight: 256,
  },
  right264: {
    paddingRight: 264,
  },
  right272: {
    paddingRight: 272,
  },
  right280: {
    paddingRight: 280,
  },
  right320: {
    paddingRight: 320,
  },
  rightM0: {
    '@media (max-width: 960px)': {
      paddingRight: 0,
    },
  },
  rightM4: {
    '@media (max-width: 960px)': {
      paddingRight: 4,
    },
  },
  rightM8: {
    '@media (max-width: 960px)': {
      paddingRight: 8,
    },
  },
  rightM12: {
    '@media (max-width: 960px)': {
      paddingRight: 12,
    },
  },
  rightM16: {
    '@media (max-width: 960px)': {
      paddingRight: 16,
    },
  },
  rightM20: {
    '@media (max-width: 960px)': {
      paddingRight: 20,
    },
  },
  rightM24: {
    '@media (max-width: 960px)': {
      paddingRight: 24,
    },
  },
  rightM32: {
    '@media (max-width: 960px)': {
      paddingRight: 32,
    },
  },
  rightM40: {
    '@media (max-width: 960px)': {
      paddingRight: 40,
    },
  },
  rightM48: {
    '@media (max-width: 960px)': {
      paddingRight: 48,
    },
  },
  rightM56: {
    '@media (max-width: 960px)': {
      paddingRight: 56,
    },
  },
  rightM64: {
    '@media (max-width: 960px)': {
      paddingRight: 64,
    },
  },
  rightM72: {
    '@media (max-width: 960px)': {
      paddingRight: 72,
    },
  },
  rightM80: {
    '@media (max-width: 960px)': {
      paddingRight: 80,
    },
  },
  rightM88: {
    '@media (max-width: 960px)': {
      paddingRight: 88,
    },
  },
  rightM96: {
    '@media (max-width: 960px)': {
      paddingRight: 96,
    },
  },
  rightM104: {
    '@media (max-width: 960px)': {
      paddingRight: 104,
    },
  },
  rightM112: {
    '@media (max-width: 960px)': {
      paddingRight: 112,
    },
  },
  rightM120: {
    '@media (max-width: 960px)': {
      paddingRight: 120,
    },
  },
  rightM128: {
    '@media (max-width: 960px)': {
      paddingRight: 128,
    },
  },
  rightM136: {
    '@media (max-width: 960px)': {
      paddingRight: 136,
    },
  },
  rightM144: {
    '@media (max-width: 960px)': {
      paddingRight: 144,
    },
  },
  rightM152: {
    '@media (max-width: 960px)': {
      paddingRight: 152,
    },
  },
  rightM160: {
    '@media (max-width: 960px)': {
      paddingRight: 160,
    },
  },
  rightM168: {
    '@media (max-width: 960px)': {
      paddingRight: 168,
    },
  },
  rightM176: {
    '@media (max-width: 960px)': {
      paddingRight: 176,
    },
  },
  rightM184: {
    '@media (max-width: 960px)': {
      paddingRight: 184,
    },
  },
  rightM192: {
    '@media (max-width: 960px)': {
      paddingRight: 192,
    },
  },
  rightM200: {
    '@media (max-width: 960px)': {
      paddingRight: 200,
    },
  },
  rightM208: {
    '@media (max-width: 960px)': {
      paddingRight: 208,
    },
  },
  rightM216: {
    '@media (max-width: 960px)': {
      paddingRight: 216,
    },
  },
  rightM224: {
    '@media (max-width: 960px)': {
      paddingRight: 224,
    },
  },
  rightM232: {
    '@media (max-width: 960px)': {
      paddingRight: 232,
    },
  },
  rightM240: {
    '@media (max-width: 960px)': {
      paddingRight: 240,
    },
  },
  rightM248: {
    '@media (max-width: 960px)': {
      paddingRight: 248,
    },
  },
  rightM256: {
    '@media (max-width: 960px)': {
      paddingRight: 256,
    },
  },
  rightM264: {
    '@media (max-width: 960px)': {
      paddingRight: 264,
    },
  },
  rightM272: {
    '@media (max-width: 960px)': {
      paddingRight: 272,
    },
  },
  rightM280: {
    '@media (max-width: 960px)': {
      paddingRight: 280,
    },
  },
  rightM320: {
    '@media (max-width: 960px)': {
      paddingRight: 320,
    },
  },
  bottom0: {
    paddingBottom: 0,
  },
  bottom4: {
    paddingBottom: 4,
  },
  bottom8: {
    paddingBottom: 8,
  },
  bottom12: {
    paddingBottom: 12,
  },
  bottom16: {
    paddingBottom: 16,
  },
  bottom20: {
    paddingBottom: 20,
  },
  bottom24: {
    paddingBottom: 24,
  },
  bottom32: {
    paddingBottom: 32,
  },
  bottom40: {
    paddingBottom: 40,
  },
  bottom48: {
    paddingBottom: 48,
  },
  bottom56: {
    paddingBottom: 56,
  },
  bottom64: {
    paddingBottom: 64,
  },
  bottom72: {
    paddingBottom: 72,
  },
  bottom80: {
    paddingBottom: 80,
  },
  bottom88: {
    paddingBottom: 88,
  },
  bottom96: {
    paddingBottom: 96,
  },
  bottom104: {
    paddingBottom: 104,
  },
  bottom112: {
    paddingBottom: 112,
  },
  bottom120: {
    paddingBottom: 120,
  },
  bottom128: {
    paddingBottom: 128,
  },
  bottom136: {
    paddingBottom: 136,
  },
  bottom144: {
    paddingBottom: 144,
  },
  bottom152: {
    paddingBottom: 152,
  },
  bottom160: {
    paddingBottom: 160,
  },
  bottom168: {
    paddingBottom: 168,
  },
  bottom176: {
    paddingBottom: 176,
  },
  bottom184: {
    paddingBottom: 184,
  },
  bottom192: {
    paddingBottom: 192,
  },
  bottom200: {
    paddingBottom: 200,
  },
  bottom208: {
    paddingBottom: 208,
  },
  bottom216: {
    paddingBottom: 216,
  },
  bottom224: {
    paddingBottom: 224,
  },
  bottom232: {
    paddingBottom: 232,
  },
  bottom240: {
    paddingBottom: 240,
  },
  bottom248: {
    paddingBottom: 248,
  },
  bottom256: {
    paddingBottom: 256,
  },
  bottom264: {
    paddingBottom: 264,
  },
  bottom272: {
    paddingBottom: 272,
  },
  bottom280: {
    paddingBottom: 280,
  },
  bottom320: {
    paddingBottom: 320,
  },
  bottomM0: {
    '@media (max-width: 960px)': {
      paddingBottom: 0,
    },
  },
  bottomM4: {
    '@media (max-width: 960px)': {
      paddingBottom: 4,
    },
  },
  bottomM8: {
    '@media (max-width: 960px)': {
      paddingBottom: 8,
    },
  },
  bottomM12: {
    '@media (max-width: 960px)': {
      paddingBottom: 12,
    },
  },
  bottomM16: {
    '@media (max-width: 960px)': {
      paddingBottom: 16,
    },
  },
  bottomM20: {
    '@media (max-width: 960px)': {
      paddingBottom: 20,
    },
  },
  bottomM24: {
    '@media (max-width: 960px)': {
      paddingBottom: 24,
    },
  },
  bottomM32: {
    '@media (max-width: 960px)': {
      paddingBottom: 32,
    },
  },
  bottomM40: {
    '@media (max-width: 960px)': {
      paddingBottom: 40,
    },
  },
  bottomM48: {
    '@media (max-width: 960px)': {
      paddingBottom: 48,
    },
  },
  bottomM56: {
    '@media (max-width: 960px)': {
      paddingBottom: 56,
    },
  },
  bottomM64: {
    '@media (max-width: 960px)': {
      paddingBottom: 64,
    },
  },
  bottomM72: {
    '@media (max-width: 960px)': {
      paddingBottom: 72,
    },
  },
  bottomM80: {
    '@media (max-width: 960px)': {
      paddingBottom: 80,
    },
  },
  bottomM88: {
    '@media (max-width: 960px)': {
      paddingBottom: 88,
    },
  },
  bottomM96: {
    '@media (max-width: 960px)': {
      paddingBottom: 96,
    },
  },
  bottomM104: {
    '@media (max-width: 960px)': {
      paddingBottom: 104,
    },
  },
  bottomM112: {
    '@media (max-width: 960px)': {
      paddingBottom: 112,
    },
  },
  bottomM120: {
    '@media (max-width: 960px)': {
      paddingBottom: 120,
    },
  },
  bottomM128: {
    '@media (max-width: 960px)': {
      paddingBottom: 128,
    },
  },
  bottomM136: {
    '@media (max-width: 960px)': {
      paddingBottom: 136,
    },
  },
  bottomM144: {
    '@media (max-width: 960px)': {
      paddingBottom: 144,
    },
  },
  bottomM152: {
    '@media (max-width: 960px)': {
      paddingBottom: 152,
    },
  },
  bottomM160: {
    '@media (max-width: 960px)': {
      paddingBottom: 160,
    },
  },
  bottomM168: {
    '@media (max-width: 960px)': {
      paddingBottom: 168,
    },
  },
  bottomM176: {
    '@media (max-width: 960px)': {
      paddingBottom: 176,
    },
  },
  bottomM184: {
    '@media (max-width: 960px)': {
      paddingBottom: 184,
    },
  },
  bottomM192: {
    '@media (max-width: 960px)': {
      paddingBottom: 192,
    },
  },
  bottomM200: {
    '@media (max-width: 960px)': {
      paddingBottom: 200,
    },
  },
  bottomM208: {
    '@media (max-width: 960px)': {
      paddingBottom: 208,
    },
  },
  bottomM216: {
    '@media (max-width: 960px)': {
      paddingBottom: 216,
    },
  },
  bottomM224: {
    '@media (max-width: 960px)': {
      paddingBottom: 224,
    },
  },
  bottomM232: {
    '@media (max-width: 960px)': {
      paddingBottom: 232,
    },
  },
  bottomM240: {
    '@media (max-width: 960px)': {
      paddingBottom: 240,
    },
  },
  bottomM248: {
    '@media (max-width: 960px)': {
      paddingBottom: 248,
    },
  },
  bottomM256: {
    '@media (max-width: 960px)': {
      paddingBottom: 256,
    },
  },
  bottomM264: {
    '@media (max-width: 960px)': {
      paddingBottom: 264,
    },
  },
  bottomM272: {
    '@media (max-width: 960px)': {
      paddingBottom: 272,
    },
  },
  bottomM280: {
    '@media (max-width: 960px)': {
      paddingBottom: 280,
    },
  },
  bottomM320: {
    '@media (max-width: 960px)': {
      paddingBottom: 320,
    },
  },
});

function Padding({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  vertical = 0,
  horizontal = 0,

  topM = null,
  rightM = null,
  bottomM = null,
  leftM = null,
  verticalM = null,
  horizontalM = null,

  className,
  children,
}: PaddingProps): React$Node {
  return (
    <div
      className={`${className ?? ''} ${stylex(
        styles[vertical || top ? `top${vertical || top}` : 'top0'],
        styles[`bottom${vertical || bottom}`],
        styles[`left${horizontal || left}`],
        styles[`right${horizontal || right}`],
        verticalM !== null ? styles[`topM${verticalM}`] : null,
        topM !== null ? styles[`topM${topM}`] : null,
        verticalM !== null ? styles[`bottomM${verticalM}`] : null,
        bottomM !== null ? styles[`bottomM${bottomM}`] : null,
        horizontalM !== null ? styles[`leftM${horizontalM}`] : null,
        leftM !== null ? styles[`leftM${leftM}`] : null,
        horizontalM !== null ? styles[`rightM${horizontalM}`] : null,
        rightM !== null ? styles[`rightM${rightM}`] : null,
      )}`}
    >
      {children}
    </div>
  );
}

Padding.defaultProps = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  vertical: 0,
  horizontal: 0,
  topM: null,
  leftM: null,
  bottomM: null,
  rightM: null,
  verticalM: null,
  horizontalM: null,
  className: '',
};

export default (memo<PaddingProps>(Padding): React$AbstractComponent<PaddingProps, mixed>);
