(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new i.d.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,f,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,f,b,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,d=b.data.itemsAvailable.toNumber(),l=b.itemsRedeemed.toNumber(),p=d-l,m=b.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:f,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,l,O,g,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return O=e.sent,e.next=10,p(s.publicKey);case 10:return g=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return v=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:v,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),f=n.n(u),b=(n(353),n(354),n(12)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(132),O=n(134),g=n(313),v=n(596),y=n(601),h=n(605),x=n(604),S=n(15),P=n(52),A=n(175),T=n(133),R=n(31),w=Object(O.a)(A.a)(r||(r=Object(j.a)([""]))),k=O.a.span(c||(c=Object(j.a)([""]))),_=O.a.div(a||(a=Object(j.a)([""]))),E=Object(O.a)(v.a)(i||(i=Object(j.a)([""]))),K=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(k,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},C=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(m.a)(a,2),s=i[0],u=i[1],f=Object(o.useState)(!1),d=Object(m.a)(f,2),j=d[0],O=d[1],v=Object(o.useState)(!1),A=Object(m.a)(v,2),k=A[0],C=A[1],L=Object(o.useState)(0),M=Object(m.a)(L,2),D=M[0],B=M[1],I=Object(o.useState)(0),N=Object(m.a)(I,2),W=N[0],U=N[1],J=Object(o.useState)(0),z=Object(m.a)(J,2),F=z[0],Z=z[1],H=Object(o.useState)({open:!1,message:"",severity:void 0}),Y=Object(m.a)(H,2),G=Y[0],q=Y[1],Q=Object(o.useState)(new Date(e.startDate)),V=Object(m.a)(Q,2),X=V[0],$=V[1],ee=Object(P.c)(),te=Object(o.useState)(),ne=Object(m.a)(te,2),re=ne[0],ce=ne[1],ae=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,B(a),Z(i),U(o),O(0===i),$(c),ce(r);case 16:case"end":return t.stop()}}),t)})))()},ie=function(){var t=Object(p.a)(l.a.mark((function t(){var n,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,C(!0),!ee||!(null===re||void 0===re?void 0:re.program)){t.next=10;break}return t.next=5,Object(T.c)(re,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(T.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?q({open:!0,message:"Mint failed! Please try again!",severity:"error"}):q({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",O(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),q({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,c(i/S.LAMPORTS_PER_SOL);case 23:return C(!1),ae(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(o.useEffect)(ae,[ee,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{children:[ee&&Object(R.jsxs)("p",{children:["Wallet ",Object(T.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(R.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),ee&&Object(R.jsxs)("p",{children:["Total Available: ",D]}),ee&&Object(R.jsxs)("p",{children:["Redeemed: ",W]}),ee&&Object(R.jsxs)("p",{children:["Remaining: ",F]}),Object(R.jsx)(_,{children:ee?Object(R.jsx)(E,{disabled:j||k||!s,onClick:ie,variant:"contained",children:j?"SOLD OUT":s?k?Object(R.jsx)(y.a,{}):"MINT":Object(R.jsx)(g.a,{date:X,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:K})}):Object(R.jsx)(w,{children:"Connect Wallet"})}),Object(R.jsx)(h.a,{open:G.open,autoHideDuration:6e3,onClose:function(){return q(Object(b.a)(Object(b.a)({},G),{},{open:!1}))},children:Object(R.jsx)(x.a,{onClose:function(){return q(Object(b.a)(Object(b.a)({},G),{},{open:!1}))},severity:G.severity,children:G.message})})]})},L=n(32),M=n(116),D=n(340),B=n(602),I=new L.d.PublicKey("12Qx3rGzJvCGS3vUvLmzEReFTkycfTn3cWPaKjuaJ4k"),N=new L.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),W=new L.d.PublicKey("AnMp9qQEsdLregASwqySw2TnDdS5rgg9PiJryz2HbAhk"),U="devnet",J=new L.d.Connection("https://api.devnet.solana.com"),z=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"AnMp9qQEsdLregASwqySw2TnDdS5rgg9PiJryz2HbAhk",REACT_APP_CANDY_MACHINE_CONFIG:"cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ",REACT_APP_TREASURY_ADDRESS:"12Qx3rGzJvCGS3vUvLmzEReFTkycfTn3cWPaKjuaJ4k",REACT_APP_SOLANA_NETWORK:"devnet",REACT_APP_SOLANA_RPC_HOST:"https://api.devnet.solana.com"}).REACT_APP_CANDY_START_DATE,10),F=Object(D.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Z=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(U)}),[]),t=Object(o.useMemo)((function(){return[Object(M.a)(),Object(M.b)(),Object(M.c)(),Object(M.e)({network:U}),Object(M.d)({network:U})]}),[]);return Object(R.jsx)(B.a,{theme:F,children:Object(R.jsx)(P.a,{endpoint:e,children:Object(R.jsx)(P.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(A.b,{children:Object(R.jsx)(C,{candyMachineId:W,config:N,connection:J,startDate:z,treasury:I,txTimeout:3e4})})})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};f.a.render(Object(R.jsx)(s.a.Fragment,{children:Object(R.jsx)(Z,{})}),document.getElementById("root")),H()}},[[569,1,2]]]);
//# sourceMappingURL=main.0a5a7bff.chunk.js.map