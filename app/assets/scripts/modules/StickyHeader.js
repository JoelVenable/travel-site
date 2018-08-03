import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTrigger = $('.large-hero__subtitle');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: that.headerTrigger[0],
      handler: function (direction) {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }


      }
    });
  }
}

export default StickyHeader;