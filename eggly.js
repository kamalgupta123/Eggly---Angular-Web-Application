angular.module('moustache',[

]).controller('moustacheCtrl',function($scope,$location, $anchorScroll){
    $scope.currentCateogary=null;
    $scope.editedBookmark=null;
    $scope.newBookmark=null;
    $scope.isCreating=false;
    $scope.isEditing=false;
    $scope.cateogaries=[
        {"id":0,"name":"Kamal"},
        {"id":1,"name":"Romesh"},
        {"id":2,"name":"Renu"}
    ];
    $scope.bookmarks=[
        {"id":0,"title":"AngularJS","url": "http://angularjs.org", "category": "Kamal"},
        {"id":1,"title": "Egghead.io", "url": "http://angularjs.org", "category": "Kamal"},
        {"id":2,"title": "A List Apart", "url": "http://alistapart.com/", "category": "Romesh"},
        {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Romesh"},
        {"id":4,"title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Renu"},
        {"id":5,"title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Renu"},
        {"id":6,"title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Kamal"},
        {"id":7,"title": "Wimp", "url": "http://wimp.com", "category": "Romesh"}
        ];
    $scope.setCurrentCateogary=function(cateogary){
        $scope.currentCateogary=cateogary;
        $scope.isEditing=false;
        $scope.isCreating=false;
    }
    $scope.isCurrentCateogary=function(cateogary){
        return $scope.currentCateogary!=null && $scope.currentCateogary.name==cateogary.name;
    }
    $scope.setEditedBookmark=function(bookmark){
        $scope.editedBookmark=angular.copy(bookmark);
    }
    $scope.startEditing=function(){
        $scope.isCreating=false;
        $scope.isEditing=true;
    }
    $scope.shouldShowEditing=function(){
        return $scope.isEditing && !$scope.isCreating;
    }
    $scope.cancelEditing=function(){
        $scope.isEditing=false;
    }
    $scope.updateBookmark=function(Boockmark){
       var index;
       angular.forEach($scope.bookmarks,function(value,key){
           if(value.id==Bookmark.id){
             index=key;
           }
       });
       $scope.bookmarks[index]=Bookmark;
    }
    $scope.scrolltotop=function(){
       $location.hash('top');
       $anchorScroll();
    }
    $scope.isSelectedBookmark=function(bookmark){
       return $scope.editedBookmark && $scope.editedBookmark.id==bookmark.id;
    }
    $scope.currentCateogaryNotNull=function(){
        return $scope.currentCateogary;
    }
    $scope.addBookmark=function(bookmark){
        bookmark.id=$scope.bookmarks.length;
        $scope.bookmarks.push(bookmark); 
        console.log($scope.bookmarks);
        resetCreateForm();
    }
    function resetCreateForm() {
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCateogary.name
        };
    }
    $scope.shouldShowCreating=function(){
        return $scope.isEditing==false && $scope.isCreating==true;
    }
    $scope.startCreating=function(){
        $scope.isEditing=false;
        $scope.isCreating=true;
        resetCreateForm();
    }
    $scope.cancelCreating=function(){
        $scope.isCreating=false;
    }
    $scope.isCreatingOn=function(){
        return $scope.isCreating==true && $scope.isEditing==false;
    }
})