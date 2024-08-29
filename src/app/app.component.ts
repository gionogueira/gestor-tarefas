import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service.service';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MenuComponent, DashboardComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
	items: any[] = [];

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.getItems();
	}

	getItems(): void {
		this.dataService.getItems()
		.subscribe(items => this.items = items);
		console.log(this.items)
	}
}
