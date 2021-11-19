import { DateTime } from "luxon";
import type { NextApiRequest, NextApiResponse } from "next";
import { Appointment } from "../../../../typings";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Appointment[]>
) {
  const providerId = req.query.id as string;
  const appointments: Appointment[] = [
    {
      available: false,
      patient: {
        firstName: "Scott",
        lastName: "Eremia-Roden",
      },
      datetime: DateTime.fromISO("2021-11-17T09:00:00.00Z").toISO(),
      provider: "1",
      kind: "New Patient",
    },
    {
      available: false,
      patient: {
        firstName: "Janet",
        lastName: "Wallace",
      },
      datetime: DateTime.fromISO("2021-11-17T12:00:00.00-08:00").toISO(),
      provider: "1",
      kind: "Sick Visit",
    },
    {
      available: false,
      patient: {
        firstName: "Kimberly",
        lastName: "Chan",
      },
      datetime: DateTime.fromISO("2021-11-17T09:15:00.00-08:00").toISO(),
      provider: "1",
      kind: "New Patient",
    },
    {
      available: false,
      patient: {
        firstName: "David",
        lastName: "Hanford",
      },
      datetime: DateTime.fromISO("2021-11-17T09:00:00.00Z").toISO(),
      provider: "2",
      kind: "ER Follow-up",
    },
    {
      available: false,
      patient: {
        firstName: "Gladden",
        lastName: "Lovelace",
      },
      datetime: DateTime.fromISO("2021-11-17T14:45:00.00Z").toISO(),
      provider: "5",
      kind: "New Patient",
    },
  ];

  const filteredAppointmentsByProviderId = appointments.filter(
    (appointment) => appointment.provider === providerId
  );

  res.status(200).json(filteredAppointmentsByProviderId);
}
