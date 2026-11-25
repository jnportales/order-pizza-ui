# Additional Features Checklist
This is a list of addtional features that come to mind when working on this project and they are not listed in the original @Objectives.md received from the customer.

# Checklist
- [x] Logout button
  - [x] Create resuable logout button react component that can be displayed on each page
  - [x] logout button will run the `logout` function in the @/src/api/auth.js file
- [x] Improve Order Form robustness
  - [x] text inputs should be all UPPERCASE
- [ ] Improve Order confirmation
  - [ ] Display confirmation message with limited details about the confirmed order on @src/pages/OrderPage.js
- [x] Write functional WDIO browser tests
- [ ] install pizza-order-api as a service
- [x] establish CI/CD pipeline
  - [x] build, test, package, deploy
    - [ ] (optional) run functional tests through saucelabs
  - [x] establish personal local gitlab build and deploy runners
  - [x] configure deployment using docker-compose on appserver
- [ ] functional testing data improvement
  - vendor api does not allow orders with the same exact data so functional tests fail if data is not varied