import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@alifd/next';

const { H1, H2, Paragraph, Text } = Typography;

ReactDOM.render(
    <Typography>
        <H1>Fusion 简介</H1>
        <Paragraph>
            Fusion
            是一套企业级中后台UI的解决方案，致力于解决设计师与前端在产品体验一致性、工作协同、开发效率方面的问题。通过协助业务线构建设计系统，提供系统化工具协助设计师前端使用设计系统，下游提供一站式设计项目协作平台；打通互联网产品从设计到开发的工作流。
        </Paragraph>
        <Paragraph>
            Fusion Design
            产品创建于2015年底，阿里巴巴集团中台战略背景下，由国际UED（现国际用户体验事业部）与B2B技术部成立中台DPL项目。从国际UED，天猫，商家等各类业务形态中抽象解构，通过一套设计系统协议提升
            <Text mark>设计与开发效率</Text>
            ，以统一的物料分发工具提升团队协同能力，借助灵活的在线样式配置支撑业务的设计创新。
        </Paragraph>
        <H2>Fusion 的能力</H2>
        <Paragraph>
            我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和{' '}
            <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>

        <Paragraph component="div">
            <ul>
                <li>通过构建一套标准化中后台体验设计原则，提升中后台产品体验一致性问题。</li>
                <li>
                    通过Fusion平台的主题配置能力，线上优化品牌样式并同步物料给设计师与开发使用，做到品牌样式迭代0成本。节省了大量的设计师和开发工作量。
                </li>
                <li>
                    设计可直接在<Text code>sketch</Text>（通过插件<Text code>FusionCool</Text>
                    ）使用配好的组件画设计稿；开发可在本地工程里面使用配好的主题开发项目，不需要关心组件样式（未来甚至页面样式）；从而打破协作壁垒，让合作更加顺畅。
                </li>
                <li>
                    通过 <Text code>FusionCool</Text>{' '}
                    可以直接方便的沉淀模块模板；通过脚手架工具可以方便的沉淀业务组件、代码端；
                    让项目更快落地。
                </li>
            </ul>
        </Paragraph>
    </Typography>,
    mountNode
);
