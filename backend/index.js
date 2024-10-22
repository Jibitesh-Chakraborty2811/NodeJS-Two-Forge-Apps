const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors('*'));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const content = [
    {
        name: 'Content-1',
        description: 'This is a content'
    },
    {
        name: 'Content-2',
        description: 'This is also a content'
    }
];


app.get('/getcontent', (req, res) => {
    res.json(content);
});


app.post('/addcontent', (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;

    if (name && description) {
        const newContent = { name, description };
        content.push(newContent);
        res.status(201).json({
            message: 'Content added successfully',
            newContent
        });
    } else {
        res.status(400).json({ error: 'Name and description are required' });
    }
});


app.listen(5000, () => {
    console.log('Server started at port 5000');
});
