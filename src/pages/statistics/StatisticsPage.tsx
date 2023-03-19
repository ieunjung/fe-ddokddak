import Period from './Period';

import CommonHeader from '@/components/layout/CommonHeader';
import ChartContainer from '@/pages/statistics/ChartContainer';
// import { useRecoilState } from 'recoil';
// import { modalState } from '@/store/common';

const StatisticsPage = () => {
  // const [modalInfo, setModalInfo] = useRecoilState(modalState);
  // const handleClickBtn = () => {
  //   setModalInfo({ ...modalInfo, open: true, msg: 'This is a test.' });
  // };

  return (
    <>
      <CommonHeader title={'통계'} isShowBackButton={true} />
      {/* <button onClick={handleClickBtn}>POPUP TEST</button> */}

      <Period />
      <ChartContainer />
    </>
  );
};

export default StatisticsPage;
