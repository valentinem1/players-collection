import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const PlayersShowContainer = (props) => {

    useEffect(() => {
        fetch(`http://localhost:3000/players/${props.routerProps.match.params.id}`)
        .then(r => r.json())
        .then(player => console.log(player));
    }, []);

    const player = props.players ? props.players.find(player => player._id === props.routerProps.match.params.id) : null

    if(player){
        return (
            <div>
                <Header>{`${player.first_name} ${player.last_name}`}</Header>
            </div>
        );
    } return (
        <div className="loader"></div>
    )
};

const mapStateToProps = (state) => {
    return{
        players: state.players
    }
}

export default connect(mapStateToProps)(PlayersShowContainer);