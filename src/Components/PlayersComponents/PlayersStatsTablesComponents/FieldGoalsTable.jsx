import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const FieldGoalsTable = (props) => {
    return (
        <div>
            <Header className="stats-header">Field Goals/3pts/2pts stats</Header>
            <section>
                {/* FIELD GOALS/3PTS/2PTS */}
                <Table striped className="stats-table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Season</Table.HeaderCell>
                            <Table.HeaderCell>FG</Table.HeaderCell>
                            <Table.HeaderCell>FGA</Table.HeaderCell>
                            <Table.HeaderCell>FG%</Table.HeaderCell>
                            <Table.HeaderCell>3P</Table.HeaderCell>
                            <Table.HeaderCell>3PA</Table.HeaderCell>
                            <Table.HeaderCell>3P%</Table.HeaderCell>
                            <Table.HeaderCell>2P</Table.HeaderCell>
                            <Table.HeaderCell>2PA</Table.HeaderCell>
                            <Table.HeaderCell>2P%</Table.HeaderCell>
                            <Table.HeaderCell>eFG%</Table.HeaderCell>
                            <Table.HeaderCell>PTS</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>2019-2020</Table.Cell>
                            <Table.Cell>{props.player.fieldGoal}</Table.Cell>
                            <Table.Cell>{props.player.fieldGoalAttempt}</Table.Cell>
                            <Table.Cell>{props.player.fieldGoalPercentage}</Table.Cell>
                            <Table.Cell>{props.player.threePoint}</Table.Cell>
                            <Table.Cell>{props.player.threePointAttempt}</Table.Cell>
                            <Table.Cell>{props.player.threePointPercentage}</Table.Cell>
                            <Table.Cell>{props.player.twoPoint}</Table.Cell>
                            <Table.Cell>{props.player.twoPointAttempt}</Table.Cell>
                            <Table.Cell>{props.player.twoPointPercentage}</Table.Cell>
                            <Table.Cell>{props.player.effectiveFieldGoalPercentage}</Table.Cell>
                            <Table.Cell>{props.player.points}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </div>
    );
};

export default FieldGoalsTable;