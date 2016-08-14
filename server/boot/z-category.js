// module.exports = function(app){
//   var Category = app.models.category;
//   var User = app.models.user;
//   var Post = app.models.post;
//   var categories = [
//     {id:"Sport",childrens:["PL","EPL"]},
//     {id:"PL",childrens:["Transfer"]}
//   ];
//   var users = [
//     {id:"12",full_name:"NhuanTran",email:"tranducnhuan@hotmail.com",password:"123"},
//     {id:"13",full_name:"EddyNguyen",email:"eddy@gmail.com",password:"123"}
//   ];
//   var posts = [
//     {id:"12A",ownerId:"12",title:"Transfer Rumors August",content:"All transfer rumors",
//         feature_image:"https",categoryId:"PL"},
//     {id:"13A",ownerId:"12",title:"Transfer Rumors August",content:"All transfer rumors",
//         feature_image:"https",categoryId:"PL"},
//   ];
//   for(var i = 0;i<users.length;i++){
//     Category.create(categories[i],function(err,cb){
//       if(err) console.error(err);
//       else{
//         console.log("Successfully!");
//       }
//     });
//     User.create(users[i],function(err,cb){
//       if(err) console.log(err);
//       else console.log("Successfully");
//     });
//     Post.create(posts[i],function(err,cb){
//       if(err) console.error(err);
//     });
//   }
// };
