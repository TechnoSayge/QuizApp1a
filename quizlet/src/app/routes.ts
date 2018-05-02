import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'result', component: ResultComponent},
    {path: '', redirectTo: '/register', pathMatch: 'full'}
];
