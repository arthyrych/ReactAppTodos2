const fs = require('fs')

module.exports.seedDatabase = () => {

  let filename = 'todomvc/data.json';
  let content = JSON.stringify({
    'todos': [
        {
          "title": "todo from task 1",
          "completed": false,
          "id": 1
        },
        {
          "title": "todo from task 2",
          "completed": false,
          "id": 2
        },
        {
          "title": "todo from task 3",
          "completed": false,
          "id": 3
        }
      ],
    'accounts': []
  }, null, 2)

  fs.writeFileSync(filename, content)

  return null

}