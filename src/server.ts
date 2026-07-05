import app from "./app";
import config from "./config/env"

const PORT = config.PORT
async function main(){
      try {
           app.listen(PORT, () => {
                  console.log(`Server is running on port ${PORT}`);
            })
      } catch (error) {
            console.error("Error starting server:", error);
      }
}
main()