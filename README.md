# angular.json

Add in angular.json :

    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/cytoscape-context-menus/cytoscape-context-menus.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js"
            ]

# app.module.ts

    import { MindmapModule } from 'mindmap';

    imports: [
    MindmapModule
    ],

# html

    <lib-mindmap></lib-mindmap>
