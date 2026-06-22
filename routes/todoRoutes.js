const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const pool = require("../database/db");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, completed } = req.body;

        const result = await pool.query(
            `INSERT INTO todos (user_id, title, completed)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [req.user.id, title, completed]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});
router.get("/", authMiddleware, async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM todos WHERE user_id = $1 ORDER BY id",
            [req.user.id]
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { title, completed } = req.body;

        const result = await pool.query(
            `UPDATE todos
             SET title = $1,
                 completed = $2
             WHERE id = $3
             AND user_id = $4
             RETURNING *`,
            [title, completed, req.params.id, req.user.id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});
router.delete("/:id", authMiddleware, async (req, res) => {
    try {

        await pool.query(
            "DELETE FROM todos WHERE id = $1 AND user_id = $2",
            [req.params.id, req.user.id]
        );

        res.json({
            message: "Todo deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});
module.exports = router;