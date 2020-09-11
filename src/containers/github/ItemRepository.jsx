import React from 'react';
import { RepositoryItem, Avatar } from '../../css/Styles';

const ItemRepository = (props) => {
    const { item } = props;
    const { owner } = item;
    const { avatar_url } = owner;
    return (
        <RepositoryItem style={{ flexDirection: 'row' }} >
                <Avatar source={{ uri: avatar_url }}
                />
            </RepositoryItem>
    )
}

export default ItemRepository;