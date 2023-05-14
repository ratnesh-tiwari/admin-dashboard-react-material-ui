import React from "react";
import { Box } from "@mui/material";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Team = () => {
  const columns = [
    { feild: "id", headerName: "ID", flex: 0.5 },
    { feild: "registrarId", headerName: "Registrar ID", flex: 0.5 },
    {
      feild: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      feild: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left"
    },
    { feild: "phone", headerName: "Phone Number", flex: 1 },
    { feild: "email", headerName: "Email", flex: 1 },
    { feild: "address", headerName: "Address", flex: 1 },
    { feild: "city", headerName: "City", flex: 1 },
    { feild: "zipCode", headerName: "ZipCode", flex: 1 }
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of contacts for future reference"
      />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;
