(this["webpackJsonpindecision-app"]=this["webpackJsonpindecision-app"]||[]).push([[0],{189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(50),l=n.n(i),s=n(28),r=n(29),c=n(31),d=n(30),p=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={error:void 0},e.handleAddOption=function(t){t.preventDefault();var n=t.target.elements.option.value.trim(),a=e.props.handleAddOption(n);e.setState((function(){return{error:a}})),a||(t.target.elements.option.value="")},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.error&&o.a.createElement("p",{className:"add-option-error"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.handleAddOption},o.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"Add Option")))}}]),n}(o.a.Component),u=function(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions},"What should I do?"))},m=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header__title"},e.title),e.subtitle&&o.a.createElement("h2",{className:"header__subtitle"},e.subtitle)))};m.defaultProps={title:"Indecision"};var h=m,O=function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),o.a.createElement("button",{className:"button button--link",onClick:function(t){e.handleDeleteOption(e.optionText)}},"remove"))},f=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget-header__title"},"Your Options"),o.a.createElement("button",{className:"button button--link",onClick:e.handleDeleteOptions},"Remove All")),0===e.options.length&&o.a.createElement("p",{className:"widget__message"},"Please add an option to get started!"),e.options.map((function(t,n){return o.a.createElement(O,{key:t,optionText:t,count:n+1,handleDeleteOption:e.handleDeleteOption})})))},v=n(88),E=n.n(v),b=function(e){return o.a.createElement(E.a,{isOpen:!!e.selectedOption,onRequestClose:e.handleClearSelectedOption,contentLabel:"Selected Option",closeTimeoutMS:200,className:"modal"},o.a.createElement("h3",{className:"modal__title"},"Selected Option"),e.selectedOption&&o.a.createElement("p",{className:"modal__body"},e.selectedOption),o.a.createElement("button",{className:"button",onClick:e.handleClearSelectedOption},"Okay"))},N=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={options:[],selectedOption:void 0},e.handleDeleteOptions=function(){e.setState((function(){return{options:[]}}))},e.handleClearSelectedOption=function(){e.setState((function(){return{selectedOption:void 0}}))},e.handleDeleteOption=function(t){e.setState((function(e){return{options:e.options.filter((function(e){return t!==e}))}}))},e.handlePick=function(){var t=Math.floor(Math.random()*e.state.options.length),n=e.state.options[t];e.setState((function(){return{selectedOption:n}}))},e.handleAddOption=function(t){return t?e.state.options.indexOf(t)>-1?"This option already exists":void e.setState((function(e){return{options:e.options.concat(t)}})):"Enter valid value to add item"},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState((function(){return{options:t}}))}catch(n){}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,{subtitle:"Put your life in the hands of a computer"}),o.a.createElement("div",{className:"container"},o.a.createElement(u,{hasOptions:this.state.options.length>0,handlePick:this.handlePick}),o.a.createElement("div",{className:"widget"},o.a.createElement(f,{options:this.state.options,handleDeleteOptions:this.handleDeleteOptions,handleDeleteOption:this.handleDeleteOption}),o.a.createElement(p,{handleAddOption:this.handleAddOption}))),o.a.createElement(b,{selectedOption:this.state.selectedOption,handleClearSelectedOption:this.handleClearSelectedOption}))}}]),n}(o.a.Component);n(188),n(189);l.a.render(o.a.createElement(N,null),document.getElementById("app"))}},[[190,1,2]]]);
//# sourceMappingURL=main.88c9a225.chunk.js.map