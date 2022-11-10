export const configs = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  database: process.env.DATABASE,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }},
  define: {
    timestamps: false,
  },
};

