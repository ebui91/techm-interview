## Student Attendance Manager
This project was created with React.
Project was only 50% completed within the 1 hour time limit. 

## Depenencies
-  `react-router`
- `json-server`
- `axios`


### Progress so far:
- Routing set up with `react-router`.
- Fake data set up in `db.json` file using `json-server`. We are able to make CRUD requests to this data.
- Components set up: `AttendanceDetail` and `StudentSelection`.
- Front end client making `axios` calls to fetch data from `db.json`, and rendering onto the page in the dropdown menus.
- Local state initialized to store user input for selected values in dropdown menus.
- `json-server` runs on `http://localhost:3001`, while the React client runs on `http://localhost:3000`.

### TO DOs:
- Finish setting up methods in `StudentSelection` component to properly handle user input.
- Send data from student object with routing to `AttendanceDetail` view.
- Conditionally render sections and students based off of the selected class.
