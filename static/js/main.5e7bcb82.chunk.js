(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),s=n.n(o),i=n(1),c=n(3),l=n(13),u=n(19),m=n(5),d=n(14);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E="https://jsonplaceholder.typicode.com/",b={listWithUsersCommentsPosts:[],filteredList:[],isLoading:!1,isLoaded:!1,hasError:!1},O=Object(m.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return p({},e,{isLoading:!0});case"HANDLE_SUCCESS":return p({},e,{hasError:!1,isLoaded:!0,isLoading:!1,listWithUsersCommentsPosts:t.posts,filteredList:t.posts});case"HANDLE_ERORR":return p({},e,{isLoading:!1,hasError:!0});case"SORT_BY_TITLE":return p({},e,{filteredList:Object(c.a)(e.listWithUsersCommentsPosts).sort(function(e,t){return e.title>t.title?1:-1})});case"SORT_BY_TITLE_REVERSE":return p({},e,{filteredList:Object(c.a)(e.listWithUsersCommentsPosts).sort(function(e,t){return e.title>t.title?1:-1}).reverse()});case"REMOVE_POST":return p({},e,{listWithUsersCommentsPosts:Object(c.a)(e.listWithUsersCommentsPosts).filter(function(e){return e.id!==t.payload}),filteredList:Object(c.a)(e.filteredList).filter(function(e){return e.id!==t.payload})});case"REMOVE_COMMENT":return p({},e,{listWithUsersCommentsPosts:Object(c.a)(e.listWithUsersCommentsPosts).map(function(e){return p({},e,{comments:Object(c.a)(e.comments).filter(function(e){return e.id!==t.payload})})}),filteredList:Object(c.a)(e.filteredList).map(function(e){return p({},e,{comments:Object(c.a)(e.comments).filter(function(e){return e.id!==t.payload})})})});default:return e}},Object(m.a)(d.a)),y=(n(32),n(10)),h=n.n(y),v=n(15),L=n(16),_=n(17),j=n(20),g=n(18),N=n(21);n(34),n(35),n(36);var C=function(e){var t=e.user,n=t.name,r=t.username,o=t.email,s=t.address;return a.a.createElement("div",{className:"post__user"},a.a.createElement("p",{className:"user__name"},"Name:",n),a.a.createElement("p",{className:"user__username"},"Userame:",r),a.a.createElement("p",{className:"user__email"},"Email:",o),a.a.createElement("p",{className:"user__city"},"City:",s.city))},T=(n(37),n(38),function(e){var t=e.user;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"user__email"},"Email:",t))}),P=function(e){var t=e.id,n=e.comment,r=e.removeComment,o=n.body,s=n.email;return a.a.createElement("div",{className:"comment-item"},a.a.createElement("li",{className:"comment-text"},o),a.a.createElement(T,{user:s}),a.a.createElement("button",{className:"btn-remove",type:"button",onClick:function(){return r(t)}},"\u2716"))},R=Object(i.b)(null,function(e){return{removeComment:function(t){return e({type:"REMOVE_COMMENT",payload:t})}}})(P),w=function(e){var t=e.comments;return a.a.createElement("ul",{className:"comments-list"},t.map(function(e){return a.a.createElement(R,{id:e.id,comment:e,key:e.id})}))};var S=function(e){var t=e.id,n=e.post,r=e.removePostItem,o=n.user,s=n.comments,i=n.title,c=n.body;return a.a.createElement("div",{className:"post"},a.a.createElement("button",{className:"btn-remove btn-post",type:"button",onClick:function(){return r(t)}},"\u2716"),a.a.createElement("h2",{className:"post__title"},i),a.a.createElement("p",{className:"post__body"},c),a.a.createElement(C,{user:o}),a.a.createElement(w,{comments:s}))},k=Object(i.b)(null,function(e){return{removePostItem:function(t){return e({type:"REMOVE_POST",payload:t})}}})(S),D=function(e){var t=e.filteredList,n=e.isLoaded,r=e.sortByTitle,o=e.sortByTitleReverse;return console.log(t),a.a.createElement("div",{className:"post-list"},n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:r},"Sort A-Z"),a.a.createElement("button",{type:"button",onClick:o},"Sort Z-A")),t.map(function(e){return a.a.createElement(k,{id:e.id,post:e,key:e.id})}))},A=Object(i.b)(function(e){return{filteredList:e.filteredList,isLoaded:e.isLoaded}},function(e){return{sortByTitle:function(){return e({type:"SORT_BY_TITLE"})},sortByTitleReverse:function(){return e({type:"SORT_BY_TITLE_REVERSE"})}}})(D),I=(n(39),function(e){function t(){var e,n;Object(L.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(j.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).loadData=Object(v.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.loadData();case 2:case"end":return e.stop()}},e)})),n}return Object(N.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.isLoaded;return e.hasError?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Some problems..."),a.a.createElement("button",{type:"button",onClick:this.loadData,disabled:t},t?"Loading...":"Reload")):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"List of Posts"),!n&&a.a.createElement("button",{type:"button",onClick:this.loadData,disabled:t},t?"Loading...":"Load"),a.a.createElement(A,null))}}]),t}(a.a.Component)),U=Object(i.b)(function(e){return{isLoading:e.isLoading,isLoaded:e.isLoaded,hasError:e.hasError}},function(e){return{loadData:function(){return e(function(e){return e({type:"START_LOADING"}),Promise.all([fetch("".concat(E,"posts")),fetch("".concat(E,"users")),fetch("".concat(E,"comments"))]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(t){var n=Object(u.a)(t,3),r=n[0],a=n[1],o=n[2],s=r.map(function(e){return p({},e,{user:a.find(function(t){return t.id===e.userId}),comments:o.filter(function(t){return t.postId===e.id})})});console.log(s),e(function(e){return{type:"HANDLE_SUCCESS",posts:e}}(s))}).catch(function(){return e({type:"HANDLE_ERORR"})})})}}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(i.a,{store:O},a.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.5e7bcb82.chunk.js.map