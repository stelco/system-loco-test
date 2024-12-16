import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/date';
import { LIST_DEVICES_URL } from '../../services/endpoints';

const DevicesGrid = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState<GridRowsProp[]>([]);
  const [columns] = React.useState<GridColDef[]>([
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'modelName', headerName: 'Model Name', width: 150 },
    { field: 'lastReportTime', headerName: 'Last Report Time', width: 200 },
    { field: 'nextReportTime', headerName: 'Next Report Time', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/devices/${params.row.id}`)}
        >
          Go to Device
        </Button>
      ),
    },
  ]);

  React.useEffect(() => {
    Axios.get(LIST_DEVICES_URL)
      .then((response) => {
        console.log(response.data);
        setRows(response.data.results.map((device: any) => ({
          id: device.id,
          name: device.name,
          modelName: device.model.name,
          lastReportTime: formatDate(device.lastReportTime),
          nextReportTime: formatDate(device.nextReportTime),
        })));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowClassName={() => `grid-row-color`}
        loading={rows.length === 0}
      />
    </div>
  );
};

export default DevicesGrid;