// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from '@orbita-ui/core';
import Hr from './Hr';

describe('Login component tests', () => {

    beforeEach(() => {
        // write someting before each test
    });

    afterEach(() => {
        // write someting after each test
    });

    it('Renders correctly initial document', async () => {

        render(
            <Provider>
                <Hr></Hr>
            </Provider>
        );
        
       
    });

});