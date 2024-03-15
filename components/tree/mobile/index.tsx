// @ts-expect-error meet-react does not export Tree
import { Tree as MeetTree } from '@alifd/meet-react';
import NextTree from '../index';

const Tree = MeetTree ? MeetTree : NextTree;

export default Tree;
