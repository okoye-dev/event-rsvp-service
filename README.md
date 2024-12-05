# Event RSVP Service

## This is the backend server for managing event RSVPs. The service uses **TypeScript**, **Node.js**, and **Express** for core functionality.

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

### 3. Setup & Environment Variables

Create a `.env` file in the root directory and configure it with the necessary environment variables. Use the example below as a reference:

```
PORT=3000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
```

### 3.5 Prettier & ESLint

Run `npm i --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint`

Then run `npm i --save-dev --exact prettier`

### 4. Start with Server

For development, run `npm run dev`, for build:

```bash
npm start
```

---

## Available Scripts

Here are the scripts you can use to manage and develop the project:

- **`npm run dev`**  
  Starts the server in development mode using `nodemon`. This watches for file changes and restarts the server automatically.

- **`npm start`**  
  Starts the compiled server in production mode. Make sure to compile the TypeScript files using `tsc` before running this command.

- **`npm run format`**  
  Formats the codebase using `Prettier` to ensure consistent style and formatting.

- **`npm run lint`**  
  Lints the TypeScript files in the `src` directory using `ESLint`, identifying any issues in the code.

- **`npm run lint:fix`**  
  Lints and automatically fixes fixable issues in the TypeScript files using `ESLint`.

### Usage

- During development, use `npm run dev` to run the server with live-reload capabilities.
- Before committing, run `npm run format` and `npm run lint` to ensure the code follows the project's style and standards.
- In production, use `npm start` after compiling the TypeScript files to `JavaScript`.

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

```
