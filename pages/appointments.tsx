import type { NextPage } from "next";

import { ProviderPanel } from "../src/components/ProviderPanel";
import { Appointment, Provider } from "../typings";
import useSWR from "swr";
import { Grid } from "semantic-ui-react";
import { AppointmentPanel } from "../src/components/AppointmentPanel";
import { useState } from "react";
import { LogoBanner } from "../src/components/LogoBanner";

const getRequest = (url: string) => fetch(url).then((res) => res.json());

const AppointmentsPage: NextPage = () => {
  const { data: providers, error: getProviderError } = useSWR<Provider[]>(
    "/api/Providers",
    getRequest,
    { fallback: [], errorRetryCount: 3 }
  );

  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(
    null
  );

  const { data: appointments, error: getAppointmentsError } = useSWR<
    Appointment[]
  >(
    selectedProviderId != null
      ? `/api/Providers/${selectedProviderId}/Appointments`
      : null,
    getRequest,
    { fallback: [], shouldRetryOnError: false }
  );

  return (
    <Grid columns={16}>
      <Grid.Row>
        <Grid.Column width={16}>
          <LogoBanner />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <ProviderPanel
            providers={providers ?? []}
            didChangeProvider={(id) => {
              setSelectedProviderId(id);
            }}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <AppointmentPanel
            provider={providers?.find(
              (provider) => provider.id === selectedProviderId
            )}
            appointments={appointments}
          ></AppointmentPanel>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AppointmentsPage;
