# Pivot

This application is designed to simplify your daily planning and organization. With powerful features like time blocking, automatic task scheduling, and more, it revolutionizes the way you manage your busy schedule. Say goodbye to the chaos of juggling multiple calendars and hello to effortless organization. The intuitive interface and seamless integration make it easy for students and returned missionaries to take control of their day. Set goals, simplify your schedule, and achieve more with ease.

## Specification Deliverable

### Elevator Pitch

Are you a student or returned missionary overwhelmed by a busy schedule? **Pivot** is your new daily planner. It helps you effortlessly manage class assignments, appointments, and work. Save time by consolidating all your schedules into one place. With Pivot, you can set goals, share your schedule, and pivot your plans for that date on Friday night. Don't miss out on opportunities because your schedule is full. Simplify your life, boost productivity, and achieve more with Pivot - the ultimate tool for mastering your day.

### Design

![image](https://github.com/user-attachments/assets/ca52c1fd-3d8e-4317-86c8-3943c8357ba3)

### Key Features

- [ ] Time Blocking: Carve out time for events throughout the day.
- [ ] Goal Tracking: Set and track personal goals.
- [ ] Automatic Task Scheduling: Let the app find time for your Tasks.
- [ ] Easy Editing: Seamlessly edit your calendar and where things go.
- [ ] Schedule Sharing: Share your schedule with others.
- [ ] Project Sharing: Collaborate on projects together.
<!--
### Future Features

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

- **HTML** - Uses HTML to structure the application. Three HTML pages. One for Login, One for goals, and One for Calendar.
- CSS - Styling of the application to provide consistency, and a premium experience while using the website.
- **Javascript** - Adding, Removing, and updating events and tasks, setting goals, displaying calendar information, and calling webservices.
- **React** - Dynamically updating the calendar and goals for the user.
- **Webservice**
  - Get/Put User's Tasks
  - Get/Put User's Events
  - Get/Put User's Goals
- **Database and Authentication** - Store user's login credentials, tasks, and goals in database. Register and loging users. Won't save schedule unless they have an account.
- **Web Socket** - As users add tasks and goals, it will be displayed on their calendar. These will update as they check off tasks, finish goals, etc.

## HTML Deliverables

For this Deliverable, I added the static content and built the structure of my application using HTML.

- [X] **HTML Pages** - Six Html Pages for settings, calendar, projects, goals, login, and the home page.
- [X] **Links** - There is a navigation bar that links between the different pages. The Login page linkes to the calendar page.
- [X] **Text** - Each Page contains the static text, with some pages having place holders for Database text.
- [ ] **Images** - Each page has a link to the logo and the profile picture of the current user.
- [X] **DB/Login** - There is a input area for login. The Calendar, Project, and Goal pages have place holders for tasks and events that will be pulled from the database.
- [X] **WebSocket** - The Project page has a place holder for where the Tasks will be updated dynamically for shared projects.
