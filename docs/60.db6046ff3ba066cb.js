"use strict";(self.webpackChunkfootball_leaderboards=self.webpackChunkfootball_leaderboards||[]).push([[60],{7060:(w,c,n)=>{n.r(c),n.d(c,{TeamHistoryComponent:()=>Z});var t=n(9291),r=n(6814),u=n(9862),f=n(4921),p=n(7398),d=n(2710),m=n(553);let g=(()=>{class e{constructor(){this.cacheMap=new Map,this.baseUrl=m.N.BASE_URL,this.http=(0,t.f3M)(u.eN)}getFixture(a,o){return this.http.get(this.baseUrl+f.H.FIXTURES+`?league=${a}&team=${o}&last=10`,f.w).pipe((0,p.U)(l=>l.response))}getByIds(a,o){const i=a+"-"+o;return this.cacheMap.has(i)||this.cacheMap.set(i,this.getFixture(a,o).pipe((0,d.d)(1))),this.cacheMap.get(i)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const h=function(e,s,a){return{"win-home":e,"win-away":s,draw:a}};let x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-fixture-card"]],inputs:{fixture:"fixture"},standalone:!0,features:[t.jDz],decls:13,vars:13,consts:[[1,"list-item",3,"ngClass"],[1,"logo","field",3,"src","alt"],[1,"field","left"],[1,"field"],[1,"field","right"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._uU(5),t.qZA(),t.TgZ(6,"div",3),t._uU(7,"-"),t.qZA(),t.TgZ(8,"div",3),t._uU(9),t.qZA(),t.TgZ(10,"div",4),t._uU(11),t.qZA(),t._UZ(12,"img",1),t.qZA()),2&o&&(t.Q6J("ngClass",t.kEZ(9,h,i.fixture.goals.home>i.fixture.goals.away,i.fixture.goals.home<i.fixture.goals.away,i.fixture.goals.home===i.fixture.goals.away)),t.xp6(1),t.Q6J("src",i.fixture.teams.home.logo,t.LSH)("alt",i.fixture.teams.home.id),t.xp6(2),t.Oqu(i.fixture.teams.home.name),t.xp6(2),t.Oqu(i.fixture.goals.home),t.xp6(4),t.Oqu(i.fixture.goals.away),t.xp6(2),t.Oqu(i.fixture.teams.away.name),t.xp6(1),t.Q6J("src",i.fixture.teams.away.logo,t.LSH)("alt",i.fixture.teams.away.id))},dependencies:[r.ez,r.mk],styles:[".list-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr 1fr 1fr 1fr 3fr 1fr;gap:10px;background-color:var(--card-color);border-radius:4px;justify-items:center;align-items:center;padding:10px 0;transition:all .3s ease-in-out;border-left:5px solid var(--card-color);border-right:5px solid var(--card-color)}.list-item.win-home[_ngcontent-%COMP%]{border-left-color:var(--win);border-right-color:var(--lost)}.list-item.win-away[_ngcontent-%COMP%]{border-left-color:var(--lost);border-right-color:var(--win)}.list-item.draw[_ngcontent-%COMP%]{border-color:var(--draw)}.field[_ngcontent-%COMP%]{color:var(--color)}.logo[_ngcontent-%COMP%]{width:30px;height:30px}"]})}return e})();var y=n(526);function v(e,s){1&e&&t._UZ(0,"app-fixture-card",7),2&e&&t.Q6J("fixture",s.$implicit)}function C(e,s){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,v,1,1,"app-fixture-card",6),t.qZA()),2&e){const a=s.ngIf;t.xp6(1),t.Q6J("ngForOf",a)}}function T(e,s){1&e&&t._uU(0," Loading data... ")}let Z=(()=>{class e{constructor(){this.fixtureService=(0,t.f3M)(g),this.location=(0,t.f3M)(r.Ye)}ngOnInit(){this.fixtures$=this.fixtureService.getByIds(this.leagueId,this.teamId)}goBack(){this.location.back()}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-team-history"]],inputs:{teamId:"teamId",leagueId:"leagueId"},standalone:!0,features:[t.jDz],decls:7,vars:5,consts:[[1,"container"],[1,"actions"],[3,"value","action"],["class","fixtures",4,"ngIf","ngIfElse"],["loading",""],[1,"fixtures"],[3,"fixture",4,"ngFor","ngForOf"],[3,"fixture"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-primary-button",2),t.NdJ("action",function(){return i.goBack()}),t.qZA()(),t.YNc(3,C,2,1,"div",3),t.ALo(4,"async"),t.YNc(5,T,1,0,"ng-template",null,4,t.W1O),t.qZA()),2&o){const l=t.MAs(6);t.xp6(2),t.Q6J("value","Back"),t.xp6(1),t.Q6J("ngIf",t.lcZ(4,3,i.fixtures$))("ngIfElse",l)}},dependencies:[r.ez,r.sg,r.O5,r.Ov,x,y.C],styles:[".container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.actions[_ngcontent-%COMP%]{margin-bottom:2em;display:flex;width:80%;justify-content:start}.fixtures[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:5px;width:80%;overflow-y:scroll}"]})}return e})()}}]);