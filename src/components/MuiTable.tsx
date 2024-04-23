import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} elevation={4} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

//https://www.mockaroo.com/ for dummy data
const tableData = [
  {
    id: 1,
    first_name: "Janek",
    last_name: "Hutcheon",
    email: "jhutcheon0@sina.com.cn",
    gender: "Male",
    ip_address: "94.171.61.88",
  },
  {
    id: 2,
    first_name: "Jobie",
    last_name: "Wandless",
    email: "jwandless1@narod.ru",
    gender: "Female",
    ip_address: "79.204.69.127",
  },
  {
    id: 3,
    first_name: "Logan",
    last_name: "Gianinotti",
    email: "lgianinotti2@irs.gov",
    gender: "Male",
    ip_address: "137.99.172.36",
  },
  {
    id: 4,
    first_name: "Alayne",
    last_name: "Crosswaite",
    email: "acrosswaite3@moonfruit.com",
    gender: "Female",
    ip_address: "240.174.144.247",
  },
  {
    id: 5,
    first_name: "Nanci",
    last_name: "Brenneke",
    email: "nbrenneke4@friendfeed.com",
    gender: "Female",
    ip_address: "71.210.135.221",
  },
  {
    id: 6,
    first_name: "Wald",
    last_name: "Oliveira",
    email: "woliveira5@mapy.cz",
    gender: "Male",
    ip_address: "66.120.83.214",
  },
  {
    id: 7,
    first_name: "Brittaney",
    last_name: "Wilsone",
    email: "bwilsone6@netvibes.com",
    gender: "Female",
    ip_address: "3.200.15.31",
  },
  {
    id: 8,
    first_name: "Holli",
    last_name: "Potticary",
    email: "hpotticary7@github.io",
    gender: "Female",
    ip_address: "229.209.61.100",
  },
  {
    id: 9,
    first_name: "Glynnis",
    last_name: "Elgood",
    email: "gelgood8@zdnet.com",
    gender: "Polygender",
    ip_address: "22.112.165.219",
  },
  {
    id: 10,
    first_name: "Emanuel",
    last_name: "Targett",
    email: "etargett9@admin.ch",
    gender: "Male",
    ip_address: "138.34.164.10",
  },
];

export default MuiTable;
