import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Member {
  id: number;
  vorname: string;
  nachname: string;
  teamId: number;
}

export interface Team {
  id: number;
  name: string;
  klasse: string;
  Members?: Member[];
}

export interface Project {
  id: number;
  titel: string;
  beschreibung: string;
  praesentiertAm: string;
  teamId: number;
  Team?: Team;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/projects/${id}`);
  }
}