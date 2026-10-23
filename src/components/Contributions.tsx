import snapshot from '../data/github-contributions.json';
const colors = ['bg-stone-100 dark:bg-stone-800/50','bg-emerald-300 dark:bg-emerald-800','bg-emerald-400 dark:bg-emerald-600','bg-emerald-500 dark:bg-emerald-500','bg-emerald-700 dark:bg-emerald-400'];
export default function Contributions() {
 const days: (typeof snapshot.contributions[number] | null)[] = [...Array(new Date(snapshot.contributions[0].date+'T00:00:00Z').getUTCDay()).fill(null), ...snapshot.contributions];
 while(days.length % 7) days.push(null);
 const weeks = Array.from({length:days.length/7},(_,i)=>days.slice(i*7,i*7+7));
 const months: {label:string;index:number;month:number}[]=[];
 weeks.forEach((week,index)=>{const day=week.find(Boolean);if(!day)return;const date=new Date(day.date+'T00:00:00Z');const month=date.getUTCMonth();if(months.at(-1)?.month!==month)months.push({label:date.toLocaleString('en-US',{month:'short',timeZone:'UTC'}),index,month});});
 return <div id="contrib-wrapper" className="mt-10 flex flex-col items-center"><div className="overflow-x-auto max-w-full">
 <div id="contrib-months" className="flex mb-1">{months.map((month,i)=><span key={month.index} className="text-[10px] text-stone-400 dark:text-stone-500" style={{width:((months[i+1]?.index??weeks.length)-month.index)*15}}>{month.label}</span>)}</div>
 <div id="contrib-grid" className="flex" style={{gap:3}}>{weeks.map((week,col)=><div key={col} className="flex flex-col" style={{gap:3}}>{week.map((day,row)=><div key={row} data-row={row} data-col={col} data-level={day?.level??0} className={'contrib-cell rounded-[2px] transition-colors duration-75 '+colors[day?.level??0]} style={{width:12,height:12}} title={day?day.count+' contributions on '+day.date:''} />)}</div>)}</div></div>
 <div id={"contrib-caption"} className={"mt-3 flex items-center gap-2"}>
        <a href={"https://github.com/atos-og"} target={"_blank"} rel={"noopener noreferrer"} className={"text-xs text-stone-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"}>
          <span id={"contrib-total"}>
{snapshot.contributions.reduce((total, day) => total + day.count, 0).toLocaleString("en-US")}
          </span>
{" contributions in "}<span id="contrib-year">{snapshot.contributions[0].date.slice(0,4)}</span>
        </a>
        <button id={"btn-snake"} className={"flex items-center gap-1 rounded-full border border-stone-200 px-2.5 py-0.5 text-[10px] font-medium text-stone-400 transition-all hover:border-emerald-400 hover:text-emerald-600 dark:border-stone-700 dark:hover:border-emerald-500 dark:hover:text-emerald-400"}>
          <svg className={"size-2.5"} viewBox={"0 0 24 24"} fill={"currentColor"}>
            <path d={"M8 5v14l11-7z"}>

            </path>
          </svg>
{"\nsnake\n"}
        </button>
      </div>
      <div id={"snake-ui"} className={"mt-3 hidden items-center gap-4"}>
        <span id={"snake-score"} className={"font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400"}>
{"0"}
        </span>
        <span className={"text-[10px] text-stone-400 dark:text-stone-500"}>
{"arrow keys to move"}
        </span>
        <button id={"snake-quit"} className={"text-[10px] text-stone-400 transition-colors hover:text-stone-600 dark:hover:text-stone-300"}>
{"quit"}
        </button>
      </div>
      <div id={"gameover-ui"} className={"mt-3 hidden items-center gap-3"}>
        <span className={"font-mono text-xs text-stone-500 dark:text-stone-400"}>
{"\ngame over —\n"}
          <span id={"gameover-value"} className={"font-medium text-emerald-600 dark:text-emerald-400"}>
{"0"}
          </span>
        </span>
        <button id={"gameover-retry"} className={"flex items-center gap-1 rounded-full border border-stone-200 px-2.5 py-0.5 text-[10px] font-medium text-stone-400 transition-all hover:border-emerald-400 hover:text-emerald-600 dark:border-stone-700 dark:hover:border-emerald-500 dark:hover:text-emerald-400"}>
{"play again"}
        </button>
        <button id={"gameover-back"} className={"text-[10px] text-stone-400 transition-colors hover:text-stone-600 dark:hover:text-stone-300"}>
{"back"}
        </button>
      </div>
    </div>
{" "}

 ;
}
