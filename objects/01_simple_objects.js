function emptyObject(){
  var object = {}
  //console.log(object.constructor)
  // console.log(object.toString())
  // console.log('hola'.toString())
  // console.log((function (){
  //   var a = 10
  // }).toString())
  //console.log(emptyObject.toString())
  // console.log('hola'.constructor)
  // console.log((33).constructor)
  //console.log((function(){}).constructor)
  return object
}

function saasBook(){
  var book = {
    authors: [
      { name: 'Armando', lastName: 'Fox' },
      { name: 'David', lastName: 'Patterson' }
    ],
    year: 2020,
    web: 'www.saasbook.info',
    name:'Software as a Service',
    fullName: function(){
      var authors = 'by'
      this.authors.forEach(function(author) {
        authors += ' ' + author['name'] + ' ' + author['lastName']
      });
     return this.name + ' ' + authors
    }
  }
  return book   
}

function Book(title, author){
  //console.log(this)
  this.title = title,
  this.author = author,
  this.fullName = function() {
    return this.title + ' por: ' + this.author
  }
}

function instanceOf(){
  //var book =  {}
  var book = new Book()
  return {
    isInstanceOfBook: book instanceof Book,
    isInstanceOfFunction: Book instanceof Function,
    isInstanceOfObject: Function instanceof Object
  }
}

module.exports = { 
  emptyObject: emptyObject,
  saasBook: saasBook,
  Book: Book,
  instanceOf: instanceOf
}
