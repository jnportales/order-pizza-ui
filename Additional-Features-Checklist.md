# Additional Features Checklist
This is a list of addtional features that come to mind when working on this project and they are not listed in the original @Objectives.md received from the customer.

# Checklist
- [ ] Logout button
  - [ ] Create resuable logout button react component that can be displayed on each page
  - [ ] logout button will run the `logout` function in the @/src/api/auth.js file
- [ ] Improve Order Form robustness
  - [ ] Replace text inputs with drop-down selections for Crust, Flavor, and Size
  - [ ] Restrict Table Number field to only allow numeric values (preventing "--", "e", and negative numbers)
- [ ] Improve Order confirmation
  - [ ] Display confirmation message with limited details about the confirmed order on @src/pages/OrderPage.js
- [ ] Write functional WDIO browser tests
- [ ] install pizza-order-api as a service
- [ ] Write B2B layer API