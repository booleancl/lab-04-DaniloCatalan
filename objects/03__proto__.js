var monkey = {
  feeds: 'bananas',
  breathes: 'air'
}

function Human() {}

Human.prototype = monkey

var developer = new Human();

developer.feeds = 'pizza'
developer.hacks = 'Javascript'
developer.breathes = 'air'
console.log([1,2,3].__proto__)
console.log(Human.prototype)

module.exports = {
  developer: developer,
  Human: Human,
}