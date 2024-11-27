// app.use('/app', router); // All routes in 'router' will be prefixed with '/app'
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';
import express from 'express'

/**
 * Binds the routes to the appropriate handler in the
 */
const router = express.Router()

router.get('/',AppController.getHomepage)
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
