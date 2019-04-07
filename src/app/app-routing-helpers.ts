import {Route} from "@angular/router";

export function redirectToComponent (component) {
    return {
        redirectTo: componentNameAsPath(component),
        path: '',
        pathMatch: 'full'
    };
};

export function componentRoute (component, children?: Route[], pathOverride?: string): Route {
    const route = {component, children};
    return addComponentNameAsPath(route, pathOverride);
};

export function defaultComponentRoute (component, children?: Route[]): Route {
    return componentRoute(component, children, '');
};

function componentNameAsPath (component: {name: string}): string {
    return component.name.replace('Component', '').toLowerCase();
};

function addComponentNameAsPath (route: Route, pathOverride?: string): Route {
    const path = typeof pathOverride === 'undefined' ? componentNameAsPath(route.component) : pathOverride;
    return Object.assign({}, route, {path});
};
