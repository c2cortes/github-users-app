import * as React                   from 'react';
import { TouchableOpacity, Text }   from 'react-native';
import styled                       from 'styled-components/native';

const ButtonComponent = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #F0A800;
    border-radius: 5px;
    padding-top: 15px;
    text-align: center;
    box-shadow: 1px 1px 1px #333;
    margin-top: 20px;
`;

const TextLabel = styled.Text`
    color: #FFF;
    text-align: center;
`;

interface ButtonProps {
    Label: string
}

const Button: React.FC<ButtonProps> = ({ Label, onPressCallBack }) => {
    return  (
        <ButtonComponent onPress={ () => onPressCallBack() }>
            <TextLabel>{ Label }</TextLabel>
        </ButtonComponent>
    )
}

export default Button;