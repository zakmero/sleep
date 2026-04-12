
# Sleep Funnel Project

This project implements a sleep funnel website using React and Vite.

## Setup
1.  **Clone the repository**.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Funnel Flow
1.  **Squeeze Page (`/`)**: Collects user email (e.g., `test@example.com`).
2.  **VSL Page (`/offer`)**: Displays a video sales letter and an offer.
    -   **Buy**: Saves purchase intent.
    -   **No Thanks**: Saves "freebie only" choice.
3.  **Thank You (`/thank-you`)**: Confirms the action (purchase vs freebie).

## Data Tracking
User email and choice are currently stored in `localStorage` for demonstration purposes.
You can view them in the browser's developer tools (Application -> Local Storage) or Console.
-   `user_email`: Example email.
-   `user_choice`: `buy_offer` or `free_only`.
