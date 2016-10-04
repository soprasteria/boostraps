export class Event {
  title: string;
  date: Date;
  participationEndingDate: Date;
  description: string;
  registrations: Registration[];
  maxWinners: number;
  toBeValidated: boolean;
  validated: boolean;
}

export class Registration {
  id : RegistrationId;
}

export class RegistrationId {
  eventId: string;
  accountId: string;
}
