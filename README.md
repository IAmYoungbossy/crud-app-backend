# NestJs, MySQL, TypeORM, and TypeScript Assessment

This technical report showcases the use of NestJS framework and TypeORM for efficient data storage and retrieval in a MySQL database. The project is aimed at providing a comprehensive overview of the techniques and technologies involved in implementing a backend system using NestJS, MySQL, TypeORM, and TypeScript.

![](https://cdn-images-1.medium.com/max/800/1*zeOv4blDpgcoqTLUvfmbXQ.png)

To begin, it is essential to establish a connection with the MySQL server and verify the correctness of the connection details. The connection details can be modified in the object passed to the forRoot method in the app.module.ts file, including the 'username', 'password' and 'database' values. Failure to provide accurate connection details will lead to the inability to run the application. summarily, make sure your MySQL server password, username, and database values correspond to the ones in the object passed to the forRoot method.

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

The application's dependencies can be installed by executing the following command:

```
npm install
```

After installing the dependencies, execute the command below to run the application:

```
npm run start:dev
```

It is important to note that once the application is used to create a specific table (in this case, the contactColumn table) in the contactDb database, if there is a disconnection, setting the synchronize property value to false in the object passed to the forRoot method will enable access to the same table without attempting to create it again.

Upon completion of the above steps, users can interact with their MySQL database using a client-side application.

Furthermore, this assessment includes the development of a client-side application [Crud App Front-end](https://github.com/IAmYoungbossy/crud-app-frontend) to consume the API created from this project. The front-end application was built using ReactJS, TypeScript, Redux for state management, Styled Component for styling, and Axios for API requests.

In summary, this project provides a robust solution for implementing efficient data storage and retrieval in a MySQL database using NestJS, MySQL, TypeORM, and TypeScript.
