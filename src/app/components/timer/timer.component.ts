import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  public percentage: number = 0;
  public time_in_seconds: number = 4;
  public isRunning = false;
  public has_to_work_in_seconds: number = 3600;
  public time_to_work_to_show!: string;
  public time_worked_to_show!: string;

  constructor() {}

  tick = 1000;
  ngOnInit() {
    this.ticking();
    this.time_to_work_to_show = this.convert_time_to_show(
      this.has_to_work_in_seconds
    );

    this.time_worked_to_show = this.convert_time_to_show(this.time_in_seconds);
  }

  ticking() {
    timer(0, 1).subscribe((ellapsedCycles) => {
      if (this.isRunning) {
        this.time_in_seconds++;
        this.time_to_work_to_show = this.convert_time_to_show(
          this.has_to_work_in_seconds
        );

        this.time_worked_to_show = this.convert_time_to_show(
          this.time_in_seconds
        );
      }
      this.percentage =
        (100 * this.time_in_seconds) / this.has_to_work_in_seconds;
    });
  }

  start() {
    this.isRunning = true;
  }

  stop() {
    this.isRunning = false;
  }

  pause() {
    this.isRunning = false;
  }

  reset() {
    this.isRunning = false;
    this.time_in_seconds = 0;
    this.time_to_work_to_show = this.convert_time_to_show(
      this.has_to_work_in_seconds
    );

    this.time_worked_to_show = this.convert_time_to_show(this.time_in_seconds);
  }

  convert_time_to_show(time_seconds: number): string {
    var hours!: number;
    var minutes!: number;
    var seconds: number = time_seconds;
    var minutes_non_converted: number = time_seconds;
    minutes = Math.floor(time_seconds / 60) % 60;
    minutes_non_converted = Math.floor(time_seconds / 60);
    hours = Math.floor(minutes_non_converted / 60) % 60;
    seconds = time_seconds - minutes_non_converted * 60;

    var hours_string!: string;
    var minutes_string!: string;
    var seconds_string!: string;

    if (hours < 10) {
      hours_string = '0' + hours;
    } else {
      hours_string = hours.toString();
    }

    if (minutes < 10) {
      minutes_string = '0' + minutes;
    } else {
      minutes_string = minutes.toString();
    }

    if (seconds < 10) {
      seconds_string = '0' + seconds;
    } else {
      seconds_string = seconds.toString();
    }

    return hours_string + ':' + minutes_string + ':' + seconds_string;
  }
}
