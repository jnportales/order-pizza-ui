# Project Objectives Checklist

## 🏗️ Chunk 1: Project Cleanup & Authentication
- [x] **Project Cleanup**
    - [x] Remove "Hello World" boilerplate from the existing React/Webpack project.
    - [x] Set up basic routing (e.g., React Router) for Login, Order, and History pages.
- [x] **Login UI**
    - [x] Build the Login screen (Username/Password inputs).
    - [x] Handle login success and redirect to the main app.
- [x] **API Connection Layer**
    - [x] Configure base URL and shared headers (including "Connect" requirements).
    - [x] Implement authentication logic (calling `/auth` with `test`/`test`).
    - [x] Implement logic to store and retrieve the Bearer Token.

## 🍕 Chunk 2: Order Configuration & Submission
- [x] **Order Form UI**
    - [x] Create the UI for selecting Crust, Flavor, Size, and Table_No.
    - [x] Implement basic form validation (ensure all fields are populated).
- [x] **Submission Logic**
    - [x] Implement the POST request to `/orders` with the Bearer Token.
    - [x] Handle success/error responses from the API.
- [x] **User Feedback**
    - [x] Display a success confirmation message to the user after a successful order.

## 📋 Chunk 3: Order History & Management
- [x] **Order History Page**
    - [x] Create the History page UI.
    - [x] Implement GET request to fetch the list of orders.
    - [x] Display list items (ID, Crust, Flavor, Size, Table_No, Timestamp).
- [x] **Delete Functionality**
    - [x] Implement the `DELETE /orders/{Order_ID}` action.
    - [x] Ensure the UI list refreshes immediately after deletion.
- [x] **Search & Filtering**
    - [x] Implement a search bar to filter the orders (Client-side filtering).

## 🚀 Chunk 4: Deployment & Final Polish
- [ ] **Containerization**
    - [ ] Create `Dockerfile`.
    - [ ] Create `docker-compose.yml`.
- [ ] **Final Polish**
    - [ ] Final UI/UX review.
    - [ ] Verify all requirements from `Objectives.md` are met.
- [ ] **AI Documentation**
    - [ ] Document the use of AI tools and architectural decisions.
