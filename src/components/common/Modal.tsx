import { Box, Modal as MuiModal } from '@mui/material';
import { useRecoilState } from 'recoil';

import { modalState } from '@/store/common';

const Modal = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalState);
  const handleClose = () => setModalInfo({ ...modalInfo, open: false });

  return (
    <MuiModal
      open={modalInfo.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="modal-modal-title">{modalInfo.title}</h2>
        <p id="modal-modal-description">{modalInfo.msg}</p>
      </Box>
    </MuiModal>
  );
};

export default Modal;
