(()=>{"use strict";(()=>{var e,t,n,o,r,i={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function l(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,o,r,i,s){var a={type:e,props:o,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==s?++n:s};return null==s&&null!=t.vnode&&t.vnode(a),a}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function m(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!y.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||setTimeout)(y)}function y(){for(var e;y.__r=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,o,r,i,s;e.__d&&(i=(r=(t=e).__v).__e,(s=t.__P)&&(n=[],(o=l({},r)).__v=r.__v+1,T(s,r,o,t.__n,void 0!==s.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?h(r):i,r.__h),N(n,r),r.__e!=i&&_(r)))}))}function f(e,t,n,o,r,a,l,c,d,_){var m,y,f,w,k,b,S,N=o&&o.__k||s,I=N.length;for(n.__k=[],m=0;m<t.length;m++)if(null!=(w=n.__k[m]=null==(w=t[m])||"boolean"==typeof w?null:"string"==typeof w||"number"==typeof w||"bigint"==typeof w?u(null,w,null,null,w):Array.isArray(w)?u(p,{children:w},null,null,null):w.__b>0?u(w.type,w.props,w.key,null,w.__v):w)){if(w.__=n,w.__b=n.__b+1,null===(f=N[m])||f&&w.key==f.key&&w.type===f.type)N[m]=void 0;else for(y=0;y<I;y++){if((f=N[y])&&w.key==f.key&&w.type===f.type){N[y]=void 0;break}f=null}T(e,w,f=f||i,r,a,l,c,d,_),k=w.__e,(y=w.ref)&&f.ref!=y&&(S||(S=[]),f.ref&&S.push(f.ref,null,w),S.push(y,w.__c||k,w)),null!=k?(null==b&&(b=k),"function"==typeof w.type&&w.__k===f.__k?w.__d=d=g(w,d,e):d=v(e,w,f,N,k,d),"function"==typeof n.type&&(n.__d=d)):d&&f.__e==d&&d.parentNode!=e&&(d=h(f))}for(n.__e=b,m=I;m--;)null!=N[m]&&("function"==typeof n.type&&null!=N[m].__e&&N[m].__e==n.__d&&(n.__d=h(o,m+1)),D(N[m],N[m]));if(S)for(m=0;m<S.length;m++)x(S[m],S[++m],S[++m])}function g(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?g(o,t,n):v(n,o,o,r,o.__e,t));return t}function v(e,t,n,o,r,i){var s,a,l;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),s=null;else{for(a=i,l=0;(a=a.nextSibling)&&l<o.length;l+=2)if(a==r)break e;e.insertBefore(r,i),s=i}return void 0!==s?s:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function k(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||w(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?S:b,i):e.removeEventListener(t,i?S:b,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](t.event?t.event(e):e)}function S(e){this.l[e.type+!0](t.event?t.event(e):e)}function T(e,n,o,r,i,s,a,c,u){var h,_,m,y,g,v,w,k,b,S,T,N,x,D=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(u=o.__h,c=n.__e=o.__e,n.__h=null,s=[c]),(h=t.__b)&&h(n);try{e:if("function"==typeof D){if(k=n.props,b=(h=D.contextType)&&r[h.__c],S=h?b?b.props.value:h.__:r,o.__c?w=(_=n.__c=o.__c).__=_.__E:("prototype"in D&&D.prototype.render?n.__c=_=new D(k,S):(n.__c=_=new d(k,S),_.constructor=D,_.render=C),b&&b.sub(_),_.props=k,_.state||(_.state={}),_.context=S,_.__n=r,m=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=D.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=l({},_.__s)),l(_.__s,D.getDerivedStateFromProps(k,_.__s))),y=_.props,g=_.state,m)null==D.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==D.getDerivedStateFromProps&&k!==y&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,S),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,S)||n.__v===o.__v){_.props=k,_.state=_.__s,n.__v!==o.__v&&(_.__d=!1),_.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),_.__h.length&&a.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,S),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(y,g,v)}))}if(_.context=S,_.props=k,_.__v=n,_.__P=e,T=t.__r,N=0,"prototype"in D&&D.prototype.render)_.state=_.__s,_.__d=!1,T&&T(n),h=_.render(_.props,_.state,_.context);else do{_.__d=!1,T&&T(n),h=_.render(_.props,_.state,_.context),_.state=_.__s}while(_.__d&&++N<25);_.state=_.__s,null!=_.getChildContext&&(r=l(l({},r),_.getChildContext())),m||null==_.getSnapshotBeforeUpdate||(v=_.getSnapshotBeforeUpdate(y,g)),x=null!=h&&h.type===p&&null==h.key?h.props.children:h,f(e,Array.isArray(x)?x:[x],n,o,r,i,s,a,c,u),_.base=n.__e,n.__h=null,_.__h.length&&a.push(_),w&&(_.__E=_.__=null),_.__e=!1}else null==s&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=I(o.__e,n,o,r,i,s,a,u);(h=t.diffed)&&h(n)}catch(e){n.__v=null,(u||null!=s)&&(n.__e=c,n.__h=!!u,s[s.indexOf(c)]=null),t.__e(e,n,o)}}function N(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function I(t,n,o,r,s,a,l,u){var p,d,_,m=o.props,y=n.props,g=n.type,v=0;if("svg"===g&&(s=!0),null!=a)for(;v<a.length;v++)if((p=a[v])&&"setAttribute"in p==!!g&&(g?p.localName===g:3===p.nodeType)){t=p,a[v]=null;break}if(null==t){if(null===g)return document.createTextNode(y);t=s?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,y.is&&y),a=null,u=!1}if(null===g)m===y||u&&t.data===y||(t.data=y);else{if(a=a&&e.call(t.childNodes),d=(m=o.props||i).dangerouslySetInnerHTML,_=y.dangerouslySetInnerHTML,!u){if(null!=a)for(m={},v=0;v<t.attributes.length;v++)m[t.attributes[v].name]=t.attributes[v].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||k(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||k(e,i,t[i],n[i],o)}(t,y,m,s,u),_)n.__k=[];else if(v=n.props.children,f(t,Array.isArray(v)?v:[v],n,o,r,s&&"foreignObject"!==g,a,l,a?a[0]:o.__k&&h(o,0),u),null!=a)for(v=a.length;v--;)null!=a[v]&&c(a[v]);u||("value"in y&&void 0!==(v=y.value)&&(v!==t.value||"progress"===g&&!v||"option"===g&&v!==m.value)&&k(t,"value",v,m.value,!1),"checked"in y&&void 0!==(v=y.checked)&&v!==t.checked&&k(t,"checked",v,m.checked,!1))}return t}function x(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function D(e,n,o){var r,i;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||x(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&D(r[i],n,"function"!=typeof e.type);o||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function C(e,t,n){return this.constructor(e,n)}function M(n,o,r){var s,a,l;t.__&&t.__(n,o),a=(s="function"==typeof r)?null:r&&r.__k||o.__k,l=[],T(o,n=(!s&&r||o).__k=function(t,n,o){var r,i,s,a={};for(s in n)"key"==s?r=n[s]:"ref"==s?i=n[s]:a[s]=n[s];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof t&&null!=t.defaultProps)for(s in t.defaultProps)void 0===a[s]&&(a[s]=t.defaultProps[s]);return u(t,a,r,i,null)}(p,null,[n]),a||i,i,void 0!==o.ownerSVGElement,!s&&r?[r]:a?null:o.firstChild?e.call(o.childNodes):null,l,!s&&r?r:a?a.__e:o.firstChild,s),N(l,n)}e=s.slice,t={__e:function(e,t,n,o){for(var r,i,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},n=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=l({},this.state),"function"==typeof e&&(e=e(l({},n),this.props)),e&&l(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},d.prototype.render=p,o=[],y.__r=0;var P=0;function U(e,n,o,r,i){var s,a,l={};for(a in n)"ref"==a?s=n[a]:l[a]=n[a];var c={type:e,props:l,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--P,__source:i,__self:r};if("function"==typeof e&&(s=e.defaultProps))for(a in s)void 0===l[a]&&(l[a]=s[a]);return t.vnode&&t.vnode(c),c}var W=function(e){var t=e.data,n=t.name,o=t.location,r=t.period,i=r.interval,s=r.day,a=r.weekDay,l=t.links,c=l.twitter,u=l.facebook,p=l.website,d=l.meetUp,h=l.linkedIn,_=t.demographic,m=t.format;return U("div",{class:"card",children:[U("h4",{children:U("a",{href:p||d,children:n})}),U("dl",{children:[U("dt",{children:"Links:"}),U("dd",{children:U("ul",{children:[h?U("li",{children:U("a",{href:h,rel:"external",children:"LinkedIn"})}):"",u?U("li",{children:U("a",{href:u,rel:"external",children:"Facebook"})}):"",d?U("li",{children:U("a",{href:d,rel:"external",children:"MeetUp"})}):"",c?U("li",{children:U("a",{href:c,rel:"external",children:"Twitter"})}):""]})}),U("dt",{children:"When:"}),U("dd",{children:[i,", ",a," ",s]}),U("dt",{children:"Where:"}),U("dd",{children:o}),U("dt",{children:"Who:"}),U("dd",{children:_}),U("dt",{children:"Format:"}),U("dd",{children:m})]})]})},A=[{name:"Newcastle Coders Group",location:"ICT Building, University of Newcastle",period:{interval:"Monthly",day:"2nd",weekDay:"Wed"},links:{twitter:"https://twitter.com/ncgau",facebook:"https://www.facebook.com/groups/ncgau/",website:"http://ncg.asn.au/",meetUp:"http://www.meetup.com/Newcastle-Coders-Group/"},demographic:"Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",format:"Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."},{name:"Newcastle Women and Gender Diverse People in Tech",location:"NewyTechPeople Office",period:{interval:"Monthly",day:"2nd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"},demographic:"Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",format:"The format varies but will often include networking/socialising and a presentation."},{name:"Newcastle Cybersecurity Group",location:"University of Newcastle I2N Hub Honeysuckle",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{linkedIn:"https://www.linkedin.com/company/newcastlecybersecuritygroup/",meetUp:"https://www.meetup.com/Newcastle-Cyber-Security-Group/"},demographic:"Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",format:"You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."},{name:"Newcatle IoT Pioneers",location:"Stag and Hunter, Mayfield",period:{interval:"Monthly",day:"1st",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Newcastle-IoT-Pioneers/"},demographic:"In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",format:"Organised presentations"},{name:"Hunter Data Analytics",location:"Check meetup event details (but usually at University of Newcastle City Campus)",period:{interval:"Monthly",day:"3rd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Hunter-Data-Analytics/",linkedIn:"https://www.linkedin.com/company/hunter-data-analytics/",twitter:"https://twitter.com/hunteranalytics"},demographic:"Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",format:"Networking/chats, followed by organised presentations, followed by pub."},{name:"NewcastleJS",location:"INNX Hub Cooperative Working Space",period:{interval:"Monthly",day:"2nd",weekDay:"Tues"},links:{meetUp:"https://www.meetup.com/NewcastleJS-JavaScript-Meetup/",twitter:"https://twitter.com/newcastlejs"},demographic:"Javascript enthusiasts. Amateur to Professional, AngularJS to NodeJS and everything else JS.",format:"Some beverages and short form presentations as well as industry news and jobs board. Post meetup drinks and food at The Edwards afterwards."},{name:"Newcastle Salesforce Community Group",location:"NewyTechPeople, 24 Lindus Street, Wickham",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-salesforce-community-group/",linkedIn:"https://www.linkedin.com/groups/14186054/"},demographic:"Salesforce users, technologists, strategists, designers, business process owners, analysts, novices, experts and everything inbetween.",format:"Drinks, beers, wine, pizza and a speaker/presentation slot. The group will grow and evolve to meet the needs and interests of our members."},{name:"Blockchain Newcastle",location:"Check meetup event details",period:{interval:"Monthly",day:"",weekDay:""},links:{meetUp:"https://www.meetup.com/blockchain-newcastle/"},demographic:"People interested in future technology cycles, whether they be technologists, entrepreneurs, consultants, advisors or simply curious.",format:"Discussion over drinks, beers, wine, and food at local venues."}],H=function(){return A.map((function(e){return U(W,{data:e})}))};M(U(H,{}),document.getElementById("groups"));var G=[{event:{title:"July: Stephen G - Rust & WASM; Stephen Y - Graphs in software",description:"We are back in July with Stephen G giving us his experiences working with Rust and WASM and Stephen Y giving us a talk about graphs in software.\n\nStephen Ys talk will cover how a combination of the Rust memory checker, type system and macros makes web development easier, when compared with other single language front and backends like typescript/nodejs, and why Stephen started teaching Rust to primary school children. http://rustycc.com.au.\n\nStephen G's talk will cover Graphs and graph databases: what makes them useful, some popular use cases, some interesting edge cases, and the roles they can play supporting Generative AI.\n\nWe'd like to thank our sponsors\n\n* Mudbath\n* Saphi Engineering\n* Newy Tech People",dateTime:"2024-07-03T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/300836846",going:11,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:{name:"Mudbath Digital ",lat:-32.92607,lng:151.7626,address:"8/710 Hunter st",city:"Newcastle "}},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"WGDPTech Meet-up: TBA",description:"Our July event to TBA but you can RSVP here to save the date!\n\n5:30PM: The event starts with a catch-up6:00PM: The presentation will begin\n\nDon't forget our 2024 location! We'll gather at the NewyTechPeople office at 9 Downie St, Maryville NSW for this event.\n\nEveryone is welcome to this event, regardless of gender- so share it with your friends. Through these speaker events, we aim to share experiences and knowledge, that's how we learn, and that's how we can improve the community for everyone.We provide food, so let us know of any allergies :)",dateTime:"2024-07-11T17:30+10:00",eventUrl:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/events/301771246",going:3,maxTickets:40,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/518951708/676x380.webp",venue:{name:"9 Downie St",lat:-32.912266,lng:151.75763,address:"9 Downie St",city:"Maryville"}},group:{name:"Women & Gender Diverse People in Tech",urlname:"newcastle-women-and-gender-diverse-people-in-tech",groupPhoto:{id:"516565764",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"516565764",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"NCSG July 2024 | Placeholder Event",description:"This event is a placeholder event\n\n**Event details:**\n\nDate: **WEDNESDAY** July 31st\n\nTime: 18:00-20:00\n\nVenue: 16 Honeysuckle Drive, Newcastle (The University of Newcastle 'Q Building') - second floor\n\nFood: PIZZAS Provided, please inform us of dietary requirements when RSVPing\n\nDrink: Non-alcoholic provided, come and grab a few with us at the pub after if you'd like!\n\n**Getting there/parking/public transport:**\n\n* Event location is [here](https://goo.gl/maps/rCqoDx8MbjqyeHTMA) \\- please use the western door\\. UoN requires us to keep this door closed for safety\\, so there will be someone there to let you in\\.\n* Please try and get in the door before 6:10pm. We check occasionally but you might get stuck outside in the cold for a while.\n* The [car park behind the building](https://goo.gl/maps/FzNNQfbAxxW38GNr7) is free after 5PM, and generally has plenty of room.\n* The closest public transport point is [Honeysuckle Light Rail Station](https://goo.gl/maps/3P2BpkiMaCeZ8isk9), which will take you to Newcastle Interchange and beyond every \\~7min or so. Walk along Honeysuckle Drive for a better-lit pathway.\n\n**The rest:**\n\nIf you’re experiencing any symptoms representative of COVID-19, please don’t attend. We’ll miss you, but the health/safety of attendees is paramount.\n\nNCSG is a community group determined to improve and uplift the Newcastle cybersecurity community. We meet monthly (on the last Wednesday of each month) and have a bunch of interesting speakers, from local legends to heavy hitters in the enterprise world.\n\n**Want to learn more?** Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/newcastlecybersecuritygroup/) or visit newwwie.com, join the community and come and chat in the #security channel.\n\n**Keen on speaking? Reach out at the event, or message us here.**",dateTime:"2024-07-31T19:00+10:00",eventUrl:"https://www.meetup.com/newcastle-cyber-security-group/events/298927280",going:1,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/483205216/676x380.webp",venue:null},group:{name:"Newcastle Cyber Security Group",urlname:"Newcastle-Cyber-Security-Group",groupPhoto:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"August: Adam Cogan on AI",description:"In August we'll be back with Adam Cogan Chief Architect at SSW giving us a talk about the current state of developing in AI. We'd love to give you more details about what he's talking about, but I'm writing this in May so everything will have changed by then.\n\nWe'd like to than our sponsors\n\n* SSW\n* Saphi Engineering",dateTime:"2024-08-07T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/300837217",going:6,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:{name:"SSW Newcastle - Enterprise Software Development",lat:-32.926857,lng:151.77159,address:"432 Hunter St",city:"Newcastle"}},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"NCSG August 2024 | Placeholder Event",description:"This event is a placeholder event\n\n**Event details:**\n\nDate: **WEDNESDAY** August 28th\n\nTime: 18:00-20:00\n\nVenue: 16 Honeysuckle Drive, Newcastle (The University of Newcastle 'Q Building') - second floor\n\nFood: PIZZAS Provided, please inform us of dietary requirements when RSVPing\n\nDrink: Non-alcoholic provided, come and grab a few with us at the pub after if you'd like!\n\n**Getting there/parking/public transport:**\n\n* Event location is [here](https://goo.gl/maps/rCqoDx8MbjqyeHTMA) \\- please use the western door\\. UoN requires us to keep this door closed for safety\\, so there will be someone there to let you in\\.\n* Please try and get in the door before 6:10pm. We check occasionally but you might get stuck outside in the cold for a while.\n* The [car park behind the building](https://goo.gl/maps/FzNNQfbAxxW38GNr7) is free after 5PM, and generally has plenty of room.\n* The closest public transport point is [Honeysuckle Light Rail Station](https://goo.gl/maps/3P2BpkiMaCeZ8isk9), which will take you to Newcastle Interchange and beyond every \\~7min or so. Walk along Honeysuckle Drive for a better-lit pathway.\n\n**The rest:**\n\nIf you’re experiencing any symptoms representative of COVID-19, please don’t attend. We’ll miss you, but the health/safety of attendees is paramount.\n\nNCSG is a community group determined to improve and uplift the Newcastle cybersecurity community. We meet monthly (on the last Wednesday of each month) and have a bunch of interesting speakers, from local legends to heavy hitters in the enterprise world.\n\n**Want to learn more?** Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/newcastlecybersecuritygroup/) or visit newwwie.com, join the community and come and chat in the #security channel.\n\n**Keen on speaking? Reach out at the event, or message us here.**",dateTime:"2024-08-28T18:00+10:00",eventUrl:"https://www.meetup.com/newcastle-cyber-security-group/events/298927283",going:1,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/483205216/676x380.webp",venue:null},group:{name:"Newcastle Cyber Security Group",urlname:"Newcastle-Cyber-Security-Group",groupPhoto:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483205216",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}}],E=function(){function e(){this.render(G)}return e.prototype.render=function(e){e.length>0?M(this.renderList(e),document.getElementById("meetupEvents")):M(U("li",{children:U("p",{children:"It appears there are no upcoming events. Check back soon."})}),document.getElementById("meetupEvents"))},e.prototype.renderList=function(e){var t=this;return e.map((function(e,n){var o=e.event,r=e.group,i=new Date(o.dateTime),s=t.niceDay(i.getDay()),a=t.niceMonth(i.getMonth()),l=t.niceTime(i);return U("li",{class:"eventItem",children:[U("div",{class:"eventItem-left",children:[t.renderImage(r,o.photoUrl),U("div",{class:"eventItem-start",children:[U("span",{class:"eventItem-start_day",children:s}),U("span",{class:"eventItem-start_time",children:l}),U("span",{class:"eventItem-start_month",children:[i.getDate()," ",a]}),U("span",{class:"eventItem-start_year",children:i.getFullYear()})]})]}),U("div",{class:"eventItem-right",children:[U("p",{class:"eventItem-title",children:o.title}),U("p",{class:"eventItem-group",children:["Hosted by: ",U("a",{href:"https://meetup.com/".concat(r.urlname),children:r.name})]}),U("p",{class:"eventItem-description",children:[o.description.substring(0,240),"..."]}),U("ul",{class:"eventItem-stats",children:[U("li",{class:"eventItem-stats_rsvp",title:"Number of people who have RSVP'd vs. the total number of spots",children:[U("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 482.9 482.9",style:"enable-background:new 0 0 482.9 482.9;",children:U("g",{children:U("g",{children:[U("path",{d:"M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"}),U("path",{d:"M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z"})]})})}),o.going," / ",o.maxTickets?o.maxTickets:"∞"]}),U("li",{class:"eventItem-stats_duration",title:"Duration of the event",children:[U("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 60 60",style:"enable-background:new 0 0 60 60;",children:U("g",{children:[U("path",{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"}),U("path",{d:"M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"})]})}),t.parseIsoDuration(o.duration)]}),U("li",{class:"eventItem-stats_location",title:"Location of the event",children:[U("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 54.757 54.757",style:"enable-background:new 0 0 54.757 54.757;",children:U("g",{children:[U("path",{d:"M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"}),U("path",{d:"M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031C45.576,13.08,46.321,24.468,41.099,31.431z"})]})}),t.renderLocationLink(o.venue)]})]})]}),U("a",{class:"button",href:o.eventUrl,children:"More info"})]})}))},e.prototype.renderImage=function(e,t){var n="",o="eventItem-image";return e.groupPhoto?n=U("img",{src:this.renderImageLink(e.groupPhoto),alt:e.name,class:"eventItem-groupPhoto"}):t?n=U("img",{src:t,alt:e.name,class:"eventItem-image_photo"}):o+=" eventItem-image_notSupplied",U("div",{class:o,children:n})},e.prototype.renderLocationLink=function(e){return e?e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?U("a",{href:"https://www.google.com/maps/search/".concat(encodeURIComponent(e.name),"/@").concat(e.lat,",").concat(e.lng,",16z"),target:"_blank",children:[U("span",{children:[e.address,", ",e.city," -"," "]}),"View on Google"]}):U("em",{children:[U("span",{children:[e.address,","]})," ",e.city]}):U("em",{children:"Not specified"})},e.prototype.renderImageLink=function(e,t){return void 0===t&&(t="676x380"),"".concat(e.baseUrl).concat(e.id,"/").concat(t,".webp")},e.prototype.niceTime=function(e){try{return e.toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"2-digit"})}catch(n){var t=this.niceHours(e.getHours());return"".concat(t,":").concat(e.getMinutes())}},e.prototype.niceHours=function(e){return(e+24)%12||12},e.prototype.niceDay=function(e,t){void 0===t&&(t=!0);var n={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.niceMonth=function(e,t){void 0===t&&(t=!0);var n={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.parseIsoDuration=function(e){var t=e.match(/P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/).groups;return Object.keys(t).reduce((function(e,n){return t[n]?e+"".concat(t[n]," ").concat(n):e}),"")},e}();new E,new H})()})();