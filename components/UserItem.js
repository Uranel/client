import React from 'react';
import { ListItem } from 'react-native-elements';

export default ({user}) => {
    return <ListItem
        leftAvatar={{ source: { uri: user.avatar } }}
        title={user.name}
        chevron={chevron}
    />;
};