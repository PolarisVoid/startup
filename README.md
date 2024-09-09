# Pivot

This application's purpose is to change the way you plan out your day through time blocking, automatic task scheduling, and more. 

# Specification Deliverable

## Elevator Pitch

Are you a student or returned missionary overwhelmed by a busy schedule? **Pivot** is your new daily planner. It's like a personalized Areabook, helping you effortlessly manage class assignments, appointments, and work. Save time by consolidating all your schedules into one place. With Pivot, you can set goals, share your schedule, and pivot your plans for that date on Friday night. Don't miss out on opportunities because your schedule is full. Simplify your life and achieve more with Pivot.

## Design

## Key Features

- [ ] Time Blocking Calendar
- [ ] Goal Setting and Tracking
- [ ] Automatic Task Scheduling and Rescheduling
- [ ] Easy Calendar Editing (Deleting, Moving, Creating Tasks)
- [ ] Schedule Sharing

## Future Features
- [ ] Appointment Scheduling
- [ ] Contact Importing (Addresses and Contact)
- [ ] Map View
- [ ] Task Categorizing/Orgnaization

## Technologies

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
