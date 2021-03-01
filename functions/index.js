const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllTodos,
    getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo,
} = require('./APIs/todos')

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails,
} = require('./APIs/users')

//Users
app.post('/login', loginUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.post('/signup', signUpUser);
app.post('/user', auth, updateUserDetails);
app.get('/user', auth, getUserDetail);

//Todos
app.put('/todo/:todoId', auth, editTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.post('/todo', auth, postOneTodo);
app.get('/todos', auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);

exports.api = functions.https.onRequest(app);