import { Tab } from "./Tab";

export const art = new Tab('art-tab', 'art-tab-expand', 'art-tab-expanded');
export const tech = new Tab('tech-tab', 'tech-tab-expand', 'tech-tab-expanded');

export function openTab(field) {
    field.getTab().addEventListener('click', function () {
        field.getTabExpand().classList.toggle(field.expand)
    })
}

art.tabEventVisibility('mouseenter', 'mouseleave', 'art-tab-move');
tech.tabEventVisibility('mouseenter', 'mouseleave', 'tech-tab-move');


