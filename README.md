https://us04web.zoom.us/j/4934458491?pwd=NTB1OXJ3cmQzZEtEeWVvMVJuWUc1QT09


http://svr-tstsdesk01:90/Sostenuto/web/SUsers/

[Who uses ngx-admin?](https://github.com/akveo/ngx-admin/issues/1645)| [Documentation](https://akveo.github.io/ngx-admin/?utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes) | [Installation Guidelines](https://akveo.github.io/ngx-admin/docs/getting-started/what-is-ngxadmin?utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes)

# Admin template based on Angular 8+ and <a href="https://github.com/akveo/nebular">Nebular</a>
<a target="_blank" href="http://akveo.com/ngx-admin/pages/dashboard?theme=corporate&utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=main_pic"><img src="https://i.imgur.com/mFdqvgG.png"/></a>

### Backend Integration Bundles
Easy way to integrate ngx-admin with backend (.NET, Node.js, Java etc.).

<a target="_blank" href="https://store.akveo.com/collections/all/?utm_source=github&utm_medium=ngx_admin_readme">
  <img src="https://i.imgur.com/Ywbs8cl.png"/>
</a>

[Checkout our Store](https://store.akveo.com/collections/all/?utm_source=github&utm_medium=ngx_admin_readme) for ready to use Backend Bundles.

### With 4 stunning visual themes



#### Default
<a target="_blank" href="http://akveo.com/ngx-admin/pages/dashboard?theme=default&utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes"><img src="https://i.imgur.com/Kn3xDKQ.png"/></a>

#### Dark
<a target="_blank" href="http://akveo.com/ngx-admin/pages/dashboard?theme=dark&utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes"><img src="https://i.imgur.com/FAn5iXY.png"/></a>

#### Cosmic
<a target="_blank" href="http://akveo.com/ngx-admin/pages/dashboard?theme=cosmic&utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes"><img src="https://i.imgur.com/iJu2YDF.png"/></a>

#### Corporate
<a target="_blank" href="http://akveo.com/ngx-admin/pages/dashboard?theme=corporate&utm_source=github&utm_medium=ngx_admin_readme&utm_campaign=themes"><img src="https://i.imgur.com/GpUt6NW.png"/></a>

### What's included:

- Angular 8+ & Typescript
- Bootstrap 4+ & SCSS
- Responsive layout
- RTL support
- High resolution
- Flexibly configurable themes with **hot-reload** (3 themes included)
- Authentication module with multiple providers
- 40+ Angular Components
- 60+ Usage Examples

### Demo

<a target="_blank" href="http://akveo.com/ngx-admin/">Live Demo</a>

## Documentation
This template is using [Nebular](https://github.com/akveo/nebular) modules set, [here you can find documentation and other useful articles](https://akveo.github.io/nebular/docs/guides/install-based-on-starter-kit).

### Empty starter kit
Don't need all the pages and modules and just looking for an empty starter kit for your next project? Check out our [starter-kit branch](https://github.com/akveo/ngx-admin/tree/starter-kit).

## BrowserStack
This project runs its tests on multiple desktop and mobile browsers using [BrowserStack](http://www.browserstack.com).

<img src="https://cloud.githubusercontent.com/assets/131406/22254249/534d889e-e254-11e6-8427-a759fb23b7bd.png" height="40" />

## More from Akveo

- [Eva Icons](https://github.com/akveo/eva-icons) - 480+ beautiful Open Source icons
- [Nebular](https://github.com/akveo/nebular) - Angular Components, Auth and Security

### How can I support developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow us on [Twitter](https://twitter.com/akveo_inc) :feet:
- Like our page on [Facebook](https://www.facebook.com/akveo/) :thumbsup:

### Looking for engineering services? 
Visit [our homepage](http://akveo.com/) or simply leave us a message to [contact@akveo.com](mailto:contact@akveo.com). We will be happy to work with you!

### From Developers
Made with :heart: by [Akveo team](http://akveo.com/). Follow us on [Twitter](https://twitter.com/akveo_inc) to get the latest news first!
We're always happy to receive your feedback!

import App from "@/App.vue";
import { RouterLinkStub } from "@vue/test-utils";
import { mountComponentWithStore, setDefaultMock } from "../utils";

describe('app.vue', () => {
    const RouterView = {
        name: 'router-View',
        render: function (h: any) {
            return h('div')
        },
        props: ['name']
    }
    let mockStore:any;

    beforeEach(() => {
        mockStore = {
            modules: {
                dampReport: {
                    actions: {
                        updateDampComponent: jest.fn(),
                        updatePage: jest.fn(),
                    },
                    getters: {
                        userFillingOutForm: jest.fn(),
                        showNavigation:jest.fn(),
                        visibleNavigation:jest.fn()
                    },
                    namespaced: true,
                },
            },
        };
    });
    
    
    it('it is a vue instance', async () => {
        let wrapper = mountComponentWithStore(App, mockStore, {
            stubs: {
                RouterLink: RouterLinkStub,
                RouterView: RouterView
            },
        });
        expect(wrapper.isVueInstance).toBeTruthy();
        await expect(wrapper.findComponent({ name: "Navigation" }).exists()).toBeTruthy();
        await expect(wrapper.findComponent({ name: "PhotosPanel" }).exists()).toBeTruthy();
    });

    it('set online true', async () => {
        Object.defineProperty(navigator, 'onLine', { value: true, writable: true });

        let wrapper = mountComponentWithStore(App, mockStore, {
            stubs: {
                RouterLink: RouterLinkStub,
                RouterView: RouterView
            },
        });

        expect(wrapper.vm.$data.onlineStatus).toBeTruthy();

    });

    
    it('set online false', async () => {
        Object.defineProperty(navigator, 'onLine', { value: false, writable: true });

        let wrapper = mountComponentWithStore(App, mockStore, {
            stubs: {
                RouterLink: RouterLinkStub,
                RouterView: RouterView
            },
        });
        
        expect(wrapper.vm.$data.onlineStatus).toBeFalsy();
    });

    
});

{
  "name": "assets-portal",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lint/no-fix": "vue-cli-service lint --no-fix",
    "test": "vue-cli-service test:unit"
  },
  "dependencies": {
    "axios": "^0.21.1",
    "core-js": "^3.6.5",
    "gsap": "^3.6.1",
    "lodash": "^4.17.21",
    "oidc-client": "1.10.1",
    "register-service-worker": "^1.7.1",
    "vue": "^2.6.11",
    "vue-class-component": "^7.2.3",
    "vue-js-modal": "^2.0.0-rc.6",
    "vue-moment": "^4.1.0",
    "vue-popperjs": "^2.3.0",
    "vue-property-decorator": "^9.1.2",
    "vue-router": "^3.2.0",
    "vue-toasted": "^1.1.28",
    "vuex": "^3.4.0",
    "vuex-class": "^0.3.2",
    "vee-validate": "^3.3.1"
  },
  "devDependencies": {
    "@types/jest": "^24.9.1",
    "@types/lodash": "^4.14.169",
    "@typescript-eslint/eslint-plugin": "^4.18.0",
    "@typescript-eslint/parser": "^4.18.0",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-pwa": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-typescript": "~4.5.0",
    "@vue/cli-plugin-unit-jest": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-typescript": "^7.0.0",
    "@vue/test-utils": "^1.0.3",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-cssnano": "^2.1.3",
    "gulp-dart-sass": "^1.0.2",
    "gulp-postcss": "^9.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "postcss": "^8.2.9",
    "sass": "^1.26.5",
    "sass-loader": "^8.0.2",
    "typescript": "~4.1.5",
    "vue-template-compiler": "^2.6.11",
    "babel-eslint": "^10.1.0",
    "reflect-metadata": "^0.1.13",
    "axios-mock-adapter": "1.18.2",
    "flush-promises": "^1.0.2",
    "ts-jest": "^26.3.0",
    "vue-jest": "3.0.7",
    "jest-serializer-vue": "2.0.2"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "transform": {
    "vee-validate/dist/rules": "babel-jest"
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!vee-validate/dist/rules)"
  ]
}


