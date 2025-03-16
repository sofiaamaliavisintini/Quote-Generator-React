// File: RandomQuoteMachine.jsx

import React, { useState, useEffect } from "react";
import { Button, Card } from "@/components/ui";
import { Twitter } from "lucide-react";

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card id="quote-box" className="p-6 w-96 text-center shadow-lg bg-white">
        <p id="text" className="text-xl font-semibold">"{quote}"</p>
        <p id="author" className="mt-2 text-gray-600">- {author}</p>
        <div className="flex justify-between mt-4">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <Twitter />
          </a>
          <Button id="new-quote" onClick={fetchQuote}>
            New Quote
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RandomQuoteMachine;
