'use strict';

var panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(function (panel) {
  return panel.addEventListener('click', toggleOpen);
});
panels.forEach(function (panel) {
  return panel.addEventListener('transitionend', toggleActive);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbInBhbmVscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZU9wZW4iLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlQWN0aXZlIiwiZSIsInByb3BlcnR5TmFtZSIsImluY2x1ZGVzIiwiZm9yRWFjaCIsInBhbmVsIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQixRQUExQixDQUFmOztBQUVJLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEJDLFVBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsT0FBS0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLE1BQXRCO0FBQ0Q7O0FBRUQsU0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkJMLFVBQVFDLEdBQVIsQ0FBWUksRUFBRUMsWUFBZDtBQUNBLE1BQUlELEVBQUVDLFlBQUYsQ0FBZUMsUUFBZixDQUF3QixNQUF4QixDQUFKLEVBQXFDO0FBQ25DLFNBQUtMLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixhQUF0QjtBQUNEO0FBQ0Y7O0FBRURQLE9BQU9ZLE9BQVAsQ0FBZTtBQUFBLFNBQVNDLE1BQU1DLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDWCxVQUFoQyxDQUFUO0FBQUEsQ0FBZjtBQUNBSCxPQUFPWSxPQUFQLENBQWU7QUFBQSxTQUFTQyxNQUFNQyxnQkFBTixDQUF1QixlQUF2QixFQUF3Q04sWUFBeEMsQ0FBVDtBQUFBLENBQWYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVPcGVuKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5wcm9wZXJ0eU5hbWUpO1xyXG4gICAgICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJ2ZsZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3BlbikpO1xyXG4gICAgcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRvZ2dsZUFjdGl2ZSkpOyJdfQ==