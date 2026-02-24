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
    'hero.subtitle': 'Wirtschaftsinformatik-Student mit Leidenschaft für KI-gestützte Softwareentwicklung. Ich baue nicht nur Konzepte — ich shippe sie.',
    'hero.cta': 'Meine Projekte ansehen',
    'hero.scroll': 'Scroll nach unten',

    // About
    'about.title': 'Über mich',
    'about.text1': '19 Jahre, erstes Semester Wirtschaftsinformatik an der Frankfurt University of Applied Sciences — und seit über einem halben Jahr baue ich Software mit KI. Was als Neugier anfing, ist heute mein Workflow: Ich nutze Claude Code als meinen KI-Copiloten und habe sogar ein eigenes Open-Source-Tool dafür entwickelt.',
    'about.text2': 'Jedes meiner Projekte löst ein konkretes Problem und wurde von der Idee bis zum Deployment eigenständig umgesetzt. Nebenbei gebe ich seit 2019 Nachhilfe — erst ehrenamtlich bei der Stadt Dreieich, dann professionell.',
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
    'skills.ai': 'KI & Daten',
    'skills.tools': 'Tools & Methoden',

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
    'hero.subtitle': 'Business Informatics student passionate about AI-powered software development. I don\'t just study concepts — I ship them.',
    'hero.cta': 'View my projects',
    'hero.scroll': 'Scroll down',

    // About
    'about.title': 'About me',
    'about.text1': '19 years old, first semester Business Informatics at Frankfurt University of Applied Sciences — and I\'ve been building software with AI for over half a year. What started as curiosity is now my workflow: I use Claude Code as my AI copilot and even built an open-source tool for it.',
    'about.text2': 'Each of my projects solves a real problem and was independently developed from idea to deployment. On the side, I\'ve been tutoring since 2019 — first as a volunteer for the city of Dreieich, then professionally.',
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
    'skills.ai': 'AI & Data',
    'skills.tools': 'Tools & Methods',

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
