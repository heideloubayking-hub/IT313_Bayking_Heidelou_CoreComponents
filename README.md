# IT313 - Laboratory 6: React Native Core Components

## Student Directory Viewer
A mobile application built with React Native and Expo that allows users to browse, search, and manage a directory of students using core components (`View`, `Text`, `Image`, `ScrollView`, `TextInput`, and `Pressable`).

---

## Component Architecture
* **`StudentCard`**: A reusable functional component that renders individual student details, including an avatar image (`Image`), name and year level (`Text`), and an interactive flag toggle button (`Pressable`).
* **`StudentDirectory`**: The parent component managing state (`useState`) for the student list and search query. It handles real-time filtering and renders the dynamic roster inside a scrollable view (`ScrollView`).

---

## Features
* **Core Components Usage:** Leverages standard React Native layout and interactive elements.
* **Search Filtering:** Real-time text filtering that updates the displayed student roster as you type.
* **Interactive Flagging System:** Toggle individual student flags on or off with instant visual feedback.

---

## How to Run
1. Clone this repository or open the project folder.
2. Install dependencies:
   ```bash
   npm install