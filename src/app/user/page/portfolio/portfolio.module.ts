import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../../../shared/ui/ui.module';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioHeaderComponent} from './header/portfolio-header.component';
import {PortfolioWorksListComponent} from './works-list/portfolio-works-list.component';
import {PortfolioWorksItemComponent} from './works-list/portfolio-works-item.component';
import {PageModule} from '../page.module';
import {FormsModule} from '@angular/forms';
import {UploadFileModule} from '../../../shared/upload-file/upload-file.module';
import {PortfolioService} from './portfolio.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PortfolioRoutingModule,
        UploadFileModule,
        UiModule,
        PageModule
    ],
    declarations: [
        PortfolioComponent,
        PortfolioHeaderComponent,
        PortfolioWorksListComponent,
        PortfolioWorksItemComponent
    ],
    providers: [PortfolioService]
})
export class PortfolioModule {
}
