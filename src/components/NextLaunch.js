import React, { useState, useEffect } from 'react';
import Payload from './Payload';

const PAYLOAD = [];

export default function NextLaunch(props) {
  const [payloadData, setPayloadData] = useState(PAYLOAD);
  const nextLaunchData = props.nextLaunchData;

  useEffect(() => {
    nextLaunchData.rocket.second_stage.payloads.forEach((payload) => {
      const newPayload = {
        payload_id: payload.payload_id,
        customer: payload.customers[0],
        nationality: payload.nationality,
        type: payload.payload_type,
        key: payload.payload_id,
      };
      setPayloadData((payloadData) => [...payloadData, newPayload]);
    });
  }, [nextLaunchData]);

  const payloadList = payloadData.map((payload) => (
    <Payload
      payload_id={payload.payload_id}
      payload_type={payload.type}
      payload_customer={payload.customer}
      payload_nationality={payload.nationality}
      key={payload.key}
    />
  ));

  if (!props.loaded) {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title ">{props.nextLaunchData.mission_name}</h2>
          <h5 className="card-subtitle m-2 text-muted">
            {props.nextLaunchData.launch_date_local.slice(0, 10) +
              '  ' +
              props.nextLaunchData.launch_date_local.slice(11, 19) +
              ' (Local: ' +
              props.nextLaunchData.launch_site.site_name +
              ')'}
          </h5>
          <h5 className="card-subtitle m-2 text-muted">
            {props.nextLaunchData.launch_date_utc.slice(0, 10) +
              '   ' +
              props.nextLaunchData.launch_date_utc.slice(11, 19) +
              ' (UTC)'}
          </h5>
          <div className="container next-launch-table">
            <table className="table table-bordered ">
              <tbody>
                <tr>
                  <td>Rocket: </td>
                  <td>{props.nextLaunchData.rocket.rocket_name}</td>
                </tr>
                <tr>
                  <td>Launch site: </td>
                  <td>{props.nextLaunchData.launch_site.site_name_long}</td>
                </tr>
                <tr>
                  <td>Details: </td>
                  <td>{props.nextLaunchData.details}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="payload-cards">
            <h2 className="card-title ">Payloads</h2>
            <div className="card-deck">{payloadList}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title ">Something went wrong...</h2>
      </div>
    </div>
  );
}
