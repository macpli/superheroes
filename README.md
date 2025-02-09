# Humble Superhero API
Task for recruitment process at Ejam
## Objective
Create a simple API that lets users:
- Add a new superhero, specifying their name, superpower, and a "humility score" showing how humble they are.
- Fetch the list of superheroes, ordered by their humility score in descending order.


### Backend
- **Framework**: NestJS
- **Database**: In-memory database
- **Endpoints**:
  - `POST /superheroes`: Add a new superhero (name, superpower, and humility score required).
  - `GET /superheroes`: Fetch the list of superheroes sorted by humility score.

### Frontend 
- **Framework**: React
- **Features**:
  - Add superheroes
  - See the sorted list in real-time
  - Zod validation for humility

## Project Structure

### Backend
- **Framework**: NestJS
- **Files**:
  - `src/app.controller.ts`: Handles the API endpoints.
  - `src/app.service.ts`: Contains the business logic.
  - `src/superhero.model.ts`: Defines the data models.

### Frontend
- **Framework**: React
- **UI Components**: Radix
- **Files**:
  - `src/App.tsx`: Main application component.
  - `src/components/SuperheroesCard.tsx`: Displays the list of superheroes.
  - `src/components/AddSuperheroCard.tsx`: Form to add a new superhero.

## How to Run

### Concurrently
This will install dependencies for both the client and the server and then launch both apps with one command.

1. Navigate to the `root` directory containing `client` and `server` directories.
2. Install dependencies: 
```bash
npm install
```
3. Start the server: 
```bash
npm run dev
```
#### Now the client is now available on port 3333 and the API on port 3000.

## If I Had More Time
If I had more time, I would:
- Implement more comprehensive validation and error handling.
- Add more unit and integration tests.
- Improve the UI/UX of the frontend application.
- Implement a persistent database instead of an in-memory database.
- Add authentication and authorization.
- Host the application.

## Collaboration Note
To collaborate with a teammate, I would:
- Use Git for version control and create feature branches for new tasks.
- Conduct code reviews to ensure code quality and share knowledge.
- Hold regular stand-up meetings to discuss progress and blockers.
- Use a project management tool like Jira or Trello to track tasks and progress.

## Conclusion
This project demonstrates the ability to build a simple yet functional API and frontend application, adhering to best practices and showcasing a collaborative and humble approach to software development.
