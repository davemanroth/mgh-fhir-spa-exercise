# FHIR Patient Immunization Queryer
This project is a front-end dev exercise for the Front-end Developer position at Mass General Hospital

## Intent
The FHIR Patient Immunization Queryer allows a user to view patient immunization data from the HAPI FHIR API [http://hapi.fhir.org](http://hapi.fhir.org) via an interactive user interface. Originally, specimen data was supposed to be used. However, due to unforeseen changes in the JSON structure, it is no longer possible to obtain patient information within the Specimen resource. No linkage between the 2 data resources meant it was impossible to show the relationship between Specimen and Patient.

## Workaround
The Immunization resource has been used instead because it does contain a patient id. Unfortunatley not all patients in the sandbox API have immunization records. Consequently, there is no immunization data to show for some patients that are listed in the app. Furthermore, the results from any GET bundy query on the API (/Patient or /Immunization) is inconsistent--the number of results and the contents varies.

## Deliverable
The web app renders a series of buttons, each representing a patient pulled from the FHIR sandbox API. Each button shows a patient's gender and birthdate, if available. When a button is clicked on, the button changes color and the corresponding patient's immunization data is displayed, if available. Immunization data includes the name and date of the immunization.

## Approach
The application consists of 5 React components, all of which are stateless functional components, and one service module for api querying. 
- **App** loads all other components
- **Patient** renders a button with patient gender and birth date
- **PatientList** renders an array of patient components
- **Immunization** renders an unordered list with 2 items: an immunization name and date
- **ImmunizationList** renders an array of Immunization components
- **fhirApiQueryer** module that exposes 2 query functions--one for generic Bundle, one for Immunization Bundle based on patient id

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
