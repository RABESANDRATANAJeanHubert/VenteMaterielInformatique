import express, { Application } from 'express'; 
import todoRoutes from '../src/routes/todos'
const PORT = 3000; 
const app: Application = express(); 


app.use("/todo",todoRoutes);
app.get('/', (req, res) => res.send('Express & Node with TypeScript!'));  

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); 
});