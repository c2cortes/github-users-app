import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

// Redux
import { searchRepository, sortRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { SearchWrapper, SearchInputWrapper } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

const SearchComponent = (props) => {

    const [searchQuery, setSearchQuery] = useState('tracktime-re');
    const { searchLocation, sortItems, repositories } = props;

    const changeInput = (searchQuery) => {
        setSearchQuery(searchQuery);
        searchLocation(searchQuery);
    }

    const renderItem = ({item}) => {
        return (<ItemRepository item={item}/>)
    }

    useEffect(() => {
        console.log('GOT THIS CHANGED => ', repositories)
        // console.log('repositories => ', repositories)
    }, repositories);
    

    return (
        <SearchWrapper>
            <SearchInputWrapper style={{ flexDirection: 'column' }}>        
                <FormInput onChange={e => changeInput(e.nativeEvent.text)} value={searchQuery} placeholder={'Type something...'} />
            </SearchInputWrapper>
                <TouchableOpacity onPress={ () => sortItems() }>
                    <Text>
                    { 'Sort items by date' }
                    </Text>
                </TouchableOpacity>
            <FlatList
                data={repositories}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SearchWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.searchData.repositories.items
    }
};

const mapDispatchToProps = (dispatch) => ({
    searchLocation: (searchQuery) => dispatch(searchRepository(searchQuery)),
    sortItems: (searchQuery) => dispatch(sortRepository(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);