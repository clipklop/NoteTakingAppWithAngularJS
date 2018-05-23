angular.module('NoteWrangler').filter('categoryFilter', function() {
  return function (collection, category) {
    
    if (category && category.id) {
      let newCollection = [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i].categoryId === category.id) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    } else {
      return collection;
    }
    
  }
});