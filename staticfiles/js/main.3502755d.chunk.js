(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),o=(a(25),a(6)),i=a(7),c=a(10),u=a(8),m=a(11),d=a(5),p=(a(13),a(16)),h=a(31),E=a(30),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={first_name:"",last_name:"",phone_number:"",street_address:"",street_address2:"",city:"",state:"",zip_code:"",latitude:"",longitude:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.updateUser!==e.updateUser){var t=this.props.updateUser;this.setState({first_name:t.first_name,last_name:t.last_name,phone_number:t.phone_number,street_address:t.street_address,street_address2:t.street_address2,city:t.city,state:t.state,zip_code:t.zip_code,latitude:t.latitude,longitude:t.longitude})}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.first_name&&this.props.onUpdate(this.state)}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,ref:"form"},r.a.createElement(E.a,{style:{width:"18rem"},border:"info"},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Need to update your information?"),r.a.createElement(E.a.Text,null,r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",name:"first_name",onChange:this.handleChange,value:this.state.first_name,placeholder:"First name",autoCapitalize:!0})),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"last_name",value:this.state.last_name,placeholder:"Last name",autoCapitalize:!0})),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"phone_number",value:this.state.phone_number,placeholder:"Phone number"})),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"street_address",value:this.state.street_address,placeholder:"Street address",autoCapitalize:!0})),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"street_address_2",value:this.state.street_address_2,placeholder:"Street address cont",autoCapitalize:!0})),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"city",value:this.state.city,placeholder:"City",autoCapitalize:!0})),r.a.createElement("div",{className:"update_input"},r.a.createElement("label",{htmlFor:"state_select"}," State"),r.a.createElement("select",{name:"state",id:"state_select",value:this.state.state,onChange:this.handleChange},r.a.createElement("option",{value:""}," Choose your state"),r.a.createElement("option",{value:"AL"},"Alabama"),r.a.createElement("option",{value:"AK"},"Alaska"),r.a.createElement("option",{value:"AZ"},"Arizona"),r.a.createElement("option",{value:"AR"},"Arkansas"),r.a.createElement("option",{value:"CA"},"California"),r.a.createElement("option",{value:"CO"},"Colorado"),r.a.createElement("option",{value:"CT"},"Connecticut"),r.a.createElement("option",{value:"DE"},"Delaware"),r.a.createElement("option",{value:"FL"},"Florida"),r.a.createElement("option",{value:"GA"},"Georgia"),r.a.createElement("option",{value:"HI"},"Hawaii"),r.a.createElement("option",{value:"ID"},"Idaho"),r.a.createElement("option",{value:"IL"},"Illinois"),r.a.createElement("option",{value:"IN"},"Indiana"),r.a.createElement("option",{value:"IA"},"Iowa"),r.a.createElement("option",{value:"KS"},"Kansas"),r.a.createElement("option",{value:"KY"},"Kentucky"),r.a.createElement("option",{value:"LA"},"Louisiana"),r.a.createElement("option",{value:"ME"},"Maine"),r.a.createElement("option",{value:"MD"},"Maryland"),r.a.createElement("option",{value:"MA"},"Massachusetts"),r.a.createElement("option",{value:"MI"},"Michigan"),r.a.createElement("option",{value:"MN"},"Minnesota"),r.a.createElement("option",{value:"MS"},"Mississippi"),r.a.createElement("option",{value:"MO"},"Missouri"),r.a.createElement("option",{value:"MT"},"Montana"),r.a.createElement("option",{value:"NE"},"Nebraska"),r.a.createElement("option",{value:"NV"},"Nevada"),r.a.createElement("option",{value:"NH"},"New Hampshire"),r.a.createElement("option",{value:"NJ"},"New Jersey"),r.a.createElement("option",{value:"NY"},"New Mexico"),r.a.createElement("option",{value:"NY"},"New York"),r.a.createElement("option",{value:"NC"},"North Carolina"),r.a.createElement("option",{value:"ND"},"North Dakota"),r.a.createElement("option",{value:"OH"},"Ohio"),r.a.createElement("option",{value:"OK"},"Oklahoma"),r.a.createElement("option",{value:"OR"},"Oregon"),r.a.createElement("option",{value:"PA"},"Pennsylvania"),r.a.createElement("option",{value:"RI"},"Rhode Island"),r.a.createElement("option",{value:"SC"},"South Carolina"),r.a.createElement("option",{value:"SD"},"South Dakota"),r.a.createElement("option",{value:"TN"},"Tennessee"),r.a.createElement("option",{value:"TX"},"Texas"),r.a.createElement("option",{value:"UT"},"Utah"),r.a.createElement("option",{value:"VT"},"Vermont"),r.a.createElement("option",{value:"VA"},"Virginia"),r.a.createElement("option",{value:"WA"},"Washington"),r.a.createElement("option",{value:"WV"},"West Virginia"),r.a.createElement("option",{value:"WI"},"Wisconsin"),r.a.createElement("option",{value:"WY"},"Wyoming"))),r.a.createElement("div",{className:"update_input"},r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"zip_code",value:this.state.zip_code,placeholder:"Zip code"}))),r.a.createElement(h.a,{variant:"info",type:"submit",size:"sm"},"Update"))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={first_name:"",last_name:"",phone_number:"",street_address:"",street_address2:"",city:"",state:"",zip_code:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.updateUser!==e.updateUser){var t=this.props.updateUser;this.setState({first_name:t.first_name,last_name:t.last_name,phone_number:t.phone_number,street_address:t.street_address,street_address2:t.street_address2,city:t.city,state:t.state,zip_code:t.zip_code})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"current_profile"},r.a.createElement(E.a,{style:{width:"18rem"},border:"info"},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,null,"Card Title"),r.a.createElement(E.a.Text,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"First Name"),r.a.createElement("td",{className:"current_info"},this.state.first_name)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"Last Name"),r.a.createElement("td",{className:"current_info"},this.state.last_name)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"Phone Number"),r.a.createElement("td",{className:"current_info"},this.state.phone_number)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"}," Street Address"),r.a.createElement("td",{className:"current_info"},this.state.street_address)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"Street Address 2"),r.a.createElement("td",{className:"current_info"},this.state.street_address_2)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"City"),r.a.createElement("td",{className:"current_info"},this.state.city)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"State"),r.a.createElement("td",{className:"current_info"},this.state.state)),r.a.createElement("tr",null,r.a.createElement("td",{className:"current_info"},"Zip Code"),r.a.createElement("td",{className:"current_info"},this.state.zip_code))))),r.a.createElement("div",null,r.a.createElement("a",{href:"../../user_dashboard/"}," ",r.a.createElement(h.a,{variant:"success"},"Go back to dashboard")," ")))))}}]),t}(n.Component),f=a(28),b=a(29),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:null},a.updateUser=a.updateUser.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateUser",value:function(e){var t=this;console.log(JSON.stringify(this.state.user)),fetch("/api/update_profile/",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({user:e}),console.log("Success",e)}).catch(function(e){return console.log("Error",e)})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/update_profile/",{method:"GET",credentials:"include"}).then(function(e){if(200===e.status)return e.json();throw new Error("something went wrong")}).then(function(t){e.setState({user:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(b.a,{xs:12,md:4,className:"info_col"},r.a.createElement(_,{updateUser:e})),r.a.createElement(b.a,{className:"info_col justify-content-md-center"},r.a.createElement(v,{onUpdate:this.updateUser,updateUser:e})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.3502755d.chunk.js.map