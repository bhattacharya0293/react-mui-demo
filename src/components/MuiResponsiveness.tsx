import React from "react";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  // backgroundColor: theme.status.danger,
  backgroundColor: theme.palette.neutral?.dark,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
