'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">u-house documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddModule.html" data-type="entity-link" >AddModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddModule-05b4045e043803758c1eb23a32c1f4de3e6a482854d7c682bde1fea417cf0e594b1eceda04fc65764ac56e59b15b5b056cde389e957922960eeed0e9a6ffaf63"' : 'data-target="#xs-components-links-module-AddModule-05b4045e043803758c1eb23a32c1f4de3e6a482854d7c682bde1fea417cf0e594b1eceda04fc65764ac56e59b15b5b056cde389e957922960eeed0e9a6ffaf63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddModule-05b4045e043803758c1eb23a32c1f4de3e6a482854d7c682bde1fea417cf0e594b1eceda04fc65764ac56e59b15b5b056cde389e957922960eeed0e9a6ffaf63"' :
                                            'id="xs-components-links-module-AddModule-05b4045e043803758c1eb23a32c1f4de3e6a482854d7c682bde1fea417cf0e594b1eceda04fc65764ac56e59b15b5b056cde389e957922960eeed0e9a6ffaf63"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-57e215ca7786c3e4162c29bcd9f9cd595a3103e207e3bea857dd7baa8c4050e00084f6dc5bae7f57f9f88cf55b37056d1851458f9fc8a8a92202c37e1fc0da34"' : 'data-target="#xs-components-links-module-AppModule-57e215ca7786c3e4162c29bcd9f9cd595a3103e207e3bea857dd7baa8c4050e00084f6dc5bae7f57f9f88cf55b37056d1851458f9fc8a8a92202c37e1fc0da34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-57e215ca7786c3e4162c29bcd9f9cd595a3103e207e3bea857dd7baa8c4050e00084f6dc5bae7f57f9f88cf55b37056d1851458f9fc8a8a92202c37e1fc0da34"' :
                                            'id="xs-components-links-module-AppModule-57e215ca7786c3e4162c29bcd9f9cd595a3103e207e3bea857dd7baa8c4050e00084f6dc5bae7f57f9f88cf55b37056d1851458f9fc8a8a92202c37e1fc0da34"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link" >CardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardModule-6d2c1de9070d11af7cdc10b4c9f7f670636b2c2c8db3ce71c759672cf4cd9d78c0afaa5aa01cddb0660e9bf0f8ecab00998441ade1a19f24d5a676866efe80b9"' : 'data-target="#xs-components-links-module-CardModule-6d2c1de9070d11af7cdc10b4c9f7f670636b2c2c8db3ce71c759672cf4cd9d78c0afaa5aa01cddb0660e9bf0f8ecab00998441ade1a19f24d5a676866efe80b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardModule-6d2c1de9070d11af7cdc10b4c9f7f670636b2c2c8db3ce71c759672cf4cd9d78c0afaa5aa01cddb0660e9bf0f8ecab00998441ade1a19f24d5a676866efe80b9"' :
                                            'id="xs-components-links-module-CardModule-6d2c1de9070d11af7cdc10b4c9f7f670636b2c2c8db3ce71c759672cf4cd9d78c0afaa5aa01cddb0660e9bf0f8ecab00998441ade1a19f24d5a676866efe80b9"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentModule.html" data-type="entity-link" >CommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommentModule-85be8b243e8336077f16c65ead39aa3c9a722bcae26a076ea7f5b099321344889e6588221eb2ff7ee7226fa3f4195c204291153af7793858abc1f163f004c91b"' : 'data-target="#xs-components-links-module-CommentModule-85be8b243e8336077f16c65ead39aa3c9a722bcae26a076ea7f5b099321344889e6588221eb2ff7ee7226fa3f4195c204291153af7793858abc1f163f004c91b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommentModule-85be8b243e8336077f16c65ead39aa3c9a722bcae26a076ea7f5b099321344889e6588221eb2ff7ee7226fa3f4195c204291153af7793858abc1f163f004c91b"' :
                                            'id="xs-components-links-module-CommentModule-85be8b243e8336077f16c65ead39aa3c9a722bcae26a076ea7f5b099321344889e6588221eb2ff7ee7226fa3f4195c204291153af7793858abc1f163f004c91b"' }>
                                            <li class="link">
                                                <a href="components/CommentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FullModule.html" data-type="entity-link" >FullModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FullModule-9929c314843584dd74caff69b0a78531a2b161d5dba196274370bd692105d035b8cfa014d0eafaf4e104cf85453590810e4d0ac536cbd64ffa8c92a269643dc0"' : 'data-target="#xs-components-links-module-FullModule-9929c314843584dd74caff69b0a78531a2b161d5dba196274370bd692105d035b8cfa014d0eafaf4e104cf85453590810e4d0ac536cbd64ffa8c92a269643dc0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FullModule-9929c314843584dd74caff69b0a78531a2b161d5dba196274370bd692105d035b8cfa014d0eafaf4e104cf85453590810e4d0ac536cbd64ffa8c92a269643dc0"' :
                                            'id="xs-components-links-module-FullModule-9929c314843584dd74caff69b0a78531a2b161d5dba196274370bd692105d035b8cfa014d0eafaf4e104cf85453590810e4d0ac536cbd64ffa8c92a269643dc0"' }>
                                            <li class="link">
                                                <a href="components/FullComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FullRoutingModule.html" data-type="entity-link" >FullRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-e063aa9b2618e5068da5f5e68aca1a4b61f9ceda2cd2a86fed631849531bc5c8f6241b8bff28ac20bfd698ca6a06b258f36f3cb342d90d44ada3b4bebaf4d590"' : 'data-target="#xs-components-links-module-HomeModule-e063aa9b2618e5068da5f5e68aca1a4b61f9ceda2cd2a86fed631849531bc5c8f6241b8bff28ac20bfd698ca6a06b258f36f3cb342d90d44ada3b4bebaf4d590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-e063aa9b2618e5068da5f5e68aca1a4b61f9ceda2cd2a86fed631849531bc5c8f6241b8bff28ac20bfd698ca6a06b258f36f3cb342d90d44ada3b4bebaf4d590"' :
                                            'id="xs-components-links-module-HomeModule-e063aa9b2618e5068da5f5e68aca1a4b61f9ceda2cd2a86fed631849531bc5c8f6241b8bff28ac20bfd698ca6a06b258f36f3cb342d90d44ada3b4bebaf4d590"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogModule-71fa9c4dc20005069d6aa0a991a01bbc7d646199c0a276d0241ae529e70c8672b39020a83fc20806a57f95a960316a3f8f68274111552fd178881f404d7fd964"' : 'data-target="#xs-components-links-module-LogModule-71fa9c4dc20005069d6aa0a991a01bbc7d646199c0a276d0241ae529e70c8672b39020a83fc20806a57f95a960316a3f8f68274111552fd178881f404d7fd964"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogModule-71fa9c4dc20005069d6aa0a991a01bbc7d646199c0a276d0241ae529e70c8672b39020a83fc20806a57f95a960316a3f8f68274111552fd178881f404d7fd964"' :
                                            'id="xs-components-links-module-LogModule-71fa9c4dc20005069d6aa0a991a01bbc7d646199c0a276d0241ae529e70c8672b39020a83fc20806a57f95a960316a3f8f68274111552fd178881f404d7fd964"' }>
                                            <li class="link">
                                                <a href="components/LogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogRoutingModule.html" data-type="entity-link" >LogRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-67425ed2476f965e1c541ed8cc2974cd501bb1d6d2e7a4f26de40bdf90e74e577771742c06c6be6182a2c23cbaaaec4f08fb45b9ce69cd9ccf7c98c25f63cff2"' : 'data-target="#xs-components-links-module-MenuModule-67425ed2476f965e1c541ed8cc2974cd501bb1d6d2e7a4f26de40bdf90e74e577771742c06c6be6182a2c23cbaaaec4f08fb45b9ce69cd9ccf7c98c25f63cff2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-67425ed2476f965e1c541ed8cc2974cd501bb1d6d2e7a4f26de40bdf90e74e577771742c06c6be6182a2c23cbaaaec4f08fb45b9ce69cd9ccf7c98c25f63cff2"' :
                                            'id="xs-components-links-module-MenuModule-67425ed2476f965e1c541ed8cc2974cd501bb1d6d2e7a4f26de40bdf90e74e577771742c06c6be6182a2c23cbaaaec4f08fb45b9ce69cd9ccf7c98c25f63cff2"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyadsModule.html" data-type="entity-link" >MyadsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyadsModule-58c86b8294853bbcfa698fb5089d5b9c132d6642173bff2a9922aecf9179fcdf18879ca28ce1bdd1ba0a5a68f4097558a3de8388f4fb6b4128f8fa1521fa5925"' : 'data-target="#xs-components-links-module-MyadsModule-58c86b8294853bbcfa698fb5089d5b9c132d6642173bff2a9922aecf9179fcdf18879ca28ce1bdd1ba0a5a68f4097558a3de8388f4fb6b4128f8fa1521fa5925"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyadsModule-58c86b8294853bbcfa698fb5089d5b9c132d6642173bff2a9922aecf9179fcdf18879ca28ce1bdd1ba0a5a68f4097558a3de8388f4fb6b4128f8fa1521fa5925"' :
                                            'id="xs-components-links-module-MyadsModule-58c86b8294853bbcfa698fb5089d5b9c132d6642173bff2a9922aecf9179fcdf18879ca28ce1bdd1ba0a5a68f4097558a3de8388f4fb6b4128f8fa1521fa5925"' }>
                                            <li class="link">
                                                <a href="components/MyadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyadsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyadsRoutingModule.html" data-type="entity-link" >MyadsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyprofileModule.html" data-type="entity-link" >MyprofileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyprofileModule-1bd9c6eadce9a597cc4a5f709f8e30a939a0a2c36fc88d7552ec27956025e5cf4bcd282e239e9e2f25d56c4025ab76cec7929e7eef9e8648072ac93cb64dee5e"' : 'data-target="#xs-components-links-module-MyprofileModule-1bd9c6eadce9a597cc4a5f709f8e30a939a0a2c36fc88d7552ec27956025e5cf4bcd282e239e9e2f25d56c4025ab76cec7929e7eef9e8648072ac93cb64dee5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyprofileModule-1bd9c6eadce9a597cc4a5f709f8e30a939a0a2c36fc88d7552ec27956025e5cf4bcd282e239e9e2f25d56c4025ab76cec7929e7eef9e8648072ac93cb64dee5e"' :
                                            'id="xs-components-links-module-MyprofileModule-1bd9c6eadce9a597cc4a5f709f8e30a939a0a2c36fc88d7552ec27956025e5cf4bcd282e239e9e2f25d56c4025ab76cec7929e7eef9e8648072ac93cb64dee5e"' }>
                                            <li class="link">
                                                <a href="components/MyprofileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyprofileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyprofileRoutingModule.html" data-type="entity-link" >MyprofileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-49bd6b712f33e280da5447258b91abfa2f2260fd3343144bd319bb6b47d8fa47b7e6f0d074e3e63241d965e555e6b7a7b860fd9bce7567cef33f06541abf4b65"' : 'data-target="#xs-components-links-module-PostModule-49bd6b712f33e280da5447258b91abfa2f2260fd3343144bd319bb6b47d8fa47b7e6f0d074e3e63241d965e555e6b7a7b860fd9bce7567cef33f06541abf4b65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-49bd6b712f33e280da5447258b91abfa2f2260fd3343144bd319bb6b47d8fa47b7e6f0d074e3e63241d965e555e6b7a7b860fd9bce7567cef33f06541abf4b65"' :
                                            'id="xs-components-links-module-PostModule-49bd6b712f33e280da5447258b91abfa2f2260fd3343144bd319bb6b47d8fa47b7e6f0d074e3e63241d965e555e6b7a7b860fd9bce7567cef33f06541abf4b65"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-6dd4d6ec28dc49eb88f417780d81a6c2ab2f7196f44537b7136ce8dbc0bd7a3d11ae6062aa0e28f813f3be2301983789812fe8d90ae8dba44338a5c5445a3edd"' : 'data-target="#xs-components-links-module-ProfileModule-6dd4d6ec28dc49eb88f417780d81a6c2ab2f7196f44537b7136ce8dbc0bd7a3d11ae6062aa0e28f813f3be2301983789812fe8d90ae8dba44338a5c5445a3edd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-6dd4d6ec28dc49eb88f417780d81a6c2ab2f7196f44537b7136ce8dbc0bd7a3d11ae6062aa0e28f813f3be2301983789812fe8d90ae8dba44338a5c5445a3edd"' :
                                            'id="xs-components-links-module-ProfileModule-6dd4d6ec28dc49eb88f417780d81a6c2ab2f7196f44537b7136ce8dbc0bd7a3d11ae6062aa0e28f813f3be2301983789812fe8d90ae8dba44338a5c5445a3edd"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PropertyModule.html" data-type="entity-link" >PropertyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PropertyModule-f9b5d8e9056eaa0a836bf73e2f7a02a997f0152b5e5291e87d64eca1e309812f80d324669cee175a7bf28605b818201d4b8a81a4bd518112032d4513bfe3ecd2"' : 'data-target="#xs-components-links-module-PropertyModule-f9b5d8e9056eaa0a836bf73e2f7a02a997f0152b5e5291e87d64eca1e309812f80d324669cee175a7bf28605b818201d4b8a81a4bd518112032d4513bfe3ecd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PropertyModule-f9b5d8e9056eaa0a836bf73e2f7a02a997f0152b5e5291e87d64eca1e309812f80d324669cee175a7bf28605b818201d4b8a81a4bd518112032d4513bfe3ecd2"' :
                                            'id="xs-components-links-module-PropertyModule-f9b5d8e9056eaa0a836bf73e2f7a02a997f0152b5e5291e87d64eca1e309812f80d324669cee175a7bf28605b818201d4b8a81a4bd518112032d4513bfe3ecd2"' }>
                                            <li class="link">
                                                <a href="components/PropertyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PropertyRoutingModule.html" data-type="entity-link" >PropertyRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegModule.html" data-type="entity-link" >RegModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegModule-5a3dc596966d9a7332d9ae4bc473cdf897d5e2b251d40d2078f1a829ea25e277b719c871542dfa3b8c2e1d604fee636c21756d81d6a45501e64da0335ecaa38c"' : 'data-target="#xs-components-links-module-RegModule-5a3dc596966d9a7332d9ae4bc473cdf897d5e2b251d40d2078f1a829ea25e277b719c871542dfa3b8c2e1d604fee636c21756d81d6a45501e64da0335ecaa38c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegModule-5a3dc596966d9a7332d9ae4bc473cdf897d5e2b251d40d2078f1a829ea25e277b719c871542dfa3b8c2e1d604fee636c21756d81d6a45501e64da0335ecaa38c"' :
                                            'id="xs-components-links-module-RegModule-5a3dc596966d9a7332d9ae4bc473cdf897d5e2b251d40d2078f1a829ea25e277b719c871542dfa3b8c2e1d604fee636c21756d81d6a45501e64da0335ecaa38c"' }>
                                            <li class="link">
                                                <a href="components/RegComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegRoutingModule.html" data-type="entity-link" >RegRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SavedadsModule.html" data-type="entity-link" >SavedadsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SavedadsModule-1ececc3b5a0b184444887f3cd12959b354ad1825da9f39b5d7114ed625ccbb594fc19e56ff91df562a11554582908bd6d712e8f1fd1f50e7f16da7a32305e696"' : 'data-target="#xs-components-links-module-SavedadsModule-1ececc3b5a0b184444887f3cd12959b354ad1825da9f39b5d7114ed625ccbb594fc19e56ff91df562a11554582908bd6d712e8f1fd1f50e7f16da7a32305e696"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SavedadsModule-1ececc3b5a0b184444887f3cd12959b354ad1825da9f39b5d7114ed625ccbb594fc19e56ff91df562a11554582908bd6d712e8f1fd1f50e7f16da7a32305e696"' :
                                            'id="xs-components-links-module-SavedadsModule-1ececc3b5a0b184444887f3cd12959b354ad1825da9f39b5d7114ed625ccbb594fc19e56ff91df562a11554582908bd6d712e8f1fd1f50e7f16da7a32305e696"' }>
                                            <li class="link">
                                                <a href="components/SavedadsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedadsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SavedadsRoutingModule.html" data-type="entity-link" >SavedadsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartscreenModule.html" data-type="entity-link" >StartscreenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StartscreenModule-388080ace45dbcf7e3ca37fe82e87b79205505d171877bf32aa65cd590312158fb8ec191a04be13455b3d05e78ae3ad61d34702bd64364eeb27ecd330782accb"' : 'data-target="#xs-components-links-module-StartscreenModule-388080ace45dbcf7e3ca37fe82e87b79205505d171877bf32aa65cd590312158fb8ec191a04be13455b3d05e78ae3ad61d34702bd64364eeb27ecd330782accb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartscreenModule-388080ace45dbcf7e3ca37fe82e87b79205505d171877bf32aa65cd590312158fb8ec191a04be13455b3d05e78ae3ad61d34702bd64364eeb27ecd330782accb"' :
                                            'id="xs-components-links-module-StartscreenModule-388080ace45dbcf7e3ca37fe82e87b79205505d171877bf32aa65cd590312158fb8ec191a04be13455b3d05e78ae3ad61d34702bd64364eeb27ecd330782accb"' }>
                                            <li class="link">
                                                <a href="components/StartscreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartscreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StartscreenRoutingModule.html" data-type="entity-link" >StartscreenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateModule.html" data-type="entity-link" >UpdateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UpdateModule-761472656811799d8fe930374a45d55f677b3fce3d2f3336c236dcac306cb554bc8fe2ed1e216345c1efe8deb467bdbe690494c6a84dd83cb68a4a69984be68f"' : 'data-target="#xs-components-links-module-UpdateModule-761472656811799d8fe930374a45d55f677b3fce3d2f3336c236dcac306cb554bc8fe2ed1e216345c1efe8deb467bdbe690494c6a84dd83cb68a4a69984be68f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UpdateModule-761472656811799d8fe930374a45d55f677b3fce3d2f3336c236dcac306cb554bc8fe2ed1e216345c1efe8deb467bdbe690494c6a84dd83cb68a4a69984be68f"' :
                                            'id="xs-components-links-module-UpdateModule-761472656811799d8fe930374a45d55f677b3fce3d2f3336c236dcac306cb554bc8fe2ed1e216345c1efe8deb467bdbe690494c6a84dd83cb68a4a69984be68f"' }>
                                            <li class="link">
                                                <a href="components/UpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FbCrudService.html" data-type="entity-link" >FbCrudService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Property.html" data-type="entity-link" >Property</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Savedad.html" data-type="entity-link" >Savedad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});