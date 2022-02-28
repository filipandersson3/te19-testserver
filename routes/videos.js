const express = require('express');
const router = express.Router();
const pool = require('../database');
/*

    BASE URL /tasks
    GET / - get all tasks
    POST / - create a new task
    GET /:id - get a task by id
    PUT /:id - update a task by id
    DELETE /:id - delete a task by id

    Create, Read, Update, Delete - CRUD
*/
/* GET home page. */
router.get('/', async function(req, res, next) {
    await pool.promise()
        .query('SELECT * FROM videos')
        .then(([rows, fields]) => {
            console.log(rows);
            let data = {
                message: "He llo",
                layout: 'layout.njk',
                title: 'Nunjucks example',
                items: rows
              };
              res.render('videos.njk', data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                videos: {
                    error: 'Error getting bideos'
                }
            })
        });
});

/* DELETE /:id - delete a task by id */
router.get('/:id/delete/', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(400).json({
            videos: {
                error: 'Bad request'
            }
        })
    } else {
        await pool.promise()
            .query('DELETE FROM videos WHERE id = ?', [id])
            .then((response) => {
                console.log(response);
                if (response[0].affectedRows === 1) {
                    res.redirect('/videos');
                } else {
                    res.status(400).redirect('/videos');
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    videos: {
                        error: 'Error getting videos'
                    }
                })
            });
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(400).json({
            videos: {
                error: 'Bad request'
            }
        })
    } else {
        await pool.promise()
            .query('SELECT * FROM videos WHERE id = ?', [id])
            .then(([rows, fields]) => {
                console.log(rows);
                res.json({
                    videos: {
                        data: rows
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    videos: {
                        error: 'Error getting videos'
                    }
                })
            });
    }
})

router.post('/', async (req, res, next) => {
    const url = req.body.url;
    const good = req.body.good;
    const title = req.body.title;
    await pool.promise()
    .query('INSERT INTO videos (url,good,title) VALUES (?,?,?)', [url,good,title])
    .then((response) => {
        console.log(response);
        res.json({
            videos: {
                data: response
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            videos: {
                error: 'Error posting videos'
            }
        })
    });
})

router.post('/fileupload', async (req, res, next) => {
    const files = req.files;
    if (files == null){

    } else {
        console.log(files.file);
    }
})


module.exports = router;
