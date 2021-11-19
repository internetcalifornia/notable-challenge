import { DateTime } from "luxon";

export interface Provider {
  id: string;
  prefix?: string | null;
  firstName: string;
  lastName: string;
  emailAddress?: string | null;
  address: {
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Patient {
  firstName: string;
  lastName: string;
}

export interface Appointment {
  // URI to provider resource

  provider: string;
  patient: Patient;
  kind: string;
  datetime: string;
  available: boolean;
}
