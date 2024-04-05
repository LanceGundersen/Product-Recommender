import React from 'react';
import { format } from 'date-fns';

interface ChatBubbleProps {
  /**
   * Message text input
   */
  text: string;
  /**
   * Message alignment inversion
   */
  invertedAlignment?: boolean;
  /**
   * Message date time input
   */
  dateTime: Date;
  /**
   * User Image url
   */
  imgUrl: string;
}

/**
 * Primary UI component for a chat bubble
 */
export const ChatBubble = ({
  invertedAlignment = false,
  text,
  dateTime,
  imgUrl,
}: ChatBubbleProps) => {
  // Conditionally set classes for alignment
  const alignmentClass = invertedAlignment ? 'justify-end' : 'justify-start';
  const bubbleTailClass = invertedAlignment ? 'rounded-tr-none' : 'rounded-tl-none';

  return (
    <div className="w-full">
      <div className="flex gap-2.5 mb-4 items-start">
        {!invertedAlignment && (
          <img src={imgUrl} alt="Profile image" className="w-10 h-11 rounded-full" />
        )}
        <div className="grid">
          <div className="w-max max-w-lg">
            <div className={`px-3.5 py-2 bg-gray-100 rounded-3xl ${bubbleTailClass} items-center gap-3`}>
              <h5 className="text-gray-900 text-sm font-normal leading-snug">{text}</h5>
            </div>
            <div className={`items-center inline-flex mb-2.5 w-full ${alignmentClass}`}>
              <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">{format(dateTime, 'h:mm b')}</h6>
            </div>
          </div>
        </div>
        {invertedAlignment && (
          <img src={imgUrl} alt="Profile image" className="w-10 h-11 rounded-full" />
        )}
      </div>
    </div>
  );
};
