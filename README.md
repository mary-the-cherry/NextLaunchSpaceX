# Next Space X Launch

## Purpose

To learn React funcionalities:
- Fetch data in React with async/await
- Using reusable Render Prop Components
- Using the Slick react Lib

## The APP

Single side Api which:
- shows the next Space X Launch
- shows all upcoming and past space x launches in a carousel

Funcionality:
- Button to decide if you see all past or all upcoming launches

## Component Overview

- FetchData: Component to fetch data from a api (Render Prop Component)

	Input: URL:string
	Output: error:error, isLoading:boolean, data:fetched data

       --> while fetching data Component returns the status is Loading
       --> if no fetching is possible Component returns an error  
       --> returns fetched data to its children

- Filter: Component to Filter the Launches (Past or Upcoming Launches)

	Input: active:boolean, filterUpcoming:boolean, filtername:string, setFilterUpcoming (to change state in App.js)
	
	--> creats a filter button whichs changes state in App.js on click

- LaunchOverview: Component to initialize Slick Carousel and create datalist for carousel

	Input: data:fetched json data (created from FetchData), filterUpcoming: boolean 

- NextLaunch: create Card with next Launch data

	Input: data: fetched json data (created from FetchData), loaded: boolean (created from FetchData)

	--> while loading component a payload overview is created
	-->created card with data of next launch incl. a card deck of the payloads of the rocket
	--> calls the component Payload for each payload in payloadList 

- Launch: component called from LaunchOverview for each Launch and creates a card with this data

	Input: mission_name:string, date_utc:string,site_name:string

	
- Payload: component called from NextLaunch for each payload of this launch and creats a card for this payload

	Input: payload_id: string, payload_type: string, payload_customer: string, payload_nationality:string


## Online Version

https://never-miss-a-space-x-launch.netlify.app/