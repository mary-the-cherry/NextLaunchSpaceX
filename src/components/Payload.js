import React from 'react';

export default function Payload(props) {
  return (
    <div className="card shadow ">
      <h4 className="card-title mt-3">{props.payload_id}</h4>
      <div className="container payload-table">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Customer:</td>
              <td>{props.payload_customer}</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>{props.payload_nationality}</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{props.payload_type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
