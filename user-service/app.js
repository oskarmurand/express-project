// we import the express module
const express = require('express')

// we import our users list static JSON
const usersList = require('./data/users')

const app = express()
// we define which port the service runs on
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// when the /users endpoint is queried
app.get('/users', (req, res) => {
    /** 
        we respond with the whole users list json
        we wrap the data with another object and users key
        we do this so that we can add additonal metadata in the future
        also, tthis allows us to give context to the returned data
    */
    res.send({ users: usersList })
})

// when the /users/<any string> endpoint is queried
app.get('/users/:id', (req, res) => {
    // we search the objects in usersList array for matching __id and assign it to user if found
    const user = usersList.find(userObject => req.params.id === userObject._id)
    if (user) {
        // if user is found we return the user
        res.send({ user: user })
    } else {
        // else we return 404 - not found
        res.sendStatus(404)
    }
})

app.get('/active/count', (req, res) => {
    /** 
        implement the active users endpoint so that it would return the active user count
        returned data example:
            { active-users: 5 }

        in order to filter the usersList .filter() would be helpful
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    */
})

// the service is started on the configured port when this file is run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})