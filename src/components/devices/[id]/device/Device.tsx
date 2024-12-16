import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Button } from '@mui/material';
import { GET_DEVICE_URL } from '../../../../services/endpoints';

const Device = () => {
  const { deviceId } = useParams();
  const navigate = useNavigate();
  const [device, setDevice] = React.useState<any>(null);

  React.useEffect(() => {
    if (deviceId) {
      Axios.get(GET_DEVICE_URL(deviceId))
        .then((response) => {
          setDevice(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [deviceId]);

  if (!device) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Device Details</h2>
      <p>ID: {device.id}</p>
      <p>Name: {device.name ? device.name : '[No name available]'}</p>
      <p>Model: {device.model.name}</p>
      <p>Last Report Time: {device.lastReportTime}</p>
      <p>Next Report Time: {device.nextReportTime}</p>
      <br/>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default Device;
