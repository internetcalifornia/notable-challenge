# Problem​

We need a way to review calendars of physicians using the Notable platform to
ensure they’re being imported correctly from the physician’s existing system of record. The task
is to build a web back-end that will return a list of physicians and a list of today’s appointments
for a selected physician, and a corresponding front-end to render the data. An example
screenshot is shown below.

The backend should support two GET requests -- one to get the list of physicians, and one to
get the list of appointments for a particular physician. For this exercise, the data can just be
kept in memory, though you’re welcome to use a database if you prefer.
The frontend does not need to be as styled as the above screenshot, but should at a minimum
include two side-by-side sections, with a list of physicians on the left and a list of appointments
beneath the physician’s name on the right. When a user clicks on a physician on the left, the
physician name and appointments on the right should update correspondingly.
You are free to use any languages, frameworks, libraries, scaffolding, starter packs, etc that
you’d like. With your response, please include a zip file with your source code (preferably in a
git repository), as well as a screenshot of your app similar to the one above.

# Run

npm install && npm run dev
