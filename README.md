# Pivot

This application is designed to simplify your daily planning and organization. With powerful features like time blocking, automatic task scheduling, and more, it revolutionizes the way you manage your busy schedule. Say goodbye to the chaos of juggling multiple calendars and hello to effortless organization. The intuitive interface and seamless integration make it easy for students and returned missionaries to take control of their day. Set goals, simplify your schedule, and achieve more with ease.

## Specification Deliverable

### Elevator Pitch

Are you a student or returned missionary overwhelmed by a busy schedule? **Pivot** is your new daily planner. It helps you effortlessly manage class assignments, appointments, and work. Save time by consolidating all your schedules into one place. With Pivot, you can set goals, share your schedule, and pivot your plans for that date on Friday night. Don't miss out on opportunities because your schedule is full. Simplify your life, boost productivity, and achieve more with Pivot - the ultimate tool for mastering your day.

### Design

![image](https://github.com/user-attachments/assets/ca52c1fd-3d8e-4317-86c8-3943c8357ba3)

### Key Features

- [ ] Time Blocking: Carve out time for events throughout the day.
- [ ] Automatic Task Scheduling: Let the app find time for your Tasks.
- [ ] Easy Editing: Seamlessly edit your calendar and where things go.
- [ ] Schedule Sharing: Share your schedule with others.
- [ ] Project Sharing: Collaborate on projects together.
<!--

### Future Features

- [ ] Goal Tracking: Set and track personal goals.
- [ ] Offline Mode
- [ ] Appointment Scheduling
- [ ] Contact Importing (Addresses and Contact)
- [ ] Map View
- [ ] Task Orgnaization
- [ ] Custom Event Types
- [ ] Team Calendars
- [ ] Team Task Scheduling
- [ ] Task Ticket Tracking
- [ ] Task Breaking up (Split larger tasks into smaller parts)
- [ ] Organizations
- [ ] Task Ticket Flow
- [ ] Reporting and Reviewing
- [ ] Task Reminders
- [ ] Task Time Optimizer (Tracks the time you take on tasks to provide real data on how long a tasks takes)
- [ ] Plugin Support
- [ ] Syncing with other Calendar Apps
- [ ] Event Invitations
- [ ] Task Dash Board (Review of their tasks, time, etc.)
- [ ] Class Features (Homework, Exams, etc.)
-->

### Technologies

- **HTML** - Uses HTML to structure the application. Three HTML pages. One for Login, and One for Calendar.
- CSS - Styling of the application to provide consistency, and a premium experience while using the website.
- **Javascript** - Adding, Removing, and updating events and tasks, setting goals, displaying calendar information, and calling webservices.
- **React** - Dynamically updating the calendar for the user.
- **Webservice**
  - Get/Put User's Tasks
  - Get/Put User's Events
  <!-- - Get/Put User's Goals -->
- **Database and Authentication** - Store user's login credentials, tasks, and goals in database. Register and loging users. Won't save schedule unless they have an account.
- **Web Socket** - As users add tasks, it will be displayed on their calendar. These will update as they check off tasks, finish goals, etc.

## HTML Deliverables

For this deliverable, I added the static content and built the structure of my application using HTML.

- [x] **HTML Pages** - Six Html Pages for settings, calendar, projects, goals, login, and the home page.
- [x] **Links** - There is a navigation bar that links between the different pages. The Login page linkes to the calendar page.
- [x] **Text** - Each Page contains the static text, with some pages having place holders for Database text.
- [x] **Images** - Each page has a link to the logo and the profile picture of the current user.
- [x] **DB/Login** - There is a input area for login. The Calendar, Project, and Goal pages have place holders for tasks and events that will be pulled from the database.
- [x] **WebSocket** - The Project page has a place holder for where the Tasks will be updated dynamically for shared projects.
- [x] **Webservice Call** - The Calendar page has a place holder for where the Webservice call will go.

## CSS Deliverables

For this deliverable, I added CSS and Bootstrap to style the web page and give it an application feel.

- [x] **Header, Footer, and Main content** - Main page is going to have more of a langing page feel. Calendar, Project, and Goals page, have a simle design for their needs.
- [x] **Navigation elements** - There is a nav bar on every page and it switched to a bottom nav for mobile.
- [x] **Responsive to window resizing** - There is slightly different layout for both mobile and desktop starting around 800px.
- [x] **Application elements** - Used good contrast and styled the page to fit more like an app rather than a website. That is why the entire space is used.
- [x] **Application text content** - Consistent fonts
- [x] **Application images** - Added Icon SVG images to the nav for mobile and styled the logo and profile place holder for Desktop nav

## React Deliverables

For this deliverable, I used Javascript and REact so that the application works for a single user. I also added placeholders for future technology.

- [x] **Bundled and Transpiled** - Done
- [x] **Components** - Calender and Project have components that are waiting for the database to load data.
  - [x] **Calender** - Used for displaying blocked out items and tasks
  - [x] **Projects** - Used for displaying a list of tasks and their properties.
- [x] **Router** - Routing between Calender, Home, Projects, Login, Signup, and Settings Pages.
- [x] **Hooks** - I used UseState to track logins and displaying different webpages based on if logged in or not.

## Service Deliverables

For this deliverable, I added backend endpoints that recieve new tasks/events, get tasks/event, and create/login users.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static midddleware for frontend** - done!
- [x] **Calls to third party endpoints** - I call a public holiday api that loads all the public holidays onto the calendar. For now it displays them all but in the future, it should only display them when that holiday comes up.
- [x] **Backend service endpoints** - Placeholders for the login and events/tasks.
- [x] **Frontend calls service endpoints** - The calendar fetches the events/tasks for a given user and renders them on the screen. The login checks if the user is in the "database" for authentication.

## Login Deliverables

For this deliverable, I added the mongoDB database connections and updated index.js to route to the database for grabing data and posting data.

- [x] **MoongoDB Atlas database created** - done!
- [x] **Stores data in MongoDB** - done!
- [x] **User registration** - Creates a new account in the database.
- [x] **Existing user** - Stores the Events/Tasks that are associated with a user.
- [x] **Use MongoDB to store credentials** - Stores Events/Tasks and users.
- [x] **Restricts Functionality** - You cannont vote until you have logged in. This is enforced on the frontend and backend.

## Websocket Deliverables

For this deliverable, I added a chat functionality on the home page.

- [x] **Backend listens for WebSocket Connection** - done!
- [x] **Frontend makes WebSocket Connection** - done!
- [x] **Data sent over WebSocket Connection** - done!
- [x] **WebSocket data displayed** - All users can see that chat at any given moment.
