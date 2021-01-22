(this.webpackJsonppractice2=this.webpackJsonppractice2||[]).push([[0],{67:function(e,a,s){},73:function(e,a,s){},75:function(e,a,s){"use strict";s.r(a);var t=s(1),r=(s(0),s(15)),c=s.n(r),i=(s(67),s(27)),n=s(18),l=s(43),d=s(5),o=s(23),j=s(6),m=s.n(j),b=s(95),h=function(e){var a,s=e.formData,r=e.setForm,c=e.navigation,i=(s.firstName,s.lastName,s.address,s.city,s.state,s.zip,s.phone,s.gender,s.email,s.hobby,Object(o.a)({mode:"onTouched"})),n=i.register,l=i.handleSubmit,j=i.errors;return console.log(j),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b.a,{className:"header",href:"/",children:Object(t.jsx)("h1",{children:"Resume Generaor"})}),Object(t.jsx)("div",{className:"container py-5",children:Object(t.jsxs)("div",{className:"card border-0 shadow w-75 p-3 mx-auto",children:[Object(t.jsx)("h3",{children:"Basic Info."}),Object(t.jsxs)("form",{onSubmit:l((function(e){return console.log(e)})),children:[Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":j.firstName}),onChange:r,id:"firstName",ref:n({required:"this field is required",minLength:{value:4,message:"altleast 4 characters"}}),placeholder:"Enter Your First Name",name:"firstName"}),j.firstName&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.firstName.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":j.lastName}),onChange:r,id:"lastName",ref:n({required:"this field is required",minLength:{value:4,message:"altleast 4 characters"}}),placeholder:"Enter Your Last Name",name:"lastName"}),j.lastName&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.lastName.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"address",children:"Address"}),Object(t.jsx)("textarea",{type:"text",className:m()("form-control",{"is-invalid":j.address}),onChange:r,id:"address",placeholder:"Enter Your Address",name:"address"})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"city",children:"City"}),Object(t.jsx)("textarea",{type:"text",className:m()("form-control",{"is-invalid":j.city}),onChange:r,id:"city",placeholder:"Enter Your City",name:"city"})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"state",children:"State"}),Object(t.jsx)("textarea",{type:"text",className:m()("form-control",{"is-invalid":j.state}),onChange:r,id:"state",placeholder:"Enter Your State",name:"state"})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"zip",children:"zip"}),Object(t.jsx)("input",{type:"number",className:m()("form-control",{"is-invalid":j.zip}),onChange:r,id:"zip",ref:n({required:"this field is required",pattern:{value:/^\d{6}$/,message:"please enter a valid 6 digit number"}}),placeholder:"Enter Your Zip",name:"zip"}),j.zip&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.zip.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"email",children:"E-mail Address"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":j.email}),onChange:r,id:"email",ref:n({required:"this field is required",pattern:{value:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"please enter a valid email"}}),placeholder:"Enter Your E-mail Address",name:"email"}),j.email&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.email.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":j.phone}),onChange:r,id:"phone",ref:n({required:"this field is required",pattern:{value:/^\d{10}$/,message:"please enter a valid 10 digit number"}}),placeholder:"Enter Your Phone Number",name:"phone"}),j.phone&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.phone.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"gender",className:"mr-4",children:"Choose Your Gender"}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{className:"form-check-input",type:"radio",id:"male",value:"male",name:"gender",ref:n({required:"this field is required"})}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"male",children:"male"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{className:"form-check-input",type:"radio",id:"female",value:"female",name:"gender",ref:n({required:"this field is required"})}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"female",children:"female"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{className:"form-check-input",type:"radio",id:"other",value:"other",name:"gender",ref:n({required:"this field is required"})}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"other",children:"other"})]}),j.gender&&Object(t.jsx)("div",{className:"form-text text-danger",children:"please click one button"})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"hobby",children:"Hobby"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":j.hobby}),onChange:r,id:"hobby",ref:n({required:"this field is required",minLength:{value:4,message:"altleast 4 characters"}}),placeholder:"Enter Your Hobby",name:"hobby"}),j.hobby&&Object(t.jsx)("div",{className:"invalid-feedback",children:j.hobby.message})]}),Object(t.jsx)("button",(a={type:"submit",className:"btn btn-primary",variant:"contained",fullWidth:!0,color:"primary"},Object(d.a)(a,"type","submit"),Object(d.a)(a,"style",{marginTop:"1rem"}),Object(d.a)(a,"onClick",c.next),Object(d.a)(a,"children","Go Forward"),a))]})]})})]})},x=function(e){var a,s,r=e.formData,c=e.setForm,i=e.navigation;r.year,r.classes,r.college,r.grades;console.log(i);var n=Object(o.a)({mode:"onTouched"}),l=n.register,j=n.handleSubmit,h=n.errors;return console.log(h),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b.a,{className:"header",href:"/",children:Object(t.jsx)("h1",{children:"Resume Generaor"})}),Object(t.jsx)("div",{className:"container py-5",children:Object(t.jsxs)("div",{className:"card border-0 shadow w-75 p-3 mx-auto",children:[Object(t.jsx)("h3",{children:"Education"}),Object(t.jsxs)("form",{onSubmit:j((function(e){return console.log(e)})),children:[Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"college",children:"college"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":h.college}),onChange:c,id:"college",ref:l({required:"this field is required",minLength:{value:10,message:"altleast 10 characters"}}),placeholder:"Enter Your College",name:"college"}),h.college&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.college.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"classes",children:"Class"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":h.classes}),onChange:c,id:"classes",ref:l({required:"this field is required",minLength:{value:4,message:"altleast  characters"}}),placeholder:"Enter Your Class",name:"classes"}),h.classes&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.classes.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"grades",children:"grades"}),Object(t.jsx)("input",{type:"number",className:m()("form-control",{"is-invalid":h.grades}),onChange:c,id:"grades",ref:l({required:"this field is required",pattern:{value:/^\d{2}$/,message:"please enter a valid 2 digit number"}}),placeholder:"Enter Your grades",name:"grades"}),h.grades&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.grades.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"year",children:"Year"}),Object(t.jsx)("input",{type:"number",className:m()("form-control",{"is-invalid":h.year}),onChange:c,id:"year",ref:l({required:"this field is required",pattern:{value:/^\d{4}$/,message:"please enter a valid 4 digit number"}}),placeholder:"Enter Your Year",name:"year"}),h.year&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.year.message})]}),Object(t.jsx)("button",(a={type:"submit",className:"btn btn-primary",variant:"contained",fullWidth:!0,color:"secondary"},Object(d.a)(a,"type","submit"),Object(d.a)(a,"style",{marginRight:"1rem",marginTop:"1rem",backgroundColor:"purple"}),Object(d.a)(a,"onClick",i.previous),Object(d.a)(a,"children","Back"),a)),Object(t.jsx)("button",(s={type:"submit",className:"btn btn-primary",variant:"contained",fullWidth:!0,color:"primary"},Object(d.a)(s,"type","submit"),Object(d.a)(s,"style",{marginTop:"1rem"}),Object(d.a)(s,"onClick",i.next),Object(d.a)(s,"children","Next"),s))]})]})})]})},O=s(99),u=s(103),p=s(101),f=s(102),g=s(104),v=s(76),N=s(53),y=s.n(N),k=s(52),F=s.n(k),C=s(96),Y=s(97),q=s(98),E=function(e){var a=e.formData,s=(e.setForm,e.navigation,a.firstName,a.lastName,a.nickName,a.address),r=a.city,c=a.state,i=a.zip,n=a.phone,l=a.email;return Object(t.jsxs)(C.a,{children:[Object(t.jsx)("br",{}),Object(t.jsxs)(Y.a,{children:[Object(t.jsx)(q.a,{md:4,className:"flexit",children:Object(t.jsx)("h2",{children:"Name"})}),Object(t.jsxs)(q.a,{md:8,children:[Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"First Name:"})," ",s]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Last Name:"})," ",r]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Nick Name:"})," ",c]})}),Object(t.jsx)("br",{})]})]}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsxs)(Y.a,{children:[Object(t.jsx)(q.a,{md:4,className:"flexit",children:Object(t.jsx)("h2",{children:"Address"})}),Object(t.jsxs)(q.a,{md:8,children:[Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Location:"})," ",s]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"City:"})," ",r]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"State:"})," ",c]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Zip:"})," ",i]})}),Object(t.jsx)("br",{})]})]}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsxs)(Y.a,{children:[Object(t.jsx)(q.a,{md:4,className:"flexit",children:Object(t.jsx)("h2",{children:"Contact"})}),Object(t.jsxs)(q.a,{md:8,children:[Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Phone:"})," ",n]})}),Object(t.jsx)(Y.a,{children:Object(t.jsxs)("span",{className:"fontinc",children:[Object(t.jsx)("b",{children:"Email:"})," ",l]})}),Object(t.jsx)("br",{})]})]}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{})]})},L=function(e){var a=e.summary,s=e.details,r=e.go;return Object(t.jsxs)(u.a,{children:[Object(t.jsx)(p.a,{expandIcon:Object(t.jsx)(F.a,{}),children:a}),Object(t.jsx)(f.a,{children:Object(t.jsxs)("div",{children:[s.map((function(e,a){var s=Object.keys(e)[0],r=e[Object.keys(e)[0]];return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(g.a,{children:Object(t.jsx)("h3",{children:"".concat(s,":").concat(r)})},a)})})),Object(t.jsx)(v.a,{color:"primary",component:"span",onClick:function(){return r("".concat(a.toLowerCase()))},children:Object(t.jsx)(y.a,{})})]})})]})},w=function(e){var a=e.formData,s=e.navigation.go,r=a.firstName,c=a.lastName,i=a.address,n=a.city,l=a.state,d=a.zip,o=a.phone,j=a.email;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b.a,{className:"header",href:"/",children:Object(t.jsx)("h1",{children:"Resume Generaor"})}),Object(t.jsxs)(O.a,{maxWidth:"sm",children:[Object(t.jsx)("h3",{children:"Review"}),Object(t.jsx)(L,{summary:"Basic",go:s,details:[{"First Name":r},{"Last Name":c}]}),Object(t.jsx)(L,{summary:"Address",go:s,details:[{Address:i},{City:n},{State:l},{Zip:d}]}),Object(t.jsx)(L,{summary:"Contact",go:s,details:[{Phone:o},{Email:j}]})]})]})},z=function(e){var a,s,r=e.formData,c=e.setForm,i=e.navigation;r.company,r.position,r.statYear,r.endYear,r.jobDescription;console.log(i);var n=Object(o.a)({mode:"onTouched"}),l=n.register,j=n.handleSubmit,h=n.errors;return console.log(h),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b.a,{className:"header",href:"/",children:Object(t.jsx)("h1",{children:"Resume Generaor"})}),Object(t.jsx)("div",{className:"container py-5",children:Object(t.jsxs)("div",{className:"card border-0 shadow w-75 p-3 mx-auto",children:[Object(t.jsx)("h3",{children:"Expeirence"}),Object(t.jsxs)("form",{onSubmit:j((function(e){return console.log(e)})),children:[Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"company",children:"Company"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":h.company}),onChange:c,id:"company",ref:l({required:"this field is required",minLength:{value:5,message:"altleast 5 characters"}}),placeholder:"Enter Your Company",name:"company"}),h.company&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.company.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"position",children:"Position"}),Object(t.jsx)("input",{type:"text",className:m()("form-control",{"is-invalid":h.class}),onChange:c,id:"position",ref:l({required:"this field is required",minLength:{value:4,message:"altleast  characters"}}),placeholder:"Your Position",name:"position"}),h.position&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.position.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"startYear",children:"Start Year"}),Object(t.jsx)("input",{type:"number",className:m()("form-control",{"is-invalid":h.startYear}),onChange:c,id:"startYear",ref:l({required:"this field is required",pattern:{value:/^\d{4}$/,message:"please enter a valid 4 digit number"}}),placeholder:"Enter Your Start Year",name:"startYear"}),h.startYear&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.startYear.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"endYear",children:"End Year"}),Object(t.jsx)("input",{type:"number",className:m()("form-control",{"is-invalid":h.endYear}),onChange:c,id:"endYear",ref:l({required:"this field is required",pattern:{value:/^\d{4}$/,message:"please enter a valid 2 digit number"}}),placeholder:"Enter Your End Year",name:"endYear"}),h.endYear&&Object(t.jsx)("div",{className:"invalid-feedback",children:h.endYear.message})]}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{htmlFor:"jobDescription",children:"Job Description"}),Object(t.jsx)("textarea",{type:"text",className:m()("form-control",{"is-invalid":h.class}),onChange:c,id:"jobDescription",placeholder:"Enter Your Job Description",name:"jobDescription"})]}),Object(t.jsx)("button",(a={type:"submit",className:"btn btn-primary",variant:"contained",fullWidth:!0,color:"secondary"},Object(d.a)(a,"type","submit"),Object(d.a)(a,"style",{marginRight:"1rem",marginTop:"1rem",backgroundColor:"purple"}),Object(d.a)(a,"onClick",i.previous),Object(d.a)(a,"children","Back"),a)),Object(t.jsx)("button",(s={type:"submit",className:"btn btn-primary",variant:"contained",fullWidth:!0,color:"primary"},Object(d.a)(s,"type","submit"),Object(d.a)(s,"style",{marginTop:"1rem"}),Object(d.a)(s,"onClick",i.next),Object(d.a)(s,"children","Next"),s))]})]})})]})},D={firstName:"",lastName:"",address:"",city:"",state:"",zip:"",phone:"",gender:"",email:"",skills:"",hobby:"",year:"",classes:"",college:"",grades:"",company:"",position:"",statYear:"",endYear:"",jobDescription:""},S=[{id:"names"},{id:"address"},{id:"contact"},{id:"review"},{id:"submit"}],A=function(){var e=Object(l.a)(D),a=Object(n.a)(e,2),s=a[0],r=a[1],c=Object(l.b)({steps:S,initialStep:0}),d=c.step,o={formData:s,setForm:r,navigation:c.navigation};switch(d.id){case"names":return Object(t.jsx)(h,Object(i.a)({},o));case"address":return Object(t.jsx)(x,Object(i.a)({},o));case"contact":return Object(t.jsx)(z,Object(i.a)({},o));case"review":return Object(t.jsx)(w,Object(i.a)({},o));case"submit":return Object(t.jsx)(E,Object(i.a)({},o))}return Object(t.jsx)(t.Fragment,{})};s(73);var T=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(A,{})})},P=(s(74),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(a){var s=a.getCLS,t=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;s(e),t(e),r(e),c(e),i(e)}))});c.a.render(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(T,{})}),document.getElementById("root")),P()}},[[75,1,2]]]);
//# sourceMappingURL=main.11d3af31.chunk.js.map