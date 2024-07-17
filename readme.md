# Dicoding Submission

This project uses PostgreSQL as the database. To run this project, ensure PostgreSQL is installed on your system. After installation, populate all necessary credentials in the `.env` file as specified in the `.env.example` file.

## Getting Started

1. **Install PostgreSQL**  
   Ensure PostgreSQL is installed on your machine. You can download it from the [official PostgreSQL website](https://www.postgresql.org/download/).

2. **Configure Environment Variables**  
   Copy the contents of `.env.example` to a new file named `.env` and fill in the required credentials.

3. **Install Dependencies**  
   ```bash
   npm install
   ```
4. **Apply Postgres Migration**  
   ```bash
   npm run migrate up
   ```
5. **Start the Project**  
   ```bash
   npm start
   ```

## Testing

You can test this project using Postman. Import the provided Postman collection and environment files:

<ul>
  <li>`Open Music API V2 Test.postman_collection.json`</li>
  <li>`OpenMusic API Test.postman_environment.json`</li>
</ul>

Note: Ensure that certain database tables are empty before running tests to avoid conflicts. You can clear the data with the following SQL command:
```bash
TRUNCATE albums, songs, users, authentications, playlists, playlist_songs, playlist_song_activities, collaborations;
```