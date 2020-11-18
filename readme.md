# Usage

1. Users can register an account.
2. Users can log in if they have an registered account.
3. Users can navigate the application to view Bravado's clothing line.
4. You can view more information about a product by clicking on the 'view' button.
5. You can add items to your cart by clicking on the 'buy' button.
6. Users can also view their purchase history by navigation to the 'History Page' via the NavBar.
7. Once the user added items to their cart they can navigate to their cart by clicking on the cart icon on the NavBar.
8. Users can link their paypal to pay their amount due.

# Installation

1.  npm install & cd client + npm install to get node_modules.
2.  add a .env file containing your:
    - MongoDB : MongoDB URI
    - Cloudinary: CLOUD_NAME
    - Cloudinary: CLOUD_API_KEY
    - Cloudinary: CLOUD_API_SECRET
    - Passwordsgenerator: ACCESS_TOKEN_SECRET
    - Passwordsgenerator: REFRESH_TOKEN_SECRET
3.  in your terminal type npm run dev to start up both backend + client.

# Security

1. I did not embed API keys directly in my code.
2. I didn't store API keys in files inside my application's source tree.
3. I regenerated my API keys periodically.
4. I added all my API keys in a .env file.

# Third-Party API

1. Cloudinary
2. Passwordsgenerator
3. MongoDB
4. Firebase

# Deploy

- I deployed my app using Heroku.
- Heroku Link
- https://bravado-shop.herokuapp.com/
