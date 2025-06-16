import { LightningElement } from 'lwc';

export default class LightningTabSet extends LightningElement {

    
    selectedTab = 'profile';

        handleTabChange(event) {
        this.selectedTab = event.target.value;
    }
}