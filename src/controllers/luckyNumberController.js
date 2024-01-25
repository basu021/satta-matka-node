// backend/src/controllers/luckyNumberController.js
const mysql = require('mysql2');

// Assuming you have the database connection (`db`) already established

// Controller function for adding lucky numbers
exports.addLuckyNumber = (req, res) => {
    const { goldenAnk, motorPatti } = req.body;

    // Validate input if needed

    // Execute SQL query to insert data into the database
    const sql = 'INSERT INTO luckynumbers (goldenAnk, motorPatti) VALUES (?, ?)';
    const values = [goldenAnk, motorPatti];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding lucky number:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Lucky number added successfully');
        res.json({ message: 'Lucky number added successfully' });
    });
};
