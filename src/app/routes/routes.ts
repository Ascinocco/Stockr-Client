import { Feed } from '../components/feed/feed';
import { Auth } from '../components/auth/auth';

export const AppRoutes: Array<{title: string, component: any, isGuarded: boolean}> = [
    { title: 'Feed', component: Feed, isGuarded: true },
    { title: 'Sign in Or Register', component: Auth, isGuarded: false }
]