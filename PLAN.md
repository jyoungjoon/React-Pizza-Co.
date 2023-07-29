
# Plan

* 1. Gather application requirements and features

STEP1:

a. Very simple application, users can order one or more pizzas from a menu;

b. No user accounts and no login;

c. Pizza menu can change, so it should be loaded from an API;

d. Users can add multiple pizzas to a cart before ordering;

e. if possible, GPS location should also be provided

f. Users can mark their order as "priority" for an additional 20% of the cart price.

g. Order are made by sending a POST request with the order data (user data + selected pizzas) to the API

h. All payments are made on delivery, so no payment processing is necessary

i. each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID.

j. Users should be able to mark their order as "priority" order even after it has been placed..

* 2. Divide the application into pages:
STEP3: Routes and Pages:
Homepage (/),
Pizza menu (/menu),
Cart (/cart),
Placing a new order (/order/new),
Looking up an order (/order/:orderID)

Think about the overall and page-level UI/UX
Break the desired UI into components
Design and build a static version (no state yet)

* 3. Divide the application into feature categories
STEP2: Categories: User, Menu, Cart, Order

Think about state management + data flow

* 4. Technology decisions: decide what we're going to use.
STEP4: React, Redux, React Router, TailwindCSS
