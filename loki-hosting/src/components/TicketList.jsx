import React, { useEffect, useState } from "react";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulating fetching tickets from an API
    const fetchTickets = async () => {
      try {
        // Make an API request to fetch tickets
        const response = await fetch("/api/tickets");
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
