import React from "react";
import "./App.css";
import { Grid, Segment, Table, Image } from "semantic-ui-react";

export default function App() {
  return (
    <>
      <Grid columns={3} divided>
        <Grid.Column width={3}>
          <Grid.Row>
            <Segment>
              <div className=" div1 ">
                <h5> NOTICE</h5>
              </div>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment>
              <div className="div1">
                <h5>BOOK APPOIMENT</h5>
              </div>
            </Segment>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={10}>
          <Grid.Row>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={3}>
          <Grid.Row>
            <Segment>
              <div className="div1">
                <h5>NEXT PATIENT</h5>
              </div>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment>
              <div className="div1">
                <h5>CURRENT PATIENT</h5>
              </div>
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
