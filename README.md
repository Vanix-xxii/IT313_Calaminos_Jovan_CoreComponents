# IT313 Laboratory 6: React Native Core Components in Action

## Student Directory Viewer

**Student Name:** Jovan Calaminos  
**Course:** IT313  
**Project:** React Native Core Components

## Project Description

The Student Directory Viewer is a simple React Native application that displays a list of students. Users can search for students by name or year level and mark students who need advising.

The application demonstrates the use of React Native core components, component props, state management, and basic event handling.

## Student Records

The application contains five student records:

| Student ID | Name       | Year Level |
| ---------- | ---------- | ---------- |
| s1         | Ana Cruz   | 3rd Year   |
| s2         | Bea Santos | 2nd Year   |
| s3         | Cid Ramos  | 4th Year   |
| s4         | Dex Alonzo | 1st Year   |
| s5         | Eli Tan    | 3rd Year   |

## Component Structure

### StudentDirectory

The parent component manages the student records and search query using useState.

Responsibilities:

- Stores the student information.
- Handles the search input.
- Filters students by name and year level.
- Updates the advising flag.
- Displays the student cards.

### StudentCard

The reusable component displays individual student information.

Props:

- id
- name
- year
- photoUrl
- flagged
- onToggleFlag

## React Native Core Components Used

- View - Organizes the application layout.
- Text - Displays student information.
- Image - Displays student photos.
- Pressable - Provides the Flag for Advising button.
- ScrollView - Allows users to scroll through student records.
- TextInput - Allows users to enter search keywords.
- useState - Manages student data and search input.
- StyleSheet.create - Organizes the application styles.

## Main Features

1. Student Directory - Displays five student records.
2. Search Students - Searches by student name or year level.
3. Flag for Advising - Allows users to mark or remove an advising flag.
4. Student Cards - Displays student details using a reusable component.

## TextInput Experiment

For the experiment, the value and onChangeText properties were temporarily removed from the TextInput component.

Observation:

- The search field still accepted user input.
- The student list did not filter based on the typed text.

Explanation:

The TextInput was no longer connected to the React state. Without onChangeText, the application could not update the searchQuery state when the user typed. Therefore, the filtering function continued using the original search value.

After the experiment, both properties were restored to make the search feature work correctly.

## How to Run the Application

1. Install Node.js.
2. Install Visual Studio Code.
3. Open the project folder in Visual Studio Code.
4. Open the terminal.
5. Install project dependencies if needed:

   npm install

6. Start the Expo development server:

   npx expo start

7. Scan the QR code using Expo Go or run the app on an emulator.

## Conclusion

This project demonstrates how React Native core components work together to create a simple and interactive Student Directory Viewer. It also demonstrates reusable components, props, state management, searching, and event handling.
