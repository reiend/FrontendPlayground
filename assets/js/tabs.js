const art = new Tab('art-tab', 'art-tab-expand', 'art-tab-expanded');
const tech = new Tab('tech-tab', 'tech-tab-expand', 'tech-tab-expanded');

function openTab(field) {
    field.getTab().addEventListener('click', function () {
        field.getTabExpand().classList.toggle(field.expand)
    })
}

art.tabEventVisibility('mouseenter', 'mouseleave', 'art-tab-move');
tech.tabEventVisibility('mouseenter', 'mouseleave', 'tech-tab-move');

openTab(art)
openTab(tech)

