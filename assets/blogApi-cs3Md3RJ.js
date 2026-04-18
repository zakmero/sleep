const n=[{title:"Dopamine Reset for Better Sleep and Focus",slug:"dopamine-reset-for-better-sleep-and-focus",content:`
      <p>Most people do not have a discipline problem. They have an overstimulation problem. If your brain gets intense rewards all day, deep work and quality sleep start to feel flat.</p>
      <h2>Why This Happens</h2>
      <p>Endless novelty from social feeds, short-form video, and notifications keeps your reward system in a high-reactivity state. By evening, your nervous system is still "on," so sleep latency goes up and next-day focus drops.</p>
      <h2>7-Day Reset Framework</h2>
      <ul>
        <li><strong>Morning:</strong> No social media for the first 90 minutes.</li>
        <li><strong>Work Blocks:</strong> Use two 50-minute deep-focus sessions before checking messages.</li>
        <li><strong>Evening:</strong> Stop algorithmic feeds at least 2 hours before bed.</li>
        <li><strong>Night:</strong> Keep your bedroom dark, cool, and phone-free.</li>
      </ul>
      <h2>What to Track</h2>
      <p>Track three numbers daily: time to fall asleep, total sleep time, and uninterrupted focus minutes. Small improvements compound fast when your stimulus load goes down.</p>
    `,featuredImage:"/hero-avatar.png",metaTitle:"Dopamine Reset for Better Sleep and Focus | Smart Adulting Blog",metaDescription:"Learn a practical 7-day dopamine reset to reduce overstimulation, sleep faster, and improve deep focus.",keyword:"dopamine reset",excerpt:"A practical 7-day protocol to reduce overstimulation, improve sleep latency, and restore deep focus.",category:"Mindset",publishedAt:"2026-04-09"},{title:"How to Build a Sleep-First Evening Routine",slug:"how-to-build-a-sleep-first-evening-routine",content:`
      <p>High-performing days are mostly won the night before. A sleep-first evening routine lowers cognitive noise and makes next-morning execution easier.</p>
      <h2>Core Sequence (60 Minutes)</h2>
      <ul>
        <li><strong>T-60:</strong> Dim lights and shut down work tabs.</li>
        <li><strong>T-45:</strong> Light mobility or a short walk.</li>
        <li><strong>T-30:</strong> Prepare tomorrow's top three priorities.</li>
        <li><strong>T-15:</strong> Breathing downshift: 4 seconds in, 6 seconds out for 5 minutes.</li>
      </ul>
      <h2>Common Mistakes</h2>
      <p>Do not turn your evening routine into another productivity sprint. The goal is downregulation, not optimization theater.</p>
      <h2>Minimum Viable Version</h2>
      <p>If your schedule is chaotic, do only two steps: no blue-light feed scrolling after 9 PM and a written next-day plan. Keep this for two weeks before adding more.</p>
    `,featuredImage:"/founder-avatar.png",metaTitle:"Sleep-First Evening Routine for High Performance | Smart Adulting",metaDescription:"Create a simple evening routine that improves sleep quality and makes mornings more focused and predictable.",keyword:"evening routine for sleep",excerpt:"A clear 60-minute evening structure to improve recovery and make your mornings easier to execute.",category:"Sleep",publishedAt:"2026-04-04"},{title:"Attention Budgeting: Protecting Your Mental Bandwidth",slug:"attention-budgeting-protecting-your-mental-bandwidth",content:`
      <p>Time management is useful, but attention management is what determines output quality. You can have free time and still produce nothing if your attention is fragmented.</p>
      <h2>Create Your Attention Budget</h2>
      <ul>
        <li><strong>Deep Work:</strong> 2-3 hours daily reserved for cognitively heavy tasks.</li>
        <li><strong>Shallow Work:</strong> Batch messaging and admin into fixed windows.</li>
        <li><strong>Recovery:</strong> Add short breaks after intense blocks to avoid cognitive drift.</li>
      </ul>
      <h2>Rules That Actually Work</h2>
      <ul>
        <li>Disable non-essential notifications by default.</li>
        <li>Use one capture tool for ideas to avoid tab-hopping.</li>
        <li>End every workday with a written shutdown note.</li>
      </ul>
      <p>When your attention is budgeted instead of improvised, consistency rises and burnout risk drops.</p>
    `,featuredImage:"/hero-avatar-bak.png",metaTitle:"Attention Budgeting to Improve Focus and Output | Smart Adulting",metaDescription:"Use attention budgeting to protect deep work hours, reduce distraction, and sustain high-quality output.",keyword:"attention management",excerpt:"A practical system for allocating deep work, shallow work, and recovery so your day stops feeling scattered.",category:"Productivity",publishedAt:"2026-03-29"},{title:"Circadian Anchors: The Fastest Way to Stabilize Sleep",slug:"circadian-anchors-the-fastest-way-to-stabilize-sleep",content:`
      <p>If your sleep schedule swings between weekdays and weekends, your circadian rhythm never fully stabilizes. Circadian anchors solve that by fixing a few key timing signals.</p>
      <h2>Three Anchors to Prioritize</h2>
      <ol>
        <li><strong>Wake Time:</strong> Keep wake time consistent within a 30-minute window.</li>
        <li><strong>Morning Light:</strong> Get outdoor light exposure within 60 minutes of waking.</li>
        <li><strong>Meal Timing:</strong> Keep dinner timing consistent and avoid late heavy meals.</li>
      </ol>
      <h2>Expected Timeline</h2>
      <p>Most people notice improvements in daytime alertness within 5-7 days and better sleep regularity within 2-3 weeks.</p>
      <h2>Do This If You Slip</h2>
      <p>After a late night, keep your normal wake time and use a short afternoon nap if needed. Re-anchoring quickly prevents multi-day disruption.</p>
    `,featuredImage:"/nih.png",metaTitle:"Circadian Anchors for Better Sleep Consistency | Smart Adulting",metaDescription:"Learn the three circadian anchors that quickly improve sleep consistency and daytime energy.",keyword:"circadian rhythm",excerpt:"Use wake-time, light exposure, and meal timing anchors to stabilize sleep and daytime alertness.",category:"Health",publishedAt:"2026-03-22"}],r="/posts.json",s=e=>e&&typeof e.title=="string"&&typeof e.slug=="string"&&typeof e.content=="string",a=async e=>{try{const t=await fetch(r,{cache:"no-store",signal:e});if(!t.ok)throw new Error(`Failed to fetch posts.json (${t.status})`);const o=await t.json();if(!Array.isArray(o))throw new Error("posts.json is not an array");const i=o.filter(s);if(!i.length)throw new Error("posts.json contains no valid posts");return i}catch(t){if(t.name==="AbortError")throw t;return n}},l=e=>[...e].sort((t,o)=>new Date(o.publishedAt||0)-new Date(t.publishedAt||0));export{a as f,l as s};
