# frontend intelligential

Frontend para el consumo de Api pagos desarrollada en React  conectada a la API en heroku https://intelligentest.herokuapp.com/api/Hello

para su instalación en Docker seguir lo siguientes pasos

1- docker build -t front:dev .

2- docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front:dev

3- http://localhost:3001/

