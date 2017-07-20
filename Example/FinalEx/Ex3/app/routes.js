var Student = require('./models/student');

function getStudents(res) {
    Student.find(function (err, students) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(students); // return all students in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all students
    app.get('/api/students', function (req, res) {
        // use mongoose to get all students in the database
        getStudents(res);
    });

    app.post('/api/insertStudent', function (req, res) {

        Student.create( req.body, function (err, student) {
            
			if (err){
                res.send(err);
                console.log(err);
            }
				
            getStudents(res);
        });

    });

    app.get('/api/getStudent/:student_id', function (req, res) {

        Student.find( {
            id: req.params.student_id
        }, function (err,student) {
            
           if (err){
                res.send(err);
                console.log(err);
            }
                
            res.json(student);
        });

    });

    // delete a Student
    app.delete('/api/deleteStudent/:student_id', function (req, res) {
        Student.remove({
            id: req.params.student_id
        }, function (err, student) {
            if (err){
                res.send(err);
            }

            res.send("success");
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
