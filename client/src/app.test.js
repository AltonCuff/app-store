import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
    .create(<App page="http://localhost:3000/">BravadoClothing</App>)
    .toJSON();
    expect(tree).toMatchSnapshot();
    });
    