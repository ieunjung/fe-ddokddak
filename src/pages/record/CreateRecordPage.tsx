import {
  Box,
  Button,
  Chip,
  Container,
  createStyles,
  Divider,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Circle from '@/components/common/Circle';
import FlexBox from '@/components/common/FlexBox';
import DaysChip from '@/components/date/DaysChip';
import CommonHeader from '@/components/layout/CommonHeader';
import { MainCategory } from '@/pages/category/CategoryPage';
import { selectedTimeRangeState } from '@/store/record';
// import styles from './CreateRecordPage.module.css';

export interface SelectedRangeData {
  start: Date;
  end: Date;
}

/**
 * 임시 data
 */
const categories: MainCategory[] = [
  {
    title: '직장',
    color: '#20FFD7',
    subCategories: [
      { title: '업무', color: '#C2FFF4' },
      { title: '야근', color: '#C2FFF4' },
      { title: '출장', color: '#C2FFF4' },
      { title: '회식', color: '#C2FFF4' },
    ],
  },
  {
    title: '성장',
    color: '#20FFD7',
    subCategories: [
      { title: '독서', color: '#C2FFF4' },
      { title: '강의', color: '#C2FFF4' },
      { title: '자격증', color: '#C2FFF4' },
    ],
  },
  {
    title: '관계',
    color: '#20FFD7',
    subCategories: [
      { title: '친구', color: '#C2FFF4' },
      { title: '가족', color: '#C2FFF4' },
      { title: '연인', color: '#C2FFF4' },
    ],
  },
  {
    title: '건강',
    color: '#20FFD7',
    subCategories: [
      { title: '잠', color: '#C2FFF4' },
      { title: '식사', color: '#C2FFF4' },
      { title: '운동', color: '#C2FFF4' },
    ],
  },
  {
    title: '낭비',
    color: '#20FFD7',
    subCategories: [
      { title: 'SNS', color: '#C2FFF4' },
      { title: '웹서핑', color: '#C2FFF4' },
      { title: '미디어', color: '#C2FFF4' },
      { title: '멍', color: '#C2FFF4' },
    ],
  },
];

const getAMPM = (date: Date) => {
  const hours = date.getHours();
  const ampm = hours > 12 ? 'PM' : 'AM';
  return ampm;
};

const CreateRecoredPage = (): ReactElement => {
  const selectedDate = useRecoilValue(selectedTimeRangeState);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState(0);

  useEffect(() => {
    setSelectedSubCategoryIdx(0);
  }, [selectedCategoryIdx]);

  return (
    <>
      <CommonHeader title={'기록하기'} isShowBackButton={true} />
      <Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '8px',
          }}
        >
          <DaysChip title="일" isSelected={selectedDate.start.getDay() === 0} />
          <DaysChip title="월" isSelected={selectedDate.start.getDay() === 1} />
          <DaysChip title="화" isSelected={selectedDate.start.getDay() === 2} />
          <DaysChip title="수" isSelected={selectedDate.start.getDay() === 3} />
          <DaysChip title="목" isSelected={selectedDate.start.getDay() === 4} />
          <DaysChip title="금" isSelected={selectedDate.start.getDay() === 5} />
          <DaysChip title="토" isSelected={selectedDate.start.getDay() === 6} />
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '32px',
          }}
        >
          <FlexBox>
            <Typography variant="h5">{`${selectedDate.start.getHours()}:${
              selectedDate.start.getMinutes() === 0
                ? '00'
                : selectedDate.start.getMinutes()
            }`}</Typography>
            <Typography variant="h5">{getAMPM(selectedDate.start)}</Typography>
          </FlexBox>
          <Typography variant="h5">~</Typography>
          <FlexBox>
            <Typography variant="h5">{`${selectedDate.end.getHours()}:${
              selectedDate.end.getMinutes() === 0
                ? '00'
                : selectedDate.end.getMinutes()
            }`}</Typography>
            <Typography variant="h5">{getAMPM(selectedDate.end)}</Typography>
          </FlexBox>
        </Container>
        <Divider />
        <Container sx={{ textAlign: 'right' }}>
          <Button variant="text">카테고리 설정</Button>
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '16px',
          }}
        >
          {categories.map((category, idx) =>
            idx === selectedCategoryIdx ? (
              <Chip
                key={category.title}
                label={category.title}
                variant="filled"
                color="primary"
                size="medium"
                onClick={() => setSelectedCategoryIdx(idx)}
              />
            ) : (
              <Chip
                key={category.title}
                label={category.title}
                variant="outlined"
                size="medium"
                onClick={() => setSelectedCategoryIdx(idx)}
              />
            ),
          )}
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '16px',
          }}
        >
          {categories &&
            categories[selectedCategoryIdx].subCategories.map((sub, idx) => (
              <Circle
                key={sub.title}
                label={sub.title}
                color={sub.color}
                size={40}
                onClick={() => {
                  setSelectedSubCategoryIdx(idx);
                }}
                selected={idx === selectedSubCategoryIdx}
              />
            ))}
        </Container>
        <Divider />
        <Container sx={{ padding: '16px' }}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="메모하기"
            fullWidth
          />
        </Container>
      </Container>
    </>
  );
};

export default CreateRecoredPage;
