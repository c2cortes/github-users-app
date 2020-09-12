import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';

// Redux
import { searchRepository, sortRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { SortItemsTouchableOpacity, Logo, SearchWrapper, SearchInputWrapper, SeeSelectedElementsButton, SeeSelectedElementsLabel, RepositoriesList } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

const SearchComponent = (props) => {
    
    const { searchLocation, sortItems, repositories, selectedItems, navigation } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [preloader, setPreloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const changeInput = (searchQuery) => {
        setSearchQuery(searchQuery);
        if(validateUppercase(searchQuery)){
            searchLocation(searchQuery);
            setPreloader(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Letters have to be lowercase');
        }
    }

    const validateUppercase = (searchQuery) => {
        var passed = true;
        for(const l of searchQuery) {
            if(l == l.toUpperCase()){
                passed = false;
            }
        }
        return passed;
    }

    const renderItem = ({item}) => {
        return (<ItemRepository item={item} icons={true}/>)
    }

    useEffect(() => {
        setPreloader(false);
    }, [repositories]);

    return (
        <SearchWrapper styles={{ flex: 1 }}>
            <Logo source={require('../../assets/images/GitHub-Mark-64px.png')}></Logo>
            <SearchInputWrapper style={{ flexDirection: 'column' }}>        
                <FormInput onChange={e => changeInput(e.nativeEvent.text)} value={searchQuery} placeholder={'Type something...'} />
            </SearchInputWrapper>
                <SortItemsTouchableOpacity onPress={ () => sortItems() }>
                    <Text>{ 'Sort items by date' }</Text>
                </SortItemsTouchableOpacity>
                <Text style={{ color: '#810011' }}>{errorMessage}</Text>
                { preloader ? <ActivityIndicator size="large" /> : null }
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