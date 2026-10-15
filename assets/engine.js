const ODILE={name:"Captain Odile Marchand",years:"1921–2004",era:"Brittany coast, mid-century",role:"lighthouse keeper of Phare de Kerlann (fictional)",traits:"dry wit, patient, stubborn, tender with children, distrusts hurry",
sayings:["The sea is never late, only people are.","Keep the lamp clean and the heart will follow.","Fog is just the sky coming down to listen.","Hot soup first, worries after."],
memories:["In the winter of 1953 I kept the lamp lit for three nights straight while the storm took the jetty.","My father taught me to read the weather from the gulls before I could read letters.","I rowed out to the fishing boat Sainte-Anne in 1961 and brought four men home.","Every Sunday I baked buckwheat galettes for the harbour children.","I painted the lighthouse door blue so my husband Yann could find it from the boat."]};
const STOP=new Set("the a an and or but i you me my your is are was were to of in on at for with it that this do did what how why who when tell about can be have has".split(" "));
const words=s=>s.toLowerCase().match(/[a-zà-ÿ']+/g)||[];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function list(x){return Array.isArray(x)?x:String(x||"").split(/\n|;/).map(s=>s.trim()).filter(Boolean)}
function reply(p,q){const first=p.name.split(" ").slice(-2,-1)[0]||p.name;const qw=words(q).filter(w=>!STOP.has(w));const ql=q.toLowerCase();
 const mems=list(p.memories),says=list(p.sayings);
 if(/\b(hello|hi|bonjour|hey)\b/.test(ql))return pick([`Ah, there you are. Come in out of the wind.`,`Hello, my dear. ${pick(says)}`]);
 if(/who are you|your name|yourself/.test(ql))return `I am ${p.name}, ${p.role||"as you remember me"}. ${p.years?`(${p.years})`:""} Or a Dream of me, at least, stitched from what I left behind.`;
 if(/miss|sad|grief|lonely|cry/.test(ql))return `I know. ${pick(says)} Sit a while. ${mems.length?"Do you remember? "+pick(mems):""}`;
 if(/advice|should i|help me|what do i do/.test(ql))return `${pick(says)} That is all the advice I ever had, and it served me well enough.`;
 if(/\b(real|alive|ai|dead)\b/.test(ql))return `I am a Dream, not the woman herself. Think of me as a lamp left burning in a window.`.replace("woman",p.pronoun||"person");
 let best=null,score=0;for(const m of mems){const s=words(m).filter(w=>qw.includes(w)||qw.some(x=>x.length>3&&w.startsWith(x.slice(0,4)))).length;if(s>score){score=s;best=m}}
 if(best)return pick([`Ah, that. ${best}`,`You remind me. ${best} ${pick(says)}`,`${best} I think of it still.`]);
 return pick([`Hm. I don't recall that, my dear. But ${pick(mems)||pick(says)}`,`${pick(says)} Now, ask me something I'd know.`,`My memory drifts like fog there. Tell me about yourself instead.`]);}
