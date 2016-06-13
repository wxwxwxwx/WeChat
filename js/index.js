var aa = angular.module('wei',['ngAnimate','ngRoute','ngTouch'])

var chat = [
{
  name:'画里画着画不出的画',
  content:'与其多心，不如少根筋',
  image:'./images/t-1.jpg',
  chats:[
      {record:'你了解angular.js吗？',is:false},
      {record:'了解呀，你现在看的东西就是我用angular做的。',is:true},
      {record:'请你说说对Angular的理解？',is:false},
      {record:'他是一个优秀的前段js框架',is:true},
      {record:'说的不错，来我们公司上班吧。月薪10k',is:false},
      {record:'好的，我考虑考虑吧',is:true},

]},
{name:'私人定制',content:'大爱挂嘴边 小爱藏心里',image:'./images/t-2.jpg',chats:[
  {record:'你了解angular.js吗？',is:false},
  {record:'了解呀，你现在看的东西就是我用angular做的。',is:true},
  {record:'请你说说对Angular的理解？',is:false},
  {record:'他是一个优秀的前段js框架',is:true},
  {record:'说的不错，来我们公司上班吧。月薪10k',is:false},
  {record:'好的，我考虑考虑吧',is:true},

]},
{name:'拥有',content:'you are my everything',image:'./images/t-3.jpg',chats:[
  {record:'你了解angular.js吗？',is:false},
  {record:'了解呀，你现在看的东西就是我用angular做的。',is:true},
  {record:'请你说说对Angular的理解？',is:false},
  {record:'他是一个优秀的前段js框架',is:true},
  {record:'说的不错，来我们公司上班吧。月薪10k',is:false},
  {record:'好的，我考虑考虑吧',is:true},

]},
{name:'拾起残风的梦',content:'积少成多',image:'./images/t-4.jpg',chats:[
  {record:'你了解angular.js吗？',is:false},
  {record:'了解呀，你现在看的东西就是我用angular做的。',is:true},
  {record:'请你说说对Angular的理解？',is:false},
  {record:'他是一个优秀的前段js框架',is:true},
  {record:'说的不错，来我们公司上班吧。月薪10k',is:false},
  {record:'好的，我考虑考虑吧',is:true},

]},
{name:'你是路人几',content:'nice',image:'./images/t-5.jpg',chats:[
  {record:'你了解angular.js吗？',is:false},
  {record:'了解呀，你现在看的东西就是我用angular做的。',is:true},
  {record:'请你说说对Angular的理解？',is:false},
  {record:'他是一个优秀的前段js框架',is:true},
  {record:'说的不错，来我们公司上班吧。月薪10k',is:false},
  {record:'好的，我考虑考虑吧',is:true},

]},
]


aa.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'indexCtrl',
    templateUrl:'views/homepage.html'
  }).when('/homepage',{
    controller:'homepageCtrl',
    templateUrl:'views/homepage.html',
  }).when('/content',{
    controller:'contentCtrl',
    templateUrl:'views/content.html',
  }).when('/find',{
    controller:'findCtrl',
    templateUrl:'views/find.html',
  }).when('/chat/:id',{
    controller:'chatCtrl',
    templateUrl:'views/chat.html',
  })
  .otherwise({
    redirectTo:'/'
  })
}])

aa.controller('indexCtrl',['$scope',function($scope){

}])

aa.controller('chatCtrl',['$scope','$routeParams',function($scope,$routeParams){
  var id = $routeParams.id
  $scope.herimg = chat[id].image;
  $scope.chatlist = chat[id].chats;
}])




aa.controller('homepageCtrl',['$scope',function($scope){
  $scope.delete = function(id){
    $scope.chat = $scope.chat.filter(function(v,i){
      return i != id;
    })
  }
  $scope.chat =chat;

}])

aa.controller('contentCtrl',['$scope',function($scope){
  $scope.friendlist = [
    {
      keys:'A',
      person:[
        {name:'A像少年啦飞驰',image:'../images/t-1.jpg'},
        {name:'Alice',image:'./images/t-2.jpg'},
        {name:'ANicd',image:'./images/t-3.jpg'}
      ]
    },
    {
      keys:'B',
      person:[
        {name:'Bob',image:'./images/t-4.jpg'},
        {name:'宝塔镇河妖',image:'./images/t-5.jpg'},
        {name:'ANicd',image:'./images/t-6.jpg'}
      ]
    },
    {
      keys:'C',
      person:[
        {name:'吃饱的海带',image:'./images/t-4.jpg'},
        {name:'曹志刚',image:'./images/t-5.jpg'},
        {name:'蔡凤霞',image:'./images/t-6.jpg'}
      ]
    }
  ]


}])




aa.directive('uqHeader',function(){
  return {
    restrict:'E',
    templateUrl:'views/uq-header.html',
  }
}).directive('uqFooter',function(){
  return {
    restrict:'E',
    templateUrl:'views/uq-footer.html',
  }
})












// $(function(){
//   $('.four').on('touchstart',function(){
//     $('.choose').removeClass('choose');
//     $(this).addClass('choose');
//     if($(this).hasClass('homepage')){
//       $('.title-inner').attr('class','title-inner').addClass('weixin');
//     }else if($(this).hasClass('address-list')){
//       $('.title-inner').attr('class','title-inner').addClass('content');
//     }else if($(this).hasClass('find')){
//       $('.title-inner').attr('class','title-inner').addClass('finds');
//     }else{
//       $('.title-inner').attr('class','title-inner').addClass('mes');
//     }
//     return false;
//   })
// })
