(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),s=n.n(i),u=n(1),o=n.n(u),c=n(2),p=n(3),l=n(4),h=n(7),d=n(6),g=n(5),m=(n(18),function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.isInView?r.a.createElement("div",{className:"login_container"},r.a.createElement("h1",{className:"login_logo"},"Login"),r.a.createElement("input",{type:"text",placeholder:"Username",className:"login_input",name:"input_username",value:this.props.inputUsername,onChange:function(t){return e.props.onInputChange(t.target.name,t.target.value,"login")}}),r.a.createElement("input",{type:"password",placeholder:"Password",className:"login_input",name:"input_password",value:this.props.inputPassword,onChange:function(t){return e.props.onInputChange(t.target.name,t.target.value,"login")}}),r.a.createElement("p",{className:"login_hint",style:{color:this.props.inputErr?"rgb(210, 6, 6)":"white"}},this.props.hint),r.a.createElement("button",{className:"login_button",onClick:this.props.onLogin},"Login"),r.a.createElement("p",{className:"login_sign_btn",onClick:this.props.onSignup},"Don't Have An Account ? Sign Up.")):null}}]),n}(r.a.Component)),f=(n(19),n(8)),b=n(11),_=function(e){var t=[],n=function(){for(var e=[],t=65;t<=90;t++)e.push(String.fromCharCode(t));for(var n=97;n<=122;n++)e.push(String.fromCharCode(n));for(var a=48;a<=57;a++)e.push(String.fromCharCode(a));return e.push(String.fromCharCode(95)),e.push(String.fromCharCode(45)),e}(),a=!0;if(e&&e.length>=4){for(var r=0;r<e.length;r++)t.push(e[r]);var i,s=Object(b.a)(t);try{for(s.s();!(i=s.n()).done;){var u=i.value;if(!n.includes(u)){a=!1;break}}}catch(o){s.e(o)}finally{s.f()}}else a=!1;return a},v=function(e,t,n,a){var r=Object.assign({},e[t]);if("string"===typeof n)r[n]=a;else for(var i=0;i<n.length;i++)r[n[i]]=a[i];return Object(f.a)({},t,r)},w=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.componentState;return t.inView?r.a.createElement("div",{className:"signup_container"},r.a.createElement("h1",{className:"signup_logo"},"SignUp"),r.a.createElement("input",{name:"input_firstname",type:"text",placeholder:"Firstname",className:"signup_input",value:t.input_firstname,maxLength:"20",onChange:function(t){e.props.onInputChange(t.target.name,t.target.value,"signup"),t.target.style.border=_(t.target.value)?"white":"2px ridge red"}}),r.a.createElement("input",{name:"input_lastname",type:"text",placeholder:"Lastname",className:"signup_input",value:t.input_lastname,maxLength:"20",onChange:function(t){e.props.onInputChange(t.target.name,t.target.value,"signup"),t.target.style.border=_(t.target.value)?"white":"2px ridge red"}}),r.a.createElement("input",{name:"input_username",type:"text",placeholder:"Username",className:"signup_input",value:t.input_username,maxLength:"20",onChange:function(t){e.props.onInputChange(t.target.name,t.target.value,"signup"),t.target.style.border=_(t.target.value)?"white":"2px ridge red"}}),r.a.createElement("input",{name:"input_password",type:"text",placeholder:"Password",className:"signup_input",value:t.input_password,maxLength:"20",onChange:function(t){e.props.onInputChange(t.target.name,t.target.value,"signup"),t.target.style.border=_(t.target.value)?"white":"2px ridge red"}}),r.a.createElement("textarea",{name:"input_bio",className:"signup_textarea",maxLength:"150",defaultValue:"My Bio In 150 Characters",onChange:function(t){return e.props.onInputChange(t.target.name,t.target.value,"signup")}}),r.a.createElement("p",{className:"signup_hint",style:{color:t.input_err?"rgb(207, 6, 6)":"white"}},t.field_hint),r.a.createElement("button",{className:"signup_button",onClick:this.props.onSignup},"SignUp"),r.a.createElement("p",{className:"signup_login_btn",onClick:function(){return e.props.changeView("login")}},"Already Have An Account ? Login.")):null}}]),n}(r.a.Component),x=(n(20),n(21),function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={edit:!1,text:a.props.title},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=null,n={border:"0px"};return this.props.errorOff||_(this.state.text)||(n={border:"1px solid red"}),this.state.edit&&(t=r.a.createElement("div",{className:"infofield_edit_backdrop"},r.a.createElement("div",{className:"infofield_edit_main"},r.a.createElement("textarea",{type:"text",className:"infofield_edit_input",defaultValue:this.props.title,onChange:function(t){e.setState({text:t.target.value})},maxLength:this.props.maxChars||20,style:n}),r.a.createElement("div",null,r.a.createElement("button",{className:"infofield_btn",onClick:function(){return e.setState({edit:!1})}},"Cancel"),r.a.createElement("button",{className:"infofield_btn",onClick:function(){e.state.text!==e.props.title&&(e.props.errorOff||_(e.state.text))&&(e.props.onUpdate(e.props.name,e.state.text),e.setState({edit:!1}))}},"Update"))))),r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return e.setState({edit:!0})},className:"infofield_info"},this.props.title),t)}}]),n}(r.a.Component)),y=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isInView,n=e.userData;return t?r.a.createElement("div",{className:"account_container"},r.a.createElement("h2",null,"Account Details"),r.a.createElement("h2",null,"Username"),r.a.createElement(x,{title:n.username,name:"nu",onUpdate:this.props.onUpdate}),r.a.createElement("h2",null,"Firstname"),r.a.createElement(x,{title:n.firstname,name:"fn",onUpdate:this.props.onUpdate}),r.a.createElement("h2",null,"Lastname"),r.a.createElement(x,{title:n.lastname,name:"ln",onUpdate:this.props.onUpdate}),r.a.createElement("h2",null,"Password"),r.a.createElement(x,{title:n.password,name:"np",onUpdate:this.props.onUpdate}),r.a.createElement("h2",null,"Bio"),r.a.createElement(x,{title:n.bio,maxChars:150,errorOff:!0,name:"b",onUpdate:this.props.onUpdate}),r.a.createElement("div",{className:"account_btns"},r.a.createElement("button",{className:"account_btn",onClick:this.props.onLogout},"Logout"),r.a.createElement("button",{className:"account_btn",onClick:this.props.onDelete},"Delete"))):null}}]),n}(r.a.Component),C=(n(22),function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a,r,i,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:void 0,a="",a=n?"u=".concat(t,"&p=").concat(n):"u=".concat(t),e.prev=3,e.next=6,fetch("https://sideloginapi.herokuapp.com/users?".concat(a));case 6:return r=e.sent,e.next=9,r.json();case 9:return i=e.sent,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(3);case 15:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()),E=function(){var e=Object(c.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sideloginapi.herokuapp.com/users",{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://sideloginapi.herokuapp.com/users",{method:"DELETE",body:JSON.stringify({u:t,p:n}),headers:{"content-type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(r=e.sent)){e.next=10;break}if(!r.res){e.next=10;break}return e.abrupt("return",r);case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",void 0);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(o.a.mark((function e(t,n,a,r){var i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sideloginapi.herokuapp.com/users",{method:"PUT",body:JSON.stringify(Object(f.a)({u:t,p:n},a,r)),headers:{"content-type":"application/json"}});case 2:return i=e.sent,e.next=5,i.json();case 5:if(!(s=e.sent)){e.next=14;break}if(!s.res){e.next=11;break}return e.abrupt("return",s.res);case 11:return e.abrupt("return",void 0);case 12:e.next=15;break;case 14:return e.abrupt("return",void 0);case 15:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),S=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={login:{inView:!0,input_username:"",input_password:"",field_hint:"Fill in above fields Properly",user_data:void 0,input_err:!1,success:!1},signup:{inView:!1,input_firstname:"",input_lastname:"",input_username:"",input_password:"",input_bio:"My Bio In 150 characters",field_hint:"Use Only Numbers, Alphabet And Atleast 4 characters.",input_err:!1},account:{inView:!1,user_data:void 0}},a.changeView=a.changeViewTo.bind(Object(h.a)(a)),a.handleLogin=a.handleLogin.bind(Object(h.a)(a)),a.handleSignup=a.handleSignup.bind(Object(h.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleLogout=a.handleLogout.bind(Object(h.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"changeViewTo",value:function(e){var t=this;["login","signup","account"].forEach((function(n){n===e?t.setState(v(t.state,n,"inView",!0)):t.setState(v(t.state,n,"inView",!1))}))}},{key:"handleLogin",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=void 0,!this.state.login.input_username||!this.state.login.input_password){e.next=8;break}return this.setState(v(this.state,"login",["field_hint","input_err"],["Logging You In...",!1])),e.next=5,C(this.state.login.input_username,this.state.login.input_password);case 5:t=e.sent,e.next=10;break;case 8:return this.setState(v(this.state,"login",["field_hint","input_err"],["One Of The Fields is Missing",!0])),e.abrupt("return");case 10:t?t.res?(this.setState(v(this.state,"login","field_hint","Login Succesful.")),setTimeout((function(){n.setState(v(n.state,"account","user_data",t.res)),n.changeViewTo("account"),n.setState(v(n.state,"login",["input_username","input_password","field_hint"],["","","Fill In Above Fields Properly."])),n.setState(v(n.state,"login",["input_username","input_password","field_hint"],["","","Fill In Above Fields Properly."]))}),1e3)):this.setState(v(this.state,"login",["field_hint","input_err"],["Username or Password is wrong",!0])):this.setState(v(this.state,"login",["field_hint","input_err"],["There was a problem with your connection, try again later.",!0]));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.state;this.setState(v(a,n,e,t))}},{key:"handleSignup",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(_(this.state.signup.input_firstname)&&_(this.state.signup.input_lastname)&&_(this.state.signup.input_username)&&_(this.state.signup.input_password))){e.next=20;break}return this.setState(v(this.state,"signup","field_hint","Creating Your Account...")),e.next=4,E({u:this.state.signup.input_username,p:this.state.signup.input_password,fn:this.state.signup.input_firstname,ln:this.state.signup.input_lastname,b:this.state.signup.input_bio});case 4:if(!(t=e.sent)){e.next=16;break}if(!t.res){e.next=12;break}return e.next=9,this.setState(v(this.state,"signup",["field_hint","input_err"],["Your Account Is Created Succesfully",!1]));case 9:setTimeout((function(){n.changeViewTo("login"),n.setState(v(n.state,"signup",["input_firstname","input_lastname","input_password","input_username","field_hint"],["","","","","Use Only Numbers, Alphabet And Atleast 4 characters."]))}),1e3),e.next=14;break;case 12:return e.next=14,this.setState(v(this.state,"signup",["field_hint","input_err"],["Username Already Exists, Choose Another One.",!0]));case 14:e.next=18;break;case 16:return e.next=18,this.setState(v(this.state,"signup",["field_hint","input_err"],["There Was A Problem With Your Connection, Please Try Again Later.",!0]));case 18:e.next=21;break;case 20:this.setState(v(this.state,"signup",["field_hint","input_err"],["Fill in Above Fields Properly.",!0]));case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.changeViewTo("login");case 2:this.setState(v(this.state,"account","user_data",void 0));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleUpdate",value:function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,r,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:3001,e.next=3,O(this.state.account.user_data.username,this.state.account.user_data.password,t,n,a);case 3:if(!(r=e.sent)){e.next=7;break}return e.next=7,this.setState(v(this.state,"account","user_data",r));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app_container"},r.a.createElement(m,{isInView:this.state.login.inView,inputUsername:this.state.login.input_username,inputPassword:this.state.login.input_password,onInputChange:this.handleInputChange,onLogin:this.handleLogin,hint:this.state.login.field_hint,inputErr:this.state.login.input_err,onSignup:function(){e.changeViewTo("signup")}}),r.a.createElement(w,{onInputChange:this.handleInputChange,onSignup:this.handleSignup,changeView:this.changeView,componentState:this.state.signup}),r.a.createElement(y,{isInView:this.state.account.inView,userData:this.state.account.user_data,onLogout:this.handleLogout,onDelete:Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.state.account.user_data.username,e.state.account.user_data.password);case 2:t.sent&&e.handleLogout();case 4:case"end":return t.stop()}}),t)}))),onUpdate:this.handleUpdate}))}}]),n}(r.a.Component);n(23);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.839c2ae5.chunk.js.map