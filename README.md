# auth0-reset-password-problem
Demonstrates problem with reset password behavior on Auth0 Lock widget

## Installation
1. Install meteor (https://www.meteor.com/install)
2. Clone project
3. Add auth0 client id and auth0 domain to source (/client/main.js)
4. Run `npm install`
5. Run `npm start`
6. Open browser to http://localhost:3000
7. The Lock widget should automatically open.

## Steps to reproduce problem
1. Click `Don't remember your password?` link
2. Enter email address and submit

At this point, the form will be in a weird state, and there will be an error repeated twice in the console.

