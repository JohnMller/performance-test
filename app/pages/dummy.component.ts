import { Component } from '@angular/core';

@Component({
    selector: 'dummy',
    moduleId: module.id,
    template: `
        <DockLayout>
            <Label dock="top" text="Dummy Page"></Label>
            <Button dock="bottom" text="Back" [nsRouterLink]="['/number-slides']"></Button>
        </DockLayout>
    `,
    styles: [`
        Label {
            font-size: 20;
            text-align: center;
        },
        Button {
            vertical-align: bottom;
        }
    `]
})
export class DummyComponent {
}