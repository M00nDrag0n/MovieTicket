

function Ticket() {
  this.movie = [];
  this.currentId = 0
};

function ticketContents(movieTitle, age, time, movieStatus) {
  this.movie = movie;
  this.people = age;
  this.time = time;
  this.movieStatus = movieStatus;
}

Ticket.prototype.addTicketContents = function(ticketContents) {
  ticketContents.id = this.assignId();
  this.movie.push(ticketContents);
}

Ticket.prototype.addTicketContents = function() {
  this.currentId += 1;
  return this.currentId;
}

Ticket.prototype.findTicketContents = function(id) {
  for(var i=0; i< this.ticketContents.length; i++) {
    if (this.movie[i]) {
      if(this.movie[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

Ticket.prototype.deleteTicketContents =  function(id) {
  for(var i=0; i < this.movie.length; i++) {
    if (this.movie[i]) {
      if(this.movie[i].id === id) {
        delete this.movie[i];
      return true;      }
    }
  }
};
// // return false;
// }




$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var newMovie = $("input#movie").vai();
    var newPeopleAmount = $("input#age").vai();
    var newTime = $("input#time").vai();
    var newSeatNumber = $("input#movieStatus").vai();
  });



// this is attached to data above
ticketContents.prototype.display = function () {
  $("#return-movieTitle").text(this.ticketTitle);
  $("#return-age").text(this.ticketAge);
  $("#return-time").text(this.ticketTime);
  $("#return-movieStatus").text(this.movieStatus);
};

















//
// $("#output").text(variable(s));

});
