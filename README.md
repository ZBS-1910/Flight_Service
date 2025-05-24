# Flight Service Project

## Overview
This is a base Node.js project template with essential code principles and project management recommendations. Feel free to customize it according to your needs.

## Project Structure

The main source code resides in the `src` folder:

- **`config`** - Configuration files for libraries/modules (e.g., dotenv, logging)
- **`routes`** - API route definitions and handlers
- **`middlewares`** - Request interceptors (validators, authenticators)
- **`controllers`** - Request handlers and API response formatting
- **`repositories`** - Database interaction logic
- **`services`** - Business logic implementation
- **`utils`** - Helper functions and utilities

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Configure environment:
   - Create `.env` file in root:
   ```env
   PORT=3000
   ```
   
   - Create `src/config/config.json`:
   ```json
   {
     "development": {
       "username": "root",
       "password": null,
       "database": "database_development",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "test": {
       "username": "root",
       "password": null,
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "production": {
       "username": "root",
       "password": null,
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

4. Initialize Database:
```sh
npx sequelize init
npx sequelize db:create
npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer --force
npx sequelize db:migrate
```

5. Start the server:
```sh
npm run dev
```

## API Documentation

### Base URLs
- Development: `http://localhost:3002`
- API Gateway: `http://localhost:3000`

### API Endpoints

| Version | Method | Endpoint | Description |
|---------|--------|----------|-------------|
| v1 | GET | `/api/v1/info` | Health check |
| v1 | POST | `/api/v1/bookings` | Create booking |
| v1 | POST | `/api/v1/bookings/payments` | Process payment |
| v2 | GET | `/api/v2/info` | Version 2 info |

### Sample Response
```json
{
  "success": true,
  "message": "Booking service API is live",
  "error": {},
  "data": {}
}
```
## 👤 Author

- **Name**: Zameer Basha S 
- **GitHub**: [ZBS-1910](https://github.com/ZBS-1910)  
- **Email**: zameer1910basha@gmail.com 
