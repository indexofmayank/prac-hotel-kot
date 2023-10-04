import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { KotComponent } from "./kot.component";
import { RouterModule } from "@angular/router";
import { KotRoutes } from "./kot.routing";
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KotRoutes),
        MaterialModule,
        TablerIconsModule.pick(TablerIcons),
        MatPaginatorModule, MatTableModule,
        HttpClientModule
    ],
    declarations: [
        KotComponent
    ]
})

export class KotModule {}