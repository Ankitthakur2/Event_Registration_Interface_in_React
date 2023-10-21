Event Registration App:

A simple React application that allows users to register for a fictional event and view user details.

Features:
User registration form with validation for name, email, phone number, and bio.
Registered users list.
User details popup.
Data persistence using Local Storage.
Custom styling without external UI libraries.


Installation:
Clone the repository to your local machine.

git clone https://github.com/your-username/event-registration-app.git
Navigate to the project directory.

cd event-registration-app
Install the project dependencies.


npm install
Start the development server.


npm start
The application will be available at http://localhost:3000.

Usage:
Fill out the registration form with your name, email, phone number, and a short bio. Ensure all fields are filled out correctly.

Click the "Submit" button to register for the event. Your registration will be displayed in the "Registered Users for the Event" list below.

To view the complete details of a registered user, click the "View Details" button next to the user's name. This will open a popup with their information.

To close the user details popup, click the "Close" button within the popup.

Data Persistence
User registration data is stored in the browser's Local Storage. This means that your data will persist even if you refresh the page or close the browser.

Custom Styling
The application is styled without relying on external UI libraries. CSS files in each component's directory define the styling.

License
This project is open source and available under the MIT License.

