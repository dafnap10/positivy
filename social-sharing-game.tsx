import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const quotes = [
  "You have the power to make today great.",
  "Believe in yourself, and you can achieve anything.",
  "Every day is a chance to learn and grow.",
  "Surround yourself with people who lift you up.",
  "Happiness is a journey, not a destination.",
  "Your positive attitude is your superpower.",
  "You are stronger than you know.",
  "The best is yet to come.",
  "Embrace challenges, they make you stronger.",
  "Your smile can brighten someone's day.",
  "Trust the process, good things take time.",
  "Kindness is the language the deaf can hear.",
  "You are capable of amazing things.",
  "Obstacles are opportunities in disguise.",
  "Spread love and positivity wherever you go.",
  "Believe you can, and you're halfway there.",
  "Positive thoughts lead to positive actions.",
  "Today is a great day to have a great day.",
  "You are making a difference, keep it up!",
  "Embrace your uniqueness, it's your superpower.",
  "Difficulties are meant to rouse, not discourage.",
  "The only limit is the one you set for yourself.",
  "Mistakes are proof that you are trying.",
  "Happiness is a choice, choose it every day.",
  "Your positive energy is contagious, share it!",
  "Every day may not be good, but there's good in every day.",
  "Talent wins games, but teamwork and intelligence win championships.",
  "The only way to do great work is to love what you do.",
  "Positivity is the fuel that powers your dreams.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Positivity is the secret to a life well-lived.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "The best way to predict the future is to create it.",
  "Positive thinking will let you use the ability which you have, and that is awesome.",
  "Optimism is the one quality more associated with success and happiness than any other.",
  "The only person you are destined to become is the person you decide to be.",
  "Positivity is a mindset, not a mood.",
  "Believe in your abilities, and you'll achieve the impossible.",
  "Difficulties are messages from the universe to help you grow.",
  "Positivity is the foundation for living your best life.",
  "Embrace the present, it's a gift.",
  "You are not here by chance, you are here for a purpose.",
  "Positive thinking can transform your life.",
  "Optimism is the faith that leads to achievement.",
  "Positivity is a choice. Choose it every day.",
  "Positive thinking is the key to success in anything.",
  "You are making a difference in this world.",
  "Believe in your dreams, and they will come true.",
  "Positivity is the antidote to negativity.",
  "Every challenge is an opportunity to learn and grow.",
  "Positive thinking is the pathway to personal growth.",
  "Spread positivity and watch the world around you transform.",
  "You are doing a wonderful job, keep it up!",
  "Positive energy attracts positive experiences.",
  "Embrace the journey, not just the destination.",
  "Positivity is the catalyst for achieving your goals.",
  "Your positive mindset is your greatest asset.",
  "Difficulties are temporary, your strength is eternal.",
  "Positivity is the key to unlocking your full potential.",
  "Believe in yourself, and the rest will follow.",
  "Positive thoughts lead to positive outcomes.",
  "You are making a meaningful impact on the world.",
  "Positivity is a way of life, not just a strategy.",
  "Every day is a chance to start fresh and be your best self.",
  "Positive thinking is the secret to a happy and fulfilling life.",
  "You are deserving of love, joy, and success.",
  "Embrace your imperfections, they make you unique.",
  "Positivity is the light that guides you through the darkness."
];

const SocialSharingGame = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const textAreaRef = useRef(null);

  // Get the current URL of the application
  const [appUrl, setAppUrl] = useState('');
  useEffect(() => {
    setAppUrl(window.location.href);
  }, []);

  const handleClick = () => {
    setCurrentQuote((currentQuote + 1) % quotes.length);
  };

  const handleShare = () => {
    // Generate the shareable URL for the current quote
    const quoteUrl = `${appUrl}?quote=${currentQuote}`;

    // Copy the URL to the clipboard
    textAreaRef.current.value = quoteUrl;
    textAreaRef.current.select();
    document.execCommand('copy');
    setIsCopied(true);

    // Reset the "copied" state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-sky-100 to-emerald-100 p-4">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">Tap for a Dose of Positivity</h1>
      <div className="text-5xl font-bold text-sky-700 mb-8 sm:text-6xl">{quotes[currentQuote]}</div>
      <Button onClick={handleClick} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full text-2xl mb-6 w-full sm:w-auto">
        Tap Me
      </Button>
      <div className="relative w-full sm:w-auto">
        <Button
          onClick={handleShare}
          className={`flex items-center ${
            isCopied
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-sky-500 hover:bg-sky-600'
          } text-white font-medium py-2 px-4 rounded-full text-lg`}
        >
          <Copy className="w-5 h-5 mr-2" />
          <span>{isCopied ? 'Copied to Clipboard' : 'Copy URL'}</span>
        </Button>
        <textarea
          ref={textAreaRef}
          readOnly
          className="absolute left-0 top-0 w-0 h-0 opacity-0"
        />
      </div>
    </div>
  );
};

export default SocialSharingGame;