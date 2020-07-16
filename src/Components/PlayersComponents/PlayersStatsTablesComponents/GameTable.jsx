import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const GameTable = (props) => {
    return (
        <div>
            <Header className="stats-header">Games/Minutes stats</Header>
            <section>
                <Table striped className="stats-table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Season</Table.HeaderCell>
                            <Table.HeaderCell>G</Table.HeaderCell>
                            <Table.HeaderCell>GS</Table.HeaderCell>
                            <Table.HeaderCell>MP</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>2019-2020</Table.Cell>
                            <Table.Cell>{props.player.game}</Table.Cell>
                            <Table.Cell>{props.player.gameStarted}</Table.Cell>
                            <Table.Cell>{props.player.minutePlayed}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </div>
    );
};

export default GameTable;