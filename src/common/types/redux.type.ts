import { ETheme } from '@common/enums';
import { EPlayerStatus } from '@common/enums/player.enum';

export type TReduxPlayer = {
  name: string;
  status: EPlayerStatus.IDLE;
};

export type TReduxSystem = {
  theme: ETheme;
};
