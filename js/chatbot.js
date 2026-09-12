// ============================================
// Simple FAQ Chatbot for Joshua Catulin's Portfolio
// Pure client-side keyword matching — no API key, no backend needed.
// ============================================

const chatbotKB = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    response:
      "Hi there! 👋 I'm a little FAQ bot for Joshua's portfolio. Ask me about his background, skills, education, or how to contact him.",
  },
  {
    keywords: ["who are you", "what are you", "bot", "chatbot"],
    response:
      "I'm an automated FAQ assistant built into this site — I can answer common questions about Joshua Catulin. For anything I can't answer, use the contact form below and Joshua will get back to you directly.",
  },
  {
    keywords: ["about", "who is joshua", "background", "yourself", "introduce"],
    response:
      "Joshua Catulin is a 21-year-old Information Technology student at Philippine Christian University (PCU). His coding journey started in grade 8 with Notepad++, and he's since grown into building full systems with tools like Visual Studio and XAMPP. He's working toward becoming a skilled IT professional or cybersecurity specialist.",
  },
  {
    keywords: ["notepad", "started coding", "grade 8", "how did you start", "coding journey"],
    response:
      "Joshua started coding back in grade 8 using Notepad++. Since then he's picked up tools like Visual Studio and XAMPP to build full systems.",
  },
  {
    keywords: ["study", "studying", "school", "university", "college", "education", "pcu"],
    response:
      "Joshua is currently studying Information Technology at Philippine Christian University (PCU).",
  },
  {
    keywords: ["age", "old"],
    response: "Joshua is 21 years old.",
  },
  {
    keywords: ["skill", "skills", "good at", "know", "expertise", "tech stack", "technologies"],
    response:
      "Joshua's core skills fall into three areas:\n• Web Development — HTML5, CSS, JavaScript, some React\n• Databases — MySQL, Microsoft SQL, XAMPP, REST APIs, JSON, XML\n• Backend — SQL, JavaScript, Java, and C#, with Python and PHP still in progress\n\nWant details on any of these?",
  },
  {
    keywords: ["web dev", "html", "css", "javascript", "react", "frontend"],
    response:
      "For web development, Joshua works with HTML5, CSS, and JavaScript, plus some experience with React. This portfolio site itself is an example of that work.",
  },
  {
    keywords: ["database", "databases", "sql", "mysql", "microsoft sql", "api", "json", "xml", "xampp"],
    response:
      "Joshua has hands-on experience with MySQL and Microsoft SQL from university projects, sets up local SQL Server databases using XAMPP for testing, and is familiar with REST APIs, JSON, and XML.",
  },
  {
    keywords: ["backend", "c#", "java", "python", "php", "server", "programming language", "languages"],
    response:
      "On the backend side, Joshua works with SQL, JavaScript, Java, and C# — he used C# for his Seat Reservation System project — and is still building up his Python and PHP skills.",
  },
  {
    keywords: ["project", "projects", "portfolio", "work", "built", "finals", "seat reservation", "visual studio"],
    response:
      "Joshua's main project so far is a Seat Reservation System — a desktop app built in Visual Studio using C#, with a SQL Server database (set up locally with XAMPP), developed for his 3rd year college finals. This portfolio site is also self-built with HTML, CSS, and JavaScript.",
  },
  {
    keywords: ["certificate", "certificates", "certification", "certifications", "seminar", "training"],
    response:
      "Joshua has completed a few certificate programs:\n• Financial Literacy, Marketing Strategy and Entrepreneurial Mind (2023)\n• Building the Future: Real-World Tour for IT and CS Students (2025)\n• Freelancing in Tech, DevOps CI/CD and Web3 Technology (2025)\n• Blockchain Summit (2025)\n\nCheck the Certificates section on this page for more.",
  },
  {
    keywords: ["cybersecurity", "cyber security", "security"],
    response:
      "Joshua's long-term goal is to grow into either a skilled IT professional or a cybersecurity specialist, and he's continuously building his knowledge toward that.",
  },
  {
    keywords: ["contact", "email", "reach", "message", "hire", "get in touch"],
    response:
      "You can reach Joshua at joshuafroyc@gmail.com, or just scroll down and use the contact form on this page — messages go straight to his inbox.",
  },
  {
    keywords: ["github", "code", "repo", "repository"],
    response: "Joshua's GitHub is https://github.com/joshcatulin",
  },
  {
    keywords: ["linkedin"],
    response:
      "You can connect with Joshua on LinkedIn: https://www.linkedin.com/in/joshua-froy-catulin-093b55392/",
  },
  {
    keywords: ["thank", "thanks"],
    response: "You're welcome! Let me know if you have any other questions about Joshua. 🙂",
  },
];

const fallbackResponses = [
  "I'm not sure about that one — but you can ask Joshua directly through the contact form below, or email joshuafroyc@gmail.com.",
  "Good question! That's outside what I know. Try the contact form or email joshuafroyc@gmail.com and Joshua can answer personally.",
];

function chatbotFindResponse(userText) {
  const text = userText.toLowerCase();
  for (const entry of chatbotKB) {
    if (entry.keywords.some((kw) => text.includes(kw))) {
      return entry.response;
    }
  }
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("chatbot-toggle");
  const windowEl = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close");
  const messagesEl = document.getElementById("chatbot-messages");
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const quickRepliesEl = document.getElementById("chatbot-quick-replies");

  const quickReplies = ["About Joshua", "Skills", "Projects", "Certificates", "Contact"];

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("chatbot-msg", sender);
    msg.innerText = text;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function renderQuickReplies() {
    quickRepliesEl.innerHTML = "";
    quickReplies.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerText = label;
      btn.addEventListener("click", () => handleUserMessage(label));
      quickRepliesEl.appendChild(btn);
    });
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;
    addMessage(text, "user");
    input.value = "";
    setTimeout(() => {
      addMessage(chatbotFindResponse(text), "bot");
    }, 300);
  }

  toggle.addEventListener("click", () => {
    windowEl.classList.toggle("active");
    if (windowEl.classList.contains("active") && messagesEl.childElementCount === 0) {
      addMessage(
        "Hi! I'm Joshua's portfolio assistant. Ask me about his background, skills, projects, or how to contact him.",
        "bot"
      );
      renderQuickReplies();
    }
  });

  closeBtn.addEventListener("click", () => {
    windowEl.classList.remove("active");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserMessage(input.value);
  });
});
