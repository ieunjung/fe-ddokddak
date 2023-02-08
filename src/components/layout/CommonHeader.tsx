import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export interface CommonHeaderProps {
  title: string;
  isShowBackButton?: boolean;
  rightButtonIcon?: ReactElement;
  isShowRightButton?: boolean;
  onClickRightButton?: (event: React.MouseEvent<HTMLElement>) => {};
}

const CommonHeader = (props: CommonHeaderProps) => {
  const navigation = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {props.isShowBackButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigation(-1)}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {props.isShowRightButton && (
            <IconButton onClick={props.onClickRightButton}>
              {props.rightButtonIcon}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CommonHeader;
