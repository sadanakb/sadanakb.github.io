import type { Lang } from './ui';

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  screenshot: string;
}

const projectsData: Record<Lang, Project[]> = {
  de: [
    {
      id: 'rechnungswerk',
      title: 'RechnungsWerk',
      description: 'E-Invoicing-Plattform für XRechnung und ZUGFeRD — EU-konforme elektronische Rechnungen generieren, validieren und versenden.',
      features: [
        'XRechnung & ZUGFeRD Generierung',
        '170+ automatisierte Tests',
        'PDF-Rendering mit Briefkopf',
        'REST-API mit FastAPI',
      ],
      tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/sadanakb/rechnungswerk',
      screenshot: '/screenshots/rechnungswerk.webp',
    },
    {
      id: 'mathemaxxing',
      title: 'Mathemaxxing',
      description: 'Adaptive Mathe-Lernapp für Klassen 1-7 mit Gamification, Theorie-Inhalten und intelligenter Schwierigkeitsanpassung.',
      features: [
        '120+ Themen für Klasse 1-7',
        'Adaptiver Schwierigkeitsgrad',
        'Gamification mit XP & Streaks',
        'PWA-fähig',
      ],
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      github: 'https://github.com/sadanakb/Mathemaxxing',
      screenshot: '/screenshots/mathemaxxing.webp',
    },
    {
      id: 'eloquent',
      title: 'Eloquent',
      description: 'Deutsches Wortduell-Spiel, das Eloquenz trainiert — mit KI-gestütztem Scoring und Echtzeit-Multiplayer.',
      features: [
        'KI-Bewertung der Antworten',
        'Echtzeit-Multiplayer',
        '108 Situationen in 12 Kategorien',
        'Ranglisten-System',
      ],
      tech: ['React 18', 'JavaScript', 'Claude API', 'WebSocket'],
      github: 'https://github.com/sadanakb/eloquent',
      screenshot: '/screenshots/eloquent.webp',
    },
    {
      id: 'job-sniper',
      title: 'Job-Sniper',
      description: 'KI-gestützter Job-Agent, der 8 Quellen durchsucht, Stellenanzeigen analysiert und personalisierte Bewerbungsstrategien erstellt.',
      features: [
        '8 Job-Quellen aggregiert',
        'KI-Analyse der Stellenanzeigen',
        'Personalisierte Empfehlungen',
        'Automatische Benachrichtigungen',
      ],
      tech: ['Next.js 15', 'Anthropic API', 'Tailwind CSS', 'Prisma'],
      github: 'https://github.com/sadanakb/Job-Sniper',
      screenshot: '/screenshots/job-sniper.webp',
    },
    {
      id: 'claude-orchestrator',
      title: 'Claude Orchestrator',
      description: 'Workflow-Hooks für Claude Code — automatische Checkpoints, Session-Restarts und eine Context-Ampel.',
      features: [
        'Automatische Checkpoints nach jeder Teilaufgabe',
        'Auto-Restart bei Context-Limit',
        'StatusLine mit Context-Ampel',
        'Zero API-Calls, reine Shell-Skripte',
      ],
      tech: ['Bash', 'Shell', 'Python', 'Claude Code Hooks'],
      github: 'https://github.com/sadanakb/claude-orchestrator',
      screenshot: '/screenshots/claude-orchestrator.webp',
    },
  ],
  en: [
    {
      id: 'rechnungswerk',
      title: 'RechnungsWerk',
      description: 'E-invoicing platform for XRechnung and ZUGFeRD — generate, validate, and send EU-compliant electronic invoices.',
      features: [
        'XRechnung & ZUGFeRD generation',
        '170+ automated tests',
        'PDF rendering with letterhead',
        'REST API with FastAPI',
      ],
      tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/sadanakb/rechnungswerk',
      screenshot: '/screenshots/rechnungswerk.webp',
    },
    {
      id: 'mathemaxxing',
      title: 'Mathemaxxing',
      description: 'Adaptive math learning app for grades 1-7 with gamification, theory content, and intelligent difficulty adjustment.',
      features: [
        '120+ topics for grades 1-7',
        'Adaptive difficulty',
        'Gamification with XP & streaks',
        'PWA-ready',
      ],
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      github: 'https://github.com/sadanakb/Mathemaxxing',
      screenshot: '/screenshots/mathemaxxing.webp',
    },
    {
      id: 'eloquent',
      title: 'Eloquent',
      description: 'German word duel game that trains eloquence — with AI-powered scoring and real-time multiplayer.',
      features: [
        'AI-powered answer scoring',
        'Real-time multiplayer',
        '108 scenarios across 12 categories',
        'Ranking system',
      ],
      tech: ['React 18', 'JavaScript', 'Claude API', 'WebSocket'],
      github: 'https://github.com/sadanakb/eloquent',
      screenshot: '/screenshots/eloquent.webp',
    },
    {
      id: 'job-sniper',
      title: 'Job-Sniper',
      description: 'AI-powered job agent that searches 8 sources, analyzes job postings, and creates personalized application strategies.',
      features: [
        '8 job sources aggregated',
        'AI analysis of job postings',
        'Personalized recommendations',
        'Automatic notifications',
      ],
      tech: ['Next.js 15', 'Anthropic API', 'Tailwind CSS', 'Prisma'],
      github: 'https://github.com/sadanakb/Job-Sniper',
      screenshot: '/screenshots/job-sniper.webp',
    },
    {
      id: 'claude-orchestrator',
      title: 'Claude Orchestrator',
      description: 'Workflow hooks for Claude Code — automatic checkpoints, session restarts, and a context traffic light.',
      features: [
        'Automatic checkpoints after each subtask',
        'Auto-restart on context limit',
        'StatusLine with context traffic light',
        'Zero API calls, pure shell scripts',
      ],
      tech: ['Bash', 'Shell', 'Python', 'Claude Code Hooks'],
      github: 'https://github.com/sadanakb/claude-orchestrator',
      screenshot: '/screenshots/claude-orchestrator.webp',
    },
  ],
};

export function getProjects(lang: Lang): Project[] {
  return projectsData[lang];
}
