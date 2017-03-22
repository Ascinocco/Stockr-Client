import { Feed } from '../components/feed/feed';

export const AppRoutes: Array<{title: string, component: any, isGuarded: boolean}> = [
    { title: 'Feed', component: Feed, isGuarded: false }
]