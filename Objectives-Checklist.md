# Project Objectives Checklist

## 🏗️ Chunk 1: Project Cleanup & Authentication
- [x] **Project Cleanup**
    - [x] Remove "Hello World" boilerplate from the existing React/Webpack project.
    - [x] Set up basic routing (e.g., React Router) for Login, Order, and History pages.
- [ ] **Login UI**
    - [ ] Build the Login screen (Username/Password inputs).
    - [ ] Handle login success and redirect to the main app.
- [ ] **API Connection Layer**
    - [ ] Configure base URL and shared headers (including "Connect" requirements).
    - [ ] Implement authentication logic (calling `/auth` with `test`/`test`).
    - [ ] Implement logic to store and retrieve the Bearer Token.

## 🍕 Chunk 2: Order Configuration & Submission
- [ ] **Order Form UI**
    - [ ] Create the UI for selecting Crust, Flavor, Size, and Table_No.
    - [ ] Implement basic form validation (ensure all fields are populated).
- [ ] **Submission Logic**
    - [ ] Implement the POST request to `/orders` with the Bearer Token.
    - [ ] Handle success/error responses from the API.
- [ ] **User Feedback**
    - [ ] Display a success confirmation message to the user after a successful order.

## 📋 Chunk 3: Order History & Management
- [ ] **Order History Page**
    - [ ] Create the History page UI.
    - [ ] Implement GET request to fetch the list of orders.
    - [ ] Display list items (ID, Crust, Flavor, Size, Table_No, Timestamp).
- [ ] **Delete Functionality**
    - [ ] Implement the `DELETE /orders/{Order_ID}` action.
    - [ ] Ensure the UI list refreshes immediately after deletion.
- [ ] **Search & Filtering**
    - [ ] Implement a search bar to filter the orders (Client-side filtering).

## 🚀 Chunk 4: Deployment & Final Polish
- [ ] **Containerization**
    - [ ] Create `Dockerfile`.
    - [ ] Create `docker-compose.yml`.
- [ ] **Final Polish**
    - [ ] Final UI/UX review.
    - [ ] Verify all requirements from `Objectives.md` are met.
- [ ] **AI Documentation**
    - [ ] Document the use of AI tools and architectural decisions.
