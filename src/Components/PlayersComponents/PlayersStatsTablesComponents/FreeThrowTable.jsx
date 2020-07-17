import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const FreeThrowTable = (props) => {
    return (
        <div>
            <Header className="stats-header">Free throws stats</Header>
            <section>
                {/* FREE THROW */}
                <Table striped className="stats-table">
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Season</Table.HeaderCell>
                        <Table.HeaderCell>FT</Table.HeaderCell>
                        <Table.HeaderCell>FTA</Table.HeaderCell>
                        <Table.HeaderCell>FT%</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>2019-2020</Table.Cell>
                            <Table.Cell>{props.player.freeThrow}</Table.Cell>
                            <Table.Cell>{props.player.freeThrowAttempt}</Table.Cell>
                            <Table.Cell>{props.player.freeThrowPercentage}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </div>
    );
};

export default FreeThrowTable;