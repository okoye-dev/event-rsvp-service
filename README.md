# Event RSVP Service

This is the backend server for managing event RSVPs. The service uses **TypeScript**, **Node.js**, and **Express** for core functionality.
---

## Features
- User and event management
- RSVP functionality
- RESTful API with clear endpoints

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/okoye-dev/event-rsvp-service.git
cd event-rsvp-service
```

### 2. Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and configure it with the necessary environment variables. Use the example below as a reference:
```
PORT=3000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
```

### 4. Start with Server
For development, run `npm run dev`, for build:
```bash
npm start
```

---

## Available Scripts

- **`npm run dev`** - Starts the server in development mode using `ts-node` and `nodemon`.
- **`npm start`** - Starts the compiled server in production mode.

---

## API Documentation
The full API documentation is available in the `/docs` folder or via the `/api-docs` endpoint (if Swagger is implemented).

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Questions?
Feel free to open an issue or contact the repository maintainer for further assistance.
```
