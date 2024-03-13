import express from "express";



const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Server running on Port 3001`);
});


export default router;