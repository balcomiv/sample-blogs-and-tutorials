## Interface Constructor Pattern

- https://fettblog.eu/typescript-interface-constructor-pattern/

## Prototypal Inheritance

- http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/

## RXJS

- https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf

- https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d (shareReplay && async pipe)
- https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255 (bad ass explanations of publish === multicast(subject) etc.)

- [Async Pipes - Beware the Share](https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d)

## Either && Error Handling

- https://spin.atomicobject.com/2018/02/23/error-either-typescript/#:~:text=Simple%20Error%20Either%20in%20TypeScript&text=We%20define%20a%20Result%20to,TypeScript%20and%20maintain%20type%20safety.&text=This%20approach%20is%20especially%20nice,t%20require%20any%20wrapping%20object.

## Emmet

- https://medium.com/javascript-everyday/behaviorsubject-vs-replaysubject-1-beware-of-edge-cases-b361153d9ccf

## Regex

- https://regexr.com/3cr6f
- https://stackoverflow.com/questions/35814097/regex-to-match-beginning-and-end-of-a-word-with-a-vowel

## Patterns

- https://blog.ploeh.dk/2018/08/27/on-constructor-over-injection/

- https://blog.ploeh.dk/2019/01/21/some-thoughts-on-anti-patterns/

## Composite Components

- https://medium.com/@liutingchun_95744/angular-four-approaches-to-implement-interdependent-components-769e9b39fd96

## Objects, Prototypes, && Rest/Spread Properties

- https://medium.com/@alfmohenu/rest-and-spread-parameters-in-typescript-e98db065d518
- https://stackoverflow.com/questions/50288205/destructuring-a-function-parameter-object-and-rest

### Shallow clone (spread/obj-assign) don't preserve prototype

- https://dmitripavlutin.com/object-rest-spread-properties-javascript/

## ControlValueAccessor

- https://stackoverflow.com/questions/59049782/angular-controlvalueaccessor-vs-input-when-to-use-what-with-forms

- https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd

## Strongly Typed Forms, Reactive Forms

