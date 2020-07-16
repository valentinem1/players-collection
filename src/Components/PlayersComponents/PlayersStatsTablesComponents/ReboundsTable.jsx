import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const ReboundsTable = (props) => {
    return (
        <div>
            <Header className="stats-header">Rebounds stats</Header>
            <section>
                {/* REBOUNDS */}
                <Table striped className="stats-table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Season</Table.HeaderCell>
                            <Table.HeaderCell>ORB</Table.HeaderCell>
                            <Table.HeaderCell>DRB</Table.HeaderCell>
                            <Table.HeaderCell>TRB</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>2019-2020</Table.Cell>
                            <Table.Cell>{props.player.offensiveRebounds}</Table.Cell>
                            <Table.Cell>{props.player.defensiveRebounds}</Table.Cell>
                            <Table.Cell>{props.player.totalRebounds}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </div>
    );
};

export default ReboundsTable;