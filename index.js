const express = require('express');
const axios = require('axios');

const app = express();

app.get('/kshitiz', async (req, res) => {
    const animeName = req.query.anime;
    const apiUrl = `https://api1.anime-dex.workers.dev/anime/${animeName}`;

    try {
        const response = await axios.get(apiUrl);
        const episodes = response.data.results.episodes;

        res.json({ episodes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
