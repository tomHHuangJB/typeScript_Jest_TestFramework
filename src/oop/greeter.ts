export interface Clock {
  now(): Date;
}

export class SystemClock implements Clock {
  now(): Date {
    return new Date();
  }
}

export class Greeter {
  constructor(private readonly clock: Clock) {}

  greet(name: string): string {
    const hour = this.clock.now().getHours();
    const salutation = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    return `${salutation}, ${name}`;
  }
}
