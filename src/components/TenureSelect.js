
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React from 'react'
import { Stack } from '@mui/material';

const TenureSelect = ({ data, setData }) => {

    const handleChange = (event) => {
        setData(
            {
                ...data,
                loanTerm: event.target.value
            }
        )
    };
    return (
        <Stack marginTop={4} marginX={5} marginBottom={15}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.loanTerm}
                    label="Tenure"
                    onChange={handleChange}
                    defaultValue={5}
                >
                    <MenuItem value={5}>5 yrs</MenuItem>
                    <MenuItem value={10}>10 yrs</MenuItem>
                    <MenuItem value={15}>15 yrs</MenuItem>
                    <MenuItem value={20}>20 yrs</MenuItem>
                    <MenuItem value={25}>25 yrs</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    )
}

export default TenureSelect