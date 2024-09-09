# Pivot

Pivot is an application meant to change the way you plan out your day. It takes the best of task managing and calendars to make your daily life easier.

# Key Features

- Calendar
- Goal Setting and Tracking
- Automatic Task Scheduling/Rescheduling
- Appointment Scheduling
- Schedule Sharing
- Project Creation
- Contact Importing (Addresses and Contact)
- Map View
- Easy Calendar editing (Deleting, Moving, Creating Tasks)


# Technology Use

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