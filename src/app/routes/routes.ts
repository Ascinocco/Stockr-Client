import { FeedComponent } from '../Components/Feed/FeedComponent';
import { AuthComponent } from '../Components/Auth/AuthComponent';

export const AppRoutes: Array<{title: string, component: any, isGuarded: boolean}> = [
    { title: 'Feed', component: FeedComponent, isGuarded: true },
    { title: 'Sign in | Sign Up', component: AuthComponent, isGuarded: false }
]