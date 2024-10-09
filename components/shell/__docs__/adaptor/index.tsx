import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Shell, Icon, Nav, Search } from '@alifd/next';

interface AdaptorProps {
    level: 'light' | 'dark' | 'brand';
    device: 'desktop' | 'tablet' | 'phone';
    branding?: boolean;
    actions: boolean;
    localNav: boolean;
    appbar: boolean;
    footer: boolean;
    tooldock: boolean;
    ancillary: boolean;
    navigation: 'ver' | 'hoz';
}

export default {
    name: 'Shell',
    shape: ['normal'],
    editor: (shape: string) => {
        return {
            props: [
                {
                    name: 'level',
                    type: Types.enum,
                    default: 'light',
                    options: {
                        normal: ['light', 'dark', 'brand'],
                    }[shape],
                },
                {
                    name: 'device',
                    label: 'Device',
                    type: Types.enum,
                    options: ['desktop', 'tablet', 'phone'],
                    default: 'desktop',
                },
                {
                    name: 'branding',
                    label: 'Branding',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'actions',
                    label: 'Actions',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'navigation',
                    label: 'Navigation',
                    type: Types.enum,
                    options: ['ver', 'hoz', false],
                    default: 'ver',
                },
                {
                    name: 'localNav',
                    label: 'LocalNav',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'appbar',
                    label: 'Appbar',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'footer',
                    label: 'Footer',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'tooldock',
                    label: 'Tooldock',
                    type: Types.bool,
                    default: true,
                },
                {
                    name: 'ancillary',
                    label: 'Ancillary',
                    type: Types.bool,
                    default: true,
                },
            ],
        };
    },
    adaptor: ({
        level,
        device,
        branding,
        actions,
        localNav,
        appbar,
        footer,
        tooldock,
        ancillary,
        navigation,
    }: AdaptorProps) => {
        let logoStyle = {},
            shellStyle = {};

        switch (level) {
            case 'light':
                logoStyle = { width: 32, height: 32, background: '#000', opacity: '0.04' };
                break;
            case 'dark':
                logoStyle = { width: 32, height: 32, background: '#FFF', opacity: '0.2' };
                break;
            case 'brand':
                logoStyle = { width: 32, height: 32, background: '#000', opacity: '0.04' };
                break;
            default:
                break;
        }

        switch (device) {
            case 'phone':
                shellStyle = { height: 500, width: 480, border: '1px solid #eee' };
                break;
            case 'tablet':
                shellStyle = { height: 500, width: 768, border: '1px solid #eee' };
                break;
            case 'desktop':
                shellStyle = { height: 500, width: 1000, border: '1px solid #eee' };
                break;
            default:
                break;
        }

        return (
            <Shell style={shellStyle} device={device} type={level}>
                {branding ? (
                    <Shell.Branding>
                        <div style={logoStyle}></div>
                        <span style={{ marginLeft: 10 }}>App Name</span>
                    </Shell.Branding>
                ) : null}

                {!navigation ? (
                    <Shell.Navigation direction={navigation}>
                        <Nav type="normal" embeddable direction={navigation} hozInLine>
                            <Nav.Item icon="account">Nav Item 1</Nav.Item>
                            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
                            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
                            <Nav.Item icon="account">Nav Item 4</Nav.Item>
                            <Nav.Item icon="account">Nav Item 5</Nav.Item>
                            <Nav.Item icon="account">Nav Item 6</Nav.Item>
                            <Nav.Item icon="account">Nav Item 7</Nav.Item>
                        </Nav>
                    </Shell.Navigation>
                ) : null}
                {actions ? (
                    <Shell.Action>
                        <Search
                            key="2"
                            shape="simple"
                            placeholder="Search"
                            style={{ width: '160px', marginRight: 20 }}
                        />
                        <Icon type="ic_tongzhi" />
                        <img
                            src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                verticalAlign: 'middle',
                            }}
                            alt="用户头像"
                        />
                        <span style={{ marginLeft: 10 }}>Name</span>
                    </Shell.Action>
                ) : null}
                {localNav ? (
                    <Shell.LocalNavigation>
                        <Nav type="normal" embeddable>
                            <Nav.SubNav label="Local Nav1">
                                <Nav.Item>Local Nav1</Nav.Item>
                            </Nav.SubNav>
                            <Nav.SubNav label="Local Nav2">
                                <Nav.Item>Local Nav2</Nav.Item>
                            </Nav.SubNav>
                            <Nav.SubNav label="Local Nav3">
                                <Nav.Item>Local Nav3</Nav.Item>
                            </Nav.SubNav>
                            <Nav.Item>Local Nav4</Nav.Item>
                            <Nav.Item>Local Nav5</Nav.Item>
                            <Nav.Item>Local Nav6</Nav.Item>
                            <Nav.Item>Local Nav7</Nav.Item>
                            <Nav.Item>Local Nav8</Nav.Item>
                            <Nav.Item>Local Nav4</Nav.Item>
                            <Nav.Item>Local Nav5</Nav.Item>
                            <Nav.Item>Local Nav6</Nav.Item>
                            <Nav.Item>Local Nav7</Nav.Item>
                            <Nav.Item>Local Nav8</Nav.Item>
                        </Nav>
                    </Shell.LocalNavigation>
                ) : null}
                {appbar ? <Shell.AppBar /> : null}
                <Shell.Content>
                    <div style={{ minHeight: 1200, background: '#fff' }}></div>
                </Shell.Content>

                {ancillary ? <Shell.Ancillary /> : null}
                {tooldock ? (
                    <Shell.ToolDock>
                        <Shell.ToolDockItem>
                            <Icon type="calendar" />
                        </Shell.ToolDockItem>
                        <Shell.ToolDockItem>
                            <Icon type="atm" />
                        </Shell.ToolDockItem>
                        <Shell.ToolDockItem>
                            <Icon type="account" />
                        </Shell.ToolDockItem>
                    </Shell.ToolDock>
                ) : null}
                {footer ? (
                    <Shell.Footer>
                        <span>Alibaba Fusion</span>
                        <span>@ 2019 Alibaba Piecework 版权所有</span>
                    </Shell.Footer>
                ) : null}
            </Shell>
        );
    },
};
