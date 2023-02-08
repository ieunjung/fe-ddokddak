import { atom } from 'recoil';

import { SelectedRangeData } from '@/pages/record/CreateRecordPage';

export const selectedTimeRangeState = atom({
  key: 'selectedTimeRangeState',
  default: {} as SelectedRangeData,
});
