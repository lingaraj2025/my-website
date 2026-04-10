import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug', '8ac'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/config', '705'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/content', '391'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/globalData', '464'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/metadata', '26b'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/registry', 'ef0'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/Technical-Writing-Portfolio/__docusaurus/debug/routes', '0b9'),
    exact: true
  },
  {
    path: '/Technical-Writing-Portfolio/docs',
    component: ComponentCreator('/Technical-Writing-Portfolio/docs', 'f20'),
    routes: [
      {
        path: '/Technical-Writing-Portfolio/docs',
        component: ComponentCreator('/Technical-Writing-Portfolio/docs', 'f5d'),
        routes: [
          {
            path: '/Technical-Writing-Portfolio/docs',
            component: ComponentCreator('/Technical-Writing-Portfolio/docs', '268'),
            routes: [
              {
                path: '/Technical-Writing-Portfolio/docs/case-study-template',
                component: ComponentCreator('/Technical-Writing-Portfolio/docs/case-study-template', 'd8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Technical-Writing-Portfolio/docs/intro',
                component: ComponentCreator('/Technical-Writing-Portfolio/docs/intro', '219'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Technical-Writing-Portfolio/',
    component: ComponentCreator('/Technical-Writing-Portfolio/', '1db'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
