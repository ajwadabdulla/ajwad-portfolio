export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  note?: string;
}

export interface AccaPaper {
  code: string;
  title: string;
  level: 'Knowledge' | 'Skills' | 'Strategic';
  status: 'Pass';
}

export const portfolioData = {
  personal: {
    name: "Ajwad Abdulla Alavi",
    title: "ACCA Affiliate | Audit & Finance",
    location: "Bahrain",
    visaStatus: "Locally Available",
    email: "ajwadabdulla42@gmail.com",
    whatsapp: "https://wa.me/97333831233",
    whatsappDisplay: "+973 3383 1233",
    phone: "+973 3383 1233",
    linkedin: "https://www.linkedin.com/in/ajwadabdulla",
    cvPath: "/Ajwad_Abdulla_Alavi_CV.pdf",
    certificatePath: "/ACCA_Certificate.pdf",
    photoPath: "/ajwad.jpg",
  },
  hero: {
    headline: "I finished my ACCA exams in 2026 and I'm looking for my first role in audit and finance.",
    subtitle: "Accounting graduate in Bahrain with internship experience in reconciliations, internal controls and compliance documentation. Open to audit, internal audit and financial analyst roles across the GCC.",
    targetMarkets: ["Bahrain", "Saudi Arabia", "Qatar"],
    badgeText: "ACCA Affiliate â€¢ 2026",
    examCount: "13/13",
    examLabel: "ACCA exams passed",
    examCaption: "Strategic Professional completed June 2026",
  },
  about: {
    text: "I am an accounting graduate from Dayananda Sagar University, Bangalore, with earlier schooling at The Indian School, Bahrain. I have completed all 13 ACCA examinations, including Advanced Audit and Assurance and Advanced Financial Management. My focus is on starting a career in audit and assurance, internal audit, or corporate financial analysis in the GCC. I bring hands-on internship experience in supplier ledger compliance, bank reconciliations, inventory controls, and financial statement review under IFRS.",
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Arabic", level: "Basic" }
    ]
  },
  credentials: {
    acca: {
      status: "ACCA Affiliate",
      organization: "Association of Chartered Certified Accountants (UK)",
      completionDate: "June 2026",
      registrationNo: "5634576",
      certificateNo: "2885634576450",
      levels: [
        {
          name: "Applied Knowledge",
          papers: [
            { code: "BT", title: "Business & Technology" },
            { code: "MA", title: "Management Accounting" },
            { code: "FA", title: "Financial Accounting" }
          ]
        },
        {
          name: "Applied Skills",
          papers: [
            { code: "LW", title: "Corporate and Business Law" },
            { code: "PM", title: "Performance Management" },
            { code: "TX", title: "Taxation" },
            { code: "FR", title: "Financial Reporting" },
            { code: "AA", title: "Audit and Assurance" },
            { code: "FM", title: "Financial Management" }
          ]
        },
        {
          name: "Strategic Professional",
          papers: [
            { code: "SBL", title: "Strategic Business Leader", status: "Pass" },
            { code: "SBR", title: "Strategic Business Reporting", status: "Pass" },
            { code: "AFM", title: "Advanced Financial Management", status: "Pass" },
            { code: "AAA", title: "Advanced Audit and Assurance", status: "Pass" }
          ]
        }
      ]
    },
    education: [
      {
        institution: "Dayananda Sagar University",
        location: "Bangalore, India",
        degree: "B.Sc, Major in Accounting",
        period: "2021 â€“ 2024",
        note: "Degree verified (B.Sc Major in Accounting / Commerce focus)"
      },
      {
        institution: "The Indian School, Bahrain",
        location: "Bahrain",
        degree: "Higher Secondary (Commerce Math)",
        period: "2007 â€“ 2021"
      }
    ]
  },
  skills: {
    competencies: [
      "Internal controls",
      "IFRS reporting",
      "Account reconciliation",
      "Risk analysis",
      "Compliance testing",
      "Audit trail integrity",
      "Ledger verification",
      "Bookkeeping"
    ],
    software: [
      "MS Excel",
      "Power BI",
      "Zoho Books",
      "Google Sheets",
      "Financial Models"
    ]
  },
  experience: [
    {
      company: "Trans Gulf Consult",
      location: "Bahrain",
      role: "Finance Intern",
      period: "Jul 2025 â€“ Aug 2025",
      points: [
        "Reviewed supplier and government payment cycles for compliance against accounting and regulatory requirements.",
        "Maintained audit-ready compliance documentation for external review and identified control gaps in ledger records.",
        "Verified payments against general ledger entries to ensure accuracy and documentation completeness."
      ]
    },
    {
      company: "Unity Contracting & Real Estate W.L.L.",
      location: "Bahrain",
      role: "Accountant Intern",
      period: "Jun 2025 â€“ Jul 2025",
      points: [
        "Reconciled monthly accounts and performed physical site inventory verifications.",
        "Strengthened month-end closing checklists and internal reporting accuracy.",
        "Supported audit trail integrity and validated inventory record matches against general ledger books."
      ]
    }
  ],
  projects: [
    {
      title: "Speedzey",
      organization: "Corporate Financial Analysis Case Study",
      location: "Bahrain",
      period: "May 2026",
      type: "Case Study & Financial Modeling",
      description: "Executed a comprehensive corporate financial analysis, drafting structured presentation slides and professional correspondence for business case evaluation."
    },
    {
      title: "Equity Research Study",
      organization: "Dayananda Sagar University",
      location: "Bangalore, India",
      period: "Nov 2023 â€“ Dec 2023",
      type: "Academic Equity Research",
      description: "Analyzed key financial ratios across listed IT companies (profitability, liquidity, leverage) to produce a structured equity analysis report."
    }
  ],
  volunteering: [
    {
      organization: "Bahrain Olympic Committee",
      role: "Volunteer",
      event: "3rd Asian Youth Games Bahrain 2025",
      location: "Bahrain",
      period: "Oct 2025",
      description: "Supported event operations, athlete coordination, and protocol logistics for the continental youth games hosted in the Kingdom of Bahrain."
    }
  ]
};
