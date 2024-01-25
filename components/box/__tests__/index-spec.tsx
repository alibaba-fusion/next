import React from 'react';
import Box from '../index';
import '../style';

describe('Box', () => {
    it('should render', () => {
        cy.mount(
            <Box direction="row" wrap className="border-box" spacing={30}>
                <Box
                    className="border-box height-100 width-150"
                    direction="row"
                    wrap
                    spacing={8}
                    padding={10}
                >
                    <Box className="border-box height-30 width-30 dashed" />
                    <Box className="border-box height-30 width-30" />
                    <Box className="border-box height-30 width-30" />
                    <Box className="border-box height-30 width-30" />
                    <Box
                        className="border-box height-30 width-30 dashed"
                        margin={[3, 6]}
                        style={{ marginRight: 10 }}
                    />
                    <Box className="border-box height-30 width-30" />
                </Box>

                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
                <Box className="border-box height-100 width-150" />
            </Box>
        );
        cy.get('.next-box');
    });

    it('justify should work when wrap and spacing setted', () => {
        cy.mount(
            <Box className="test" wrap spacing={20} direction="row" justify="center">
                <Box className="box-180-50" />
                <Box className="box-180-50" />
                <Box className="box-180-50" />
                <Box className="box-180-50" />
            </Box>
        );
        cy.get('.test').should('have.css', 'justify-content', 'center');
    });
});
