import React from 'react';
import { Table } from 'semantic-ui-react';

const TableContainer = (props) => {

    const yearParams = props.routerProps.match.params.year;

    return (
        // <div>
        //     <section>
            <Table striped className="player-table">
                <Table.Header className="table-header" hidden={yearParams ? true : false}>
                    <Table.Row>
                        <Table.HeaderCell hidden={yearParams ? false : true}>Player</Table.HeaderCell>
                        <Table.HeaderCell className="seasons-cell" hidden={yearParams ? true : false}>Season</Table.HeaderCell>
                        <Table.HeaderCell>Tm</Table.HeaderCell>
                        <Table.HeaderCell>Pos</Table.HeaderCell>
                        <Table.HeaderCell>G</Table.HeaderCell>
                        <Table.HeaderCell>GS</Table.HeaderCell>
                        <Table.HeaderCell>MP</Table.HeaderCell>
                        <Table.HeaderCell>FG</Table.HeaderCell>
                        <Table.HeaderCell>FGA</Table.HeaderCell>
                        <Table.HeaderCell>FG%</Table.HeaderCell>
                        <Table.HeaderCell>eFG%</Table.HeaderCell>
                        <Table.HeaderCell>3P</Table.HeaderCell>
                        <Table.HeaderCell>3PA</Table.HeaderCell>
                        <Table.HeaderCell>3P%</Table.HeaderCell>
                        <Table.HeaderCell>2P</Table.HeaderCell>
                        <Table.HeaderCell>2PA</Table.HeaderCell>
                        <Table.HeaderCell>2P%</Table.HeaderCell>
                        <Table.HeaderCell>FT</Table.HeaderCell>
                        <Table.HeaderCell>FTA</Table.HeaderCell>
                        <Table.HeaderCell>FT%</Table.HeaderCell>
                        <Table.HeaderCell>ORB</Table.HeaderCell>
                        <Table.HeaderCell>DRB</Table.HeaderCell>
                        <Table.HeaderCell>TRB</Table.HeaderCell>
                        <Table.HeaderCell>AST</Table.HeaderCell>
                        <Table.HeaderCell>STL</Table.HeaderCell>
                        <Table.HeaderCell>BLK</Table.HeaderCell>
                        <Table.HeaderCell>TOV</Table.HeaderCell>
                        <Table.HeaderCell>PF</Table.HeaderCell>
                        <Table.HeaderCell>PTS</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell hidden={yearParams ? false : true}>{props.player.full_name}</Table.Cell>
                            <Table.Cell hidden={yearParams ? true : false}>{props.player.year}-{props.player.year.toString().slice(2)-1 < 10 ? `0${props.player.year.toString().slice(2)-1}` : props.player.year.toString().slice(2)-1}</Table.Cell>
                            <Table.Cell>{props.player.team.abbreviation}</Table.Cell>
                            <Table.Cell>{props.player.position}</Table.Cell>
                            <Table.Cell>{props.player.stats.game}</Table.Cell>
                            <Table.Cell>{props.player.stats.gameStarted}</Table.Cell>
                            <Table.Cell>{props.player.stats.minutePlayed}</Table.Cell>
                            <Table.Cell>{props.player.stats.fieldGoal}</Table.Cell>
                            <Table.Cell>{props.player.stats.fieldGoalAttempt}</Table.Cell>
                            <Table.Cell>{props.player.stats.fieldGoalPercentage === 0 ? '0.000' : props.player.stats.fieldGoalPercentage}</Table.Cell>
                            <Table.Cell>{props.player.stats.effectiveFieldGoalPercentage === 0 ? '0.000' : props.player.stats.effectiveFieldGoalPercentage}</Table.Cell>
                            <Table.Cell>{props.player.stats.threePoint}</Table.Cell>
                            <Table.Cell>{props.player.stats.threePointAttempt}</Table.Cell>
                            <Table.Cell>{props.player.stats.threePointPercentage === 0 ? '0.000' : props.player.stats.threePointPercentage}</Table.Cell>
                            <Table.Cell>{props.player.stats.twoPoint}</Table.Cell>
                            <Table.Cell>{props.player.stats.twoPointAttempt}</Table.Cell>
                            <Table.Cell>{props.player.stats.twoPointPercentage === 0 ? '0.000' : props.player.stats.twoPointPercentage}</Table.Cell>
                            <Table.Cell>{props.player.stats.freeThrow}</Table.Cell>
                            <Table.Cell>{props.player.stats.freeThrowAttempt}</Table.Cell>
                            <Table.Cell>{props.player.stats.freeThrowPercentage === 0 ? '0.000' : props.player.stats.freeThrowPercentage}</Table.Cell>
                            <Table.Cell>{props.player.stats.offensiveRebounds}</Table.Cell>
                            <Table.Cell>{props.player.stats.defensiveRebounds}</Table.Cell>
                            <Table.Cell>{props.player.stats.totalRebounds}</Table.Cell>
                            <Table.Cell>{props.player.stats.assists}</Table.Cell>
                            <Table.Cell>{props.player.stats.steals}</Table.Cell>
                            <Table.Cell>{props.player.stats.blocks}</Table.Cell>
                            <Table.Cell>{props.player.stats.personalFouls}</Table.Cell>
                            <Table.Cell>{props.player.stats.turnovers}</Table.Cell>
                            <Table.Cell>{props.player.stats.points}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
            </Table>
        //     </section>
        // </div>
    );
};

export default TableContainer;