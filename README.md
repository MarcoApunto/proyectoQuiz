# QuizWhiz! 🎲

A Single Page Application (SPA) quiz game that tests your knowledge through dynamic questions fetched from the Open Trivia Database.

[*Proyecto desarrollado como ejercicio de JavaScript, cumpliendo los requisitos de: SPA, ES6+, API integration, LocalStorage, y Chart.js*]

## 🎯 Project Overview

This project implements a quiz game that:
- Displays 10 questions with 4 options each
- Fetches questions from the Open Trivia Database API
- Tracks and visualizes user scores
- Works as a Single Page Application

## ⚙️ Core Features

### Single Page Application (SPA)
- Dynamic page navigation without reloads
- Three main views:
  - Home (Welcome)
  - Quiz (Questions)
  - Results (Final Score)

### API Integration
- Asynchronous question fetching
- Error handling with retry mechanism
- Dynamic question parsing and display

### Data Persistence
- Score tracking using LocalStorage
- Historical data visualization using Chart.js
- Score tracking with timestamps

## 🛠️ Technical Implementation

### Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Chart.js for data visualization
- FontAwesome icons
- Google Fonts (Prosto One, Nabla)

### Project Structure
```tree
quizwhiz/
├── index.html              # SPA entry point
├── styles/
│   └── styles.css         # Styling implementation
├── js/
│   ├── main.js           # SPA logic & UI management
│   └── script.js         # Quiz & API logic
```

### Key Components

#### main.js
- SPA navigation system
- Dynamic DOM manipulation
- Page rendering logic
- UI state management

#### script.js
- API communication
- Quiz game logic
- Score management
- LocalStorage integration
- Chart visualization

## 🚀 Setup and Usage

1. Clone the repository
2. Open index.html in your browser
3. No build process required - pure vanilla implementation!

## 📊 Features in Detail

### Quiz Implementation
- 10 questions per game
- 4 multiple choice options per question
- Real-time score tracking
- Dynamic question loading from API

### Data Visualization
- Historical score tracking
- Performance trends visualization
- Date-based score analysis

### Error Handling
- API connection retry mechanism
- User-friendly error messages
- Graceful fallbacks

## 🌟 Technical Highlights

### ES6+ Features
- Async/await for API calls
- Arrow functions
- Template literals
- Destructuring
- Modern array methods

### DOM Manipulation
- Dynamic content creation
- Event delegation
- State-based UI updates

### Storage Implementation
- Efficient LocalStorage usage
- JSON data structure
- Timestamp-based tracking

> [!NOTE]
> ## 🔜 Future Enhancements
> - Multiple difficulty levels
> - Category selection
> - Additional question sources
> - Enhanced data visualization

hola
---

*Developed as part of a JavaScript development course, focusing on modern web development practices and clean code principles (or I least I try to do it).*
