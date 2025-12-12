import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './Routes/userRoutes.js';
import { PosterRoutes } from './Routes/posterRoutes.js';
import { genreRoutes } from './Routes/genreRoutes.js';
import { cartlineRoutes } from './Routes/cartlineRoutes.js';
import { authRoutes } from './Routes/authRoutes.js';
import { loginRoutes } from './Routes/loginRoutes.js';

// Indlæs miljøvariabler fra .env (uden at vise logs)
dotenv.config({ quiet: true });

// Brug port fra .env eller falde tilbage til 3000
const port = process.env.PORT || 3000;

// Opret express-app
const app = express();

// Gør det muligt at modtage JSON i requests
app.use(express.json());

// Gør det muligt at modtage form-data (fx fra formularer)
app.use(express.urlencoded({ extended: true }));

// Brug vores user-routes under /api/users
app.use('/api/users', userRoutes);
app.use('/api/poster', PosterRoutes);
app.use('/api/cartline', cartlineRoutes);
app.use('/api/genre', genreRoutes);
app.use('/api/login', loginRoutes)
app.use('/api/auth', authRoutes)

//404 route
app.use((req,res)=> {
  res.status(404).send('kunne ikke finde siden du søgte efter')
})

// Start serveren
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
