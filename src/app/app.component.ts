import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data-service.service';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
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
