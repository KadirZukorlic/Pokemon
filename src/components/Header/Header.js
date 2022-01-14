import React from 'react';
import './styles.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="header">
            <FormInput />
            <Button>Search</Button>
        </div>
    )
}

export default Header
