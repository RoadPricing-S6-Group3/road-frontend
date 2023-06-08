import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react"; // Add useState and useEffect
import Header from "../../components/Header";
import axios from 'axios'; // Import Axios
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [invoiceData, setInvoiceData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "userId",
      headerName: "userId",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "routeId",
      headerName: "RouteId",
      flex: 0.5,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "paymentStatus",
      headerName: "status",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    { field: "action", headerName: "action", flex: 0.5 },
    {
      field: "action",
      headerName: "action",
      flex: 1,
      renderCell: ({ row: { action } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              action === "admin"
                ? colors.greenAccent[600]
                : action === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {action === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {action === "manager" && <SecurityOutlinedIcon />}
            {action === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {action}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
        }}
      >
        <DataGrid checkboxSelection rows={invoiceData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;