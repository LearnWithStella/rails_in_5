//= require moment
//= require fullcalendar

// Optional locale  change '// require' --> '//= require' to enable
// require fullcalendar/locale-all
// or sepecific locale
// require fullcalendar/locale/ms

// Optional addons  change '// require' --> '//= require' to enable
// require fullcalendar/scheduler
// require fullcalendar/gcal

//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable

$(document).ready( function() {
  // hide the remove button for unscheduled and non schedulable events
  // $('.unscheduled-events .schedule-event-delete-button').hide();
  // $('.non_schedulable .schedule-event-delete-button').hide();

  // set events as draggable
  $('.schedulable').draggable({
    snap: '.fc-day',
    revertDuration: 200,
    revert: function (event, ui) {
        return !event;
    },
    stop: function(event, ui) {
        this._originalPosition = this._originalPosition || ui.originalPosition;
        ui.helper.animate( this._originalPosition );
    },
    opacity: 0.7,
    snapMode: "inner",
    zIndex: 2,
    scroll: true
  });

  // set room cells as droppable
  $('.fc-day').droppable({
    accept: '.schedule-event',
    tolerance: "pointer",
    drop: function(event, ui) {
        $(ui.draggable).css("left", 0);
        $(ui.draggable).css("top", 0);
        $(this).css("background-color", "#ffffff");
        Schedule.add($(ui.draggable).parent(), $(this), $(ui.draggable));
    },
    over: function(event, ui) {
      $(this).css("background-color", "#009ED8");
    },
    out: function(event, ui) {
      $(this).css("background-color", "#ffffff");
      }
  });
});
