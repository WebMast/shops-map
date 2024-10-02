# Shops Map

A Next.js project that displays available clothing stores on Google Maps. 
The project includes multiple pages showing details for each shop, as well as a "Contact Us" page where users can submit messages through the form. 
These messages are stored in MongoDB Atlas.

## Features

- Display of clothing stores on Google Maps.
- Detailed pages for each store, TermsAndConditions, AboutUs pages.
- Contact Us page for sending messages, with data saved in MongoDB Atlas.
- Store data sourced from a local JSON file: `shops-map/data/shops.json`.

## Tech Stack

- **Next.js**: [Official Website](https://nextjs.org/)
- **Tailwind CSS**: [Official Website](https://tailwindcss.com/)
- **MongoDB Atlas**: [Official Website](https://www.mongodb.com/cloud/atlas)
- **Google Maps API**: [Official Documentation](https://developers.google.com/maps/documentation)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sechal-personal/shops-map.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shops-map
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

The project will be available at: http://localhost:3000
The project also deployed on Vercel. You can access it via this link: https://shops-map.vercel.app/.
All the keys inside the .env are only the testing ones.

## Running the Project

### Development Mode

To run the project locally in development mode:

```bash
npm run dev