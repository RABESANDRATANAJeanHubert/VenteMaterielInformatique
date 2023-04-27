import express, { Application } from 'express';
const dotEnv =  require('dotenv')
dotEnv.config(); 
import todoRoutes from '../src/routes/todos'
const PORT = process.env.APP_PORT; 
const app: Application = express(); 
app.use("/todo",todoRoutes);
app.get('/', (req, res) => res.send('Express & Node with TypeScript!'));  

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); 
});