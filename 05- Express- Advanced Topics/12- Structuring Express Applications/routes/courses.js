require('dotenv').config()
const express = require('express')
const app = express();

const courses = [{id: 1, name: "HTML"}, {id: 2, name: "CSS"}, {id: 3, name: "JavaScript"}];

// GET http://localhost:3000/api/courses
app.get('/api/courses', (req, res) => res.status(200).send(courses));

// GET http://localhost:3000/api/courses/2
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Cannot find the course');
    return res.status(200).send(course);
});

// POST http://localhost:3000/api/courses
const {z} = require('zod/v4');
const schema = z.object({name: z.string().min(3)});
app.use(express.json());
app.post('/api/courses', (req, res) => {
    try {
        const validatedData = schema.parse(req.body);
        const newCourse = {id: courses.length + 1, name: validatedData.name};
        courses.push(newCourse);
        res.status(200).send(newCourse);
    } catch (e) {
        if (e instanceof z.ZodError) {
            return res.status(400).send(e.message);
        } else {
            return res.status(500).send('Internal Server Error');
        }
    }
});

// PUT http://localhost:3000/api/courses/1
app.put('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const course = courses.find(c => c.id === id);

    if (!course) return res.status(404).send('Cannot find the course you are trying to modify');

    try {
        const validatedData = schema.parse(req.body);
        course.name = validatedData.name;
        res.status(200).send(course);
    } catch (e) {
        if (e instanceof z.ZodError) {
            return res.status(400).send(e.message);
        } else {
            return res.status(500).send('Internal Server Error');
        }
    }
});

// DELETE http://localhost:3000/api/courses/1
app.delete('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const course = courses.find(c => c.id === id);
    if (!course) return res.status(404).send('Cannot find the course you are trying to delete');
    const deletedCourseIdx = courses.indexOf(course);

    res.status(200).send(courses.splice(deletedCourseIdx, 1)[0]);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));