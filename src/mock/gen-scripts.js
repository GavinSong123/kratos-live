var Mock = require('../../node_modules/mockjs');
var fs = require('fs');


var mockScripts = {
  "teachers": [],
  "messages": []
};

for (let i = 0; i < 100; i++) {
  let teacher = {};
  teacher.id = i;
  teacher.name = Mock.Random.cname();
  teacher.title = Mock.Random.cname();
  teacher.avatar = "https://unsplash.it/" + Mock.Random.integer(200, 800);
  mockScripts.teachers.push(teacher);
}

for (let i = 0; i < 25; i++) {
  let message = {};
  message.teacherId = Mock.Random.integer(0, 99);
  message.offset = Mock.Random.integer(200, 1000);
  let num = Mock.Random.integer(1, 3);
  if (num === 1) {
    message.type = 'word';
    message.resources = Mock.Random.csentence();
  } else if (num === 2) {
    message.type = 'pic';
    message.resources = "https://unsplash.it/" + Mock.Random.integer(100, 1000);
  } else if (num === 3) {
    message.type = 'sound';
    message.resources = "https://esonderegger.github.io/html5-audio-controls/audio/hello.mp3";
  }
  mockScripts.messages.push(message);
}

var json = JSON.stringify(mockScripts);
fs.writeFile('mock-script.json', json, 'utf8');