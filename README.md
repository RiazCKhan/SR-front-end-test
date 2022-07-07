### Libraries Installed

- Axios
- React Beautiful DND
- Font Awesome
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome

### Install dependencies

```
yarn
```

### Start the app

```
yarn start
```

### [Figma Link](https://www.figma.com/file/CkOra5bdQoqkejhX77P3eq/Dynamic-Form?node-id=0%3A1)

### Final Results
![pic](https://i.imgur.com/hy4byFj.gif)

#### Features
- Drag and drop section
- Input fields for Strings and Numbers
- Dropdown for inputs that require it
- Submission check, so if a field is require the form will not submit.
- There are 2 sets of data in the data folder make sure your form is compatible with both.

#### Submitting the Form
If all the required items are filled out in the form, make a `POST` request to `https://localhost:3000/api/form`. This will return an error but we just want to see the API submission code as part of your final product. Send over the same `API` data that you were but with the inputted data and updated drag and drop position.

## Submission

Update this README file by answering the questions below.

### Date Or Reflection

I worked on the assignment over the course of two days July 4-6, 2022.
On July 7. 2022 I spent time recording my answers to the questions in the README

### Instructions to run assignment locally

```
npm install - install dependencies
```

```
npm start - run assignment locally
```

### Time spent

I spent a total of 12.0 hours working on the assignment.

### API Changes

I made no changes to the provided APIs

### Assumptions made

I made the assumption that the location of the customer and shipment data within the API data structure would remain constant across future APIs. Therefore if the future API data structure changed the application will break.

### Shortcuts/Compromises made

If applicable. Did you do something that you feel could have been done better in a real-world application? Please let us know.

In the real-world I am certain this application would have more components / pages and features. Therefore outside of the assignment I believe the 

1. structure: the introduction of additional features means the structure would need to be revisited to ensure adequate ‘water falling’ (parent-child).
2. state management: given an opportunity to converse with peers a clearer state management solution to the customer form can also be found and applied. 
3. modularity: there are segments of my application that are not DRY (repeated code). The application can benefit from refactoring. 

All things considered in a real world application there are most likely additional technologies to take into consideration such as Redux.

### What would be your approach to ensuring the application is ready for production (testing)?

1. Create a Mock Axios call through jest to test the form submission 
2. Unit test helper functions to ensure expected inputs and outputs

### If your form was given a new type of input field (such as a password), how reusable are your components?

The ShipmentListItem component is capable of re-useability. However the component can be further broken down into smaller pieces to increase dyanmic re-useability.

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

1. CSS Media Queries, the application is not responsive and is best viewed between 1125px x 895px (and up)
2. Accessibility, the application is not ready to interface with accessibility tools like screen readers. 

### Other information about your submission that you feel it's important that we know if applicable.

I found the instruction "Not all fields are required; no required fields may be left blank." to be unclear. Exactly what fields are required and what fields are not required for form submission. This is a question I would have liked to ask the team.

### Your feedback on this technical challenge

Have feedback for how we could make this assignment better? Please let us know.
