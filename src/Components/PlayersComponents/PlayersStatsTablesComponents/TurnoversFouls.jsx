import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const TurnoversFouls = (props) => {
    return (
        <div>
            <Header className="stats-header">Turnovers/Fouls stats</Header>
            <section>
                {/* TURNOVERS/FOULS */}
                <Table striped className="stats-table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Season</Table.HeaderCell>
                            <Table.HeaderCell>TOV</Table.HeaderCell>
                            <Table.HeaderCell>PF</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>2019-2020</Table.Cell>
                            <Table.Cell>{props.player.personalFouls}</Table.Cell>
                            <Table.Cell>{props.player.turnovers}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </div>
    );
};

export default TurnoversFouls;