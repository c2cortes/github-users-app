import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Redux
import { addSelectedItem, removeItem } from './thunks';
import { connect } from 'react-redux';

import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { RepositoryItem, Avatar, TextH3, Line, ItemInfoContent, ItemIcons, AddElementButton } from '../../css/Styles';

const ItemRepository = (props) => {
    const { item, addSelectedItemAction, removeItemAction } = props;
    const { owner, name, stargazers_count, created_at } = item;
    const { avatar_url, login } = owner;
    const [selected, setSelected] = useState(false);

    const onPressItem = (item) => {
        setSelected(!selected);
        addSelectedItemAction(item);
    }

    return (
        <RepositoryItem style={{ flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row', opacity: selected ? .5 : 1 }}>
                <TouchableOpacity onPress={ () => onPressItem(item) } style={{ flexDirection: 'row' }}>
                    <Avatar source={{ uri: avatar_url }} />
                    <ItemInfoContent style={{ flexDirection: 'column' }}>
                        <TextH3>{login}</TextH3>
                        <TextH3>{name}</TextH3>
                        <TextH3>{stargazers_count + ' stars'}</TextH3>
                        <TextH3>{'Date: ' + created_at}</TextH3>
                    </ItemInfoContent>
                </TouchableOpacity>
                <ItemIcons style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={ () => removeItemAction(item) } style={{ left: 10, top: 4 }}>
                        <AntDesign name="minuscircleo" size={24} />
                    </TouchableOpacity>
                </ItemIcons>
            </View>
            <Line />
        </RepositoryItem>
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.searchData.repositories.items
    }
};

const mapDispatchToProps = (dispatch) => ({
    addSelectedItemAction: (item) => dispatch(addSelectedItem(item)),
    removeItemAction: (item) => dispatch(removeItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemRepository);