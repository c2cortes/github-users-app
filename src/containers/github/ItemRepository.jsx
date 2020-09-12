import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

// Redux
import { addSelectedItem, removeItem } from './thunks';
import { connect } from 'react-redux';

import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { RepositoryItem, Avatar, TextH3, Line, ItemInfoContent, ItemIcons, AddElementButton } from '../../css/Styles';

const ItemRepository = (props) => {
    const { item, addSelectedItemAction, removeItemAction, icons, onPressCallBack } = props;
    const { owner, name, stargazers_count, created_at } = item;
    const { avatar_url, login } = owner;
    const [selected, setSelected] = useState(false);

    const onPressItem = (item) => {
        setSelected(!selected);
        addSelectedItemAction(item);
    }

    const animateDuration = Math.floor(Math.random() * Math.floor(4)) * 1000;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animateDuration,
        useNativeDriver: true
    }).start();

    return (
        <Animated.View
            style={[
                styles.fadingContainer,
                {
                    opacity: fadeAnim // Bind opacity to animated value
                }
            ]}
        >
            <RepositoryItem style={{ flexDirection: 'column' }} >
                <View style={{ flexDirection: 'row', opacity: selected ? .5 : 1 }}>
                    <TouchableOpacity onPress={() => onPressCallBack ? onPressCallBack() : onPressItem(item)} style={{ flexDirection: 'row' }}>
                        <Avatar source={{ uri: avatar_url }} />
                        <ItemInfoContent style={{ flexDirection: 'column' }}>
                            <TextH3>{login}</TextH3>
                            <TextH3>{name}</TextH3>
                            <TextH3>{stargazers_count + ' stars'}</TextH3>
                            <TextH3>{'Date: ' + created_at}</TextH3>
                        </ItemInfoContent>
                    </TouchableOpacity>
                    {icons ?
                        <ItemIcons style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => removeItemAction(item)} style={{ left: 10, top: 4 }}>
                                <AntDesign name="minuscircleo" size={24} />
                            </TouchableOpacity>
                        </ItemIcons>
                        : null}
                </View>
                <Line />
            </RepositoryItem>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    fadingContainer: {}
});

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