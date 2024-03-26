export default (): void => {
  console.log('Setup test environment');

  process.env.NODE_ENV = 'test';
  process.env.DB_CONNECTION = 'mysql';
  process.env.DB_HOST ||= 'db';
  process.env.DB_PORT = '3306';
  process.env.DB_USERNAME = 'root';
  process.env.DB_PASSWORD = 'root';
  process.env.DB_NAME = 'nestjs_styled_components_practice_test';
  process.env.SYNCHRONIZE = 'true';
  process.env.MIGRATIONS_RUN = 'false';
  process.env.DROP_SCHEMA = 'true';
  process.env.JWT_SECRET =
    'd43c3a6876a003dcae605b95a0389f370c4bd613c8d5c55532b47be38266e266';
};
