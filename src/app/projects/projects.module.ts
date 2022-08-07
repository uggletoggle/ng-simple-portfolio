import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsListComponent } from './components/projects/projects-list.component';


@NgModule({
    imports: [],
    exports: [ProjectsListComponent],
    declarations: [
        ProjectCardComponent,
        ProjectsListComponent],
    providers: [],
})
export class ProjectsModule { }
