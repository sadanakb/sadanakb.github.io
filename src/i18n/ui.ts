export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export const ui: Record<Lang, Record<string, string>> = {
  de: {
    // Nav
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.skills': 'Kompetenzen',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Sadan Akbari',
    'hero.subtitle': 'Erstsemester Wirtschaftsinformatik, Nachhilfelehrer seit 2019 — und seit über einem Jahr baue ich Software mit KI-Tools wie Claude Code. Vom E-Invoicing bis zur Mathe-Lernapp.',
    'hero.cta': 'Meine Projekte ansehen',
    'hero.scroll': 'Scroll nach unten',

    // About
    'about.title': 'Über mich',
    'about.text1': '19 Jahre, erstes Semester Wirtschaftsinformatik an der Frankfurt University of Applied Sciences. Ich nutze KI-Tools wie Claude Code als Werkzeug in meinem Entwicklungs-Workflow — aber ich verstehe und teste den Code den ich committe. Was ich nicht kann, lerne ich dabei.',
    'about.text2': 'Seit 2019 gebe ich Nachhilfe — erst ehrenamtlich bei der Stadt Dreieich, dann professionell. Das hat mir beigebracht, komplexe Themen einfach zu erklären. Jedes meiner Projekte löst ein echtes Problem, von E-Rechnungen bis zur adaptiven Mathe-App für meine Nachhilfeschüler.',
    'about.study': 'Wirtschaftsinformatik, B.Sc. (seit 10/2025)',
    'about.studyPlace': 'Frankfurt University of Applied Sciences',
    'about.cert1': 'CS50 AI with Python (Harvard)',
    'about.cert2': 'Google AI Essentials (Coursera)',
    'about.languages': 'Deutsch · Persisch · Englisch · Französisch',
    'about.label.study': 'Studium',
    'about.label.certs': 'Zertifikate',
    'about.label.langs': 'Sprachen',

    // Projects
    'projects.title': 'Projekte',
    'projects.subtitle': 'Fünf Projekte, die zeigen wie ich denke, baue und Probleme löse.',
    'projects.viewCode': 'Code ansehen',
    'projects.features': 'Features',

    // Skills
    'skills.title': 'Kompetenzen',
    'skills.dev': 'Entwicklung',
    'skills.ai': 'KI-gestützte Entwicklung',
    'skills.tools': 'Tools & Workflow',

    // Contact
    'contact.title': 'Lass uns was bauen.',
    'contact.subtitle': 'Offen für Praktika, Werkstudentenstellen und spannende Projekte.',
    'contact.email': 'E-Mail schreiben',

    // Footer
    'footer.built': 'Gebaut mit Astro & Tailwind CSS',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Meta
    'meta.title': 'Sadan Akbari — Wirtschaftsinformatik-Student & KI-Entwickler',
    'meta.description': 'Portfolio von Sadan Akbari. Wirtschaftsinformatik-Student an der Frankfurt UAS mit Fokus auf KI-gestützte Softwareentwicklung.',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Sadan Akbari',
    'hero.subtitle': 'First-semester Business Informatics student, tutor since 2019 — building software with AI tools like Claude Code for over a year. From e-invoicing to adaptive math learning.',
    'hero.cta': 'View my projects',
    'hero.scroll': 'Scroll down',

    // About
    'about.title': 'About me',
    'about.text1': '19 years old, first semester Business Informatics at Frankfurt University of Applied Sciences. I use AI tools like Claude Code as part of my development workflow — but I understand and test the code I commit. What I don\'t know yet, I learn along the way.',
    'about.text2': 'I\'ve been tutoring since 2019 — first as a volunteer for the city of Dreieich, then professionally. That taught me how to explain complex topics simply. Each of my projects solves a real problem, from e-invoicing to an adaptive math app for my tutoring students.',
    'about.study': 'Business Informatics, B.Sc. (since 10/2025)',
    'about.studyPlace': 'Frankfurt University of Applied Sciences',
    'about.cert1': 'CS50 AI with Python (Harvard)',
    'about.cert2': 'Google AI Essentials (Coursera)',
    'about.languages': 'German · Persian · English · French',
    'about.label.study': 'Education',
    'about.label.certs': 'Certifications',
    'about.label.langs': 'Languages',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Five projects that show how I think, build, and solve problems.',
    'projects.viewCode': 'View code',
    'projects.features': 'Features',

    // Skills
    'skills.title': 'Skills',
    'skills.dev': 'Development',
    'skills.ai': 'AI-Assisted Development',
    'skills.tools': 'Tools & Workflow',

    // Contact
    'contact.title': 'Let\'s build something.',
    'contact.subtitle': 'Open for internships, working student positions, and exciting projects.',
    'contact.email': 'Send email',

    // Footer
    'footer.built': 'Built with Astro & Tailwind CSS',
    'footer.rights': 'All rights reserved.',

    // Meta
    'meta.title': 'Sadan Akbari — Business Informatics Student & AI Developer',
    'meta.description': 'Portfolio of Sadan Akbari. Business Informatics student at Frankfurt UAS focused on AI-powered software development.',
  },
};
