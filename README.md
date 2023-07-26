## Health Center Project

### Introduction

The Health Center FrontEnd project is a web application built using React and Chakra UI that serves as a digital health center management system. The application allows users to manage patients' records, medical records, and medical sheets.

### Features

The Health Center project includes the following features:

1. **Create a User**: Users can create a new user, providing essential details such as name, username, phone number, email address, and password.

2. **Search User by ID**: Users can search for a user by their ID to view their details.

3. **Toggle Password Visibility**: The password input field includes an option to toggle password visibility, allowing users to view the password they are typing.

4. **Submit User Data**: The application allows users to submit the user data to the backend through an API endpoint for storage and processing.

5. **View User Information**: The application fetches user information from the backend and displays it dynamically in the search form.

6. **Error Handling**: The form includes validation for required fields and displays appropriate error messages for invalid inputs.

7. **User Login**: The application provides a user login functionality to access personalized features. Users can sign in using their registered email address and password.

8. **Remember Me Checkbox**: Users can check the "Remember me" checkbox to remember their login credentials for future sessions.

9. **Forgot Password Link**: The application includes a link to reset the password in case the user forgets it.

10. **Sign-in Button**: After providing the email and password, users can click the "Sign in" button to attempt to log in.

### Usage

1. Install the required dependencies using `npm install` or `yarn install`.

2. Run the application using `npm start` or `yarn start`.

3. Access the application via a web browser at `http://localhost:3000`.

4. Fill in the form to create a new user by providing the necessary information.

5. Click the "Create" button to submit the user data to the backend for processing.

6. Use the search feature to enter a user ID and click the "Search" button to fetch and display the user's details dynamically.

### Notes

- The application utilizes the Chakra UI library for building a responsive user interface.

- The `useForm` hook from `react-hook-form` is used for form validation and submission.

- The user data is sent to the backend through a POST request to the `https://localhost:44348/user` endpoint for creation and a GET request to the `https://localhost:44348/user/2` endpoint for searching.

### Contributing

This project is for personal practice, but if you have any suggestions or improvements for the Health Center application or its code, feel free to submit a pull request. Any constructive contributions are welcome.

### License

This code is available under the Orlando Sanchez. Check the LICENSE file for more details.

### Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
