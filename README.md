# Travel Itinerary Planner

A responsive (basic) travel itinerary planning app built with **React**, **Vite**, and **Tailwind CSS**.  
This project was developed as part of the *Epicode Front-End Programming course* to demonstrate front-end development skills including:

- Routing  
- State management  
- Form validation  
- Drag-and-drop functionality  
- Role-based access control  

Although basic, the app is designed to scale in the future.

---

## Features

- **Add, edit, and delete travel entries**  
- **Validate dates** to prevent planning trips in the past  
- **Clean and responsive UI** styled with Tailwind CSS  
- **Role-based login system** using localStorage  
- **Admin-only dashboard access**  
- **Dynamic routing** with React Router v6  
- **Persistent trip data** stored in localStorage  
- **Drag-and-drop itinerary reordering** with `@hello-pangea/dnd`  
- **Trip details page** with mock weather information  
- **Mobile-friendly layout** and responsive design  

---

## Project Structure

src/
├── components/ # Reusable UI components (Card, Form, List)
├── pages/ # Route pages (Home, About, Login, Dashboard, TripDetails)
├── App.jsx # App shell with routing logic
├── index.jsx # App entry point
├── index.css # Tailwind styles
