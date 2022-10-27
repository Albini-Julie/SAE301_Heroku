import{d as h,o as u,c as b,b as t,w as g,a as e,n as w,t as f,u as E,j as v,g as C,r as j,k as $,m as B,p as M,q as V,v as K,s as m,x as S}from"./index.ee2e0b97.js";const N="/assets/bracelet_1.5cc42001.jpg",A="/assets/ecran_1.477728d6.jpg",D="/assets/Bords_1.d061d111.jpg",T={"#000000":"Noir","#FC3737":"Rouge","#EC8321":"Orange","#42FF99":"Vert","#57BDF6":"Bleu","#FBEF84":"Jaune","#FFADF7":"Rose","#C3C3C3":"Gris","#745C5C":"Marron","#A82DF3":"violet"},q=[{value:"/cuir.jpg",label:"Cuir"},{value:"/tissu.jpg",label:"Tissu"},{value:"/m\xE9tal.webp",label:"m\xE9tal"}],z={class:"dark:bg-black dark:text-white"},L={class:"sr-only"},x=h({__name:"FormKitListColors",props:{name:null,label:null},setup(r){return(c,p)=>{const a=v("FormKit");return u(),b("div",z,[t(a,{name:r.name,label:r.label,value:"#FFFFFF",type:"radio",options:E(T),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"grid grid-cols-5 gap-1"},{label:g(o=>[e("div",{class:"h-10 w-10 rounded-full border-2 border-white peer-checked:border-violet_fonc\xE9",style:w({backgroundColor:o.option.value})},null,4),e("span",L,f(o.option.label),1)]),_:1},8,["name","label","options"])])}}}),R={class:"sr-only"},P={class:"text-[25px]"},_=h({__name:"FormKitListMateriaux",props:{name:null,label:null},setup(r){return(c,p)=>{const a=v("FormKit");return u(),C(a,{name:r.name,label:r.label,value:"#FFFFFF",type:"radio",options:E(q),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-1"},{label:g(o=>[e("div",{class:"h-10 w-10 rounded-full border-2 border-white peer-checked:border-violet_fonc\xE9",style:w({backgroundImage:`url(${o.option.value})`})},null,4),e("span",R,f(o.option.label),1),e("span",P,f(o.option.label),1)]),_:1},8,["name","label","options"])}}}),G={class:"dark:bg-black dark:text-white"},I={class:"flex gap-20 justify-center"},J={class:"gap-5"},O={class:"lg:grid lg:grid-cols-2 gap-10"},U={class:"flex gap-10 items-center justify-center"},H={class:"flex titre flex-col"},Q=e("span",{class:"sr-only"},"Choix des couleurs du bracelet",-1),W=e("h3",{class:"titre"},"Mat\xE9riaux",-1),X=e("span",{class:"sr-only"},"Choix des mat\xE9riaux du bracelet",-1),Y=e("img",{class:"mb-16",src:N,alt:"repr\xE9sentation bracelet"},null,-1),Z={class:"flex gap-10 items-center justify-center"},ee={class:"flex flex-col titre"},se=e("span",{class:"sr-only"},"Choix des couleurs de l'\xE9cran",-1),te=e("h3",{class:"titre"},"Mat\xE9riaux",-1),oe=e("span",{class:"sr-only"},"Choix des mat\xE9riaux de l'\xE9cran",-1),le=e("img",{src:A,alt:"repr\xE9sentation \xE9cran"},null,-1),re={class:"lg:grid lg:grid-cols-2 gap-5 mt-16"},ae={class:"flex flex-col justify-center gap-32"},ne={class:"flex gap-10 sitems-center justify-center"},ie={class:"flex flex-col titre"},ce=e("span",{class:"sr-only"},"Choix des couleurs du boitier",-1),de=e("h3",{class:"titre"},"Mat\xE9riaux",-1),pe=e("span",{class:"sr-only"},"Choix des mat\xE9riaux du boitier",-1),ue=e("img",{src:D,alt:"repr\xE9sentation boitier"},null,-1),me=e("span",{class:"sr-only"},"Champs d'entr\xE9e du nom de la montre",-1),xe={class:"flex justify-center"},_e=e("span",{class:"sr-only"},"Prototype",-1),be={class:"flex justify-center"},fe=e("span",{class:"sr-only"},"Suppression",-1),he=e("button",{type:"button",class:"focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"}," Annuler",-1),ge=e("span",{class:"sr-only"},"Annuler",-1),ve=e("span",{class:"sr-only"},"Confirmer la suppression",-1),ye=K('<div class="md:flex mt-20 text-center items-center"><div class="md:w-2/3"><p class="texte mx-28 font-semibold text-center">Fier de vous ? Vous pouvez d\xE9sormais commander votre montre et avec Tik Tak, vous pouvez b\xE9n\xE9ficier de la <span class="m-auto text-violet_fonc\xE9">livraison rapide</span> qui vous permettra de porter votre montre dans <span class="text-violet_fonc\xE9">2 jours</span> !</p></div><div class="md:w-1/3 my-5 flex flex-col items-center"><p class="titre font-work-sans font-semibold text-center">Livraison rapide en 2j !</p></div></div>',1),Ee=h({__name:"FormMontre",props:{data:null,id:null},async setup(r){var y;let c,p;const a=r,o=S(),n=j((y=a.data)!=null?y:{});if(a.id){let{data:i,error:s}=([c,p]=$(()=>m.from("montre").select("*").eq("id_montre",a.id)),c=await c,p(),c);s?console.log("n'a pas pu charger le table Montre :",s):n.value=i[0]}async function F(i,s){console.log(i);const{data:d,error:l}=await m.from("montre").upsert(i);l?s.setErrors([l.message]):(s.setErrors([]),o.push({name:"montres-edit-id",params:{id:d[0].id_montre}}))}async function k(){const{data:i,error:s}=await m.from("montre").delete().match({id_montre:n.value.id_montre});s?console.error("Erreur \xE0 la suppression de ",n.value,"erreur :",s):o.push("/")}return(i,s)=>{const d=v("FormKit");return u(),b("div",G,[e("div",I,[e("div",null,[t(d,{type:"form",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),"submit-label":"Enregistrer",onSubmit:F,"submit-attrs":{classes:{input:"dark:border-2 dark:border-white mt-5 flex flex-wrap justify-around font-work-sans font-semibold mb-5 p-2 bg-black text-white rounded-lg p-3 text-[15px] md:text-[20px] xl:text-[28px]"}},config:{classes:{input:"dark:bg-black p-1 rounded lg:w-[500px] md:w-[400px] xl:w-[600px] border-b-3 border-t-0 border-x-0 flex flex-wrap justify-center ",label:"dark:text-white text-black font-eb-garamond xl:text-[30px] md:text-[20px] text-[15px]"}}},{default:g(()=>[e("div",J,[e("div",O,[e("div",U,[e("div",H,[t(x,{name:"bracelet",label:"Bracelet"}),Q,W,t(_,{name:"bracelet"}),X]),Y]),e("div",Z,[e("div",ee,[t(x,{name:"ecran",label:"Ecran"}),se,te,t(_,{name:"ecran"}),oe]),le])]),e("div",re,[e("div",ae,[e("div",ne,[e("div",ie,[t(x,{name:"boitier",label:"Boitier"}),ce,de,t(_,{name:"boitier"}),pe]),ue]),t(d,{name:"libelle",label:"Nom de votre montre",placeholder:"Nom de la montre",type:"text"}),me]),e("div",xe,[t(B,M({class:"w-[214px] h-[469px] md:w-[414px] md:h-[569px] xl:w-[614px] xl:h-[869px]"},n.value,{id:"profil"}),null,16),_e])])]),t(d,{label:"Commander","label-class":"bg-violet_fonc\xE9 text-white gap-2 rounded-lg p-3 text-[20px] md:text-[20px] xl:text-[28px] ",type:"checkbox",name:"commande","input-class":"sr-only"})]),_:1},8,["modelValue"])])]),e("div",be,[n.value.id_montre?(u(),b("button",{key:0,type:"button",onClick:s[1]||(s[1]=l=>i.$refs.dialogSupprimer.showModal()),class:"mx-5 focus-style justify-self-end rounded-md text-[20px] bg-red-500 p-2 font-inter font-bold text-white shadow-sm"}," Supprimer la montre ")):V("",!0)]),fe,e("dialog",{ref:"dialogSupprimer",onClick:s[3]||(s[3]=l=>l.currentTarget.close())},[he,ge,e("button",{type:"button",onClick:s[2]||(s[2]=l=>k()),class:"focus-style rounded-md bg-red-500 p-2 shadow-sm"}," Confirmer suppression "),ve],512),ye])}}});export{Ee as _};
