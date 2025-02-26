const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes("localhost") ? false : { rejectUnauthorized: false },
  max: 5, // Define o número máximo de conexões simultâneas
  idleTimeoutMillis: 30000, // Tempo máximo antes de encerrar conexões inativas
  connectionTimeoutMillis: 2000, // Tempo máximo de espera para uma conexão
});