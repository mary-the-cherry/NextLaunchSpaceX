import React, { useState } from 'react';
import NextLaunch from './components/NextLaunch';
import LaunchOverview from './components/LaunchOverview';
import FetchData from './components/FetchData';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';

function App() {
  // Main App which shows the next launch of a space x rocket
  // All functianiliets implemented via components: FetchData, NextLaunch, Filter and LaunchOverview

  const [filterUpcoming, setFilterUpcoming] = useState(true); //state to safe if user want to see upcoming or past launches

  return (
    <div className="App">
      <div className="container-light-full">
        <div className="container">
          <header className="App-header">
            <h1 className="">Next Space X Launch</h1>
            <h3 className="p-2">Never miss a launch again!</h3>
          </header>
          <FetchData url="https://api.spacexdata.com/v3/launches/next">
            {({ data, isLoading, error }) => {
              //Data is fetched via Fetch data component and can be used in children

              //Depending on the returned data a
              //    - error message is shown
              //    - a data loading info is shown
              //    - the fetched data is shown via a child component
              if (error) {
                return <p>Something went wrong...</p>;
              }
              if (isLoading) {
                return (
                  <div className="card shadow">
                    <div className="card-body">
                      <h2 className="card-title ">Loading data ...</h2>
                    </div>
                  </div>
                );
              }
              if (data) {
                return <NextLaunch nextLaunchData={data} loaded={isLoading} />;
              }
              return <p>No data ....</p>;
            }}
          </FetchData>
        </div>
        <div className="all-launches-overview">
          <h2 className="mt-5">Launch Overview</h2>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Filter button group"
          >
            <Filter
              filtername="Upcoming"
              active={filterUpcoming}
              filterUpcoming={filterUpcoming}
              setFilterUpcoming={setFilterUpcoming}
              key="fgcgmc"
            />
            <Filter
              filtername="Past"
              active={!filterUpcoming}
              filterUpcoming={filterUpcoming}
              setFilterUpcoming={setFilterUpcoming}
              key="fgvhvc"
            />
          </div>
          <div className="container">
            <FetchData
              url={
                filterUpcoming
                  ? 'https://api.spacexdata.com/v3/launches/upcoming'
                  : 'https://api.spacexdata.com/v3/launches/past'
              }
            >
              {({ data, isLoading, error }) => {
                //Data is fetched via Fetch data component and can be used in children

                //Depending on the returned data a
                //    - error message is shown
                //    - a data loading info is shown
                //    - the fetched data is shown via a child component

                if (isLoading) {
                  return <h2 className="m-4">Is loading...</h2>;
                }
                if (error) {
                  return <p>Something went wrong...</p>;
                }
                if (data) {
                  return (
                    <div>
                      <LaunchOverview
                        launches={data}
                        filterUpcoming={filterUpcoming}
                        key={nanoid()}
                      />
                    </div>
                  );
                }
                return <p>No data</p>;
              }}
            </FetchData>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
