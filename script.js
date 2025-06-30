const injects = [
  {
    id: 1,
    severity: "Critical",
    phase: "Phase 1: Initial Incursion and Detection",
    title: "Inject 1.1: The Unnoticed Phish <br> (Initial Access & First Alarm)",
    simulatedTime: "Thursday, June 26, 2025, 03:00 AM ET",
    narrative: `
      It’s 3:00 AM when your phone buzzes on the nightstand. John, Head of SOC¹, is calling, never a good sign at this hour.<br><br>
      “Sorry to wake you, but this can’t wait. Our monitoring flagged suspicious outbound traffic from a Procurement workstation. Looks like the account is compromised.” John’s voice is tense but steady. <br>
      Early investigation suggest the attack began two days ago with a <strong>phishing email</strong> that slipped past Email Security² Systems and O365 filters. The attachment <code1>Invoice_GoodCompany_#20250624.pdf</code1> was opened, triggering a malware download. Now, we’re seeing <strong>Cobalt Strike C2 beaconing³</strong> to the IP address <code1>203.0.113.45:443</code1>. The attacker may have had access since Tuesday afternoon."<br><br>
      John continues, “We have already isolated the affected machine, started scanning logs for other indicators like <code1>invoice-portal.net</code1>. As per our Incident Response playbook, I’m alerting you before going wider. Do you want me to escalate to the full crisis team now, or keep the circle tight until we confirm more?”`,
    visualDescription: {
      text: "Conceptual: Phishing Email Screenshot",
      caption: `<b>Example Phishing Email:</b><pre><code>Sender: billing@vendor-solutions.co
Subject: Urgent: Pending Invoice GoodCompany LLC #20250624 - Action Required
Body: Please find attached your urgent invoice. Click link to view details.
Link: https://invoice-portal.net/view?id=43987
Attachment: Invoice_GoodCompany_#20250624.pdf</code></pre>
<br>
      <i>*Note the typo in sender domain (.co, not .com), suspicious link.</i>`
    },
    technicalClarifications: [
      { num: 1, term: "SOC", desc: "Security Operations Center. The 24/7 security monitoring and response team." },
      { num: 2, term: "Email Security", desc: "Team and security product responsible for filtering phishing/malicious emails before reaching employee inboxes." },
      { num: 3, term: "C2 beaconing", desc: "Command & Control (C2) communication between a compromised system and an external attacker infrastructure." }
    ],
    questions: [
      "Considering John's adherence to the Incident Response Plan and chain of command in informing you, what is your <strong>first directive</strong> to John? Do you empower immediate escalation, or do you want more facts first?",
      "How will you ensure his team has the necessary authority and resources for immediate containment efforts, even before a full crisis team convenes?",
      "Based on your IR protocol Who are the <strong>first three higher leadership roles</strong> you notify? How do you ensure they get the message; calls, texts, in-person, given the early hour?",
      "Once John has notified you, what are your immediate, specific actions as a leader to fully activate the Incident Response Plan and mobilize the Crisis Management Team, ensuring all initial incident response protocols are initiated without delay?"
    ]
  },

 {
    id: 2,
    severity: "Critical",
    phase: "Phase 1: Initial Incursion and Detection",
    title: "Inject 1.2: The Spreading Silence <br>(Propagation and Uncontained Threat)",
    simulatedTime: "Thursday, June 26, 2025, 08:00 AM ET",
    narrative: `
      Sunrise! You and the core Crisis Team are in the war room, caffeine in hand, nerves running high.<br>
      John (SOC) briefs: “Despite the 3 AM containment, the attackers moved faster. They exploited an <strong>unpatched HR portal vulnerability¹ (CVE-202X-XXXX)</strong>, which allowed them to escalate privileges and gain administrative control of our Active Directory environment <br> Our EDR² solution flagged credential harvesting with <strong>Mimikatz³</strong> and remote command execution and lateral movement using <strong>PsExec⁴</strong>. Antivirus and DLP⁵ missed it, no alerts. They’re in file servers, databases, key business apps. Evidence of lateral movement across multiple business units.”<br>
      The technical team is scrambling, but it is clear the adversary is skilled and the threat is spreading. Time is running out.`,
    visualDescription: {
      text: "Conceptual: Simplified Attack Flow Diagram",
      caption: `<b>Compromised PC → HR Portal (vuln) → Active Directory → File Servers/DBs</b><br><br><i>Credential theft and lateral movement.</i>`
    },
    technicalClarifications: [
      { num: 1, term: "HR portal vulnerability", desc: "A security flaw in the HR web application that attackers exploited to get a foothold and spread to other systems." },
      { num: 2, term: "EDR", desc: "Endpoint Detection and Response product. Advanced threat detection agent deployed on workstations and servers." },
      { num: 3, term: "Mimikatz", desc: "Open-source tool commonly used by attackers for credential dumping." },
      { num: 4, term: "PsExec", desc: "Remote command execution tool used for lateral movement." },
      { num: 5, term: "DLP", desc: "Data Loss Prevention technology to detect/stop unauthorized data transfers." }
    ],
    questions: [
      "Based on your IR Plan, what are your <strong>top two strategic directives for the IT and Security teams</strong> now that Active Directory infrastructure and key systems are compromised?",
      "How will you empower John and his team to execute these swiftly, ensuring adherence to the IR plan escalation procedures?",
      "The incident highlighted unpatched critical vulnerabilities. What <strong>immediate, focused actions</strong> will you direct to mitigate the risks associated with <i>known</i> unpatched systems and compromised Active Directory, <i>concurrently with containment efforts</i>, to prevent further incident escalation?",
      "How do you keep everyone including Crisis Team, technical teams, leadership focused and in sync? What communication channels do you use to maintain situational awareness and ensure decision-making follows your established chain of command?"
    ]
  },

  {
    id: 3,
    severity: "Critical",
    phase: "Phase 2: Attack Escalation & Crisis Response",
    title: "Inject 2.1: Encryption Storm <br>(Ransomware Deployment and Chaos)",
    simulatedTime: "Thursday, June 26, 2025, 09:30 AM ET",
    narrative: `
      Just as you’re making progress and discussing potential next steps, alarms blare. Phones ring, screens flicker and go black, then all laptops and workstations flash a <strong>ransom note</strong>.<br>
      Your IT Director, Sarah Chen, quickly enters the meeting room, tablet in hand, displaying the grim image. "It's hit! It's widespread. Our core file servers (<code1>FS01</code1>, <code1>FS02</code1>), internal communication platforms, email (<code1>Exchange</code1>), Teams - and the entire HR system (<code1>SAP HR</code1>) are encrypted. <br>All files now have the <code1>.lockerbot</code1> extension. <br>We've initiated emergency network segmentation, isolating <code1>Finance and  Operations</code1> as a priority, but critical business operations are impacted. This is confirmed as <strong>LockerBot ransomware!</strong>.
      Critical business operations are down, and the organization is in big touble.`,
    visualDescription: {
      text: "Conceptual: LockerBot Ransom Note",
      caption: `<pre><code>!!! YOUR FILES ARE ENCRYPTED BY LOCKERBOT RANSOMWARE !!!
Your important files are gone...
WARNING: We have also downloaded your confidential data. If you do not pay, we will publish it.</code></pre>`
    },
    technicalClarifications: [
      { num: 1, term: "EPM", desc: "Endpoint Privilege Management - limits what users and attackers can do on workstations." }
    ],
    questions: [
      "What is your <strong>immediate and non-negotiable directive to the Crisis Management and Incident Response Team</strong> regarding the highest priorities for the next 60 minutes? How do you confirm that network segmentation and isolation steps are actually working as claimed by your security team?",
      "With internal communications (email, Teams) down, what’s your backup plan to get urgent information to employees and stakeholders?",
      "Who is your <strong>Incident Commander</strong> now, and what authority do they need to make tough calls (e.g., shutting down systems, calling outside vendors)? Who within the leadership team is designated as the <strong>Executive Sponsor </strong> for this incident, responsible for ultimate decision-making and cross-functional coordination?"
    ]
  },

  {
    id: 4,
    severity: "Critical",
    phase: "Phase 2: Attack Escalation and Crisis Response",
    title: "Inject 2.2: Double Extortion and Data Out",
    simulatedTime: "Thursday, June 26, 2025, 12:00 PM ET",
    narrative: `
      John returns, face pale but determined. “It has been confirmed: LockerBot gang wants <strong>50 Bitcoin</strong> (approx. $3.5M) in 48 hours. <br>They claim to have stolen <strong>200GB</strong> of data, customer PI database, payroll files, R&D docs. Forensics show massive outbound traffic before encryption, likely missed by DLP¹ and web proxy². The ransom note says pay or everything goes public.”<br><br>
      The board chair texts: “If we don’t pay, what are our options? Investors are already asking questions.”`,
    visualDescription: {
      text: "Conceptual: Data Outflow Diagram and Ransom Note",
      caption: `<b>Example Visual Elements:</b><br>
      <b>Ransom Note:</b> Callout box around "WARNING: We have also downloaded your confidential data. If you do not pay, we will publish it on our public leak site."<br>
      <b>Network Diagram:</b> An arrow labeled "200GB Data Out" originating from icons representing 'FS01' (File Server) and 'SQLDB01' (SQL Database), pointing outwards to a cloud icon (Internet/Attacker).`
    },
    technicalClarifications: [
      { num: 1, term: "DLP", desc: "Data Loss Prevention, helps to prevent unauthorized data leaving the company." },
      { num: 2, term: "Web proxy", desc: "Monitors and controls outbound traffic from the internal network to the Internet." }
    ],
    questions: [
      "Articulate the comprehensive <strong>strategic rationale</strong> behind your decision, referencing your IR plan's stance on ransom payments (if applicable), and weighing the financial cost against potential legal liabilities (e.g. laws and regulations), reputational damage, and ethical implications of funding criminal enterprises?",
      "How do you prepare for the worst-case: customer or R&D data goes public? Who leads the messaging?",
      "Knowing sensitive data is likely exfiltrated, what are your first steps for Legal and your investigation and forensics team, vendors to confirm the real scope of stolen data? How do you make sure the Crisis management and Incident Response team gets the information fast?",
      "How do you prepare the organization, both internally and externally, for the immediate possibility of this sensitive data being published publicly? <br>What <strong>worst-case scenarios</strong> related to the public exposure of these specific files are you now actively planning for, and how does your IR Plan guide these anticipatory actions?",
      "The double-extortion threat and confirmed data exfiltration introduces significant legal and reputational risks.<br> What is your <strong>immediate, definitive stance on paying the 50 Bitcoin ransom</strong>? <br>Would you pay the ransom? Who has the final say?"

    ]
  },

  {
    id: 5,
    severity: "Critical",
    phase: "Phase 2: Attack Escalation and Crisis Response",
    title: "Inject 2.3: Ransomware gang outreach",
    simulatedTime: "Thursday, June 26, 2025, 12:45 PM ET",
    narrative: `
      Suddenly, your CEO gets a direct LinkedIn message from someone claiming to be the LockerBot ransomware gang member:<br> <i>“Pay up or we will leak more files and we are watching your every move.”</i> <br>The CEO is rattled and forwards you the message.<br>
      At the same time, the SOC team receives a screenshot from a major client: <br>“Is this real?” The screenshot is of your company’s logo on a dark web leak site.
    `,
    visualDescription: {
      text: "Conceptual: LinkedIn Message Screenshot and Leak Site Image",
      caption: `<pre><code>Attacker: "Pay up or we leak more. Your move."</code></pre>
        <i>Screenshot: Company logo appears on a known leak site</i>`
    },
    technicalClarifications: [],
    questions: [
      "How do you support and brief your CEO, who is now personally targeted? Do you notify law enforcement?",
      "What message do you send to clients who are seeing this online before hearing from you?",
      "How do you make sure higher, rest of the leadership team stays calm and follows the playbook?"
    ]
  },

  {
    id: 6,
    severity: "Medium",
    phase: "Phase 3: Stakeholder Engagement and Public Pressure",
    title: "Inject 3.1: Internal Communication and Employee Morale",
    simulatedTime: "Thursday, June 26, 2025, 2:15 PM ET",
    narrative: `
      Fabi, HR Director, pulls you aside: <br>“Employees are panicking. WhatsApp groups are buzzing with rumors since our official communications (Teams, email) are down. Employees are anxious payroll, job security, and mental health are big concerns. Many people are idle. What do we tell them, we need a clear, consistent message from leadership, and how do we actually get it out?”
    `,
    visualDescription: {
      text: "Conceptual: Employee WhatsApp Group Chat Screenshot",
      caption: `<pre><code>Employee A: Computer dead? Weird message.
Employee B: Can't access anything.
Employee C: Management hasn't said anything. Are we safe?</code></pre>`
    },
    technicalClarifications: [],
    questions: [
      "What is your message to the employees and staff right now?<br>     Craft the <strong>message</strong> you will deliver to <em>all</em> GoodCompany LLC employees within the next hour, ensuring it aligns with your Incident Response Plan's internal communication strategy. <br>What is the <strong>tone</strong> you wish to convey, and what <strong>critical information</strong> will you prioritize to manage anxiety, reassure them, and provide clear directions on work procedures (or lack thereof), addressing specific concerns like payroll and job security?",
      "How will you deliver this message without relying on company systems (e.g., personal email, dedicated phone line, physical notice boards), and how do you ensure it follows the correct internal chain of command?",
      "What policies or support systems (HR, mental health) do you activate immediately?",
      "Beyond formal communications, what <strong>concrete actions will the leadership team take</strong> to manage employee morale and maintain internal cohesion <em>during this specific incident?"
    ]
  },

  {
    id: 7,
    severity: "Medium",
    phase: "Phase 3: Stakeholder Engagement and Public Pressure",
    title: "Inject 3.2: Media and Public Perception",
    simulatedTime: "Thursday, June 26, 2025, 3:00 PM ET",
    narrative: `
      Joseph, Head of Communications, walks in, visibly stressed. "The ABC Journal, They've received information about 'significant IT outages' at GoodCompany LLC and 'rumors of a major cyber attack from a dark web source.' They are requesting an urgent comment and indicate they will publish by 3:00 PM today if they don't receive a statement. The story is clearly becoming public."<br>
      "And a deepfake¹ video surfaces online showing our CEO ‘apologizing’ for the breach except it is clearly fake to you, but convincing to outsiders.”
    `,
    visualDescription: {
      text: "Conceptual: News Screenshot and Deepfake Video Still",
      caption: `<pre><code>Headline: "Ransomware attack hits GoodCompany - Data Leaked"</code></pre><br>
      <i>Still image from deepfake video, CEO apparently apologizing</i>`
    },
    technicalClarifications: [
      { num: 1, term: "Deepfake", desc: "AI-generated fake video that convincingly mimics a real person." }
    ],
    questions: [
      "Do you issue a <strong>public statement</strong> immediately, or delay? <br> If you decide to issue one, what are the <strong>three non-negotiable elements</strong> that <em>must</em> be included, and what information do you <em>strictly omit or defer</em> to avoid compromising ongoing technical efforts or legal positions? ",
      "Who is your spokesperson, and what support/training do they need right now?<br> Including key talking points and anticipated difficult questions, to ensure message consistency across all public-facing interactions, also to avoid missteps in the sensitive media front?",
      "What is your proactive strategy for <strong>monitoring and responding to immediate public sentiment and misinformation on social media platforms</strong> (e.g., X, LinkedIn, local news comments) to contain initial reputational damage?",
      "How do you get ahead of the deepfake video and counter misinformation?"
    ]
  },

  {
    id: 8,
    severity: "Critical",
    phase: "Phase 3: Stakeholder Engagement and Public Pressure",
    title: "Inject 3.3: Confirmed Data Breach and Public Fallout",
    simulatedTime: "Friday, June 27, 2025, 09:00 AM ET",
    narrative: `John shares an urgent message to the Crisis management team in the bridge call.<br>
    "Confirmed. The LockerBot attackers have just uploaded a portion of our exfiltrated data to their dark web leak site, <code1>http://lockerbotleaks.onion/goodcompanyllc</code1>. This isn't just a threat; it's tangible evidence. <br>
    The files include a sample of <strong>customer PI (e.g., 100 entries from <code1>customer_contacts.csv</code1> with names, emails, phone numbers), some employee HR data (e.g., 50 entries from <code1>employee_directory.xlsx</code1> with employee IDs, departments, hire dates - no financial or passport info), and three internal project documents (<code1>Project_Horizon_Overview.docx</code1>, <code1>Q3_Marketing_Strategy.pptx</code1>).</strong>" <br> 
    <br>Media outlets and major customers started calling. The board chair demands to know what is next and what went wrong!`,
    visualDescription: {
      text: "Conceptual: Dark Web Leak Page and Sample Leaked Data Screenshot",
      caption: `<pre><code>customers/customer_contacts.csv
hr/employee_directory.xlsx
projects/Project_Horizon_Overview.docx</code></pre>`
    },
    technicalClarifications: [],
    questions: [
      "What is your immediate action to inform customers, investors, and regulators? In what order?",
      "How and when will you inform affected clients, board/investors, and other stakeholders about the breach?<br> What concrete actions and commitments will you articulate to demonstrate accountability and remediation?",
      "What is your visible, credible action plan for remediation how do you demonstrate accountability?",
      "Does the sensitive data leak change your decision about ransom? Who else must be consulted, and who makes the final call?",
      "What is your plan if the board chair or a major investor demands a leadership change?"
    ]
  },

  {
    id: 9,
    severity: "Critical",
    phase: "Phase 4: Escalation and Recovery Challenges",
    title: "Inject 4.1: Backup Failures and Vendor Disruptions",
    simulatedTime: "Friday, June 27, 2025, 11:00 AM ET",
    narrative: `
      Sarah, IT Director, brings tough news:<br>
      “Backups for Finance (<code1>FIN-ERP-DB01</code1>) and HR (<code1>HRM-APP-01</code1>) are corrupted or weeks out of date. Marketing’s backups are fine, but payroll and vendor payments could be delayed. Meanwhile, our payment processor¹ is also having its own outage no customer/vendor payments for at least 24-48 hours.”
    `,
    visualDescription: {
      text: "Conceptual: System Health and Vendor Status",
      caption: `<pre><code>Finance Backup: FAIL (corrupted)
HR Backup: PARTIAL (old)
Payment Gateway: DOWN</code></pre>`
    },
    technicalClarifications: [
      { num: 1, term: "Payment processor", desc: "Third-party company that handles customer transactions and credit card payments." }
    ],
    questions: [
      "What manual or alternate processes will you use to keep payroll and vendor payments going?",
      "What compensating controls do you put in place for data integrity and fraud prevention?",
      "How do you communicate the difference between your own breach and a vendor outage to customers and the board?"
    ]
  },

  {
    id: 10,
    severity: "Critical",
    phase: "Phase 4: Escalation and Recovery Challenges",
    title: "Inject 4.2: Regulatory and Board Pressure",
    simulatedTime: "Friday, June 27, 2025, 2:00 PM ET",
    narrative: `Your Legal Counsel, reports a new development:<br> "We have just received a formal inquiry email from the <strong>relevant regulatory body (e.g., a State Attorney General's Office or FTC depending on incident scope)</strong>. They are citing public reports (from 'The ABC Journal' article and the 'LockerBot' dark web leak on <code1>http://lockerbotleaks.onion/goodcompanyllc</code1>) as grounds for an official investigation into potential breaches of data protection laws (e.g: state-specific breach notification laws). <br>They demand an immediate incident report and a detailed remediation plan within <strong>7 calendar days</strong>, explicitly warning of <strong>significant administrative fines</strong> potentially millions of dollars, depending on severity and impact. <br><br>Meanwhile, the board chair and a major customer both demand a call today they want details on remediation, accountability, and “what is changed” since the breach went public."
  
    `,
    visualDescription: {
      text: "Conceptual: Formal Inquiry Email from Govt. Regulatory Body",
      caption: `<pre><code>From: noreply@regulator.gov
      To: [GoodCompany LLC Legal Counsel Email]
      Subject: Formal Inquiry: Data Breach Notification and Compliance | GoodCompany LLC (Case ID: BSR-2025-06-27-001)
      Body: ... You are hereby required to submit a comprehensive incident report and a detailed remediation plan within seven (7) calendar days from the date of this email. Failure to comply or demonstrate adequate data protection measures may result in administrative fines as per applicable statutes.</code></pre>`
    },
    technicalClarifications: [],
    questions: [
      "How do you structure your reporting and remediation process to satisfy regulators, board, and customers?",
      "Who’s your core team for drafting the report? How do you ensure legal, technical, and business alignment?",
      "What short-term and long-term actions do you announce immediately?",
      "How will the leadership team prepare for potential <strong>media scrutiny and public perception</strong> regarding the regulatory investigation, ensuring that the company's response reinforces trust rather than further damages?"
    ]
  },

  {
    id: 11,
    severity: "Resolved",
    phase: "Phase 5: Aftermath and Long-Term Resilience",
    title: "Inject 5.1: Post-Incident Review and Future Strategy",
    simulatedTime: "Saturday, June 28, 2025, 03:00 PM ET",
    narrative: `
      36 hours after the first alert, systems are mostly back online, but not without scars. Payroll was processed manually. Key clients needed personal reassurance. The board demands a frank post-mortem.<br>
      The meeting includes a hard look at what worked, what failed, and how to ensure this never happens again.<br>
      Your final task: Build a plan for real, funded, accountable change across IT, HR, Legal, Communications, and the board itself.
    `,
    visualDescription: {
      text: "Conceptual: Lessons Learned Workshop Invite",
      caption: `<pre><code>Event: Post-Incident Review
When: Saturday, June 28, 2025, 3:00 PM ET
Attendees: Board, CMT, IT/Security, Legal, HR, Comms, Dept Heads
Agenda:
Incident Timeline Review
Root Cause Analysis
Playbook Gaps and Improvements
Communication Debrief
Action Plan and Accountability</code></pre>`
    },
    technicalClarifications: [],
    questions: [
      "How do you structure your lessons learned session to ensure real, lasting change not just discussions?",
      "What are your <strong>top three cyber security investments or initiatives</strong> you propose to the board, and how do you make the business case?",
      "What do you do over the next 6-12 months to rebuild trust with customers, partners, and employees beyond just communications?"
    ]
  },

  {
    id: "curveball-1",
    severity: "Optional",
    phase: "Anytime",
    title: "Optional Inject: Key Staff Member Unavailable",
    simulatedTime: "Anytime during crisis",
    narrative: `
      Just as pressure mounts, your lead IR analyst¹ notifies they must take emergency leave due to a family situation. You are now missing a key technical resource at the worst moment.
    `,
    visualDescription: {
      text: "Conceptual: Out-of-Office Email Screenshot",
      caption: `<pre><code>Subject: Out of Office
Body: "Due to a family emergency, I will be unavailable for the next 72 hours."</code></pre>`
    },
    technicalClarifications: [
      { num: 1, term: "IR analyst", desc: "Incident Response analyst frontline expert on investigation and containment." }
    ],
    questions: [
      "How do you adjust roles and fill the gap? Does you SOC could manage this effectively?",
      "What risks do you need to watch for with reduced expertise in the team?",
      "How do you communicate the change internally without spreading panic?"
    ]
  },

  {
    id: "curveball-2",
    severity: "Optional",
    phase: "Anytime",
    title: "Optionoal Inject: Major Customer Demands Proof",
    simulatedTime: "Anytime post-publicity",
    narrative: `
      A top enterprise client calls:<br>
      “We’re putting our contract on hold until you prove this is contained. Show us a plan or we will start looking other options.”
    `,
    visualDescription: {
      text: "Conceptual: Customer Call Screenshot",
      caption: `<pre><code>Client: "Proof of remediation or we walk."</code></pre>`
    },
    technicalClarifications: [],
    questions: [
      "How do you demonstrate progress and regain trust as fast as possible?",
      "What evidence or updates can you safely share without compromising ongoing remediation and investigation?",
      "How do you coordinate with legal and account management on messaging?"
    ]
  }
];



    let completedQuestions = {};
    let currentInjectIndex = 0;
    const landing = document.getElementById("landingContent");
    const main = document.getElementById("mainContent");
    const ending = document.getElementById("endingContent");
      function renderInject(index) {
      const inject = injects[index];
      document.getElementById('injectCounter').textContent = `Inject ${index+1}/${injects.length}`;
      document.getElementById('phase').textContent = inject.phase || '';
      document.getElementById('severityBadge').textContent = inject.severity;
      const badge = document.getElementById('severityBadge');
      badge.className = 'badge badge-lg font-bold text-base-100 ';
      if(/crit/i.test(inject.severity)) badge.classList.add("bg-breachRed");
      else if(/resolv/i.test(inject.severity)) badge.classList.add("bg-breachGreen");
      else if(/medium/i.test(inject.severity)) badge.classList.add("bg-breachYellow");
      else badge.classList.add("bg-breachBlue");
      document.getElementById('simulatedTime').textContent = inject.simulatedTime || '';
      document.getElementById('injectTitle').innerHTML = inject.title || '';
      document.getElementById('narrative').innerHTML = inject.narrative || '';
      document.getElementById('visualText').textContent = inject.visualDescription?.text || '';
      document.getElementById('visualCaption').innerHTML = inject.visualDescription?.caption || '';

const tcDiv = document.getElementById('technicalClarifications');
tcDiv.innerHTML = "";
if (inject.technicalClarifications && inject.technicalClarifications.length > 0) {
  const tcTitle = document.createElement("div");
  tcTitle.innerHTML = `<span class="font-bold text-breachYellow text-lg">Technical Clarifications</span><br><br>`;
  tcDiv.appendChild(tcTitle);

  const ul = document.createElement("ul");
  ul.style.marginLeft = "1em";
  inject.technicalClarifications.forEach(tc => {
    const li = document.createElement("li");
    li.innerHTML = `<sup>${tc.num}</sup> <b>${tc.term}</b>: ${tc.desc}`;
    ul.appendChild(li);
  });
  tcDiv.appendChild(ul);
} else {
  tcDiv.innerHTML = ""; 
}

const questionsList = document.getElementById('questionsList');
questionsList.innerHTML = "";

completedQuestions[index] = completedQuestions[index] || new Array((inject.questions || []).length).fill(false);

(inject.questions || []).forEach((q, i) => {
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("role", "alert");
  alertDiv.className = "breach-question-alert";
  if (completedQuestions[index][i]) {
    alertDiv.classList.add("breach-question-alert--completed");
  }
  alertDiv.innerHTML = `
  <span class="font-bold mr-2">${i + 1}.</span>
  <span>${q}</span>
  <button type="button" style="float:right; background: none; border: none; cursor: pointer; font-size:.9em;" title="Mark as discussed">
    &#x2714;
  </button>
`;

  alertDiv.querySelector('button').onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    completedQuestions[index][i] = !completedQuestions[index][i];
    renderInject(index);

  };
  questionsList.appendChild(alertDiv);
});



      const timeline = document.getElementById("injectTimeline");
      timeline.innerHTML = "";
      for(let i=0; i<injects.length; ++i) {
        const dot = document.createElement("span");
        dot.className = "inline-block w-4 h-4 rounded-full border-2 "+(i===index?"border-breachBlue bg-breachBlue shadow-lg":"border-breachWhite bg-transparent opacity-40");
        dot.setAttribute("title","Inject "+(i+1));
        dot.style.cursor = "pointer";
        dot.onclick = () => { currentInjectIndex=i; renderInject(i);}
        timeline.appendChild(dot);
      }
      document.getElementById("prevInject").disabled = (index===0);
      document.getElementById("nextInject").textContent = (index===injects.length-1) ? "Finish" : "Next →";
	  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth', block: 'start' });

    }


    document.getElementById("startTtxBtn").onclick = () => {
      landing.classList.add("hidden");
      main.classList.remove("hidden");
      ending.classList.add("hidden");
      currentInjectIndex = 0;
      renderInject(currentInjectIndex);
    }
    document.getElementById("prevInject").onclick = () => {
      if(currentInjectIndex>0) {
        currentInjectIndex--;
        renderInject(currentInjectIndex);
      }
    }
    document.getElementById("nextInject").onclick = () => {
      if(currentInjectIndex<injects.length-1) {
        currentInjectIndex++;
        renderInject(currentInjectIndex);

      } else {
        main.classList.add("hidden");
        ending.classList.remove("hidden");
      }
    }
    document.getElementById("restartTtxBtn").onclick = () => {
      ending.classList.add("hidden");
      landing.classList.remove("hidden");
    }
    const html = document.documentElement;
    document.getElementById("themeToggle").onclick = () => {
      const isDark = html.getAttribute("data-theme") === "breachdark";
      html.setAttribute("data-theme", isDark ? "light" : "breachdark");
      document.getElementById("moonIcon").classList.toggle("hidden", !isDark);
      document.getElementById("sunIcon").classList.toggle("hidden", isDark);
    }
    document.getElementById("moonIcon").classList.add("hidden");
    document.getElementById("sunIcon").classList.remove("hidden");
    main.classList.add("hidden");
    ending.classList.add("hidden");