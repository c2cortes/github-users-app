import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

// Redux
import { searchRepository, sortRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { SortItemsTouchableOpacity, Logo, SearchWrapper, SearchInputWrapper, SeeSelectedElementsButton, SeeSelectedElementsLabel, RepositoriesList } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

const SearchComponent = (props) => {

    const [searchQuery, setSearchQuery] = useState('tracktime-re');
    const { searchLocation, sortItems, repositories, selectedItems, navigation } = props;

    const changeInput = (searchQuery) => {
        setSearchQuery(searchQuery);
        searchLocation(searchQuery);
    }

    const renderItem = ({item}) => {
        return (<ItemRepository item={item} icons={true}/>)
    }

    return (
        <SearchWrapper styles={{ flex: 1 }}>
            <Logo source={require('../../assets/images/GitHub-Mark-64px.png')}></Logo>
            <SearchInputWrapper style={{ flexDirection: 'column' }}>        
                <FormInput onChange={e => changeInput(e.nativeEvent.text)} value={searchQuery} placeholder={'Type something...'} />
            </SearchInputWrapper>
                <SortItemsTouchableOpacity onPress={ () => sortItems() }>
                    <Text>
                    { 'Sort items by date' }
                    </Text>
                </SortItemsTouchableOpacity>
            <RepositoriesList
                data={repositories}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
            <SeeSelectedElementsButton onPress={ () => navigation.navigate('SelectedRepositories') }>
                <SeeSelectedElementsLabel>{`See the selected elements (${selectedItems.length})`}</SeeSelectedElementsLabel>
            </SeeSelectedElementsButton>
        </SearchWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.searchData.repositories.items,
        selectedItems: state.searchData.selectedItems
    }
};

const mapDispatchToProps = (dispatch) => ({
    searchLocation: (searchQuery) => dispatch(searchRepository(searchQuery)),
    sortItems: (searchQuery) => dispatch(sortRepository(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);