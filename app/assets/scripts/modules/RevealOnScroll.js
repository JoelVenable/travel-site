import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import animate from 'animateplus';


class RevealOnScroll {
  constructor(els, offset, anim) {
    this.itemsToReveal = els;
    this.hideInitially();
    this.offsetPercent = offset;
    this.animationType = anim;
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("animated");
    this.itemsToReveal.css('opacity', '0');
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass(that.animationType);
        },
        offset: that.offsetPercent,
      });
    });
  }

}

export default RevealOnScroll;