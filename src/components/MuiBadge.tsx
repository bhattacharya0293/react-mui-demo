import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>

      <Badge
        badgeContent={0}
        color="secondary"
        showZero //shows 0 else nothing is displayed
      >
        <MailIcon />
      </Badge>

      <Badge
        badgeContent={100}
        color="primary"
        max={999} // Normally badge shows 99+ if max prop is not used
      >
        <MailIcon />
      </Badge>

      <Badge
        variant="dot"
        color="primary"
        invisible={true} //if used then badge will be not displayed
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
