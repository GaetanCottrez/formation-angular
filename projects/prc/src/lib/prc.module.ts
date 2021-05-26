import { NgModule } from '@angular/core';
import { PrcComponent } from './prc.component';
import { ConnectorComponent } from './connector/connector.component';

@NgModule({
  declarations: [PrcComponent, ConnectorComponent],
  imports: [],
  exports: [PrcComponent, ConnectorComponent]
})
export class PrcModule {}
