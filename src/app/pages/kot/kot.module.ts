import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { KotComponent } from "./kot.component";
import { RouterModule } from "@angular/router";
import { KotRoutes } from "./kot.routing";
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KotRoutes),
        MaterialModule,
        TablerIconsModule.pick(TablerIcons)
    ],
    declarations: [
        KotComponent
    ]
})

export class KotModule {}