- https://itnext.io/angular-forms-story-strong-types-ce995239abf2
- https://timdeschryver.dev/blog/working-with-angular-forms-in-an-enterprise-environment
- https://dev.to/maxime1992/building-scalable-robust-and-type-safe-forms-with-angular-3nf9
- [Angular Forms: Story Strong Types](https://indepth.dev/posts/1198/angular-forms-story-strong-types)

## Directives

### Utilizing @HostBinding to set host @input

- https://github.com/angular/angular/issues/13776

- https://angular.io/api/core/Host

- https://fireflysemantics.medium.com/adding-classes-dynamically-with-hostbinding-ac9a43f8a9b3

- [Squeezing Angular Directives](https://medium.com/angular-in-depth/squeezing-angular-directives-8ab7b1e4e3ba)
- [Squeezing Angular Directives (Stackblitz) | structural directive patterns](https://stackblitz.com/edit/help-hint-cdimwn?file=app%2Fhelp-hint-structural-directive%2Fhelp-hint-structural.directive.ts)
- https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive

- [My Stackblitz Example for Squeezing Directives (nice background && layout)](https://stackblitz.com/edit/help-hint-cdimwn?file=styles.scss)

- [How to access host component from directive](https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive)
- https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive

- [Multi Providers](https://blog.eduonix.com/web-programming-tutorials/learn-multi-providers-feature-angular2/)

### Proposal: Need ability to add directives to host elements in component declaration.

- https://github.com/angular/angular/issues/8785
- https://plnkr.co/edit/TCagW8vOPrqSiOT9Oztf?preview (example of how to handle at this moment)
- https://angular.io/guide/roadmap#support-adding-directives-to-host-elements

### Ref directive used in/by component

- https://stackoverflow.com/questions/36345618/get-reference-to-a-directive-used-in-a-component

## Container Presentation | Smart Dumb | Impure Pure

- https://blog.profanis.me/blog/smart-dumb-in-nested-reactive-forms
- https://github.com/angularathens/4th-meetup-reactive-forms-with-smart-dumb-components/blob/master/Angular%20Athens%20-%20Reactive%20Forms.pdf

- https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b (Really good)

- https://blog.angulartraining.com/component-architecture-with-angular-6f7bc9165443

- https://indepth.dev/posts/1072/lean-angular-components (has stackblitz sample)

### Not sure about this one, but interesting info

- https://dev.to/maxime1992/building-scalable-robust-and-type-safe-forms-with-angular-3nf9#ngxsubform-utility-library-to-break-down-an-angular-form-into-multiple-sub-components

## Functional Programming

- https://vsavkin.com/functional-typescript-316f0e003dc6
- https://blog.ploeh.dk/2016/03/18/functional-architecture-is-ports-and-adapters/
- https://blog.ploeh.dk/2017/01/27/from-dependency-injection-to-dependency-rejection/

## Architecture

- https://dev-academy.com/angular-architecture-best-practices/

### Component

- [Agnostic components in Angular](https://medium.com/angular-in-depth/agnostic-components-in-angular-2427923b742d)

- [Polymorpheus github](https://github.com/TinkoffCreditSystems/ng-polymorpheus/blob/master/README.md)

### Badass Site

- https://www.angulararchitects.io/en/
- https://app.pluralsight.com/player?course=ng-conf-2020-session-12&author=ng-conf&name=ca412b03-e427-48be-b035-518d4ca84656&clip=0

### Angular Architecture and Best Practices

- https://blog.codewithdan.com/new-pluralsight-course-angular-architecture-and-best-practices/
- https://app.pluralsight.com/library/courses/ng-conf-19-advanced-angular-architecture-patterns-day-1/table-of-contents
- https://github.com/DanWahlin/angular-architecture/tree/master/input-output-demo/src
- https://github.com/DanWahlin/Angular-JumpStart

### Advanced Angular Component Patterns

- https://medium.com/angular-in-depth/introducing-advanced-angular-component-patterns-13e102e6bbfc
- https://egghead.io/lessons/angular-course-overview-advanced-angular-component-patterns

### Writing Awesome Components (augmenting is the answer)

- https://blog.bitsrc.io/the-principles-for-writing-awesome-angular-components-10e45f9ae77e
- https://www.youtube.com/watch?v=0BikjL858OQ (thoughtful component design)

### Material Examples for Component Patterns

- https://github.com/angular/components/blob/master/src/material/button/button.ts
- https://github.com/angular/components/issues/7954 (great example of how 'mat-button' is actually a component)

## Angular Material

- https://blog.angular-university.io/angular-material-dialog/

## Storybook

- https://medium.com/storybookjs/storybook-6-0-1e14a2071000

- [Storybook 6 Migration Guide](https://medium.com/storybookjs/storybook-6-migration-guide-200346241bb5)
- [Storybook Migration Github (mentions storyshots)](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#rename-of-the---secure-cli-parameter-to---https)

### Misc

- https://indepth.dev/posts/1171/angular-viewmodel-as-observable

## NgTemplateOutlet

- https://www.digitalocean.com/community/tutorials/angular-reusable-components-ngtemplateoutlet (asterix prefix and microsyntax)

## Strict Checking

- [TypeScript strictly typed: strict mode is not enough](https://medium.com/@cyrilletuzi/typescript-strictly-typed-strict-mode-is-not-enough-40df698e2deb)

## Productivity

- https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack (how I found Simon Test etc.)
- https://medium.com/@rajaramtt/angular-style-guide-best-practices-e7ec08ad3226

### Testing

- https://marketplace.visualstudio.com/items?itemName=SimonTest.simontest

- https://medium.com/allenhwkim/generate-angular-unit-tests-automatically-1300601ed73
- https://github.com/allenhwkim/ngentest/blob/e7971fc488389094c9692a4bc3f36b44ee088655/index.js
- https://medium.com/@marvinirwin/creating-typescript-with-the-typescript-compiler-ac3370701d7f

- [How to spyOn a value property (rather than a method)](https://stackoverflow.com/questions/20879990/how-to-spyon-a-value-property-rather-than-a-method-with-jasmine)

- [Angular Asynchronous Test Patterns and Recipes](https://medium.com/@michaelericksen_12434/angular-asynchronous-test-patterns-and-recipes-202cf7d47ec7)

- [A Quick Tip on Testing Observables](https://itnext.io/a-quick-tip-on-testing-observables-e2fbdebef4c)

## Dependency Injection

- https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f (circular dependency)

## Change Detection and OnPush

- [The Last Guide For Angular Change Detection You'll Ever Need](https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/)

- [Change Detection Demos (from dude above)](https://angular-change-detection-demo.netlify.app/expression-changed-demo)

- https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4

- https://www.aanchalgarg.com/2019/07/triggering-change-detection-manually-in.html

- https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges

- https://indepth.dev/posts/1053/everything-you-need-to-know-about-change-detection-in-angular

### With directives

- https://github.com/angulardart/angular/issues/846 (Change detection behavior on direct input changes and high order components)

### Debugging "Expression has changed after it was checked"

- https://blog.angular-university.io/angular-debugging/

## Control Container

- https://app.pluralsight.com/course-player?courseId=482edf94-ba3f-42d1-84c2-2333992bcea1
- https://github.com/tehfedaykin/NookPOS
- https://nookpos.web.app/

## Life Cycle Hooks

- https://stackoverflow.com/questions/40817336/whats-the-difference-between-ngoninit-and-ngafterviewinit-of-angular2

## Routing && Reloading

- https://medium.com/@mvivek3112/reloading-components-when-change-in-route-params-angular-deed6107c6bb

- https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular

## Dynamic Routing

- https://denys.dev/2018-02-21/dynamic-routes-with-angular/

- https://medium.com/@davidgolverdingen/adding-routes-dynamically-to-lazy-loaded-modules-in-angular-a8daecfaebf9

## Dynamic Views

- https://netbasal.com/implementing-dynamic-views-in-angular-20ae7c62fec3

## Multiple Inheritance / Mixins

- https://medium.com/@leocavalcante/es6-multiple-inheritance-73a3c66d2b6b
- https://blog.bitsrc.io/composing-angular-components-with-typescript-mixins-31e3833560f7

## Javascript

- https://eloquentjavascript.net/1st_edition/chapter5.html

### Prototypes

- [A Plain English Guide to JavaScript Prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)

- [Loose Object](https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript)

## Typescript

- [TypeScript: The constructor interface pattern](https://fettblog.eu/typescript-interface-constructor-pattern/)

- [Indexing objects in TypeScript](https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi)

- [Flexible Error Handling w/ the Result Class | Enterprise Node.js + TypeScript](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/)

- [When to Use a Private Constructor | TypeScript OOP](https://khalilstemmler.com/blogs/typescript/when-to-use-a-private-constructor/)

### Symbols

- https://codeburst.io/a-practical-guide-to-es6-symbol-3fc90117c7ac

## Editable Data Table

- [Keeping It Simple: Implementing Edit-in-Place in Angular (Net Basal)](https://netbasal.com/keeping-it-simple-implementing-edit-in-place-in-angular-4fd92c4dfc70)

- [Create an editable dynamic table using Angular Material](https://medium.com/@muhimasri/create-an-editable-dynamic-table-using-angular-material-590fa0c26a30)

- [Inline Editable Table (Stackblitz)](https://stackblitz.com/github/vaibhavphutane/inline-editable-table-angular9?file=src%2Fapp%2Fuser-table%2Fuser-table.component.html)

-[Telerik - Inline editing on row click](https://www.telerik.com/kendo-angular-ui/components/grid/editing/editing-row-click/)

- ['Full row editing'. Only save changes when user commits via button (ag-grid)](https://ag-grid.zendesk.com/hc/en-us/articles/360015857852--Full-row-editing-Only-save-changes-when-user-commits-via-button)

- [Infragistics full row editing](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/row-editing)

## Source Map

- https://www.npmjs.com/package/source-map-explorer

## PWA

- https://itnext.io/push-notification-with-angular-net-core-a2280d18eda1

- https://dev.to/thisdotmedia/how-to-add-notifications-to-your-pwa-2mmg

- https://www.youtube.com/watch?v=0vSEmEdYKro

- https://www.youtube.com/watch?v=G0bBLvWXBvc

### Service Workers

- https://www.youtube.com/watch?v=5YtNQJQu31Y (shows http-server for testing it)

- https://www.youtube.com/watch?v=eoaE0M_DRFI (notifications and push)

- https://www.cometchat.com/tutorials/angular-chat-push-notifications

## Ivy

- https://blog.ninja-squad.com/2019/05/07/what-is-angular-ivy/

## Design Systems

- https://clarity.design/documentation/login

## Performance

- [Angular Runtime Performance Guide](https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/)

- [Route fully rendered change detection](https://dev.to/herodevs/route-fully-rendered-detection-in-angular-2nh4)

- [Profiling Change Detection Time with ng.profileTimeChangeDetection](https://medium.com/@dmitrymogilko/profiling-angular-change-detection-c00605862b9f)
- https://github.com/angular/angular/blob/8fd25d96142ba5bd6674ba19848b5477e9bbe861/packages/platform-browser/src/browser/tools/common_tools.ts

- [Angular 7 how to calculate the time a component take to completely load on the DOM](https://stackoverflow.com/questions/53762813/angular-7-how-to-calculate-the-time-a-component-take-to-completely-load-on-the-d)

- [Create Angular Directive to Spy on LifeCycle Hooks)[https://stackoverflow.com/questions/58120105/creating-an-directive-to-spy-angular-life-cycle-hooks]
- https://stackblitz.com/edit/angular-4r6cm9?file=src%2Fapp%2Fcleanable.ts

## Sticky, Smooth, Active Nav

- https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/

- https://css-tricks.com/sticky-smooth-active-nav/

- https://codepen.io/eksch/pen/xwdOeK

- https://startbootstrap.com/template/scrolling-nav

## Ngrx && Ngrx variations

- https://blog.briebug.com/blog/introducing-ngrx-auto-entity

-

## UI Libs

- [Taiga UI github](https://github.com/TinkoffCreditSystems/taiga-ui)

- [Taiga UI](https://taiga-ui.dev/tui-tabs)

## Misc

- https://stackoverflow.com/questions/13613524/get-an-objects-class-name-at-runtime
- https://stackblitz.com/edit/angular-clarity-design-alert-via-service?file=src%2Fglobal-alert%2Fglobal-alert.component.html
- https://medium.com/@chen.reuven/how-use-angular-alert-clarity-component-or-others-components-programmatic-5d23629e3337

- [Happens Lol - Smarter Dumb Components](https://happens.lol/posts/smarter-dumb-components/)

- [Angular Resources](https://angular.io/resources?category=development)

- [Angular Performances Part 3 - Profiling and runtime performances](https://blog.ninja-squad.com/2018/09/20/angular-performances-part-3/)

- [Route to fully rendered detection](https://dev.to/herodevs/route-fully-rendered-detection-in-angular-2nh4)

- [Angular 7 how to calculate the time a component take to completely load on the DOM](https://stackoverflow.com/questions/53762813/angular-7-how-to-calculate-the-time-a-component-take-to-completely-load-on-the-d)

## Pre Rendering (SSR)

- https://brianflove.com/2020-06-05/angular-transfer-state/

### React

- [Epic React Articles](https://epicreact.dev/articles/)

### Gif

- https://blog.ladder.io/animated-gifs/#1omapcznt1txp6e2wum1t

## Links for Documentation

https://netbasal.com/testing-observables-in-angular-a2dbbfaf5329

https://blog.eyas.sh/2018/12/data-and-page-content-refresh-patterns-in-angular/

## Todo:

- Anything by netbasal is worth reading

- https://www.spreaker.com/show/angular-show

## Example Repos

- [Angular4 Recipe Book (look for Angular recipe projects)](https://github.com/TheMasquerader/angular4-recipe-book)

## Datatable Virtual Scroll with Sticky Header

- []()

## Design Docs

- [Design Doc Example](https://docs.google.com/document/d/1kpQStAn9L-NX_1bGz_4fXNeZgerWC0mUJHun72bF240/preview)

## Enum

- [enum type guard](https://stackoverflow.com/questions/58278652/generic-enum-type-guard)

## Configuration

- https://medium.com/angularlicious/use-rxjs-to-push-configuration-to-angular-libraries-1c47830cc394
