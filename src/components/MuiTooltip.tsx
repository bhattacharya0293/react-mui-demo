import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltip = () => {
  return (
    //normally tooltip shows bottom bt using placement we can cutomise
    //arrow gives sharp arrow edge
    //enterDelay delays tooltip display when hover over
    //leaveDelay delays tooltip off when hover remove
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
