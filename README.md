## Muzz Chat exercise
This is the frontend implementation for Muzz Chat.

The idea is to display a mobile view of the chat between two users ("sender" and "receiver"). Both a user and the receiver should be able to send
messages to each other.

The conditions stipulate that messages separated by more than an hour should be sectioned with the date and time "{day} {timestamp}", and that messages from the same user sent within 20s of each other should have a smaller vertical spacing between them (making them look grouped together).

### Tools
 - NextJS 15 with App Router
 - React 19 (RC)
 - TailwindCSS
 - Date-fns
 - Jest
 - React Testing Library

### Implementation
- I followed the design as accurately as I could, and decided to add "Send" and "Receive" buttons next to the input so we could simulate the behaviour between sender and receiver in one window. Alternatives:
    -   Mocking messages via Mock Service Worker (MSW) and returning these from a dummy endpoint (e.g., chat/{uuid} of the chat thread)
    -   Setting an interval and adding a message after a specified time (e.g., 20s) so it simulates the receiver sending a message

- With the above in mind, I've added sample messages with times that show messages grouped together for the sender (< 20s) and messages which are an hour or more apart (to showing the date timestamp and grouping).

### Running the application
1. Run: npm i
2. Run: npm run dev


### Improvements/extensions for a production app
- Locale support using ReactIntl
- Real-time messaging using WebSockets
- Light/dark mode
- Better accessibility for visually-impaired users, screen readers etc
- Desktop layout (breakpoint)
- Show visual feedback to use when loading messages (a spinner)
- Infinite/lazy load scrolling of messages so we are not loading the whole thread. By using the skip and limit values in the data set, we can load what is necessary rather than everything (reducing performance)
