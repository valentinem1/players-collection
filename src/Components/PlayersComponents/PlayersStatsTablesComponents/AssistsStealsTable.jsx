import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const AssistsStealsTable = (props) => {
    return (
        <div>
            <Header className="stats-header">Assits/Steals/Blocks stats</Header>
            <section>
                {/* ASSITS/STEALS/BLOCKS/TURNOVERS/FOULS */}
                <Table striped className="stats-table">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Season</Table.HeaderCell>
                                <Table.HeaderCell>AST</Table.HeaderCell>
                                <Table.HeaderCell>STL</Table.HeaderCell>
                                <Table.HeaderCell>BLK</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>2019-2020</Table.Cell>
                                <Table.Cell>{props.player.assists}</Table.Cell>
                                <Table.Cell>{props.player.steals}</Table.Cell>
                                <Table.Cell>{props.player.blocks}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
            </section>
        </div>
    );
};

export default AssistsStealsTable;