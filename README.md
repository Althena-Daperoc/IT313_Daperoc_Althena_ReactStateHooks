# IT313 Lab 5: React State & Hooks - Lab Session Tracker

## Problem Overview
A study-tracking utility app built with Expo and React Native to help students track practice problems solved and elapsed study time during laboratory sessions.

## Technical Approach & Architecture
- **useState:** Manages the solved problem count (`solved`), the running state (`isRunning`), and the stopwatch seconds (`seconds`).
- **useEffect & Custom Hook (`useStopwatch`):** Encapsulates the timer side effect, using `setInterval` to increment time when active, with a cleanup function to prevent memory leaks and overlapping intervals.
- **Lifting State Up:** `LabScreen` acts as the single source of truth, holding `solved` and `isRunning` state and passing props down to sibling components (`PracticeTracker` and `Stopwatch`).
- **Conditional Rendering:** Dynamically displays a "Great job!" success message when solved count reaches 5, and toggles between "Running..." and "Paused" status text.

## How to Run the App in Expo Go
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx expo start` to launch the development server.
4. Scan the QR code using the Expo Go app on your mobile device.