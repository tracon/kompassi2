import * as React from 'react';
import { Container } from 'reactstrap';

import Alert from 'reactstrap/lib/Alert';
import DataTable from './DataTable';


export default () => (
  <Container style={{ paddingTop: '2em' }}>
    <Alert color="warning">This is by no means the final front page for Kompassi v2. Just a demo of the table component for now.</Alert>
    <h1>Events</h1>
    <DataTable
      endpoint="events"
      columns={['name', 'headline']}
      namespaces={["Event"]}
    />
  </Container>
);