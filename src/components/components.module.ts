import { NgModule } from '@angular/core';
import { DramComponent } from './dram/dram';
import { NoteComponent } from './note/note';
@NgModule({
	declarations: [DramComponent,
    NoteComponent],
	imports: [],
	exports: [DramComponent,
    NoteComponent]
})
export class ComponentsModule {}
