import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: 'app/views/timer.html'
})

// styleUrls: ['']

export class TimerComponent { 
	minutos: number;
	segundos: number;
	isPaused: boolean;
	buttonLabel: string;

	constructor() {
		this.resetTimer();
		setInterval(() => this.tick(), 1000);
	}

	resetTimer(): void {
		this.minutos = 24;
		this.segundos = 59;
		this.buttonLabel = 'Empezar';
		this.togglePause();
	}

	private tick(): void {
		if(!this.isPaused) {
			this.buttonLabel = 'Detener';

			if(--this.segundos < 0) {
				this.segundos = 59;
				if(--this.minutos < 0) {
					this.resetTimer();
				}
			}
		}
	}

	togglePause(): void {
		this.isPaused = !this.isPaused;

		if(this.minutos < 24 || this.segundos < 59) {
			this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
		}
	}

}
