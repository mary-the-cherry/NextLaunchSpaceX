import React from 'react';

export default function Filter(props) {
  function handleFilterClick() {
    if (!props.active) {
      props.setFilterUpcoming(!props.filterUpcoming);
    }
  }

  return (
    <button
      type="button"
      className={`btn btn-secondary ${props.active ? 'active' : ''}`}
      aria-pressed={props.active}
      onClick={handleFilterClick}
    >
      {props.filtername}
      <span className="visually-hidden">Launches</span>
    </button>
  );
}
