import "./Calendar.css";

function Calendar() {
  return (
    <div class="calendar">
      <div class="calendar-header">
        <div class="calender-nav d-flex justify-content-between align-items-center pt-2">
          <div class="d-flex justify-content-between align-items-center w-50">
            <button class="btn btn-primary btn-primary-1" id="prev-week">
              &leftarrow;
            </button>
            <h2 id="current-day">7th September</h2>
            <button class="btn btn-primary btn-primary-1" id="next-week">
              &rightarrow;
            </button>
          </div>
          <div id="text-button-group" class="btn-group" role="group">
            <button type="button" class="btn btn-primary btn-primary-1">
              Current Calendar
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              Add Event
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              Filter
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              Share
            </button>
          </div>
          <div id="icon-button-group" class="btn-group" role="group">
            <button type="button" class="btn btn-primary btn-primary-1">
              <img class="icon" src="/icons/square-list-svgrepo-com.svg" />
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              <img class="icon" src="/icons/plus-svgrepo-com.svg" />
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              <img class="icon" src="/icons/filter-svgrepo-com.svg" />
            </button>
            <button type="button" class="btn btn-primary btn-primary-1">
              <img
                class="icon"
                src="/icons/arrow-up-from-bracket-svgrepo-com.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="calendar-display">
        <table class="table table-sm table-hover table-bordered">
          <thead>
            <tr>
              <th class="time-col" scope="col"></th>
              <th class="date-col" scope="col">
                Sunday
              </th>
              <th class="date-col" scope="col">
                Monday
              </th>
              <th class="date-col" scope="col">
                Tuesday
              </th>
              <th class="date-col" scope="col">
                Wednesday
              </th>
              <th class="date-col" scope="col">
                Thursday
              </th>
              <th class="date-col" scope="col">
                Friday
              </th>
              <th class="date-col" scope="col">
                Saturday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="time-header" scrop="row">
                12:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                1:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                2:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                3:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                4:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                5:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                6:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                7:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                8:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                9:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                10:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                11:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                12:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                1:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                2:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                3:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                4:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                5:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                6:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                7:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                8:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                9:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                10:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="time-header" scrop="row">
                11:00
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

{
  /*
<!-- <section class="forms">
<h2>Current Calendar</h2>
<form>
    <label for="personal">Personal</label>
    <input type="checkbox" id="personal" name="personal"><br>
    <label for="school">School</label>
    <input type="checkbox" id="school" name="school"><br>
    <label for="work">Work</label>
    <input type="checkbox" id="work" name="work"><br>
    <label for="other1">Shared Calender 1</label>
    <input type="checkbox" id="other1" name="other1"><br>
    <label for="other2">Shared Calender 1</label>
    <input type="checkbox" id="other2" name="other2"><br>
</form>
<h2>Filter</h2>
<form>
    <label for="tasks">Display Tasks</label>
    <input type="checkbox" id="tasks" name="tasks" checked><br>
    <label for="hidden">Hide Complete</label>
    <input type="checkbox" id="hidden" name="hidden"><br>
</form>
<h2>Add Event</h2>
<form>
    <label for="event">Event Name</label>
    <input type="text" id="event" name="event" required><br>
    <label for="date">Date</label>
    <input type="date" id="date" name="date" required><br>
    <label for="start_time">Start Time</label>
    <input type="time" id="start_time" name="start_time" required><br>
    <label for="end_time">End Time</label>
    <input type="time" id="end_time" name="end_time" required><br>
    <label for="location">Location</label>
    <input type="text" id="location" name="location"><br>
    <label for="description">Description</label>
    <input type="text" id="description" name="description"><br>
    <button type="submit">Add</button>
</form>
</section> --> */
}
export default Calendar;
