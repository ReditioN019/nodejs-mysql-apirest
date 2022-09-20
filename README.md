
## Docker
    - docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=mypass mysql  //crea el contenedor docker
    - docker ps -a     //muestra los contenedores
    - docker exec -it mysql-db -p    //luego se pone la password de arriba

    * Ahora entra a mysql:
        - show databases; 
        - ...