import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log({ country });
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("typeof: ", value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  const name = ["IN", "US", "AU"];

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
      <TextField
        label="Select Countries"
        select
        value={countries}
        onChange={handleChanges}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
      {/* Try Checkmark 
      Try Chip */}
    </Box>
  );
};

export default MuiSelect;
