# IT313 - Laboratory 6: React Native Core Components

## Student Directory Viewer
A mobile application built with React Native and Expo that allows users to browse, search, and manage a student advising directory using core components (`View`, `Text`, `Image`, `ScrollView`, `TextInput`, and `Pressable`).

## Component Structure
- **`StudentCard`**: A functional component that renders individual student details (avatar, name, year level) using a layout container (`View`), a remote image (`Image`), text elements (`Text`), and an interactive flag toggle (`Pressable`)[cite: 8, 12, 13].
- **`StudentDirectory`**: The parent component managing state for the students list and the search input query, rendering scrollable cards via `ScrollView` and conditional filtering[cite: 8, 12, 13].

## How to Run
1. Clone this repository or open the project folder.
2. Install dependencies:
   ```bash
   npm install