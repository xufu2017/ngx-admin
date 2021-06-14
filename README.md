https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NWE3MjEwYWMtNWE4My00ZGE3LTgzMWMtYmNjOTIzOTNjMzQ2%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252206b84121-5f0a-4b49-ba2d-7738f681dd70%2522%252c%2522Oid%2522%253a%25228449ace5-1904-44fd-ba80-60dff3daf749%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=0ebbdcda-c922-4e78-90fb-d30c7cbae4c2&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true
# ngx-admin [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />](https://eva.design) [![Build Status](https://travis-ci.org/akveo/ngx-admin.svg?branch=master)](https://travis-ci.org/akveo/ngx-admin) [![Dependency Status](https://david-dm.org/akveo/ngx-admin/status.svg)](https://david-dm.org/akveo/ng2-admin)

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

ErrorLog
CREATE TABLE [dbo].[Log](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Application] [nvarchar](max) NULL,
	[MachineName] [nvarchar](max) NULL,
	[Message] [nvarchar](max) NULL,
	[MessageTemplate] [nvarchar](max) NULL,
	[Level] [nvarchar](128) NULL,
	[TimeStamp] [datetime] NOT NULL,
	[Exception] [nvarchar](max) NULL,
	[Properties] [nvarchar](max) NULL,
	[UserName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Log] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


