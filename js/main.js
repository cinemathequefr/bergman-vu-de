$(main);

function main() {
  var ctrl = new ScrollMagic.Controller();

  var sections = _($("section"))
    .map(function(section, i) {
      return {
        id: $(section).data("id"),
        elSection: section,
        elSplash: section.querySelector(".splash"),
        elOverlay: section.querySelector(".overlay"),
        elTitle: section.querySelector("h2")
      };
    })
    .value();

  var winHeight = $(window).height();
  var elTitle = document.querySelector("h1");

  new ScrollMagic.Scene({
    triggerElement: elTitle,
    triggerHook: 0,
    offset: -24,
    duration: null // No end
  })
    .setPin(elTitle, { pushFollowers: false })
    .addTo(ctrl);

  _(sections).forEach(function(section, i) {
    var sectionHeight = $(section.elSection).height();

    new ScrollMagic.Scene({
      triggerElement: section.elTitle,
      triggerHook: 0,
      offset: -$(elTitle).height() - 24,
      duration: sectionHeight - winHeight * 0.75
    })
      .setPin(section.elTitle, { pushFollowers: false })
      .addTo(ctrl);

    new ScrollMagic.Scene({
      triggerElement: section.elSection,
      triggerHook: 0,
      duration: sectionHeight * 2
    })
      .setPin(section.elSplash, { pushFollowers: false })
      .addTo(ctrl);
  });


}
