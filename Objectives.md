# Overview

We would like you to build a simple {Angular|React} application that allows users to configure and place a pizza order.  You’ll be using the public pizza ordering API listed below in the resources.   The application should have the following pieces of functionality:

# Expectations  
1. Login screen to accept a username (string) and password (string).
   - Use the following to return an access token:
   ``` json
   {
     "password": "test",
     "username": "test"
   }
   ```
1. User interface which allows the user to configure:
   - Crust (string)
   - Flavor (string)
   - Size (string)
   - Table_No (integer)
1. Successfully submits the pizza configuration to the /orders endpoint.
1. Display a successful confirmation to the user interface.
1. Delete function that cancels an order.
1. Ability to create more than one pizza order.
1. Create a page that pulls a list of orders you created and displays them in the user interface.
1. Search feature to allow the user to filter the returned orders.
1. Containerize the application. **(optional – extra points!)**

# Resources

[Order Pizza API](https://github.com/jnportales/order-pizza-api)

# What We’ll Be Looking For

You will be evaluated on your ability to:
1. Deliver a functioning product
1. Successfully and correctly integrate with a 3rd party API
1. Exhibit use of software engineering best practices

We encourage you to choose whatever technologies, libraries or specific implementations that you see fit to complete this challenge.  We encourage creativity but value efficiency.  There is no time limit; however, we don’t expect you to display your complete
 breadth of engineering knowledge in this challenge.

# ⚠️ Use of AI-Assisted Development Tools

You are encouraged to use AI-assisted development tools (e.g., Claude Code, GitHub Copilot, ChatGPT, or similar technologies) to complete this challenge.

However, we expect you to:
* Document which tools you used and how you used them.
* Include any significant design documents, implementation plans, architecture proposals, task breakdowns, or development roadmaps produced during your AI-assisted workflow.
* Describe where AI-generated code materially influenced the final solution.
* Be prepared to explain and defend all architectural and implementation decisions.
* Be prepared to discuss tradeoffs, alternatives considered, and any AI-generated recommendations you chose not to adopt.

**We're evaluating your understanding, learning style, and decision-making, not just the final output.**