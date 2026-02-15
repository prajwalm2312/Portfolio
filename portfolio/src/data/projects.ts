export type Project = {
  title: string
  description: string
  stack: string[]
  ctaLabel: string
  ctaHref: string
}

export const projects: Project[] = [
  {
    title: 'Analytics Portal',
    description: 'A React analytics portal with interactive charts, real-time action metrics, and hierarchical drill-down views to analyze team and campaign performance.',
    stack: ['React', 'Redux', 'Context API'],
    ctaLabel: 'Discuss Project',
    ctaHref: '#contact',
  },
  {
    title: 'Collections Portal',
    description: 'An Angular-based collections portal for agents and managers to handle campaign-assigned accounts, review customer details, and perform actions like arrangements, field visits, and promise-to-pay updates. It includes role-based modules such as Mission Control, Master Allocation, Geo Command, and Reports.',
    stack: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
    ctaLabel: 'Discuss Project',
    ctaHref: '#contact',
  },
  {
    title: 'Collections FOS iOS app',
    description: 'An iOS app for collection agents to record customer interactions (arrangements, promise-to-pay, and voice notes), capture visit locations, and update daily tasks. It also provides managers with agent performance tracking, visit activity, and task completion insights.',
    stack: ['Flutter', 'Dart', 'Xcode'],
    ctaLabel: 'Discuss Project',
    ctaHref: '#contact',
  },
]
