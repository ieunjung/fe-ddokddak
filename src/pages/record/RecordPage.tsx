import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CommonHeader from '../../components/layout/CommonHeader';
import { SelectedRangeData } from './CreateRecordPage';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { selectedTimeRangeState } from '../../store/record';
import Spacer from '../../components/common/Spacer';
import { Container } from '@mui/system';
import './RecordPage.css';

const events = [{ title: 'Meeting', start: new Date() }];

const renderEventContent = (eventInfo: any) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

const INITIAL_EVENTS = [
  {
    id: '0',
    title: 'All-day event',
    start: new Date().toISOString().replace(/T.*$/, ''),
  },
  {
    id: '1',
    title: 'Timed event',
    start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
  },
];

const RecordPage = () => {
  const navigation = useNavigate();
  const setSelectedDate = useSetRecoilState<SelectedRangeData>(
    selectedTimeRangeState,
  );

  const handleDateSelect = (e: any) => {
    const selectedDate: SelectedRangeData = {
      start: e.start,
      end: e.end,
    };
    setSelectedDate(selectedDate);
    navigation('/record/create');
  };
  const handleEventClick = (e: any) => {
    console.log(e);
  };
  const handleEvents = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <CommonHeader title={'메인화면'} />
      <Container className={'contentWrapper'}>
        <Spacer y={16} />
        <FullCalendar
          height={'calc(100% - 16px)'}
          allDaySlot={false}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next',
          }}
          eventColor="#FF8999"
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          selectMirror={true}
          // dayMaxEvents={true}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
         contentHeight={'2'}
        />
      </Container>
    </div>
  );
};

export default RecordPage;
