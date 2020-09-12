import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

// Redux
import { searchRepository, sortRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { SearchWrapper, SearchInputWrapper, SeeSelectedElementsButton, SeeSelectedElementsLabel, RepositoriesList } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

const SearchComponent = (props) => {

    const [searchQuery, setSearchQuery] = useState('tracktime-re');
    const { searchLocation, sortItems, repositories, selectedItems } = props;

    const changeInput = (searchQuery) => {
        setSearchQuery(searchQuery);
        searchLocation(searchQuery);
    }

    const renderItem = ({item}) => {
        return (<ItemRepository item={item}/>)
    }

    return (
        <SearchWrapper styles={{ flex: 1 }}>
            <SearchInputWrapper style={{ flexDirection: 'column' }}>        
                <FormInput onChange={e => changeInput(e.nativeEvent.text)} value={searchQuery} placeholder={'Type something...'} />
            </SearchInputWrapper>
                <TouchableOpacity onPress={ () => sortItems() }>
                    <Text>
                    { 'Sort items by date' }
                    </Text>
                </TouchableOpacity>
            <RepositoriesList
                data={repositories}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                // style={{ flex: 1 }}
            />
            <SeeSelectedElementsButton>
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