import React from 'react';
import {View} from 'react-native';
import { RepositoryItem, Avatar, TextH3, Line } from '../../css/Styles';

const ItemRepository = (props) => {
    const { item } = props;
    const { owner, name, stargazers_count } = item;
    const { avatar_url, login } = owner;
    return (
        <RepositoryItem style={{ flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row' }}>
                <Avatar source={{ uri: avatar_url }}/>
                <TextH3>{login + ' / '}</TextH3>
                <TextH3>{name + ' / '}</TextH3>
                <TextH3>{stargazers_count + ' stars'}</TextH3>
            </View>
            <Line/>
        </RepositoryItem>
    )
}

export default ItemRepository;