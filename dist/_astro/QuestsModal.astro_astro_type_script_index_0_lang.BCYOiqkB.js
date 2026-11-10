import{n as e,t}from"./player.Cqw3t7YZ.js";import{t as n}from"./audio.CwOQmcwZ.js";var r=document.getElementById(`quests-modal`),i=document.getElementById(`close-quests-modal`),a=document.getElementById(`modal-streak-count`),o=document.getElementById(`quests-list`),s=document.getElementById(`badges-grid`);function c(){let n=e.getProfile();a&&(a.textContent=n.streak.toString()),o&&(o.innerHTML=``,n.quests.forEach(e=>{let t=document.createElement(`div`);t.className=`flex items-center justify-between rounded-xl border border-brand-border/60 bg-brand-dark/60 p-3 transition-colors`;let n=Math.min(100,Math.floor(e.progress/e.target*100));t.innerHTML=`
          <div class="flex items-center gap-3">
            <span class="text-xl">${e.icon}</span>
            <div>
              <div class="font-bold text-white text-xs">${e.title}</div>
              <div class="text-[11px] text-gray-400">${e.description}</div>
              <div class="mt-1.5 h-1.5 w-28 sm:w-40 rounded-full bg-brand-border/40 overflow-hidden">
                <div class="h-full bg-brand-neon rounded-full" style="width: ${n}%"></div>
              </div>
            </div>
          </div>
          <div>
            ${e.completed?`<span class="rounded-full bg-emerald-500/20 px-2.5 py-1 font-bold text-[10px] text-emerald-400 border border-emerald-500/30">✓ Done</span>`:`<span class="rounded bg-brand-card px-2 py-1 font-mono text-[10px] text-amber-400">+${e.xpReward} XP</span>`}
          </div>
        `,o.appendChild(t)})),s&&(s.innerHTML=``,t.forEach(e=>{let t=n.badges[e.id],r=document.createElement(`div`);r.className=`flex flex-col items-center justify-center rounded-xl border p-2.5 text-center transition-all ${t?`border-brand-neon/60 bg-brand-neon/10 text-white`:`border-brand-border/40 bg-brand-dark/40 text-gray-500 opacity-60`}`,r.innerHTML=`
          <span class="text-2xl ${t?`scale-110 drop-shadow-md`:`grayscale`}">${e.icon}</span>
          <span class="mt-1 font-bold text-[10px] truncate max-w-full">${e.name}</span>
          <span class="text-[9px] text-gray-400 line-clamp-1">${e.desc}</span>
        `,s.appendChild(r)}))}i.addEventListener(`click`,()=>{r.classList.add(`opacity-0`,`pointer-events-none`)}),r.addEventListener(`click`,e=>{e.target===r&&r.classList.add(`opacity-0`,`pointer-events-none`)}),window.addEventListener(`open-quests-modal`,()=>{c(),r.classList.remove(`opacity-0`,`pointer-events-none`),n.click()}),e.subscribe(c);