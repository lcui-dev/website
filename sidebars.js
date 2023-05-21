/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    "introduction",
    {
      type: 'category',
      label: '基础',
      link: {
        slug: 'base',
        type: 'generated-index',
      },
      items: [
        'base/installation',
        'base/introduction',
        'base/convention',
        'base/xml-syntax',
        'base/css-syntax',
        'base/architecture',
      ]
    },
    {
      type: 'category',
      label: '实例',
      link: {
        type: 'doc',
        id: 'app/index'
      },
      items: [
        'app/mainloop',
        'app/worker',
        'app/timer',
        'app/events',
      ]
    },
    {
      type: 'category',
      label: '组件',
      link: {
        type: 'doc',
        id: 'widget/index'
      },
      items: [
        'widget/attributes',
        'widget/style',
        'widget/prototype',
        'widget/events',
        'widget/lifecycle',
        'widget/painting',
      ]
    },
    'rendering',
    {
      type: 'category',
      label: 'CSS',
      link: {
        type: 'doc',
        id: 'css/index'
      },
      items: [
        'css/library',
        'css/parser',
      ]
    },
    {
      type:'category',
      label: '布局',
      link: {
        type: 'doc',
        id: 'layout/index'
      },
      items: [
        'layout/normal-flow-layout',
        'layout/flexbox',
      ]
    },
    {
      type: 'category',
      label: '图形',
      link: {
        type: 'doc',
        id: 'graphics/index'
      },
      items: [
        'graphics/drawing-simple-graphics',
        'graphics/drawing-complex-graphics',
        'graphics/image-file-operation',
        'graphics/pixel-operation'
      ]
    },
    {
      type: 'category',
      label: '字体',
      link: {
        type: 'doc',
        id: 'font/index'
      },
      items: [
        'font/engine',
        'font/library',
        'font/textlayer',
      ]
    },
    {
      type: 'category',
      label: '驱动',
      link: {
        type: 'doc',
        id: 'driver/index'
      },
      items: [
        'driver/events',
        'driver/video',
        'driver/mouse',
        'driver/keyboard',
        'driver/touchscreen',
      ]
    }
  ],
  tutorialsSidebar: [{ type: "autogenerated", dirName: "tutorials" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
