import styled from 'styled-components/native';

export const Wrapper = styled.View`
    padding: 0 5%;
    padding-top: 100px;
`;

export const Logo = styled.Image`
    margin: auto;
`;

export const LogoWrapper = styled.View`
    padding: 0 20%;
`;

export const TextH3 = styled.Text`
    color: #6D6E71;
    text-align: left;
    font-size: 12px;
    margin-top: 2px;
`;

// Search location component
export const SearchWrapper = styled.View`
    padding: 5px 15px;
`;

export const SearchInputWrapper = styled.View`
    padding: 0 15px;
    margin-top: 5px;
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #333;
    margin-bottom: 20px;
`;

export const RepositoryItem = styled.View`
    
`;

export const AddElementButton = styled.TouchableOpacity`
`;

export const Line = styled.View`
    border: .5px solid #6D6E71;
    margin: 15px 10px;
`;

export const FormInputWrapper = styled.View`
    padding-top: 5px
`;

export const FindAddressOnMapButtonView = styled.View`
    margin-left: 5px;
`;

export const ItemInfoContent = styled.View`
    width: 65%;
`;

export const ItemIcons = styled.View`
    padding-top: 15px
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px
    margin-top: 10px
`;

export const SeeSelectedElementsButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    padding-top: 10px;
    background-color: #000000;
    position: relative;
`;

export const SeeSelectedElementsLabel = styled.Text`
    color: #FFFFFF;
    text-align: center;
`;

export const RepositoriesList = styled.FlatList`
    height: 84%;
    margin-top: 20px;
`;

export const SortItemsTouchableOpacity = styled.TouchableOpacity`
    margin-bottom: 15px;
`;
