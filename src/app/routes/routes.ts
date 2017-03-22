import { FeedComponent } from '../Components/Feed/FeedComponent';
import { AuthComponent } from '../Components/Auth/AuthComponent';
import { SearchComponent } from '../Components/Search/SearchComponent';

export const AppRoutes: Array<{title: string, component: any, isGuarded: boolean}> = [
    { title: 'Feed', component: FeedComponent, isGuarded: true },
    { title: 'Search', component: SearchComponent, isGuarded: true },
    { title: 'Sign in | Sign Up', component: AuthComponent, isGuarded: false }
]