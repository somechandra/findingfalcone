(this["webpackJsonpfe-problem"]=this["webpackJsonpfe-problem"]||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/space-shuttle.56bda2c7.png"},44:function(e,t,n){e.exports=n(69)},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(17),o=n.n(l),s=n(29),c=(n(49),n(50),n(18)),r=n(2),d=n(7),h=n(8),m=n(9),u=n(10),p=n(11),f=n(20),g=function(e,t){return fetch(e,t).then((function(e){return e.json()}))},C=n(72),b=n(35),N=n.n(b),O=(n(51),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{className:"Header"},i.a.createElement(C.a.Brand,{href:"#home"},i.a.createElement("img",{alt:"logo",src:N.a,width:"30",height:"30",className:"d-inline-block align-top"})," ",i.a.createElement("span",{className:"HeaderTitle"},"Finding Falcone!"))),i.a.createElement("hr",{style:{marginTop:0}}))}),v=n(74),E=n(73),D=n(71),F=n(38),j=n(41),S=(n(54),function(e){var t=e.id,n=e.options,a=e.selectOption,l=e.handleChangeSelect,o=e.vehicles,s=e.handleChangeVehicleRadio;return i.a.createElement(v.a,null,i.a.createElement(v.a.Body,null,i.a.createElement(j.a,{value:a,options:n,onChange:l})),a?i.a.createElement(E.a,null,i.a.createElement("fieldset",null,i.a.createElement(E.a.Group,{as:D.a},i.a.createElement(F.a,{sm:10},o.map((function(e){var n=0===e.total_no;return i.a.createElement(E.a.Check,{key:t+e.name.replace(/\s/g,"").toLowerCase(),type:"radio",custom:!0,disabled:n,label:e.name+" ("+e.total_no+")",name:t+"formHorizontalRadios",id:Math.floor(1e8+9e8*Math.random())+e.name.replace(/\s/g,"").toLowerCase()+"formHorizontalRadios1",onChange:function(){return s(e.name,e,a)}})})))))):null)}),k=(n(57),function(e){var t=e.options,n=e.vehicles,a=e.selectOptionFirst,l=e.selectOptionSecond,o=e.selectOptionThird,s=e.selectOptionFourth,c=e.handleChangeFirstSelect,r=e.handleChangeSecondSelect,d=e.handleChangeThirdSelect,h=e.handleChangeFourthSelect,m=e.handleChangeVehicleRadioFirst,u=e.handleChangeVehicleRadioSecond,p=e.handleChangeVehicleRadioThird,f=e.handleChangeVehicleRadioFourth;return i.a.createElement("div",{className:"DestinationDirectory"},i.a.createElement(S,{id:"firstDestination",options:t,selectOption:a,handleChangeSelect:c,vehicles:n,handleChangeVehicleRadio:m}),i.a.createElement(S,{id:"secondDestination",options:t,selectOption:l,handleChangeSelect:r,vehicles:n,handleChangeVehicleRadio:u}),i.a.createElement(S,{id:"secondDestination",options:t,selectOption:o,handleChangeSelect:d,vehicles:n,handleChangeVehicleRadio:p}),i.a.createElement(S,{id:"secondDestination",options:t,selectOption:s,handleChangeSelect:h,vehicles:n,handleChangeVehicleRadio:f}))}),T=n(75),y=(n(58),function(e){var t=e.timeTaken,n=e.handleFindFalconeClick,a=e.isDisplayFindFalconeBtn;return i.a.createElement("div",{className:"PanelControls"},i.a.createElement("div",{className:"PanelControlsLabel"},"Time taken: ",t),a?i.a.createElement("div",null,i.a.createElement(T.a,{variant:"primary",onClick:n},"Find Falcone!")):null)}),V=(n(59),function(e){var t=e.planets,n=e.vehicles,a=e.firstDestination,l=e.secondDestination,o=e.thirdDestination,s=e.fourthDestination,c=e.handleChangeFirstSelect,r=e.handleChangeSecondSelect,d=e.handleChangeThirdSelect,h=e.handleChangeFourthSelect,m=e.timeTaken,u=e.isDisplayFindFalconeBtn,p=e.handleFindFalconeClick,f=e.handleChangeVehicleRadioFirst,g=e.handleChangeVehicleRadioSecond,C=e.handleChangeVehicleRadioThird,b=e.handleChangeVehicleRadioFourth;return i.a.createElement("div",{className:"Home"},i.a.createElement(k,{options:t,selectOptionFirst:a,selectOptionSecond:l,selectOptionThird:o,selectOptionFourth:s,handleChangeFirstSelect:c,handleChangeSecondSelect:r,handleChangeThirdSelect:d,handleChangeFourthSelect:h,vehicles:n,handleChangeVehicleRadioFirst:f,handleChangeVehicleRadioSecond:g,handleChangeVehicleRadioThird:C,handleChangeVehicleRadioFourth:b}),i.a.createElement(y,{timeTaken:m,isDisplayFindFalconeBtn:u,handleFindFalconeClick:p}))}),R=(n(60),function(e){var t=e.timeTaken,n=e.planetName;return i.a.createElement("div",{className:"SuccessPage"},i.a.createElement("div",{className:"success successGreenColor"},"Success! Congratulations on Finding Falcone. King Shan is mighty pleased."),i.a.createElement("div",{className:"success"},"Time Taken: ",t),i.a.createElement("div",{className:"success"},"Planet Found: ",n))}),w=(n(61),function(e){var t=e.failedMsg;return i.a.createElement("div",{className:"FailurePage"},i.a.createElement("div",{className:"failed failedTitleColor"},"Failed!"),i.a.createElement("div",{className:"failed"},t))}),B=(n(62),function(e){var t=e.error;return i.a.createElement("div",{className:"ErrorPage"},i.a.createElement("div",{className:"error"},"Error!!"),i.a.createElement("div",{className:"error"},t))}),P=(n(63),function(e){var t=e.btnName,n=e.handleOnClick;return i.a.createElement("div",{className:"StartAgain"},i.a.createElement("div",null,i.a.createElement(T.a,{variant:"primary",onClick:n},t)))}),_=(n(64),function(){return i.a.createElement("footer",{className:"Footer"},i.a.createElement("div",null,"Coding Problem"))}),A="https://findfalcone.herokuapp.com/planets",H="https://findfalcone.herokuapp.com/vehicles",L="https://findfalcone.herokuapp.com/token",M="https://findfalcone.herokuapp.com/find",x=(n(65),function(e){function t(e){var n,a,i;return Object(d.a)(this,t),(i=Object(m.a)(this,Object(u.a)(t).call(this,e))).updateVehiclesRecord=function(){g(H).then((function(e){return i.setState({vehicles:e})}))},i.updatePlanets=function(){g(A).then((function(e){var t=e.map((function(e){return{value:e.name.toLowerCase(),label:e.name,distance:e.distance,vehicle:""}}));i.setState({planets:t})}))},i.updateToken=function(){g(L,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return i.setState(e)}))},i.handleChange=function(e,t){i.setState(Object(r.a)({},t,e));var n=e.label;i.isEmptyObject(i.state.falcone[t])||i.state.falcone[t].planetName===n||i.setState({falcone:Object(c.a)({},i.state.falcone,Object(r.a)({},t,Object(c.a)({},i.state.falcone[t],{planetName:n})))},(function(){i.updateTimeTaken()}))},i.handleChangeVehicleRadioFirst=function(e,t,n){var a={planetName:n.label,vehicleName:t.name,timeTaken:n.distance/t.speed};i.setState({falcone:Object(c.a)({},i.state.falcone,Object(r.a)({},i.destinationNames.firstDestination,a))},(function(){return i.updateTimeTaken()})),i.updateVehicles(i.destinationNames.firstDestination,e)},i.handleChangeVehicleRadioSecond=function(e,t,n){var a={planetName:n.label,vehicleName:t.name,timeTaken:n.distance/t.speed};i.setState({falcone:Object(c.a)({},i.state.falcone,Object(r.a)({},i.destinationNames.secondDestination,a))},(function(){return i.updateTimeTaken()})),i.updateVehicles(i.destinationNames.secondDestination,e)},i.handleChangeVehicleRadioThird=function(e,t,n){var a={planetName:n.label,vehicleName:t.name,timeTaken:n.distance/t.speed};i.setState({falcone:Object(c.a)({},i.state.falcone,Object(r.a)({},i.destinationNames.thirdDestination,a))},(function(){return i.updateTimeTaken()})),i.updateVehicles(i.destinationNames.thirdDestination,e)},i.handleChangeVehicleRadioFourth=function(e,t,n){var a={planetName:n.label,vehicleName:t.name,timeTaken:n.distance/t.speed};i.setState({falcone:Object(c.a)({},i.state.falcone,Object(r.a)({},i.destinationNames.fourthDestination,a))},(function(){return i.updateTimeTaken()})),i.updateVehicles(i.destinationNames.fourthDestination,e)},i.updateVehicles=function(e,t){var n=i.state.falcone[e],a=i.state.vehicles.map((function(e){return e.name===n.vehicleName?Object(c.a)({},e,{total_no:e.total_no+1}):e.name===t?Object(c.a)({},e,{total_no:e.total_no>0?e.total_no-1:e.total_no}):e}));i.setState({vehicles:a})},i.updateTimeTaken=function(){var e=i.state.falcone[i.destinationNames.firstDestination],t=i.state.falcone[i.destinationNames.secondDestination],n=i.state.falcone[i.destinationNames.thirdDestination],a=i.state.falcone[i.destinationNames.fourthDestination],l=0;i.isEmptyObject(e)||(l+=e.timeTaken),i.isEmptyObject(t)||(l+=t.timeTaken),i.isEmptyObject(n)||(l+=n.timeTaken),i.isEmptyObject(a)||(l+=a.timeTaken),i.isEmptyObject(e)||i.isEmptyObject(t)||i.isEmptyObject(n)||i.isEmptyObject(a)||i.setState({isDisplayFindFalconeBtn:!0}),i.setState({timeTaken:l})},i.handleFindFalconeClick=function(){var e=Object.values(i.state.falcone),t=e.map((function(e){return e.planetName})),n=e.map((function(e){return e.vehicleName})),a={token:i.state.token,planet_names:t,vehicle_names:n};g(M,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){i.setState({result:e}),i.props.history.push("/result")}))},i.handleStartAgain=function(){var e,t;i.setState((t={},Object(r.a)(t,i.destinationNames.firstDestination,null),Object(r.a)(t,i.destinationNames.secondDestination,null),Object(r.a)(t,i.destinationNames.thirdDestination,null),Object(r.a)(t,i.destinationNames.fourthDestination,null),Object(r.a)(t,"timeTaken",0),Object(r.a)(t,"isDisplayFindFalconeBtn",!1),Object(r.a)(t,"falcone",(e={},Object(r.a)(e,i.destinationNames.firstDestination,{}),Object(r.a)(e,i.destinationNames.secondDestination,{}),Object(r.a)(e,i.destinationNames.thirdDestination,{}),Object(r.a)(e,i.destinationNames.fourthDestination,{}),e)),Object(r.a)(t,"result",null),t)),i.updatePlanets(),i.updateVehiclesRecord(),i.updateToken(),i.props.history.push("/")},i.isEmptyObject=function(e){return 0===Object.entries(e).length&&e.constructor===Object},i.destinationNames={firstDestination:"firstDestination",secondDestination:"secondDestination",thirdDestination:"thirdDestination",fourthDestination:"fourthDestination"},i.state=(a={token:"",planets:null,vehicles:null},Object(r.a)(a,i.destinationNames.firstDestination,null),Object(r.a)(a,i.destinationNames.secondDestination,null),Object(r.a)(a,i.destinationNames.thirdDestination,null),Object(r.a)(a,i.destinationNames.fourthDestination,null),Object(r.a)(a,"timeTaken",0),Object(r.a)(a,"isDisplayFindFalconeBtn",!1),Object(r.a)(a,"falcone",(n={},Object(r.a)(n,i.destinationNames.firstDestination,{}),Object(r.a)(n,i.destinationNames.secondDestination,{}),Object(r.a)(n,i.destinationNames.thirdDestination,{}),Object(r.a)(n,i.destinationNames.fourthDestination,{}),n)),Object(r.a)(a,"result",null),a),i}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanets(),this.updateVehiclesRecord(),this.updateToken()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(O,null),i.a.createElement(f.c,null,i.a.createElement(f.a,{exact:!0,path:"/",render:function(){return i.a.createElement(V,{planets:e.state.planets,vehicles:e.state.vehicles,firstDestination:e.state[e.destinationNames.firstDestination],secondDestination:e.state[e.destinationNames.secondDestination],thirdDestination:e.state[e.destinationNames.thirdDestination],fourthDestination:e.state[e.destinationNames.fourthDestination],handleChangeFirstSelect:function(t){return e.handleChange(t,e.destinationNames.firstDestination)},handleChangeSecondSelect:function(t){return e.handleChange(t,e.destinationNames.secondDestination)},handleChangeThirdSelect:function(t){return e.handleChange(t,e.destinationNames.thirdDestination)},handleChangeFourthSelect:function(t){return e.handleChange(t,e.destinationNames.fourthDestination)},timeTaken:e.state.timeTaken,isDisplayFindFalconeBtn:e.state.isDisplayFindFalconeBtn,handleFindFalconeClick:e.handleFindFalconeClick,handleChangeVehicleRadioFirst:e.handleChangeVehicleRadioFirst,handleChangeVehicleRadioSecond:e.handleChangeVehicleRadioSecond,handleChangeVehicleRadioThird:e.handleChangeVehicleRadioThird,handleChangeVehicleRadioFourth:e.handleChangeVehicleRadioFourth})}}),i.a.createElement(f.a,{exact:!0,path:"/result",render:function(){return e.state.result?"success"===e.state.result.status?i.a.createElement(R,{timeTaken:e.state.timeTaken,planetName:e.state.result.planet_name}):"false"===e.state.result.status?i.a.createElement(w,{failedMsg:"We could not find Falcone. Let's try once again!!!"}):i.a.createElement(B,{error:e.state.result.error}):i.a.createElement(P,{btnName:"Start Again",handleOnClick:e.handleStartAgain})}})),this.state.result?i.a.createElement(P,{btnName:"Start Again",handleOnClick:this.handleStartAgain}):null,i.a.createElement(_,null))}}]),t}(i.a.Component)),J=Object(f.f)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(s.a,null,i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.10cfe8b1.chunk.js.map