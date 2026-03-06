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
    'nav.timeline': 'Reise',

    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Sadan Akbari',
    'hero.subtitle': 'Was als Nachhilfe begann, wurde zu Software. Seit 2025 baue ich mit KI-Tools wie Claude Code Produkte, die echte Probleme loesen — von E-Rechnungen bis Mathe-Apps.',
    'hero.cta': 'Meine Projekte ansehen',
    'hero.scroll': 'Scroll nach unten',

    // About
    'about.title': 'Über mich',
    'about.text1': 'Ich baue Production-Software mit KI-Tools wie Claude Code — von E-Invoicing-Plattformen bis adaptiven Lern-Apps. Dabei verstehe und teste ich jeden Commit. Was ich noch nicht kann, lerne ich im Prozess.',
    'about.text2': 'Seit 2019 erklaere ich komplexe Themen einfach — erst ehrenamtlich, dann professionell als Nachhilfelehrer. Diese Faehigkeit praegt auch meine Software: jedes Projekt loest ein echtes Problem fuer echte Nutzer.',
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

    // Timeline
    'timeline.title': 'Meine Reise',
    'timeline.2019.title': 'Nachhilfe beginnt',
    'timeline.2019.text': 'Ehrenamtliche Nachhilfe bei der Stadt Dreieich — der Anfang davon, komplexe Themen einfach zu erklaeren.',
    'timeline.2023.title': 'KI-Tools entdeckt',
    'timeline.2023.text': 'Erste Experimente mit KI-Tools — die Faszination fuer KI-gestuetzte Entwicklung beginnt.',
    'timeline.2025mid.title': 'Erste Projekte mit KI-Tools',
    'timeline.2025mid.text': 'Vom Experimentieren zum Bauen: die ersten Production-Projekte entstehen mit Claude Code als Entwicklungswerkzeug.',
    'timeline.2025certs.title': 'Harvard & Google Zertifikate',
    'timeline.2025certs.text': 'CS50 AI with Python (Harvard) und Google AI Essentials — das theoretische Fundament zur praktischen Erfahrung.',
    'timeline.2026.title': '5 Projekte & Studium',
    'timeline.2026.text': 'Fuenf Production-Projekte live, Wirtschaftsinformatik an der Frankfurt UAS — Theorie und Praxis wachsen zusammen.',

    // Footer
    'footer.built': 'Gebaut mit Astro & Tailwind CSS',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Meta
    'meta.title': 'Sadan Akbari — AI-Native Developer',
    'meta.description': 'Portfolio von Sadan Akbari — AI-Native Developer. 5 Production-Projekte, Harvard/Google-zertifiziert, 6 Jahre Nachhilfe-Erfahrung.',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.timeline': 'Journey',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Sadan Akbari',
    'hero.subtitle': 'What started as tutoring became software. Since 2025, I build products with AI tools like Claude Code that solve real problems — from e-invoicing to math apps.',
    'hero.cta': 'View my projects',
    'hero.scroll': 'Scroll down',

    // About
    'about.title': 'About me',
    'about.text1': 'I build production software with AI tools like Claude Code — from e-invoicing platforms to adaptive learning apps. I understand and test every commit. What I don\'t know yet, I learn in the process.',
    'about.text2': 'Since 2019, I\'ve been explaining complex topics simply — first as a volunteer, then professionally as a tutor. This skill shapes my software too: every project solves a real problem for real users.',
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

    // Timeline
    'timeline.title': 'My Journey',
    'timeline.2019.title': 'Tutoring Begins',
    'timeline.2019.text': 'Volunteer tutoring for the city of Dreieich — the start of explaining complex topics simply.',
    'timeline.2023.title': 'Discovering AI Tools',
    'timeline.2023.text': 'First experiments with AI tools — the fascination for AI-powered development begins.',
    'timeline.2025mid.title': 'First Projects with AI Tools',
    'timeline.2025mid.text': 'From experimenting to building: first production projects created with Claude Code as a development tool.',
    'timeline.2025certs.title': 'Harvard & Google Certifications',
    'timeline.2025certs.text': 'CS50 AI with Python (Harvard) and Google AI Essentials — theoretical foundation to complement practical experience.',
    'timeline.2026.title': '5 Projects & University',
    'timeline.2026.text': 'Five production projects live, Business Informatics at Frankfurt UAS — theory and practice growing together.',

    // Footer
    'footer.built': 'Built with Astro & Tailwind CSS',
    'footer.rights': 'All rights reserved.',

    // Meta
    'meta.title': 'Sadan Akbari — AI-Native Developer',
    'meta.description': 'Portfolio of Sadan Akbari — AI-Native Developer. 5 production projects, Harvard/Google certified, 6 years tutoring experience.',
  },
};
