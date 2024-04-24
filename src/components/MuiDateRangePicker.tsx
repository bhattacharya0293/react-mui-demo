import React, { useState } from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log("value: ", value);

  return (
    <Box width="500px">
      <DateRangePicker
        value={value}
        // startText="Check-in"
        // endText="Check-out"
        onChange={(newValue: React.SetStateAction<DateRange<Date>>) => {
          setValue(newValue);
        }}
        // renderInput={(
        //   startProps: JSX.IntrinsicAttributes & TextFieldProps,
        //   endProps: JSX.IntrinsicAttributes & TextFieldProps
        // ) => {
        //   <>
        //     <TextField {...startProps} />
        //     <Box sx={{ mx: 2 }}> to </Box>
        //     <TextField {...endProps} />
        //   </>;
        // }}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
