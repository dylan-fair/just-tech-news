const router = require('express').Router();
const { Comment } = require('../../models/Comment');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .create(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
});

module.exports = router;