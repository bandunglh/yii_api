!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="https://dn-coding-net-production-static.qbox.me/static/",t(0)}({0:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";angular.module("constants",["ipCookie"]),angular.module("filters",[]),angular.module("directives",["hljs","ngStorage"]),angular.module("services",["ngResource","hljs","ngRoute"]),angular.module("coding",["constants","filters","directives","services"]);a(84);var o=angular.module("app",["ngRoute","ngSanitize","ipCookie","coding","angular-md5","monospaced.elastic","ui.select2","ngClipboard","angularMoment","blueimp.fileupload","oc.lazyLoad","btford.modal","duScroll","ngStorage","infinite-scroll"]);o.controller("AppController",["$scope","$injector","location","$rootScope","$window","$routeParams","$http","$route","PageTitle","User","Project","PaasAPI","Depot","Group","Flash","Common","experiment","ipCookie","$filter","$location","Task","Notifications","Messages","TextService","Tweet","$localStorage",function(e,t,a,o,n,i,r,s,l,c,d,u,p,f,g,m,h,v,_,T,S,E,w,C,b,R){var P=/^\/(?:u|t)\/([^\/]+)\/p\/([^\/]+)/,U=/^\/group\/([1-9]\d*)/,M=function(e,t){return o.PROJECT&&(t!=o.PROJECT.name||e!=o.PROJECT.owner_user_name)};e.logout=function(){c.sign_out(function(){o.USER=void 0,n.location.href="/"})},e.toBubble=function(){"/pp"===a.path()?s.reload():a.path("/pp")},e.scrollToTop=function(){$("body").scrollTop(0)},e.messageTab=1,e.tabClick=function(t){e.messageTab==t?1==t?T.path(0==e.unread.notifications?"/user/notifications/basic":"/user/notifications/unread"):T.path("/user/messages"):e.messageTab=t},o.isExpActive=function(e){return h.isActive(e)},o.setCookie=function(e,t,a){var o=new Date;o.setTime(o.getTime()+31536e6),v(e,t,{path:"/",expires:a||o})},o.getCookie=function(e){return v(e)},e.needConfirmEmail=function(){return o.USER&&0==o.USER.status&&o.USER.email&&!o.USER.email.endsWith("@mart")},o.isShowCode=function(){var t=_("isRole")(e.PROJECT,e.MEMBER);return t},o.current_app=!1,o.$on("$routeChangeStart",function(t,n){var i=a.path(),r=(a.search().debug,m.isAccount(a));if(i.match(/^\/user\/?/)||i.match(/^\/t\//)&&!i.match(P)||i.match(/^\/team\/?/)&&!i.match(P)?o.current_app="user":i.match(U)?o.current_app="group":i.match(P)?o.current_app="project":o.current_app=!1,e.top_menu_tpl=o.current_app,"project"!==o.current_app&&(o.GROUP=void 0,o.PROJECT=void 0,o.DEPOT=void 0),"project"===o.current_app){var s=i.match(P);if(s&&3==s.length){var l=s[1],c=s[2];if(M(l,c)&&(o.PROJECT=void 0,o.DEPOT=void 0),o.PROJECT)o.PROJECT.is_public&&(o.current_app=!1);else{var u=d.queryByName({username:l,project_name:c},function(e){var t=o.PROJECT=e.data||!1;o.current_app="project",t&&t.is_public&&(o.current_app=!1)});if(u["catch"](function(e,t){return o.PROJECT=!1,!t||1400!==t.code&&1100!==t.code?void 0:(g.fail().send(c+" 项目不存在！"),!1)}),!o.DEPOT){var h=p.depot({username:l,project_name:c},function(e){o.DEPOT=e.data.depot||!1});h["catch"](function(e,t){return o.DEPOT={id:0,project_id:0,hasCommits:!1},t&&1400===t.code&&!o.isShowCode()?!1:void 0})}o.current_app=!1}}else o.PROJECT=!1}if("group"===o.current_app){var s=i.match(U);if(s&&2==s.length){var v=+s[1];f.query({group_id:v},function(e){o.GROUP=e.data||!1})}}r&&(o.current_app=!1),o.module=n&&n.$$route&&n.$$route.module||"home"}),o.loadMoreNotifications=!1,o.loadMoreMessages=!1,o.NotificationsList=[],o.MessagesList=[],o.lastPage={Notifications:1},o.unread={notifications:0,messages:0,task_notify:0};var k={};o.tweetPop={default_topics:[],placeholder:""},o.loadTweetPop=function(){var e=new Date(R.tweetPopLastLoadTime||0),t=new Date;t-e>72e5?b.pop().then(function(e){e.data&&(R.tweetPop=e.data,R.tweetPopLastLoadTime=t,o.tweetPop=e.data)}):R.tweetPop&&(o.tweetPop=R.tweetPop)},o.loadTweetPop(),o.loadData=e.loadData=function(e,t){if("Notifications"==e){if(o.loadMoreNotifications||-1==o.lastPage.Notifications)return;o.loadMoreNotifications=!0;var a=t||0==o.NotificationsList.length?"all":"unread";E[a]({page:"all"==a?o.lastPage.Notifications++:1,pageSize:"all"==a?10:9999},function(e){e.data.list.sort(function(e,t){return"all"==a?t.id-e.id:e.id-t.id}),"unread"==a&&angular.forEach(k,function(e,t){e.prepareForDelete=!0}),angular.forEach(e.data.list,function(t){var n=19;t.content=C.text(t.content,!1),t.line=t.content.replace(/<.+?>/gi,"").length<=n?1:2;var i=o.NotificationsList.length;if(0==t.status&&(k[t.id]?k[t.id].prepareForDelete=!1:k[t.id]=t),"all"==a){if(0!=i&&o.NotificationsList[i-1].id<=t.id)return;o.NotificationsList.push(t),o.lastPage.Notifications>=e.data.totalPage&&(o.lastPage.Notifications=-1)}else{if(0!=i&&o.NotificationsList[0].id>=t.id)return;o.NotificationsList.unshift(t)}}),angular.forEach(k,function(e,t){e.prepareForDelete&&(e.status=1,delete k[t])}),o.loadMoreNotifications=!1})}else o.loadMoreMessages=!0,w.conversations({page:1,pageSize:50},function(e){o.MessagesList=[],angular.forEach(e.data.list,function(e){e.content=C.text(e.content,!1),o.MessagesList.push(e)}),o.loadMoreMessages=!1})},o.loadUnreadList=function(t){return o.USER?"Tasks"==t?(e.tasks_loaded=!1,void c.unfinished_tasks({},function(t){o.unread.task_notify=0,angular.forEach(t.data,function(e){e.status=1;var t=parseInt((new Date).valueOf()/864e5);v("disableTaskNotify")||(parseInt(e.deadline/86400)<t||e.priority>=3)&&(o.unread.task_notify=1)}),e.tasks_loaded=!0,e.tasks=t.data||[]})):void e.loadData(t):void 0},o.updateUnreadList=function(e){var t=o.unread.notifications+o.unread.messages==0;(t||0!=e.data.messages)&&o.loadUnreadList("Messages"),(t||0!=e.data.notifications)&&o.loadUnreadList("Notifications"),o.loadUnreadList("Tasks")},e.markRead=function(t){1!=t.status&&E.mark_read({id:t.id},{},function(a){0==a.code?1==a.data&&(t.status=1,e.unreadCount--,o.unread.notifications--):Errors.handle(a)})},o.$on("$routeChangeSuccess",function(e,n){o.isAccount=m.isAccount(a),o.USER&&c.unread_count({},function(e){0==e.code&&(o.unread.notifications=e.data.notifications,o.unread.messages=e.data.messages,o.updateUnreadList(e),o.USER.prj_update_count=e.data.project_update_count)});var i=null;if(n)if(n.$$route)if(i=n.$$route.title){if(angular.isArray(i)){var r=i.slice(-1)[0];r.$inject=i.slice(0,-1),i=r}if(angular.isFunction(i)){i=t.invoke(i);var s=i&&i.then;if(s)return void i.then(function(e){l.set(e,"Coding.net")})}l.set(i,"Coding.net")}else l.set();else l.set("Page Not Found");else l.set()})}]),o.factory("httpInterceptor",["Setting",function(e){return{request:function(t){return t.withCredentials=!0,/^(http|https):/i.test(t.url)||/\.html$/i.test(t.url)||(t.url=e.api_host+"/"+t.url.replace(/^\/(.*)/,"$1")),t}}}]),o.factory("requestInterceptor",["RequestValidModalService","$rootScope","$location",function(e,t,a){return{response:function(t){return t.data&&(1018==t.data.code?($(".ui.modal.active:not(#request-valid-modal)").modal("hide"),setTimeout(function(){e.setType(e.POST_LIMIT).show(),$("#add-friend-modal").modal("hide")},1e3)):1e3===t.data.code&&t.data.msg&&t.data.msg.user_not_login?t.data.msg.user_not_login="<a href=\"javascript:location.href='/login'\">请登录</a>":1124===t.data.code?a.path("/user"):907===t.data.code?setTimeout(function(){e.setType(e.FOLLOW_LIMIT).show(),$("#add-friend-modal").modal("hide")},1e3):2204===t.data.code&&setTimeout(function(){e.setType(e.INVITE_FRIEND_LIMIT).show(),$("#add-friend-modal").modal("hide")},1e3)),t}}}]),o.config(["$httpProvider",function(e){e.interceptors.push("httpInterceptor"),e.interceptors.push("requestInterceptor");var t=["post","put"];angular.forEach(t,function(t){e.defaults.headers[t]["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8"});var a=function(e){var t,o,n,i,r,s,l,c="";for(t in e)if(o=e[t],o instanceof Array)for(l=0;l<o.length;++l)r=o[l],n=t+"["+l+"]",s={},s[n]=r,c+=a(s)+"&";else if(o instanceof Object)for(i in o)r=o[i],n=t+"["+i+"]",s={},s[n]=r,c+=a(s)+"&";else void 0!==o&&null!==o&&(c+=encodeURIComponent(t)+"="+encodeURIComponent(o)+"&");return c.length?c.substr(0,c.length-1):c};e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?a(e):e}]}]),o.config(["$ocLazyLoadProvider",function(e){e.config({loadedModules:["app"],asyncLoader:$script})}]),o.config(["ngClipProvider",function(e){e.setPath("https://dn-coding-net-production-static.qbox.me/static/ZeroClipboard.swf")}]),o.config(["hljsServiceProvider",function(e){e.setOptions({tabReplace:"    ",languages:["actionscript","clojure","coffeescript","cpp","cs","css","d","erlang","fsharp","go","groovy","haskell","java","javascript","json","lua","markdown","objectivec","perl","php","python","ruby","scala","sql","swift","typescript","xml"]})}]),o.config(["$$sanitizeUriProvider",function(e){e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/)}]),o.config(["$provide","Setting",function(e,t){if(t.sentry_dsn&&t.sentry_dsn.length>0){Raven.config(t.sentry_dsn).install();var a=/^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.+?)\n(\S+)$/;Raven.setDataCallback(function(e){var t=e.exception;if(t){t=t.values[0];var o=a.exec(t.value);o&&(t.type=o[1],t.value=o[2],e.message=t.type+": "+t.value,e.extra.angularDocs=o[3].substr(0,250))}}),e.decorator("$exceptionHandler",["$delegate",function(e){return function(t,a){Raven.captureException(t,{extra:{cause:a}}),e(t,a)}}])}}]),o.config(["experimentProvider",function(e){e.initConfig({i18n:!1,"coding-cli":!1,lint:!1,"pages-ssl":!1,"paas-shuren":!1,release:!1,"squash-optimize":!1,"zip-download":!1,"task-history":!1,"coding-owas":!1,"access-token":!1})}]),o.config(["$anchorScrollProvider",function(e){e.disableAutoScrolling()}]),o.run(["$rootScope","$location","$localStorage","$route","User","Setting","btfModal","UserResolver","ProjectResolver","$timeout","Common","Flash","experiment",function(e,t,a,o,n,i,r,s,l,c,d,u,p){p.isActive("i18n")?e.language=$.cookie("language")||navigator.language||navigator.userLanguage:e.language="zh-CN";var f=n.current(function(t){e.USER=t.data||!1,e.USER&&n.showDisabledGuide(function(e){a.disabledGuide={},angular.forEach(e.data,function(e){a.disabledGuide[e]=!0})})});e.canShowGuide=function(e){return a.disabledGuide&&!a.disabledGuide[e]},e.disableGuide=function(e){n.disableGuide({guide_item:e},{},function(){}),a.disabledGuide[e]=!0},f["catch"](function(a,o){if(o&&1e3==o.code){t.path(),t.search().debug}return e.USER=!1,!1}),e.SETTING=i,e.isSameDay=function(e,t){return 0!=t&&e[t]&&e[t].created_at&&e[t-1]&&e[t].created_at?new Date(e[t].created_at).getDate()==new Date(e[t-1].created_at).getDate():!1},e.isSameDayWithNext=function(e,t){return t!=e.length-1&&null!=e[t]&&void 0!=e[t].created_at&&e[t-1]&&e[t].created_at?new Date(e[t].created_at).getDate()==new Date(e[t+1].created_at).getDate():!1},e.doLoginNow=function(){location.href="/login"};var g=function(e,t){for(var a in t){var o=t[a];e[a]=r(o),o.activate&&e[a].activate()}},m=function(e){e.$watch(function(){return e.unread},function(e){if(e){var t=e.notifications>0?e.notifications+" 未读通知":"无未读通知",a=e.messages>0?e.messages+" 未读私信":"无未读私信",o={inline:!0,variation:"small",position:"bottom center",duration:100,distanceAway:-10};$("#top-menu .menu .item.notification-popup").popup(angular.extend(o,{content:t})),$("#top-menu .menu .item.message-popup").popup(angular.extend(o,{content:a}))}},!0)},h={addFriendModal:{activate:!0,controller:"AddFriendController",templateUrl:"app/user/add_friends_modal.html",resolve:{USER:s}},sendMessageModal:{activate:!0,controller:"SendMessageController",templateUrl:"app/user/send_message_modal.html"},BlubluModal:{activate:!0,controller:"SendBobbleController",templateUrl:"app/user/send_bobble_modal.html",resolve:{USER:s}},InsertImageModal:{controller:"InsertImageController",templateUrl:"app/topic/insert_image_modal.html"},InsertImageLightMDModal:{controller:"InsertImageLightMDController",templateUrl:"common/directives/markdown/tpl/insert_image_modal.html",resolve:{PROJECT:l}},InsertLinkModal:{controller:"InsertLinkController",templateUrl:"common/directives/pagedown/tpl/insert_link_modal.html"},InsertTableModal:{controller:"InsertTableController",templateUrl:"common/directives/pagedown/tpl/insert_table_modal.html"},ValidatePassword:{activate:!0,controller:"PasswordValidateController",templateUrl:"app/project/password_validate_modal.html"},ValidatePasswordStandalone:{controller:"StandalonePasswordValidateController",templateUrl:"app/project/standalone_password_validate_modal.html"},InviteFriendModal:{controller:"InviteFriendController",templateUrl:"app/user/invite/invite_friend_modal.html",resolve:{USER:s}},RequestValidModalService:{activate:!0,controller:"RequestValidController",templateUrl:"app/user/request_valid.html"},CropAvatarModal:{controller:"CropAvatarController",templateUrl:"app/user/account_setting/setting/crop_avatar_modal.html"},TotpSettingModal:{controller:"TotpSettingController",templateUrl:"app/user/account_setting/setting/totp_setting_modal.html",resolve:{USER:s}},CreateTaskModal:{activate:!0,controller:"CreateTaskModalController",templateUrl:"app/task/modal/create_task_modal.html",resolve:{USER:s}}};e.$watch("USER",function(a){function o(){var e;a.email&&!a.email_validation?e="激活邮件已经发送到<div>"+a.email+'</div>请尽快查收并进行验证，如在收件箱中未看到激活邮件，请留意一下垃圾邮箱(T_T)。<div><a href="/user/account/setting/basic">重新发送激活邮件</a></div>':a.phone_validation||(e="为了您更好地使用 Coding 的功能并保障您的账号安全，请先绑定"+(a.email_validation?"":"邮箱或")+'手机！<div><a href="/user/account/setting/basic">去绑定</a></div>'),c(function(){u.warn().send(e,999999999)})}a&&(a.avatar=d.thumbnail(a.avatar,80),d.startCheckUnreadMessage(),n.unread_count({},function(t){0==t.code&&(e.unread.notifications=t.data.notifications,e.unread.messages=t.data.messages,e.updateUnreadList(t),e.USER.prj_update_count=t.data.project_update_count)}),e.USER&&(e.top_menu_logo_link="/user"),g(e,h),m(e),e.addFriend=function(){$("#add-friend-modal").modal("show").modal("setting",{duration:100,onVisible:function(){setTimeout(function(){$("#add-friend-modal").find("input:first").trigger("focus")},0)},allowMultiple:!1})},e.showSendMsgDialog=function(t){e.send_msg_target=t,$("#send-message-modal").modal("show")},e.makeBubble=function(){var e=$("#send-bobble-modal");e.modal("show"),c(function(){e.find("[cg-feed-editor] textarea").focus()},500)},e.createTask=function(){$("#create-task-modal").modal("show")},_.includes(t.path(),"/activate/email")||0!==a.status||o())});var v={OWNER:100,ADMIN:90,MEMBER:80,MEMBER_NO_CODE:75,VISITOR:70,GUEST:60};angular.extend(e,v)}])},84:function(e,t,a){"use strict";var o=document.cookie.replace(/(?:(?:^|.*;\s*)SETTING_API_HOST\s*\=\s*([^;]*).*$)|^.*$/,"$1"),n=document.cookie.replace(/(?:(?:^|.*;\s*)SETTING_HOST\s*\=\s*([^;]*).*$)|^.*$/,"$1"),i=document.cookie.replace(/(?:(?:^|.*;\s*)SETTING_CLI_HOST\s*\=\s*([^;]*).*$)|^.*$/,"$1"),r=document.cookie.replace(/(?:(?:^|.*;\s*)SETTING_SENTRY_DSN\s*\=\s*([^;]*).*$)|^.*$/,"$1");angular.module("constants").constant("Setting",{host:n||"https://coding.net"||location.origin,api_host:o||"https://coding.net"||location.origin,cli_host:i||"wss://cli.coding.net/cli/ws",sentry_dsn:r||"https://d508517124f14a3bbb661d1294bf2571@coding.net/_/errors/4",owas_url:"https://owas.coding.net/op/view.aspx"})}});