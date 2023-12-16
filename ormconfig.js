module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'database_name',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
// replace in line 6 , 7 , 8
