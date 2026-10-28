import { Component, OnInit, signal } from '@angular/core';
import { ApiService, Project } from '../../services/api';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.page.html',
  styleUrls: ['./project-list.page.scss'],
  standalone: false,
})
export class ProjectListPage implements OnInit {
  projects = signal<Project[]>([]);
  error = signal('');

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: data => this.projects.set(data),
      error: () => this.error.set('Projekte konnten nicht geladen werden. Läuft das Backend?')
    });
  }
}