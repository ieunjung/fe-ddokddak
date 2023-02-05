import {InputLabel, MenuItem, FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type OptionType = {
    title: string;
    value: any;
}

interface ISelectBoxProps {
    label: string;
    value: any;
    optionList: OptionType[];
    callback: Function
}

const SelectLabels = ({label, value, optionList, callback}: ISelectBoxProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    callback(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="select-box-label">{label}</InputLabel>
        <Select
            autoWidth
            label={label}
            labelId="select-box-label"
            id="select-box"
            value={value}
            onChange={handleChange}
        >
            {optionList.map((option, idx) => 
                <MenuItem key={'option-'+ idx} value={option.value || ''}>{option.title}</MenuItem>
            )}
        </Select>
    </FormControl>
  );
}

export default SelectLabels;