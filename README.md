# URL Shortener Service  Web Application

## Description
URL Shortener Web Application is a user-friendly web-based tool that allows users to create shortened versions of long URLs, making them easier to share. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Chakra UI for a visually appealing and responsive user interface.

## Features
- Shorten URLs: Using just one click, you may shorten lengthy URLs to a defined length and unique URL

- Copy to Clipboard: For simple sharing, copy the abbreviated URL to the clipboard.

- User-friendly Interface: A smooth user experience is achieved through intuitive and responsive UI design.




## Live Demo
Try out the live demo of the URL Shortener Web Application [here](https://url-shortener-lime-three.vercel.app/).

## Installation
To run the URL Shortener Service Web Application locally, follow these steps:

1. Clone the repository:

2. Install dependencies for both frontend and backend:
   
```cd server```
```npm install```
```cd client```
```npm install```

4. Set up environment variables:
- Create a `.env` file in the root directory and add the following:
  ```
  MONGODB_URI=your-mongodb-uri
  
  ```

4. Start the development server:

  - Server 
  
  ```npm run start```

  - Client
  
   ```npm run dev```

The URL Shortener Web Application will be running on `http://localhost:your-port-number`.

## Usage
1. Access the application at `http://localhost:your-port-number` in your web browser.
2. Enter the long URL you want to shorten in the input field.
3. Click the "Submit" button to generate the shortened version.
4. The shortened URL will be displayed in the output field, and click the copy button it will be automatically copied to your clipboard for easy sharing.

## Technologies Used
 FRONTEND:

- React
- Chakra UI
- React Router
- Axios

 BACKEND:

- Node.js
- Express
- MongoDB 

## Deployment
- Backend:Deployed on [Render](https://render.com)

         link: https://url-short-9syn.onrender.com

- Frontend: Deployed on [Vercel](https://vercel.com)

        link: https://url-shortener-lime-three.vercel.app/


