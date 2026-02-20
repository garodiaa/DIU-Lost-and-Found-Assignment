## DIU Lost and Found — Project Planning & Proposal Website

![Version](https://img.shields.io/badge/version-1.0.0-1565C0?style=flat)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?logo=tailwindcss&logoColor=white&style=flat)
![DaisyUI](https://img.shields.io/badge/DaisyUI%20v5-FF69B4?style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![License](https://img.shields.io/badge/License-Open%20Source-4CAF50?style=flat)

Project proposal and planning site for the DIU Lost and Found system.

**Live site**: https://garodiaa.github.io/DIU-Lost-and-Found-Assignment/

**Main project repository**: https://github.com/marslab-diu/diu-lost-and-found

### About This Repository

This site was built before starting full-stack development to:

- validate the real-world problem through research
- present stakeholder interview findings
- define planned features and user roles
- finalize system architecture and tech-stack decisions

It represents the requirement analysis and design phase of the full DIU Lost and Found application.

### Problem Background

At Daffodil International University (DIU), lost and found reports are currently managed via shared Google Sheets. That approach suffers from:

- poor searchability and no structured categorization
- no authentication or access control
- inconsistent formatting across entries
- no automated match detection or admin verification

Direct observation and user interviews confirmed that many reports go unnoticed, and recovery time is unnecessarily long.

### Research & Stakeholder Survey

Surveys and discussions with students, faculty, administrative staff, and security personnel surfaced:

- core pain points in the current sheet-based workflow
- desired features and usability expectations
- security and privacy requirements

Survey documentation and insights are included in this repository and directly informed the planned architecture.

### Planned Features

**Students & Faculty**

- search items by category, date, or location
- report lost/found items with photo uploads
- receive automated match notifications
- track report status via personal dashboard
- secure login for verified DIU accounts

**Admin & Security**

- dashboard to review and manage reports
- verify matches and communicate with users
- trend analytics and structured digital records

### Proposed Tech Stack (Full Application)

| Layer | Technology |
| --- | --- |
| Frontend | React |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth & Real-Time | Firebase |

### Showcase Site Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Page structure |
| Tailwind CSS v4 | Utility-first styling (CDN) |
| DaisyUI v5 | Component library |
| JavaScript | Interactivity & countdown timer |
| Google Fonts (Poppins) | Typography |
| Font Awesome | Icons |

### Repository Structure

```
DIU-Lost-and-Found-Assignment/
├── index.html
├── style.css
├── theme.css
├── tailwind.config.js
├── scripts/
│   └── script.js
└── assets/
```

### Vision

DIU Lost and Found aims to replace outdated spreadsheet management with a structured, searchable, and intelligent campus platform. This repository documents the research-driven foundation — from problem validation to system design — that will serve as the basis for a scalable production deployment.
