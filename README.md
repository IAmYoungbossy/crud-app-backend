# NestJs, MySQL, TypeORM, and TypeScript Assessment

This project showcases how to use NestJS framework and TypeORM to store and retrieve data in a MySQL database.

![](https://cdn-images-1.medium.com/max/800/1*zeOv4blDpgcoqTLUvfmbXQ.png)

Before running the sample application, ensure that the MySQL connection is established with the correct data. Update the 'username', 'password' and 'database' values in the object passed to the forRoot method in app.module.ts file to match your MySQL server values, otherwise the application will not run

```
{
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'mysql',
  password: 'password',
  database: 'contactDB',
  entities: [contactColumn],
  synchronize: true,
}
```

To proceed, install all the dependencies of the application by running the command 'npm install'. Once the dependencies are installed, run the application by executing the below command.

```
npm run start:dev
```

Note that once you've used the application to create a particular table (in our case that'll be contactColumn table) in the contactDb database, if you want to access the same table again after a disconnection, just set the sychronize property in the object passed to the forRoot method value to false, else it'll try to create same table again which already exist.
