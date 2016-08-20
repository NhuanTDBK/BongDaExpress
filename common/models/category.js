module.exports = function(Category) {
  Category.getNavigation = function(cb) {
      var subHome = Category.find({
          where: {parent:"Home"},
          fields: {id: true} 
      },function(err,ins){
        results = ins;    
      });
  };
};
