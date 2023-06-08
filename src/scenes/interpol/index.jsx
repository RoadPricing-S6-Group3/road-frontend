import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react"; // Add useState and useEffect
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import axios from 'axios'; // Import Axios

const Interpol = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [vehicleData, setVehicleData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "model",
      headerName: "model",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "license",
      headerName: "license",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "efficiencyLabel",
      headerName: "efficiencyLabel",
      flex: 1,
    },
    {
      field: "fuelType",
      headerName: "fuelType",
      flex: 1,
    },
    { field: "action", headerName: "action", flex: 0.5 },
    
  ];

  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(function (response) {
        // Handle the successful response
        setVehicleData(response.data);
      })
      .catch(function (error) {
        // Handle the error
        console.log(error);
      });
  }, []);

  return (
    <Box m="20px">
      <Header
        title="Interpol vehicle list"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={vehicleData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Interpol;