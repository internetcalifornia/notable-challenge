import React from "react";
import { Appointment, Provider } from "../../typings";
import { Card, List, Message, Tab, Table } from "semantic-ui-react";
import { prettyPrintAddress } from "../utils/prettyPrintAddress";
import { DateTime } from "luxon";

export const AppointmentPanel: React.FunctionComponent<{
  provider?: Provider | null;
  appointments?: Appointment[] | null;
}> = ({ provider, appointments }) => {
  if (!provider) {
    return (
      <Message warning>
        <Message.Header>No Provider Selected</Message.Header>
        <Message.Content>Please select a provider</Message.Content>
      </Message>
    );
  }

  if (appointments == null || appointments.length === 0) {
    return (
      <Message warning>
        <Message.Header>No appointments</Message.Header>
        <Message.Content>Please select a different provider</Message.Content>
      </Message>
    );
  }
  return (
    <div>
      <Card
        basic
        header={`${provider.prefix ? provider.prefix + " " : ""}${
          provider.firstName
        } ${provider.lastName}`}
        description={prettyPrintAddress(provider.address)}
        meta={provider.emailAddress}
      />
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Kind</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {appointments
            .sort(
              (a, b) =>
                DateTime.fromISO(a.datetime).toMillis() -
                DateTime.fromISO(b.datetime).toMillis()
            )
            .map((appointment, ind) => {
              return (
                <Table.Row key={ind}>
                  <Table.Cell>{ind + 1}</Table.Cell>
                  <Table.Cell>
                    {appointment.patient.firstName}{" "}
                    {appointment.patient.lastName}
                  </Table.Cell>
                  <Table.Cell>
                    {DateTime.fromISO(appointment.datetime).toLocaleString(
                      DateTime.TIME_SIMPLE
                    )}
                  </Table.Cell>
                  <Table.Cell>{appointment.kind}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};
