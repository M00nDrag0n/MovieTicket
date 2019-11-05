

function Ticket() {
  this.movie = [];
  this.currentId = 0
};

function ticketContents(movie, peopleAmount, time, seatNumber) {
  this.movie = movie;
  this.people = peopleAmount;
  this.time = time;
  this.seatNumber = seatNumber;
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
return false;
}




$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var newMovie = $("input#movie").vai();
    var newPeopleAmount = $("input#peopleAmount").vai();
    var newTime = $("input#time").vai();
    var newSeatNumber = $("input#seatNumber").vai();
  });



// this is attached to data above
ticketContents.prototype.display = function () {
  $("#return-movie").text(this.ticketTitle);
  $("#return-peopleAmount").text(this.ticketDate);
  $("#return-time").text(this.time);
  $("#return-seatNumber").text(this.seatNumber);
};

















//
// $("#output").text(variable(s));

});
