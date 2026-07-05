import dotenv from "dotenv";
import path from "path";
dotenv.config({
      path: path.join(process.cwd(), ".env"),
});
const config ={
      DATABASE_URL: process.env.DATABASE_URL,
      PORT: process.env.PORT || 3000,
      APP_URL: process.env.APP_URL || "http://localhost:3000",
      JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "your_access_secret_key",
      JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "your_refresh_secret_key",
}
export default config;