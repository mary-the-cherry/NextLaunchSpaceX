import React from 'react';

export default function Launch(props) {
  return (
    <div className="card shadow p-3 flex-fill">
      <h3 className="card-title">{props.mission_name}</h3>
      <p className="card-subtitle text-muted">{props.date_utc.slice(0, 10)} </p>
      <p className="card-subtitle text-muted">
        {props.date_utc.slice(11, 19)} (UTC){' '}
      </p>
      <p className="card-subtitle text-muted">
        ( Location: {props.site_name} )
      </p>
    </div>
  );
}
