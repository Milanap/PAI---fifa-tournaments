import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatToolbarModule,
	MatTabsModule,
	MatInputModule
} from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';

const material = [
    MatButtonModule,
	MatButtonToggleModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatToolbarModule,
	MatTabsModule,
	MatInputModule
];

@NgModule({
	imports: [material],
	exports: [material]
})
export class MaterialModule { }
