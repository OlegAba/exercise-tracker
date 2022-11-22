# Exercise Tracker
[Live Server Example](https://exercise-tracker-fcc.fly.dev/)

## Installation
We use [NPM](https://www.npmjs.com/get-npm) for our dependency manager. This should be installed before continuing.

To access the project, run the following:
```
git clone --recursive https://github.com/OlegAba/exercise-tracker.git
cd exercise-tracker
npm run install-all
```

Create a `.env` file in `exercise-tracker/server/` and add your MongoDB connection URL.
```
PORT=8080
CONNECTION_URL=<MONGODB CONNECTION URL>
```

## Docker
Build and run the container locally
```
docker build . -t exercise-tracker
docker run -dp 8080:8080 exercise-tracker
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/OlegAba/exercise-tracker/blob/main/LICENSE) file for details.