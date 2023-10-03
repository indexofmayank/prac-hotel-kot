import { Routes } from "@angular/router";
import { KotComponent } from "./kot.component";


export const KotRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: KotComponent
            }
        ]
    }
]