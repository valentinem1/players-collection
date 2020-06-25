import React from 'react';

import { Card, Header, Image } from 'semantic-ui-react';

const PlayersCard = (props) => {

    // console.log(props.player);
    const { first_name, last_name, position, team } = props.player;

    return (
        <div>
            <Card className="player-card">
                <Image className="player-image" src="https://www.mercurynews.com/wp-content/uploads/2018/09/BNG-L-WARRIORS-0925-131.jpg" alt="players picture" />
                <Header className="player-header">{first_name + last_name}</Header>
            </Card>
        </div>
    );
};

export default PlayersCard;